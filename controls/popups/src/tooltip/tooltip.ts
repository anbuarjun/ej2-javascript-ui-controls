import { Component, Property, ChildProperty, Event, BaseEventArgs, append, compile } from '@syncfusion/ej2-base';
import { EventHandler, EmitType, Touch, TapEventArgs, Browser, Animation as PopupAnimation } from '@syncfusion/ej2-base';
import { isNullOrUndefined, getUniqueID, formatUnit } from '@syncfusion/ej2-base';
import { attributes, closest, removeClass, addClass, remove } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, INotifyPropertyChanged, Complex, SanitizeHtmlHelper } from '@syncfusion/ej2-base';
import { Popup } from '../popup/popup';
import { OffsetPosition, calculatePosition } from '../common/position';
import { isCollide, fit } from '../common/collision';
import { TooltipModel, AnimationModel } from './tooltip-model';

/**
 * Set of open modes available for Tooltip.
 */
export type OpenMode = 'Auto' | 'Hover' | 'Click' | 'Focus' | 'Custom';
/**
 * Applicable positions where the Tooltip can be displayed over specific target elements.
 */
export type Position = 'TopLeft' | 'TopCenter' | 'TopRight' | 'BottomLeft' | 'BottomCenter' | 'BottomRight' |
'LeftTop' | 'LeftCenter' | 'LeftBottom' | 'RightTop' | 'RightCenter' | 'RightBottom';
/**
 * Applicable tip positions attached to the Tooltip.
 */
export type TipPointerPosition = 'Auto' | 'Start' | 'Middle' | 'End';
/**
 * Animation effects that are applicable for Tooltip.
 */
export type Effect = 'FadeIn' | 'FadeOut' | 'FadeZoomIn' | 'FadeZoomOut' | 'FlipXDownIn' | 'FlipXDownOut' |
'FlipXUpIn' | 'FlipXUpOut' | 'FlipYLeftIn' | 'FlipYLeftOut' | 'FlipYRightIn' | 'FlipYRightOut' | 'ZoomIn' | 'ZoomOut' | 'None';

const TOUCHEND_HIDE_DELAY: number = 1500;
const TAPHOLD_THRESHOLD: number = 500;
const SHOW_POINTER_TIP_GAP: number = 0;
const HIDE_POINTER_TIP_GAP: number = 8;
const MOUSE_TRAIL_GAP: number = 2;
const POINTER_ADJUST: number = 2;
const ROOT: string = 'e-tooltip';
const RTL: string = 'e-rtl';
const DEVICE: string = 'e-bigger';
const ICON: string = 'e-icons';
const CLOSE: string = 'e-tooltip-close';
const TOOLTIP_WRAP: string = 'e-tooltip-wrap';
const CONTENT: string = 'e-tip-content';
const ARROW_TIP: string = 'e-arrow-tip';
const ARROW_TIP_OUTER: string = 'e-arrow-tip-outer';
const ARROW_TIP_INNER: string = 'e-arrow-tip-inner';
const TIP_BOTTOM: string = 'e-tip-bottom';
const TIP_TOP: string = 'e-tip-top';
const TIP_LEFT: string = 'e-tip-left';
const TIP_RIGHT: string = 'e-tip-right';
const POPUP_ROOT: string = 'e-popup';
const POPUP_OPEN: string = 'e-popup-open';
const POPUP_CLOSE: string = 'e-popup-close';
const POPUP_LIB: string = 'e-lib';
const HIDE_POPUP: string = 'e-hidden';
/**
 * Describes the element positions.
 */
interface ElementPosition extends OffsetPosition {
    position: Position;
    horizontal: string;
    vertical: string;
}
/**
 * Interface for Tooltip event arguments.
 */
export interface TooltipEventArgs extends BaseEventArgs {
    /**
     * It is used to denote the type of the triggered event.
     */
    type: string;
    /**
     * It illustrates whether the current action needs to be prevented or not.
     */
    cancel: boolean;
    /**
     * It is used to specify the current event object.
     */
    event: Event;
    /**
     * It is used to denote the current target element where the Tooltip is to be displayed.
     */
    target: HTMLElement;
    /**
     * It is used to denote the Tooltip element
     */
    element: HTMLElement;
    /**
     * It is used to denote the Collided Tooltip position
     */
    collidedPosition?: string;
    /**
     * If the event is triggered by interaction, it returns true. Otherwise, it returns false.
     */
    isInteracted?: boolean;

}
/**
 * Animation options that are common for both open and close actions of the Tooltip.
 */
export interface TooltipAnimationSettings {
    /**
     * It is used to apply the Animation effect on the Tooltip, during open and close actions.
     */
    effect?: Effect;
    /**
     * It is used to denote the duration of the animation that is completed per animation cycle.
     */
    duration?: number;
    /**
     * It is used to denote the delay value in milliseconds and indicating the waiting time before animation begins.
     */
    delay?: number;
}
export class Animation extends ChildProperty<Animation> {
    /**
     * Animation settings to be applied on the Tooltip, while it is being shown over the target.
     */
    @Property<TooltipAnimationSettings>({ effect: 'FadeIn', duration: 150, delay: 0 })
    public open: TooltipAnimationSettings;
    /**
     * Animation settings to be applied on the Tooltip, when it is closed.
     */
    @Property<TooltipAnimationSettings>({ effect: 'FadeOut', duration: 150, delay: 0 })
    public close: TooltipAnimationSettings;
}

/**
 * Represents the Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <div id="tooltip">Show Tooltip</div>
 * ```
 * ```typescript
 * <script>
 *   var tooltipObj = new Tooltip({ content: 'Tooltip text' });
 *   tooltipObj.appendTo("#tooltip");
 * </script>
 * ```
 */
@NotifyPropertyChanges
export class Tooltip extends Component<HTMLElement> implements INotifyPropertyChanged {
    // internal variables
    private popupObj: Popup;
    private tooltipEle: HTMLElement;
    private ctrlId: string;
    private tipClass: string;
    private tooltipPositionX: string;
    private tooltipPositionY: string;
    private tooltipEventArgs: TooltipEventArgs;
    private isHidden: boolean;
    private isTooltipOpen: boolean;
    private showTimer: number;
    private hideTimer: number;
    private tipWidth: number;
    private touchModule: Touch;
    private tipHeight: number;
    private autoCloseTimer: number;
    private mouseMoveEvent: MouseEvent & TouchEvent = null;
    private mouseMoveTarget: HTMLElement = null;

    // Tooltip Options
    /**
     * It is used to set the width of Tooltip component which accepts both string and number values.
     * When set to auto, the Tooltip width gets auto adjusted to display its content within the viewable screen.
     *
     * @default 'auto'
     */
    @Property('auto')
    public width: string | number;
    /**
     * It is used to set the height of Tooltip component which accepts both string and number values.
     * When Tooltip content gets overflow due to height value then the scroll mode will be enabled.
     * Refer the documentation [here](https://ej2.syncfusion.com/documentation/tooltip/setting-dimension/)
     *  to know more about this property with demo.
     *
     * @default 'auto'
     */
    @Property('auto')
    public height: string | number;
    /**
     * It is used to display the content of Tooltip which can be both string and HTML Elements.
     * Refer the documentation [here](https://ej2.syncfusion.com/documentation/tooltip/content/)
     *  to know more about this property with demo.
     *
     * {% codeBlock src="tooltip/content-api/index.ts" %}{% endcodeBlock %}
     *
     */
    @Property()
    public content: string | HTMLElement;
    /**
     * It is used to denote the target selector where the Tooltip need to be displayed.
     * The target element is considered as parent container.
     *
     * {% codeBlock src="tooltip/target-api/index.ts" %}{% endcodeBlock %}
     */
    @Property()
    public target: string;
    /**
     * It is used to set the position of Tooltip element, with respect to Target element.
     *
     * {% codeBlock src="tooltip/position-api/index.ts" %}{% endcodeBlock %}
     *
     */
    @Property('TopCenter')
    public position: Position;
    /**
     * It sets the space between the target and Tooltip element in X axis.
     *
     * {% codeBlock src="tooltip/offsetX-api/index.ts" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/offsetx/index.md" %}{% endcodeBlock %}
     *
     * @default 0
     */
    @Property(0)
    public offsetX: number;
    /**
     * It sets the space between the target and Tooltip element in Y axis.
     *
     * {% codeBlock src="tooltip/offsetX-api/index.ts" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/offsety/index.md" %}{% endcodeBlock %}
     *
     * @default 0
     */
    @Property(0)
    public offsetY: number;
    /**
     * It is used to show or hide the tip pointer of Tooltip.
     *
     * {% codeBlock src="tooltip/offsetX-api/index.ts" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/showtippointer/index.md" %}{% endcodeBlock %}
     *
     * @default true
     */
    @Property(true)
    public showTipPointer: boolean;
    /**
     * It enables or disables the parsing of HTML string content into HTML DOM elements for Tooltip. 
     * If the value of the property is set to false, the tooltip content will be displayed as HTML string instead of HTML DOM elements.
     *
     * @default true
     */
    @Property(true)
    public enableHtmlParse: boolean;
    /**
     * It is used to set the collision target element as page viewport (window) or Tooltip element, when using the target. 
     * If this property is enabled, tooltip will perform the collision calculation between the target elements 
     * and viewport(window) instead of Tooltip element.
     *
     * @default false
     */
    @Property(false)
    public windowCollision: boolean;
    /**
     * It is used to set the position of tip pointer on tooltip.
     * When it sets to auto, the tip pointer auto adjusts within the space of target's length
     *  and does not point outside.
     * Refer the documentation
     *  [here](https://ej2.syncfusion.com/documentation/tooltip/position.html?lang=typescript#tip-pointer-positioning)
     *  to know more about this property with demo.
     * {% codeBlock src="tooltip/tippointerposition/index.md" %}{% endcodeBlock %}
     *
     * @default 'Auto'
     */
    @Property('Auto')
    public tipPointerPosition: TipPointerPosition;
    /**
     * It is used to determine the device mode to display the Tooltip content.
     * If it is in desktop, it will show the Tooltip content when hovering on the target element.
     * If it is in touch device, it will show the Tooltip content when tap and holding on the target element.
     * {% codeBlock src="tooltip/openson/index.md" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/opensOn-api/index.ts" %}{% endcodeBlock %}
     *
     * @default 'Auto'
     */
    @Property('Auto')
    public opensOn: string;
    /**
     * It allows the Tooltip to follow the mouse pointer movement over the specified target element.
     * Refer the documentation [here](https://ej2.syncfusion.com/documentation/tooltip/position/#mouse-trailing)
     *  to know more about this property with demo.
     * {% codeBlock src="tooltip/mousetrail/index.md" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/offsetX-api/index.ts" %}{% endcodeBlock %}
     *
     * @default false
     */
    @Property(false)
    public mouseTrail: boolean;
    /**
     * It is used to display the Tooltip in an open state until closed by manually.
     * Refer the documentation [here](https://ej2.syncfusion.com/documentation/tooltip/open-mode/#sticky-mode)
     *  to know more about this property with demo.
     * {% codeBlock src="tooltip/issticky/index.md" %}{% endcodeBlock %}
     *
     * @default false
     */
    @Property(false)
    public isSticky: boolean;
    /**
     * We can set the same or different animation option to Tooltip while it is in open or close state.
     * Refer the documentation [here](https://ej2.syncfusion.com/documentation/tooltip/animation/)
     *  to know more about this property with demo.
     * {% codeBlock src="tooltip/animation/index.md" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/animation-api/index.ts" %}{% endcodeBlock %}
     *
     * @default { open: { effect: 'FadeIn', duration: 150, delay: 0 }, close: { effect: 'FadeOut', duration: 150, delay: 0 } }
     */
    @Complex<AnimationModel>({}, Animation)
    public animation: AnimationModel;
    /**
     * It is used to open the Tooltip after the specified delay in milliseconds.
     *
     * @default 0
     */
    @Property(0)
    public openDelay: number;
    /**
     * It is used to close the Tooltip after a specified delay in milliseconds.
     *
     * @default 0
     */
    @Property(0)
    public closeDelay: number;
    /**
     * It is used to customize the Tooltip which accepts custom CSS class names that
     *  defines specific user-defined styles and themes to be applied on the Tooltip element.
     *
     * @default null
     */
    @Property()
    public cssClass: string;
    /**
     * Defines whether to allow the cross-scripting site or not.
     *
     * @default false
     */
    @Property(false)
    public enableHtmlSanitizer: boolean;
    /**
     * We can trigger `beforeRender` event before the Tooltip and its contents are added to the DOM.
     * When one of its arguments `cancel` is set to true, the Tooltip can be prevented from rendering on the page.
     * This event is mainly used for the purpose of customizing the Tooltip before it shows up on the screen.
     * For example, to load the AJAX content or to set new animation effects on the Tooltip, this event can be opted.
     * Refer the documentation
     *  [here](https://ej2.syncfusion.com/documentation/tooltip/content/#dynamic-content-via-ajax)
     *  to know more about this property with demo.
     *
     * @event
     */
    @Event()
    public beforeRender: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `beforeOpen` event before the Tooltip is displayed over the target element.
     * When one of its arguments `cancel` is set to true, the Tooltip display can be prevented.
     * This event is mainly used for the purpose of refreshing the Tooltip positions dynamically or to
     *  set customized styles in it and so on.
     * {% codeBlock src="tooltip/beforeOpen/index.md" %}{% endcodeBlock %}
     *
     * @event
     */
    @Event()
    public beforeOpen: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `afterOpen` event after the Tooltip Component gets opened.
     * {% codeBlock src="tooltip/afterOpen/index.md" %}{% endcodeBlock %}
     *
     * @event
     */
    @Event()
    public afterOpen: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `beforeClose` event before the Tooltip hides from the screen. If returned false, then the Tooltip is no more hidden.
     * {% codeBlock src="tooltip/beforeClose/index.md" %}{% endcodeBlock %}
     *
     * @event
     */
    @Event()
    public beforeClose: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `afterClose` event when the Tooltip Component gets closed.
     * {% codeBlock src="tooltip/afterClose/index.md" %}{% endcodeBlock %}
     *
     * @event
     */
    @Event()
    public afterClose: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `beforeCollision` event for every collision fit calculation.
     * {% codeBlock src="tooltip/beforeCollision/index.md" %}{% endcodeBlock %}
     *
     * @event
     */
    @Event()
    public beforeCollision: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `created` event after the Tooltip component is created.
     *
     * @event
     */
    /* eslint-disable */
    @Event()
    public created: EmitType<Object>;
    /* eslint-enable */
    /**
     * We can trigger `destroyed` event when the Tooltip component is destroyed.
     *
     * @event
     */
    /* eslint-disable */
    @Event()
    public destroyed: EmitType<Object>;
    /* eslint-enable */

    /**
     * Constructor for creating the Tooltip Component
     *
     * @param {TooltipModel} options - specifies the options for the constructor
     * @param {string| HTMLElement} element - specifies the element for the constructor
     *
     */
    constructor(options?: TooltipModel, element?: string | HTMLElement) {
        super(options, <HTMLElement | string>element);
    }
    private initialize(): void {
        this.formatPosition();
        addClass([this.element], ROOT);
    }

    private formatPosition(): void {
        if (this.position.indexOf('Top') === 0 || this.position.indexOf('Bottom') === 0) {
            [this.tooltipPositionY, this.tooltipPositionX] = this.position.split(/(?=[A-Z])/);
        } else {
            [this.tooltipPositionX, this.tooltipPositionY] = this.position.split(/(?=[A-Z])/);
        }
    }
    private renderArrow(): void {
        this.setTipClass(this.position);
        const tip: HTMLElement = this.createElement('div', { className: ARROW_TIP + ' ' + this.tipClass });
        tip.appendChild(this.createElement('div', { className: ARROW_TIP_OUTER + ' ' + this.tipClass }));
        tip.appendChild(this.createElement('div', { className: ARROW_TIP_INNER + ' ' + this.tipClass }));
        this.tooltipEle.appendChild(tip);
    }
    private setTipClass(position: Position): void {
        if (position.indexOf('Right') === 0) {
            this.tipClass = TIP_LEFT;
        } else if (position.indexOf('Bottom') === 0) {
            this.tipClass = TIP_TOP;
        } else if (position.indexOf('Left') === 0) {
            this.tipClass = TIP_RIGHT;
        } else {
            this.tipClass = TIP_BOTTOM;
        }
    }
    private renderPopup(target: HTMLElement): void {
        const elePos: OffsetPosition = this.mouseTrail ? { top: 0, left: 0 } : this.getTooltipPosition(target);
        this.tooltipEle.classList.remove(POPUP_LIB);
        this.popupObj = new Popup(this.tooltipEle as HTMLElement, {
            height: this.height,
            width: this.width,
            position: { X: elePos.left, Y: elePos.top },
            enableRtl: this.enableRtl,
            open: this.openPopupHandler.bind(this),
            close: this.closePopupHandler.bind(this)
        });
    }
    private getTooltipPosition(target: HTMLElement): OffsetPosition {
        this.tooltipEle.style.display = 'block';
        const pos: OffsetPosition = calculatePosition(target, this.tooltipPositionX, this.tooltipPositionY);
        const offsetPos: OffsetPosition = this.calculateTooltipOffset(this.position);
        const elePos: OffsetPosition = this.collisionFlipFit(target, pos.left + offsetPos.left, pos.top + offsetPos.top);
        this.tooltipEle.style.display = '';
        return elePos;
    }
    private reposition(target: HTMLElement): void {
        const elePos: OffsetPosition = this.getTooltipPosition(target);
        this.popupObj.position = { X: elePos.left, Y: elePos.top };
        this.popupObj.dataBind();
    }
    private openPopupHandler(): void {
        if (!this.mouseTrail && this.needTemplateReposition()) {
            this.reposition(this.findTarget());
        }
        this.trigger('afterOpen', this.tooltipEventArgs);
    }
    private closePopupHandler(): void {
        this.clearTemplate(['content']);
        this.clear();
        this.trigger('afterClose', this.tooltipEventArgs);
    }
    private calculateTooltipOffset(position: Position): OffsetPosition {
        const pos: OffsetPosition = { top: 0, left: 0 };
        const tooltipEleWidth: number = this.tooltipEle.offsetWidth;
        const tooltipEleHeight: number = this.tooltipEle.offsetHeight;
        const arrowEle: HTMLElement = this.tooltipEle.querySelector('.' + ARROW_TIP) as HTMLElement;
        const tipWidth: number = arrowEle ? arrowEle.offsetWidth : 0;
        const tipHeight: number = arrowEle ? arrowEle.offsetHeight : 0;
        let tipAdjust: number = (this.showTipPointer ? SHOW_POINTER_TIP_GAP : HIDE_POINTER_TIP_GAP);
        const tipHeightAdjust: number = (tipHeight / 2) + POINTER_ADJUST + (this.tooltipEle.offsetHeight - this.tooltipEle.clientHeight);
        const tipWidthAdjust: number = (tipWidth / 2) + POINTER_ADJUST + (this.tooltipEle.offsetWidth - this.tooltipEle.clientWidth);
        if (this.mouseTrail) {
            tipAdjust += MOUSE_TRAIL_GAP;
        }
        switch (position) {
        case 'RightTop':
            pos.left += tipWidth + tipAdjust;
            pos.top -= tooltipEleHeight - tipHeightAdjust;
            break;
        case 'RightCenter':
            pos.left += tipWidth + tipAdjust;
            pos.top -= (tooltipEleHeight / 2);
            break;
        case 'RightBottom':
            pos.left += tipWidth + tipAdjust;
            pos.top -= (tipHeightAdjust);
            break;
        case 'BottomRight':
            pos.top += (tipHeight + tipAdjust);
            pos.left -= (tipWidthAdjust);
            break;
        case 'BottomCenter':
            pos.top += (tipHeight + tipAdjust);
            pos.left -= (tooltipEleWidth / 2);
            break;
        case 'BottomLeft':
            pos.top += (tipHeight + tipAdjust);
            pos.left -= (tooltipEleWidth - tipWidthAdjust);
            break;
        case 'LeftBottom':
            pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
            pos.top -= (tipHeightAdjust);
            break;
        case 'LeftCenter':
            pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
            pos.top -= (tooltipEleHeight / 2);
            break;
        case 'LeftTop':
            pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
            pos.top -= (tooltipEleHeight - tipHeightAdjust);
            break;
        case 'TopLeft':
            pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
            pos.left -= (tooltipEleWidth - tipWidthAdjust);
            break;
        case 'TopRight':
            pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
            pos.left -= (tipWidthAdjust);
            break;
        default:
            pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
            pos.left -= (tooltipEleWidth / 2);
            break;
        }
        pos.left += this.offsetX;
        pos.top += this.offsetY;
        return pos;
    }
    private updateTipPosition(position: Position): void {
        const selEle: NodeList = this.tooltipEle.querySelectorAll('.' + ARROW_TIP + ',.' + ARROW_TIP_OUTER + ',.' + ARROW_TIP_INNER);
        const removeList: string[] = [TIP_BOTTOM, TIP_TOP, TIP_LEFT, TIP_RIGHT];
        removeClass(selEle, removeList);
        this.setTipClass(position);
        addClass(selEle, this.tipClass);
    }
    private adjustArrow(target: HTMLElement, position: Position, tooltipPositionX: string, tooltipPositionY: string): void {
        if (this.showTipPointer === false) { return; }
        this.updateTipPosition(position);
        let leftValue: string; let topValue: string;
        this.tooltipEle.style.display = 'block';
        const tooltipWidth: number = this.tooltipEle.clientWidth;
        const tooltipHeight: number = this.tooltipEle.clientHeight;
        const arrowEle: HTMLElement = this.tooltipEle.querySelector('.' + ARROW_TIP) as HTMLElement;
        const arrowInnerELe: HTMLElement = this.tooltipEle.querySelector('.' + ARROW_TIP_INNER) as HTMLElement;
        const tipWidth: number = arrowEle.offsetWidth; const tipHeight: number = arrowEle.offsetHeight;
        this.tooltipEle.style.display = '';
        if (this.tipClass === TIP_BOTTOM || this.tipClass === TIP_TOP) {
            if (this.tipClass === TIP_BOTTOM) {
                topValue = '99.9%';
                // Arrow icon aligned -2px height from ArrowOuterTip div
                arrowInnerELe.style.top = '-' + (tipHeight - 2) + 'px';
            } else {
                topValue = -(tipHeight - 1) + 'px';
                // Arrow icon aligned -6px height from ArrowOuterTip div
                arrowInnerELe.style.top = '-' + (tipHeight - 6) + 'px';
            }
            if (target) {
                const tipPosExclude: boolean = tooltipPositionX !== 'Center' || (tooltipWidth > target.offsetWidth) || this.mouseTrail;
                if ((tipPosExclude && tooltipPositionX === 'Left') || (!tipPosExclude && this.tipPointerPosition === 'End')) {
                    leftValue = (tooltipWidth - tipWidth - POINTER_ADJUST) + 'px';
                } else if ((tipPosExclude && tooltipPositionX === 'Right') || (!tipPosExclude && this.tipPointerPosition === 'Start')) {
                    leftValue = POINTER_ADJUST + 'px';
                } else {
                    leftValue = ((tooltipWidth / 2) - (tipWidth / 2)) + 'px';
                }
            }
        } else {
            if (this.tipClass === TIP_RIGHT) {
                leftValue = '99.9%';
                // Arrow icon aligned -2px left from ArrowOuterTip div
                arrowInnerELe.style.left = '-' + (tipWidth - 2) + 'px';
            } else {
                leftValue = -(tipWidth - 1) + 'px';
                // Arrow icon aligned -2px from ArrowOuterTip width
                arrowInnerELe.style.left = (-(tipWidth) + (tipWidth - 2)) + 'px';
            }
            const tipPosExclude: boolean = tooltipPositionY !== 'Center' || (tooltipHeight > target.offsetHeight) || this.mouseTrail;
            if ((tipPosExclude && tooltipPositionY === 'Top') || (!tipPosExclude && this.tipPointerPosition === 'End')) {
                topValue = (tooltipHeight - tipHeight - POINTER_ADJUST) + 'px';
            } else if ((tipPosExclude && tooltipPositionY === 'Bottom') || (!tipPosExclude && this.tipPointerPosition === 'Start')) {
                topValue = POINTER_ADJUST + 'px';
            } else {
                topValue = ((tooltipHeight / 2) - (tipHeight / 2)) + 'px';
            }
        }
        arrowEle.style.top = topValue;
        arrowEle.style.left = leftValue;
    }
    private renderContent(target?: HTMLElement): void {
        const tooltipContent: HTMLElement = this.tooltipEle.querySelector('.' + CONTENT) as HTMLElement;
        if (this.cssClass) {
            addClass([this.tooltipEle], this.cssClass.split(' '));
        }
        if (target && !isNullOrUndefined(target.getAttribute('title'))) {
            target.setAttribute('data-content', target.getAttribute('title'));
            target.removeAttribute('title');
        }
        if (!isNullOrUndefined(this.content)) {
            tooltipContent.innerHTML = '';
            if (this.content instanceof HTMLElement) {
                tooltipContent.appendChild(this.content);
            } else if (typeof this.content === 'string') {
                if (this.enableHtmlSanitizer) {
                    this.setProperties({ content: SanitizeHtmlHelper.sanitize(this.content) }, true);
                }
                tooltipContent[this.enableHtmlParse ? 'innerHTML' : 'textContent'] = this.content;
            } else {
                // eslint-disable-next-line
                const templateFunction: Function = compile(this.content);
                const tempArr: Element[] = templateFunction(
                    {}, this, 'content', this.element.id + 'content', undefined, undefined, tooltipContent);
                if (tempArr) {
                    append(tempArr, tooltipContent);
                }
                this.renderReactTemplates();
            }
        } else {
            if (target && !isNullOrUndefined(target.getAttribute('data-content'))) {
                tooltipContent.innerHTML = target.getAttribute('data-content');
            }
        }
    }
    private renderCloseIcon(): void {
        if (!this.isSticky) {
            return;
        }
        const tipClose: HTMLElement = this.createElement('div', { className: ICON + ' ' + CLOSE });
        this.tooltipEle.appendChild(tipClose);
        EventHandler.add(tipClose, Browser.touchStartEvent, this.onStickyClose, this);
    }
    private addDescribedBy(target: HTMLElement, id: string): void {
        const describedby: string[] = (target.getAttribute('aria-describedby') || '').split(/\s+/);
        if (describedby.indexOf(id) < 0) { describedby.push(id); }
        attributes(target, { 'aria-describedby': describedby.join(' ').trim(), 'data-tooltip-id': id });
    }
    private removeDescribedBy(target: HTMLElement): void {
        const id: string = target.getAttribute('data-tooltip-id');
        const describedby: string[] = (target.getAttribute('aria-describedby') || '').split(/\s+/);
        const index: number = describedby.indexOf(id);
        if (index !== -1) {
            describedby.splice(index, 1);
        }
        target.removeAttribute('data-tooltip-id');
        const orgdescribedby: string = describedby.join(' ').trim();
        if (orgdescribedby) {
            target.setAttribute('aria-describedby', orgdescribedby);
        } else {
            target.removeAttribute('aria-describedby');
        }
    }
    private tapHoldHandler(evt: TapEventArgs): void {
        clearTimeout(this.autoCloseTimer);
        this.targetHover(evt.originalEvent as Event);
    }
    private touchEndHandler(e: TouchEvent): void {
        if (this.isSticky) {
            return;
        }
        // eslint-disable-next-line
        const close: Function = (): void => {
            this.close();
        };
        this.autoCloseTimer = setTimeout(close, TOUCHEND_HIDE_DELAY);
    }
    private targetClick(e: Event): void {
        let target: HTMLElement;
        if (this.target) {
            target = closest(e.target as HTMLElement, this.target) as HTMLElement;
        } else {
            target = this.element;
        }
        if (isNullOrUndefined(target)) {
            return;
        }
        if (target.getAttribute('data-tooltip-id') === null) {
            this.targetHover(e);
        } else if (!this.isSticky) {
            this.hideTooltip(this.animation.close, e, target);
        }
    }
    private targetHover(e: Event): void {
        let target: HTMLElement;
        if (this.target) {
            target = closest(e.target as HTMLElement, this.target) as HTMLElement;
        } else {
            target = this.element;
        }
        if (isNullOrUndefined(target) || (target.getAttribute('data-tooltip-id') !== null && this.closeDelay === 0)) { return; }
        const targetList: Element[] = [].slice.call(document.querySelectorAll('[data-tooltip-id= ' + this.ctrlId + '_content]'));
        for (const target of targetList) {
            this.restoreElement(target as HTMLElement);
        }
        this.showTooltip(target, this.animation.open, e);
    }

    private mouseMoveBeforeOpen(e: MouseEvent & TouchEvent): void {
        this.mouseMoveEvent = e;
    }
    private mouseMoveBeforeRemove(): void {
        if (this.mouseMoveTarget) {
            EventHandler.remove(this.mouseMoveTarget, "mousemove touchstart", this.mouseMoveBeforeOpen);
        }
    }

    private showTooltip(target: HTMLElement, showAnimation: TooltipAnimationSettings, e?: Event): void {
        clearTimeout(this.showTimer);
        clearTimeout(this.hideTimer);
        if (this.openDelay && this.mouseTrail) {
            this.mouseMoveBeforeRemove();
            this.mouseMoveTarget = target;
            EventHandler.add(this.mouseMoveTarget, "mousemove touchstart", this.mouseMoveBeforeOpen, this);
        }
        this.tooltipEventArgs = {
            type: e ? e.type : null, cancel: false, target: target, event: e ? e : null,
            element: this.tooltipEle, isInteracted: !isNullOrUndefined(e)
        };
        // eslint-disable-next-line
        const observeCallback: Function = (beforeRenderArgs: TooltipEventArgs) => {
            this.beforeRenderCallback(beforeRenderArgs, target, e, showAnimation);
        };
        this.trigger('beforeRender', this.tooltipEventArgs, observeCallback.bind(this));
    }

    private beforeRenderCallback(
        beforeRenderArgs: TooltipEventArgs,
        target: HTMLElement,
        e: Event,
        showAnimation: TooltipAnimationSettings): void {
        if (beforeRenderArgs.cancel) {
            this.isHidden = true;
            this.clear();
            this.mouseMoveBeforeRemove();
        } else {
            this.isHidden = false;
            if (isNullOrUndefined(this.tooltipEle)) {
                this.ctrlId = this.element.getAttribute('id') ?
                    getUniqueID(this.element.getAttribute('id')) : getUniqueID('tooltip');
                this.tooltipEle = this.createElement('div', {
                    className: TOOLTIP_WRAP + ' ' + POPUP_ROOT + ' ' + POPUP_LIB, attrs: {
                        role: 'tooltip', 'aria-hidden': 'false', 'id': this.ctrlId + '_content'
                    }, styles: 'width:' +
                        formatUnit(this.width) + ';height:' + formatUnit(this.height) + ';position:absolute;'
                });
                this.tooltipBeforeRender(target, this);
                this.tooltipAfterRender(target, e, showAnimation, this);
            } else {
                if (target) {
                    this.adjustArrow(target, this.position, this.tooltipPositionX, this.tooltipPositionY);
                    this.addDescribedBy(target, this.ctrlId + '_content');
                    this.renderContent(target);
                    PopupAnimation.stop(this.tooltipEle);
                    this.reposition(target);
                    this.tooltipAfterRender(target, e, showAnimation, this);
                }
            }
        }
    }


    private tooltipBeforeRender(target: HTMLElement, ctrlObj: Tooltip): void {
        if (target) {
            if (Browser.isDevice) {
                addClass([ctrlObj.tooltipEle], DEVICE);
            }
            if (ctrlObj.width !== 'auto') {
                ctrlObj.tooltipEle.style.maxWidth = formatUnit(ctrlObj.width);
            }
            ctrlObj.tooltipEle.appendChild(ctrlObj.createElement('div', { className: CONTENT }));
            document.body.appendChild(ctrlObj.tooltipEle);
            removeClass([ctrlObj.tooltipEle], HIDE_POPUP);
            ctrlObj.addDescribedBy(target, ctrlObj.ctrlId + '_content');
            ctrlObj.renderContent(target);
            addClass([ctrlObj.tooltipEle], POPUP_OPEN);
            if (ctrlObj.showTipPointer) {
                ctrlObj.renderArrow();
            }
            ctrlObj.renderCloseIcon();
            ctrlObj.renderPopup(target);
            ctrlObj.adjustArrow(target, ctrlObj.position, ctrlObj.tooltipPositionX, ctrlObj.tooltipPositionY);
            PopupAnimation.stop(ctrlObj.tooltipEle);
            ctrlObj.reposition(target);
        }
    }

    private tooltipAfterRender(target: HTMLElement, e: Event, showAnimation: TooltipAnimationSettings, ctrlObj: Tooltip): void {
        if (target) {
            removeClass([ctrlObj.tooltipEle], POPUP_OPEN);
            addClass([ctrlObj.tooltipEle], POPUP_CLOSE);
            ctrlObj.tooltipEventArgs = {
                type: e ? e.type : null, cancel: false, target: target, event: e ? e : null,
                element: ctrlObj.tooltipEle, isInteracted: !isNullOrUndefined(e)
            };
            if (ctrlObj.needTemplateReposition() && !ctrlObj.mouseTrail) {
                ctrlObj.tooltipEle.style.display = 'none';
            }
            // eslint-disable-next-line
            const observeCallback: Function = (observedArgs: TooltipEventArgs) => {
                ctrlObj.beforeOpenCallback(observedArgs, target, showAnimation, e);
            };
            ctrlObj.trigger('beforeOpen', ctrlObj.tooltipEventArgs, observeCallback.bind(ctrlObj));
        }
    }

    private beforeOpenCallback(
        observedArgs: TooltipEventArgs,
        target: HTMLElement,
        showAnimation: TooltipAnimationSettings,
        e: Event): void {
        if (observedArgs.cancel) {
            this.isHidden = true;
            this.clear();
            this.mouseMoveBeforeRemove();
            this.restoreElement(target);
        } else {
            // eslint-disable-next-line
            let openAnimation: Object = {
                name: showAnimation.effect,
                duration: showAnimation.duration,
                delay: showAnimation.delay,
                timingFunction: 'easeOut'
            };
            if (showAnimation.effect === 'None') {
                openAnimation = undefined;
            }
            if (this.openDelay > 0) {
                // eslint-disable-next-line
                const show: Function = (): void => {
                    if (this.mouseTrail) {
                        EventHandler.add(target, 'mousemove touchstart mouseenter', this.onMouseMove, this);
                    }
                    if (this.popupObj) {
                        this.popupObj.show(openAnimation, target);
                        if (this.mouseMoveEvent && this.mouseTrail) { this.onMouseMove(this.mouseMoveEvent);}
                    }
                };
                this.showTimer = setTimeout(show, this.openDelay);
            } else {
                if (this.popupObj) { this.popupObj.show(openAnimation, target); }
            }
        }
        if (e) {
            this.wireMouseEvents(e, target);
        }
    }

    private needTemplateReposition(): boolean {
        // eslint-disable-next-line
        const tooltip: any = this;
        return !isNullOrUndefined(tooltip.viewContainerRef)
            && typeof tooltip.viewContainerRef !== 'string';
    }

    private checkCollision(target: HTMLElement, x: number, y: number): ElementPosition {
        const elePos: ElementPosition = {
            left: x, top: y, position: this.position,
            horizontal: this.tooltipPositionX, vertical: this.tooltipPositionY
        };
        const affectedPos: string[] = isCollide(this.tooltipEle, this.checkCollideTarget(), x, y);
        if (affectedPos.length > 0) {
            elePos.horizontal = affectedPos.indexOf('left') >= 0 ? 'Right' : affectedPos.indexOf('right') >= 0 ? 'Left' :
                this.tooltipPositionX;
            elePos.vertical = affectedPos.indexOf('top') >= 0 ? 'Bottom' : affectedPos.indexOf('bottom') >= 0 ? 'Top' :
                this.tooltipPositionY;
        }
        return elePos;
    }
    private collisionFlipFit(target: HTMLElement, x: number, y: number): OffsetPosition {
        const elePos: ElementPosition = this.checkCollision(target, x, y);
        let newpos: Position = elePos.position;
        if (this.tooltipPositionY !== elePos.vertical) {
            newpos = ((this.position.indexOf('Bottom') === 0 || this.position.indexOf('Top') === 0) ?
                elePos.vertical + this.tooltipPositionX : this.tooltipPositionX + elePos.vertical) as Position;
        }
        if (this.tooltipPositionX !== elePos.horizontal) {
            if (newpos.indexOf('Left') === 0) {
                elePos.vertical = (newpos === 'LeftTop' || newpos === 'LeftCenter') ? 'Top' : 'Bottom';
                newpos = (elePos.vertical + 'Left') as Position;
            }
            if (newpos.indexOf('Right') === 0) {
                elePos.vertical = (newpos === 'RightTop' || newpos === 'RightCenter') ? 'Top' : 'Bottom';
                newpos = (elePos.vertical + 'Right') as Position;
            }
            elePos.horizontal = this.tooltipPositionX;
        }
        this.tooltipEventArgs = {
            type: null, cancel: false, target: target, event: null,
            element: this.tooltipEle, collidedPosition: newpos
        };
        this.trigger('beforeCollision', this.tooltipEventArgs);
        if (elePos.position !== newpos) {
            const pos: OffsetPosition = calculatePosition(target, elePos.horizontal, elePos.vertical);
            this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
            const offsetPos: OffsetPosition = this.calculateTooltipOffset(newpos);
            offsetPos.top -= (('TopBottom'.indexOf(this.position.split(/(?=[A-Z])/)[0]) !== -1) &&
                ('TopBottom'.indexOf(newpos.split(/(?=[A-Z])/)[0]) !== -1)) ? (2 * this.offsetY) : 0;
            offsetPos.left -= (('RightLeft'.indexOf(this.position.split(/(?=[A-Z])/)[0]) !== -1) &&
                ('RightLeft'.indexOf(newpos.split(/(?=[A-Z])/)[0]) !== -1)) ? (2 * this.offsetX) : 0;
            elePos.position = newpos;
            elePos.left = pos.left + offsetPos.left;
            elePos.top = pos.top + offsetPos.top;
        } else {
            this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
        }
        const eleOffset: OffsetPosition = { left: elePos.left, top: elePos.top };
        const left: number = fit(this.tooltipEle, this.checkCollideTarget(), { X: true, Y: false }, eleOffset).left;
        this.tooltipEle.style.display = 'block';
        if (this.showTipPointer && (newpos.indexOf('Bottom') === 0 || newpos.indexOf('Top') === 0)) {
            const arrowEle: HTMLElement = this.tooltipEle.querySelector('.' + ARROW_TIP) as HTMLElement;
            let arrowleft: number = parseInt(arrowEle.style.left, 10) - (left - elePos.left);
            if (arrowleft < 0) {
                arrowleft = 0;
            } else if ((arrowleft + arrowEle.offsetWidth) > this.tooltipEle.clientWidth) {
                arrowleft = this.tooltipEle.clientWidth - arrowEle.offsetWidth;
            }
            arrowEle.style.left = arrowleft.toString() + 'px';
        }
        this.tooltipEle.style.display = '';
        eleOffset.left = left;
        return eleOffset;
    }

    private checkCollideTarget(): HTMLElement {
        return !this.windowCollision && this.target ? this.element : null;
    }

    private hideTooltip(hideAnimation: TooltipAnimationSettings, e?: Event, targetElement?: HTMLElement): void {
        if (this.closeDelay > 0) {
            clearTimeout(this.hideTimer);
            clearTimeout(this.showTimer);
            // eslint-disable-next-line
            const hide: Function = (): void => {
                if (this.closeDelay && this.tooltipEle && this.isTooltipOpen) { return; }
                this.tooltipHide(hideAnimation, e, targetElement);
            };
            this.hideTimer = setTimeout(hide, this.closeDelay);
        } else {
            this.tooltipHide(hideAnimation, e, targetElement);
        }
    }

    private tooltipHide (hideAnimation: TooltipAnimationSettings, e?: Event, targetElement?: HTMLElement): void {
        let target: HTMLElement;
        if (e) {
            target = this.target ? (targetElement || e.target as HTMLElement) : this.element;
        } else {
            target = document.querySelector('[data-tooltip-id= ' + this.ctrlId + '_content]') as HTMLElement;
        }
        this.tooltipEventArgs = {
            type: e ? e.type : null, cancel: false, target: target, event: e ? e : null,
            element: this.tooltipEle, isInteracted: !isNullOrUndefined(e)
        };
        // this line commented for close the tooltip popup element even the target element destroyed in a page.
        //if (isNullOrUndefined(target)) { return; }
        this.trigger('beforeClose', this.tooltipEventArgs, (observedArgs: TooltipEventArgs) => {
            if (!observedArgs.cancel) {
                this.mouseMoveBeforeRemove();
                this.popupHide(hideAnimation, target);
            } else {
                this.isHidden = false;
            }
        });
    }
   
    private popupHide(hideAnimation: TooltipAnimationSettings, target: HTMLElement): void {
        if (target) { this.restoreElement(target); }
        this.isHidden = true;
        // eslint-disable-next-line
        let closeAnimation: Object = {
            name: hideAnimation.effect,
            duration: hideAnimation.duration,
            delay: hideAnimation.delay,
            timingFunction: 'easeIn'
        };
        if (hideAnimation.effect === 'None') {
            closeAnimation = undefined;
        }
        if (this.popupObj) { this.popupObj.hide(closeAnimation); }
    }
    private restoreElement(target: HTMLElement): void {
        this.unwireMouseEvents(target);
        if (!isNullOrUndefined(target.getAttribute('data-content'))) {
            target.setAttribute('title', target.getAttribute('data-content'));
            target.removeAttribute('data-content');
        }
        this.removeDescribedBy(target);
    }
    private clear(): void {
        if (this.tooltipEle) {
            removeClass([this.tooltipEle], POPUP_CLOSE);
            addClass([this.tooltipEle], POPUP_OPEN);
        }
        if (this.isHidden) {
            if (this.popupObj) { this.popupObj.destroy(); }
            if (this.tooltipEle) {
                remove(this.tooltipEle);
            }
            this.tooltipEle = null;
            this.popupObj = null;
        }
    }
    private tooltipHover (e: Event): void {
        if (this.tooltipEle) {
            this.isTooltipOpen = true;
        }
    }

    private tooltipMouseOut (e: Event): void {
        this.isTooltipOpen = false;
        this.hideTooltip(this.animation.close, e, this.findTarget());
    }
    private onMouseOut(e: Event): void {
        const enteredElement: EventTarget = (e as MouseEvent).relatedTarget;
        // don't close the tooltip only if it is tooltip content element
        if (enteredElement && !this.mouseTrail) {
            const checkForTooltipElement: Element = closest(
                enteredElement as HTMLElement,
                `.${TOOLTIP_WRAP}.${POPUP_LIB}.${POPUP_ROOT}`);
            if (checkForTooltipElement) {
                EventHandler.add(checkForTooltipElement, 'mouseleave', this.tooltipElementMouseOut, this);
            } else {
                this.hideTooltip(this.animation.close, e, this.findTarget());
                if (this.closeDelay === 0) { this.clear(); }
            }
        } else {
            this.hideTooltip(this.animation.close, e, this.findTarget());
            this.clear();
        }
    }

    private tooltipElementMouseOut(e: Event): void {
        this.hideTooltip(this.animation.close, e, this.findTarget());
        EventHandler.remove(this.element, 'mouseleave', this.tooltipElementMouseOut);
        this.clear();
    }

    private onStickyClose(e: Event): void {
        this.close();
    }
    private onMouseMove(event: MouseEvent & TouchEvent): void {
        let eventPageX: number = 0; let eventPageY: number = 0;
        if (event.type.indexOf('touch') > -1) {
            event.preventDefault();
            eventPageX = event.touches[0].pageX;
            eventPageY = event.touches[0].pageY;
        } else {
            eventPageX = event.pageX;
            eventPageY = event.pageY;
        }
        PopupAnimation.stop(this.tooltipEle);
        removeClass([this.tooltipEle], POPUP_CLOSE);
        addClass([this.tooltipEle], POPUP_OPEN);
        this.adjustArrow(event.target as HTMLElement, this.position, this.tooltipPositionX, this.tooltipPositionY);
        const pos: OffsetPosition = this.calculateTooltipOffset(this.position);
        const x: number = eventPageX + pos.left + this.offsetX;
        const y: number = eventPageY + pos.top + this.offsetY;
        const elePos: ElementPosition = this.checkCollision(event.target as HTMLElement, x, y);
        if (this.tooltipPositionX !== elePos.horizontal || this.tooltipPositionY !== elePos.vertical) {
            const newpos: string = (this.position.indexOf('Bottom') === 0 || this.position.indexOf('Top') === 0) ?
                elePos.vertical + elePos.horizontal : elePos.horizontal + elePos.vertical;
            elePos.position = <Position>newpos;
            this.adjustArrow(event.target as HTMLElement, elePos.position, elePos.horizontal, elePos.vertical);
            const colpos: OffsetPosition = this.calculateTooltipOffset(elePos.position);
            elePos.left = eventPageX + colpos.left - this.offsetX;
            elePos.top = eventPageY + colpos.top - this.offsetY;
        }
        this.tooltipEle.style.left = elePos.left + 'px';
        this.tooltipEle.style.top = elePos.top + 'px';
    }
    private keyDown(event: KeyboardEvent): void {
        if (this.tooltipEle && event.keyCode === 27) {
            this.close();
        }
    }
    private touchEnd(e: TouchEvent): void {
        if (this.tooltipEle && closest(e.target as HTMLElement, '.' + ROOT) === null && !this.isSticky) {
            this.close();
        }
    }
    private scrollHandler(e: Event): void {
        if (this.tooltipEle) {
            if (!(closest(e.target as HTMLElement, `.${TOOLTIP_WRAP}.${POPUP_LIB}.${POPUP_ROOT}`))) { this.close(); }
        }
    }
    /**
     * Core method that initializes the control rendering.
     *
     * @private
     * @returns {void}
     */
    public render(): void {
        this.initialize();
        this.wireEvents(this.opensOn);
        this.renderComplete();
    }
    /**
     * Initializes the values of private members.
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void {
        this.tipClass = TIP_BOTTOM;
        this.tooltipPositionX = 'Center';
        this.tooltipPositionY = 'Top';
        this.isHidden = true;
    }
    /**
     * Binding events to the Tooltip element.
     *
     * @hidden
     * @param {string} trigger - specify the trigger string to the function
     * @returns {void}
     *
     */
    private wireEvents(trigger: string): void {
        const triggerList: string[] = this.getTriggerList(trigger);
        for (const opensOn of triggerList) {
            if (opensOn === 'Custom') { return; }
            if (opensOn === 'Focus') {
                this.wireFocusEvents();
            }
            if (opensOn === 'Click') {
                EventHandler.add(this.element, Browser.touchStartEvent, this.targetClick, this);
            }
            if (opensOn === 'Hover') {
                if (Browser.isDevice) {
                    this.touchModule = new Touch(this.element, {
                        tapHoldThreshold: TAPHOLD_THRESHOLD,
                        tapHold: this.tapHoldHandler.bind(this)
                    });
                    EventHandler.add(this.element, Browser.touchEndEvent, this.touchEndHandler, this);
                } else {
                    EventHandler.add(this.element, 'mouseover', this.targetHover, this);
                }
            }
        }
        EventHandler.add(document, 'touchend', this.touchEnd, this);
        EventHandler.add(document, 'scroll wheel', this.scrollHandler, this);
        EventHandler.add(document, 'keydown', this.keyDown, this);
    }
    private getTriggerList(trigger: string): string[] {
        if (trigger === 'Auto') {
            trigger = (Browser.isDevice) ? 'Hover' : 'Hover Focus';
        }
        return trigger.split(' ');
    }
    private wireFocusEvents(): void {
        if (!isNullOrUndefined(this.target)) {
            const targetList: Element[] = [].slice.call(this.element.querySelectorAll(this.target));
            for (const target of targetList) {
                EventHandler.add(target, 'focus', this.targetHover, this);
            }
        } else {
            EventHandler.add(this.element, 'focus', this.targetHover, this);
        }
    }
    private wireMouseEvents(e: Event, target: Element): void {
        if (this.tooltipEle) {
            if (!this.isSticky) {
                if (e.type === 'focus') {
                    EventHandler.add(target, 'blur', this.onMouseOut, this);
                }
                if (e.type === 'mouseover') {
                    EventHandler.add(target, 'mouseleave', this.onMouseOut, this);
                }
                if (this.closeDelay) {
                    EventHandler.add(this.tooltipEle, 'mouseenter', this.tooltipHover, this);
                    EventHandler.add(this.tooltipEle, 'mouseleave', this.tooltipMouseOut, this);
                }
            }
            if (this.mouseTrail && this.openDelay === 0) {
                EventHandler.add(target, 'mousemove touchstart mouseenter', this.onMouseMove, this);
            }
        }
    }
    /**
     * Unbinding events from the element on widget destroy.
     *
     * @hidden
     *
     * @param {string} trigger - specify the trigger string to the function
     * @returns {void}
     *
     */
    private unwireEvents(trigger: string): void {
        const triggerList: string[] = this.getTriggerList(trigger);
        for (const opensOn of triggerList) {
            if (opensOn === 'Custom') { return; }
            if (opensOn === 'Focus') {
                this.unwireFocusEvents();
            }
            if (opensOn === 'Click') {
                EventHandler.remove(this.element, Browser.touchStartEvent, this.targetClick);
            }
            if (opensOn === 'Hover') {
                if (Browser.isDevice) {
                    if (this.touchModule) { this.touchModule.destroy(); }
                    EventHandler.remove(this.element, Browser.touchEndEvent, this.touchEndHandler);
                } else {
                    EventHandler.remove(this.element, 'mouseover', this.targetHover);
                }
            }
        }
        EventHandler.remove(document, 'touchend', this.touchEnd);
        EventHandler.remove(document, 'scroll wheel', this.scrollHandler);
        EventHandler.remove(document, 'keydown', this.keyDown);
    }
    private unwireFocusEvents(): void {
        if (!isNullOrUndefined(this.target)) {
            const targetList: Element[] = [].slice.call(this.element.querySelectorAll(this.target));
            for (const target of targetList) {
                EventHandler.remove(target, 'focus', this.targetHover);
            }
        } else {
            EventHandler.remove(this.element, 'focus', this.targetHover);
        }
    }
    private unwireMouseEvents(target: Element): void {
        if (!this.isSticky) {
            const triggerList: string[] = this.getTriggerList(this.opensOn);
            for (const opensOn of triggerList) {
                if (opensOn === 'Focus') {
                    EventHandler.remove(target, 'blur', this.onMouseOut);
                }
                if (opensOn === 'Hover' && !Browser.isDevice) {
                    EventHandler.remove(target, 'mouseleave', this.onMouseOut);
                }
            }
            if (this.closeDelay) {
                EventHandler.remove(target, 'mouseenter', this.tooltipHover );
                EventHandler.remove(target, 'mouseleave', this.tooltipMouseOut);
            }
        }
        if (this.mouseTrail) {
            EventHandler.remove(target, 'mousemove touchstart mouseenter', this.onMouseMove);
        }
    }
    private findTarget(): HTMLElement {
        const target: HTMLElement = document.querySelector('[data-tooltip-id= ' + this.ctrlId + '_content]') as HTMLElement;
        return target;
    }
    /**
     * Core method to return the component name.
     *
     * @private
     *
     * @returns {string} - this method returns module name.
     */
    public getModuleName(): string {
        return 'tooltip';
    }
    /**
     * Returns the properties to be maintained in the persisted state.
     *
     * @private
     *
     * @returns {string} - this method returns persisted data.
     */
    protected getPersistData(): string {
        return this.addOnPersist([]);
    }
    /**
     * Called internally, if any of the property value changed.
     *
     * @private
     *
     * @param {TooltipModel} newProp - this param gives new property values to the method
     * @param {TooltipModel} oldProp - this param gives old property values to the method
     * @returns {void}
     *
     */
    public onPropertyChanged(newProp: TooltipModel, oldProp: TooltipModel): void {
        const targetElement: HTMLElement = this.findTarget();
        for (const prop of Object.keys(newProp)) {
            switch (prop) {
            case 'width':
                if (this.tooltipEle && targetElement) {
                    this.tooltipEle.style.width = this.tooltipEle.style.maxWidth = formatUnit(newProp.width);
                    this.reposition(targetElement);
                }
                break;
            case 'height':
                if (this.tooltipEle && targetElement) {
                    this.tooltipEle.style.height = formatUnit(newProp.height);
                    this.reposition(targetElement);
                }
                break;
            case 'content':
                if (this.tooltipEle) {
                    this.renderContent();
                }
                break;
            case 'opensOn':
                this.unwireEvents(oldProp.opensOn);
                this.wireEvents(newProp.opensOn);
                break;
            case 'position':
                this.formatPosition();
                if (this.tooltipEle && targetElement) {
                    const arrowInnerELe: HTMLElement = this.tooltipEle.querySelector('.' + ARROW_TIP_INNER) as HTMLElement;
                    arrowInnerELe.style.top = arrowInnerELe.style.left = null;
                    this.reposition(targetElement);
                }
                break;
            case 'tipPointerPosition':
                if (this.tooltipEle && targetElement) {
                    this.reposition(targetElement);
                }
                break;
            case 'offsetX':
                if (this.tooltipEle) {
                    const x: number = newProp.offsetX - oldProp.offsetX;
                    this.tooltipEle.style.left = (parseInt(this.tooltipEle.style.left, 10) + (x)).toString() + 'px';
                }
                break;
            case 'offsetY':
                if (this.tooltipEle) {
                    const y: number = newProp.offsetY - oldProp.offsetY;
                    this.tooltipEle.style.top = (parseInt(this.tooltipEle.style.top, 10) + (y)).toString() + 'px';
                }
                break;
            case 'cssClass':
                if (this.tooltipEle) {
                    if (oldProp.cssClass) { removeClass([this.tooltipEle], oldProp.cssClass.split(' ')); }
                    if (newProp.cssClass) { addClass([this.tooltipEle], newProp.cssClass.split(' ')); }
                }
                break;
            case 'enableRtl':
                if (this.tooltipEle) {
                    if (this.enableRtl) {
                        addClass([this.tooltipEle], RTL);
                    } else {
                        removeClass([this.tooltipEle], RTL);
                    }
                }
                break;
            }
        }
    }
    /**
     * It is used to show the Tooltip on the specified target with specific animation settings.
     *
     * @param {HTMLElement} element - Target element where the Tooltip is to be displayed. (It is an optional parameter)
     * @param {TooltipAnimationSettings} animation - Sets the specific animation, while showing the Tooltip on the screen. (It is an optional parameter)
     * @returns {void}
     */
    public open(element?: HTMLElement, animation?: TooltipAnimationSettings): void {
        if (isNullOrUndefined(animation)) { animation = this.animation.open; }
        if (isNullOrUndefined(element)) { element = this.element; }
        if (element.style.display === 'none') { return; }
        this.showTooltip(element, animation);
    }
    /**
     * It is used to hide the Tooltip with specific animation effect.
     *
     * @param {TooltipAnimationSettings} animation - Sets the specific animation when hiding Tooltip from the screen. (It is an optional parameter)
     * @returns {void}
     */
    public close(animation?: TooltipAnimationSettings): void {
        if (!animation) { animation = this.animation.close; }
        this.hideTooltip(animation);
    }
    /**
     * It is used to refresh the Tooltip content and its position.
     *
     * @param {HTMLElement} target - Target element where the Tooltip content or position needs to be refreshed.
     * @returns {void}
     */
    public refresh(target?: HTMLElement): void {
        if (this.tooltipEle) { this.renderContent(target); }
        if (this.popupObj && target) {
            this.reposition(target);
        }
    }
    /**
     * It is used to destroy the Tooltip component.
     * @method destroy
     * @returns {void}
     * @memberof Tooltip
     */
    public destroy(): void {
        super.destroy();
        if (this.tooltipEle) { remove(this.tooltipEle); }
        if (this.popupObj) { this.popupObj.destroy(); }
        removeClass([this.element], ROOT);
        this.unwireEvents(this.opensOn);
        this.unwireMouseEvents(this.element);
        this.tooltipEle = null;
        this.popupObj = null;
    }
}
