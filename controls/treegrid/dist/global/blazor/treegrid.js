window.sf = window.sf || {};
var sftreegrid = (function (exports) {
'use strict';

/**
 * Represents TreeGrid `Column` model class.
 */
var Column = /** @class */ (function () {
    function Column(options) {
        /**
         * If `allowEditing` set to false, then it disables editing of a particular column.
         * By default all columns are editable.
         * @default true
         */
        this.allowEditing = true;
        /**
         * Defines the `IEditCell` object to customize default edit cell.
         * @default {}
         */
        this.edit = {};
        /**
         * If `disableHtmlEncode` is set to true, it encodes the HTML of the header and content cells.
         * @default true
         */
        this.disableHtmlEncode = true;
        /**
         * If `allowReordering` set to false, then it disables reorder of a particular column.
         * By default all columns can be reorder.
         * @default true
         */
        this.allowReordering = true;
        /**
         * If `showColumnMenu` set to false, then it disable the column menu of a particular column.
         * By default column menu will show for all columns
         * @default true
         */
        this.showColumnMenu = true;
        /**
         * If `allowFiltering` set to false, then it disables filtering option and filter bar element of a particular column.
         * By default all columns are filterable.
         * @default true
         */
        this.allowFiltering = true;
        /**
         * If `allowSorting` set to false, then it disables sorting option of a particular column.
         * By default all columns are sortable.
         * @default true
         */
        this.allowSorting = true;
        /**
         * If `allowResizing` is set to false, it disables resize option of a particular column.
         * By default all the columns can be resized.
         * @default true
         */
        this.allowResizing = true;
        /**
         *  It is used to customize the default filter options for a specific columns.
         * * type -  Specifies the filter type as menu.
         * * ui - to render custom component for specific column it has following functions.
         * * ui.create – It is used for creating custom components.
         * * ui.read -  It is used for read the value from the component.
         * * ui.write - It is used to apply component model as dynamically.
         *
         *  @default null
         */
        this.filter = {};
        sf.base.merge(this, options);
    }
    return Column;
}());

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Represents the predicate for the filter column.
 */
var Predicate$1 = /** @class */ (function (_super) {
    __extends$1(Predicate$$1, _super);
    function Predicate$$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$1([
        sf.base.Property()
    ], Predicate$$1.prototype, "field", void 0);
    __decorate$1([
        sf.base.Property()
    ], Predicate$$1.prototype, "operator", void 0);
    __decorate$1([
        sf.base.Property()
    ], Predicate$$1.prototype, "value", void 0);
    __decorate$1([
        sf.base.Property()
    ], Predicate$$1.prototype, "matchCase", void 0);
    __decorate$1([
        sf.base.Property()
    ], Predicate$$1.prototype, "ignoreAccent", void 0);
    __decorate$1([
        sf.base.Property()
    ], Predicate$$1.prototype, "predicate", void 0);
    __decorate$1([
        sf.base.Property({})
    ], Predicate$$1.prototype, "actualFilterValue", void 0);
    __decorate$1([
        sf.base.Property({})
    ], Predicate$$1.prototype, "actualOperator", void 0);
    __decorate$1([
        sf.base.Property()
    ], Predicate$$1.prototype, "type", void 0);
    __decorate$1([
        sf.base.Property()
    ], Predicate$$1.prototype, "ejpredicate", void 0);
    __decorate$1([
        sf.base.Property()
    ], Predicate$$1.prototype, "uid", void 0);
    __decorate$1([
        sf.base.Property()
    ], Predicate$$1.prototype, "isForeignKey", void 0);
    return Predicate$$1;
}(sf.base.ChildProperty));
/**
 * Configures the filtering behavior of the TreeGrid.
 */
var FilterSettings = /** @class */ (function (_super) {
    __extends$1(FilterSettings, _super);
    function FilterSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$1([
        sf.base.Collection([], Predicate$1)
    ], FilterSettings.prototype, "columns", void 0);
    __decorate$1([
        sf.base.Property('FilterBar')
    ], FilterSettings.prototype, "type", void 0);
    __decorate$1([
        sf.base.Property()
    ], FilterSettings.prototype, "mode", void 0);
    __decorate$1([
        sf.base.Property(true)
    ], FilterSettings.prototype, "showFilterBarStatus", void 0);
    __decorate$1([
        sf.base.Property(1500)
    ], FilterSettings.prototype, "immediateModeDelay", void 0);
    __decorate$1([
        sf.base.Property()
    ], FilterSettings.prototype, "operators", void 0);
    __decorate$1([
        sf.base.Property(false)
    ], FilterSettings.prototype, "ignoreAccent", void 0);
    __decorate$1([
        sf.base.Property('Parent')
    ], FilterSettings.prototype, "hierarchyMode", void 0);
    return FilterSettings;
}(sf.base.ChildProperty));

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the textwrap behavior of the TreeGrid.
 */
var TextWrapSettings = /** @class */ (function (_super) {
    __extends$2(TextWrapSettings, _super);
    function TextWrapSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        sf.base.Property('Both')
    ], TextWrapSettings.prototype, "wrapMode", void 0);
    return TextWrapSettings;
}(sf.base.ChildProperty));

/**
 *  @hidden
 */
var load = 'load';
/** @hidden */
var rowDataBound = 'rowDataBound';
/** @hidden */
var dataBound = 'dataBound';
/** @hidden */
var queryCellInfo = 'queryCellInfo';
/** @hidden */
var beforeDataBound = 'beforeDataBound';
/** @hidden */
var actionBegin = 'actionBegin';
/** @hidden */
var dataStateChange = 'dataStateChange';
/** @hidden */
var actionComplete = 'actionComplete';
/** @hidden */
var rowSelecting = 'rowSelecting';
/** @hidden */
var rowSelected = 'rowSelected';
/** @hidden */
var checkboxChange = 'checkboxChange';
/** @hidden */
var rowDeselected = 'rowDeselected';
/** @hidden */
var toolbarClick = 'toolbarClick';
/** @hidden */
var beforeExcelExport = 'beforeExcelExport';
/** @hidden */
var beforePdfExport = 'beforePdfExport';
/** @hidden */
var resizeStop = 'resizeStop';
/** @hidden */
var expanded = 'expanded';
/** @hidden */
var expanding = 'expanding';
/** @hidden */
var collapsed = 'collapsed';
/** @hidden */
var collapsing = 'collapsing';
/** @hidden */
var remoteExpand = 'remoteExpand';
/** @hidden */
var localPagedExpandCollapse = 'localPagedExpandCollapse';
/** @hidden */
var pagingActions = 'pagingActions';
/** @hidden */
var printGridInit = 'printGrid-Init';
/** @hidden */
var contextMenuOpen = 'contextMenuOpen';
/** @hidden */
var contextMenuClick = 'contextMenuClick';
/** @hidden */
var beforeCopy = 'beforeCopy';
/** @hidden */
var beforePaste = 'beforePaste';
/** @hidden */
var savePreviousRowPosition = 'savePreviousRowPosition';
/** @hidden */
var crudAction = 'crudAction';
/** @hidden */
var beginEdit = 'beginEdit';
/** @hidden */
var beginAdd = 'beginAdd';
/** @hidden */
var recordDoubleClick = 'recordDoubleClick';
/** @hidden */
var cellSave = 'cellSave';
/** @hidden */
var cellSaved = 'cellSaved';
/** @hidden */
var cellEdit = 'cellEdit';
/** @hidden */
var batchDelete = 'batchDelete';
/** @hidden */
var batchCancel = 'batchCancel';
/** @hidden */
var batchAdd = 'batchAdd';
/** @hidden */
var beforeBatchDelete = 'beforeBatchDelete';
/** @hidden */
var beforeBatchAdd = 'beforeBatchAdd';
/** @hidden */
var beforeBatchSave = 'beforeBatchSave';
/** @hidden */
var batchSave = 'batchSave';
/** @hidden */
var keyPressed = 'key-pressed';
/** @hidden */
var updateData = 'update-data';
/** @hidden */
var doubleTap = 'double-tap';
/** @hidden */
var virtualColumnIndex = 'virtualColumnIndex';
/** @hidden */
var virtualActionArgs = 'virtual-action-args';
/** @hidden */
var dataListener = 'data-listener';
/** @hidden */
var indexModifier = 'index-modifier';
/** @hidden */
var beforeStartEdit = 'edit-form';
/** @hidden */
var beforeBatchCancel = 'before-batch-cancel';
/** @hidden */
var batchEditFormRendered = 'batcheditform-rendered';
/** @hidden */
var detailDataBound = 'detailDataBound';
/** @hidden */
var rowDrag = 'rowDrag';
/** @hidden */
var rowDragStartHelper = 'rowDragStartHelper';
/** @hidden */
var rowDrop = 'rowDrop';
/** @hidden */
var rowDragStart = 'rowDragStart';
/** @hidden */
var rowsAdd = 'rows-add';
/** @hidden */
var rowsRemove = 'rows-remove';
/** @hidden */
var rowdraging = 'row-draging';
/** @hidden */
var rowDropped = 'row-dropped';

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * The `Clipboard` module is used to handle clipboard copy action.
 */
var TreeClipboard = /** @class */ (function (_super) {
    __extends$3(TreeClipboard, _super);
    function TreeClipboard(parent) {
        var _this = _super.call(this, parent.grid) || this;
        _this.treeCopyContent = '';
        _this.copiedUniqueIdCollection = [];
        _this.treeGridParent = parent;
        return _this;
    }
    TreeClipboard.prototype.setCopyData = function (withHeader) {
        var copyContent = 'copyContent';
        var getCopyData = 'getCopyData';
        var isSelect = 'isSelect';
        var uniqueID = 'uniqueID';
        var currentRecords = this.treeGridParent.getCurrentViewRecords();
        if (window.getSelection().toString() === '') {
            this.clipBoardTextArea.value = this[copyContent] = '';
            var rows = this.treeGridParent.grid.getRows();
            if (this.treeGridParent.selectionSettings.mode !== 'Cell') {
                var selectedIndexes = this.treeGridParent.getSelectedRowIndexes().sort(function (a, b) {
                    return a - b;
                });
                for (var i = 0; i < selectedIndexes.length; i++) {
                    if (i > 0) {
                        this.treeCopyContent += '\n';
                    }
                    if (!rows[selectedIndexes[i]].classList.contains('e-summaryrow')) {
                        var cells = [].slice.call(rows[selectedIndexes[i]].querySelectorAll('.e-rowcell'));
                        var uniqueid = this.treeGridParent.getSelectedRecords()[i][uniqueID];
                        if (this.copiedUniqueIdCollection.indexOf(uniqueid) === -1) {
                            if (this.treeGridParent.copyHierarchyMode === 'Parent' || this.treeGridParent.copyHierarchyMode === 'Both') {
                                this.parentContentData(currentRecords, selectedIndexes[i], rows, withHeader, i);
                            }
                            this[getCopyData](cells, false, '\t', withHeader);
                            this.treeCopyContent += this[copyContent];
                            this.copiedUniqueIdCollection.push(uniqueid);
                            this[copyContent] = '';
                            if (this.treeGridParent.copyHierarchyMode === 'Child' || this.treeGridParent.copyHierarchyMode === 'Both') {
                                this.childContentData(currentRecords, selectedIndexes[i], rows, withHeader);
                            }
                        }
                    }
                }
                if (withHeader) {
                    var headerTextArray = [];
                    for (var i = 0; i < this.treeGridParent.getVisibleColumns().length; i++) {
                        headerTextArray[i] = this.treeGridParent.getVisibleColumns()[i].headerText;
                    }
                    this[getCopyData](headerTextArray, false, '\t', withHeader);
                    this.treeCopyContent = this[copyContent] + '\n' + this.treeCopyContent;
                }
                var args = {
                    data: this.treeCopyContent,
                    cancel: false,
                };
                this.treeGridParent.trigger(beforeCopy, args);
                if (args.cancel) {
                    return;
                }
                this.clipBoardTextArea.value = this[copyContent] = args.data;
                if (!sf.base.Browser.userAgent.match(/ipad|ipod|iphone/i)) {
                    this.clipBoardTextArea.select();
                }
                else {
                    this.clipBoardTextArea.setSelectionRange(0, this.clipBoardTextArea.value.length);
                }
                this[isSelect] = true;
                this.copiedUniqueIdCollection = [];
                this.treeCopyContent = '';
            }
            else {
                _super.prototype.setCopyData.call(this, withHeader);
            }
        }
    };
    TreeClipboard.prototype.parentContentData = function (currentRecords, selectedIndex, rows, withHeader, index) {
        var getCopyData = 'getCopyData';
        var copyContent = 'copyContent';
        var parentItem = 'parentItem';
        var uniqueID = 'uniqueID';
        var level = 'level';
        if (!sf.base.isNullOrUndefined(currentRecords[selectedIndex][parentItem])) {
            var treeLevel = currentRecords[selectedIndex][parentItem][level];
            for (var i = 0; i < treeLevel + 1; i++) {
                for (var j = 0; j < currentRecords.length; j++) {
                    if (!sf.base.isNullOrUndefined(currentRecords[selectedIndex][parentItem]) &&
                        currentRecords[j][uniqueID] === currentRecords[selectedIndex][parentItem][uniqueID]) {
                        selectedIndex = j;
                        var cells = [].slice.call(rows[selectedIndex].querySelectorAll('.e-rowcell'));
                        var uniqueid = currentRecords[j][uniqueID];
                        if (this.copiedUniqueIdCollection.indexOf(uniqueid) === -1) {
                            this[getCopyData](cells, false, '\t', withHeader);
                            if (index > 0) {
                                this.treeCopyContent = this.treeCopyContent + this[copyContent] + '\n';
                            }
                            else {
                                this.treeCopyContent = this[copyContent] + '\n' + this.treeCopyContent;
                            }
                            this.copiedUniqueIdCollection.push(uniqueid);
                            this[copyContent] = '';
                            break;
                        }
                    }
                }
            }
        }
    };
    TreeClipboard.prototype.copy = function (withHeader) {
        _super.prototype.copy.call(this, withHeader);
    };
    TreeClipboard.prototype.paste = function (data, rowIndex, colIndex) {
        _super.prototype.paste.call(this, data, rowIndex, colIndex);
    };
    /**
     * For internal use only - Get the module name.
     * @private
     */
    TreeClipboard.prototype.getModuleName = function () {
        return 'clipboard';
    };
    
    /**
     * To destroy the clipboard
     * @return {void}
     * @hidden
     */
    TreeClipboard.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    TreeClipboard.prototype.childContentData = function (currentRecords, selectedIndex, rows, withHeader) {
        var getCopyData = 'getCopyData';
        var copyContent = 'copyContent';
        var childRecords = 'childRecords';
        var hasChildRecords = 'hasChildRecords';
        var uniqueID = 'uniqueID';
        if (currentRecords[selectedIndex][hasChildRecords]) {
            var childData = currentRecords[selectedIndex][childRecords];
            for (var i = 0; i < childData.length; i++) {
                for (var j = 0; j < currentRecords.length; j++) {
                    if (!sf.base.isNullOrUndefined(childData[i][uniqueID]) && currentRecords[j][uniqueID] === childData[i][uniqueID]) {
                        if ((!sf.base.isNullOrUndefined(rows[j])) && !rows[j].classList.contains('e-summaryrow')) {
                            var cells = [].slice.call(rows[j].querySelectorAll('.e-rowcell'));
                            var uniqueid = currentRecords[j][uniqueID];
                            if (this.copiedUniqueIdCollection.indexOf(uniqueid) === -1) {
                                this[getCopyData](cells, false, '\t', withHeader);
                                this.treeCopyContent += ('\n' + this[copyContent]);
                                this[copyContent] = '';
                                this.copiedUniqueIdCollection.push(uniqueid);
                                this.childContentData(currentRecords, j, rows, withHeader);
                            }
                        }
                        break;
                    }
                }
            }
        }
    };
    return TreeClipboard;
}(sf.grids.Clipboard));

function isRemoteData(parent) {
    if (parent.dataSource instanceof sf.data.DataManager) {
        var adaptor = parent.dataSource.adaptor;
        return (adaptor instanceof sf.data.ODataAdaptor ||
            (adaptor instanceof sf.data.WebApiAdaptor) || (adaptor instanceof sf.data.WebMethodAdaptor) ||
            (adaptor instanceof sf.data.CacheAdaptor) || adaptor instanceof sf.data.UrlAdaptor);
    }
    return false;
}
function isCountRequired(parent) {
    if (parent.dataSource && 'result' in parent.dataSource) {
        return true;
    }
    return false;
}
function isCheckboxcolumn(parent) {
    for (var i = 0; i < parent.columns.length; i++) {
        if (parent.columns[i].showCheckbox) {
            return true;
        }
    }
    return false;
}
function isFilterChildHierarchy(parent) {
    if ((!sf.base.isNullOrUndefined(parent.grid.searchSettings.key) && parent.grid.searchSettings.key !== '' &&
        (parent.searchSettings.hierarchyMode === 'Child' || parent.searchSettings.hierarchyMode === 'None')) ||
        (parent.allowFiltering && parent.grid.filterSettings.columns.length &&
            (parent.filterSettings.hierarchyMode === 'Child' || parent.filterSettings.hierarchyMode === 'None'))) {
        return true;
    }
    return false;
}
/**
 * @hidden
 */
function findParentRecords(records) {
    var datas;
    datas = [];
    var recordsLength = Object.keys(records).length;
    for (var i = 0, len = recordsLength; i < len; i++) {
        var hasChild = sf.grids.getObject('hasChildRecords', records[i]);
        if (hasChild) {
            datas.push(records[i]);
        }
    }
    return datas;
}
/**
 * @hidden
 */
function getExpandStatus(parent, record, parents) {
    var parentRecord = sf.base.isNullOrUndefined(record.parentItem) ? null :
        getParentData(parent, record.parentItem.uniqueID);
    var childParent;
    if (parentRecord != null) {
        if (parent.initialRender && !sf.base.isNullOrUndefined(parentRecord[parent.expandStateMapping])
            && !parentRecord[parent.expandStateMapping]) {
            parentRecord.expanded = false;
            return false;
        }
        else if (parentRecord.expanded === false) {
            return false;
        }
        else if (parentRecord.parentItem) {
            childParent = getParentData(parent, parentRecord.parentItem.uniqueID);
            if (childParent && parent.initialRender && !sf.base.isNullOrUndefined(childParent[parent.expandStateMapping])
                && !childParent[parent.expandStateMapping]) {
                childParent.expanded = false;
                return false;
            }
            if (childParent && childParent.expanded === false) {
                return false;
            }
            else if (childParent) {
                return getExpandStatus(parent, childParent, parents);
            }
            return true;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}
/**
 * @hidden
 */
function findChildrenRecords(records) {
    var datas = [];
    if (sf.base.isNullOrUndefined(records) || (!records.hasChildRecords && !sf.base.isNullOrUndefined(records.childRecords)
        && !records.childRecords.length)) {
        return [];
    }
    if (!sf.base.isNullOrUndefined(records.childRecords)) {
        var childRecords = records.childRecords;
        for (var i = 0, len = Object.keys(childRecords).length; i < len; i++) {
            datas.push(childRecords[i]);
            if (childRecords[i].hasChildRecords || (!sf.base.isNullOrUndefined(childRecords[i].childRecords) &&
                childRecords[i].childRecords.length)) {
                datas = datas.concat(findChildrenRecords(childRecords[i]));
            }
        }
    }
    return datas;
}
function isOffline(parent) {
    if (isRemoteData(parent)) {
        var dm = parent.dataSource;
        return !sf.base.isNullOrUndefined(dm.ready);
    }
    return true;
}
function extendArray(array) {
    var objArr = [];
    var obj;
    var keys;
    for (var i = 0; array && i < array.length; i++) {
        keys = Object.keys(array[i]);
        obj = {};
        for (var j = 0; j < keys.length; j++) {
            obj[keys[j]] = array[i][keys[j]];
        }
        objArr.push(obj);
    }
    return objArr;
}
function getPlainData(value) {
    delete value.hasChildRecords;
    delete value.childRecords;
    delete value.index;
    delete value.parentItem;
    delete value.level;
    return value;
}
function getParentData(parent, value, requireFilter) {
    if (requireFilter) {
        var idFilter = 'uniqueIDFilterCollection';
        return parent[idFilter][value];
    }
    else {
        var id = 'uniqueIDCollection';
        return parent[id][value];
    }
}
function isHidden(el) {
    var style = window.getComputedStyle(el);
    return ((style.display === 'none') || (style.visibility === 'hidden'));
}

/**
 * TreeGrid Selection module
 * @hidden
 */
var Selection = /** @class */ (function () {
    /**
     * Constructor for Selection module
     */
    function Selection(parent) {
        this.parent = parent;
        this.selectedItems = [];
        this.selectedIndexes = [];
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    Selection.prototype.getModuleName = function () {
        return 'selection';
    };
    Selection.prototype.addEventListener = function () {
        this.parent.on('dataBoundArg', this.headerCheckbox, this);
        this.parent.on('columnCheckbox', this.columnCheckbox, this);
        this.parent.on('updateGridActions', this.updateGridActions, this);
        this.parent.grid.on('colgroup-refresh', this.headerCheckbox, this);
        this.parent.on('checkboxSelection', this.checkboxSelection, this);
    };
    Selection.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('dataBoundArg', this.headerCheckbox);
        this.parent.off('columnCheckbox', this.columnCheckbox);
        this.parent.grid.off('colgroup-refresh', this.headerCheckbox);
        this.parent.off('checkboxSelection', this.checkboxSelection);
        this.parent.off('updateGridActions', this.updateGridActions);
    };
    /**
     * To destroy the Selection
     * @return {void}
     * @hidden
     */
    Selection.prototype.destroy = function () {
        this.removeEventListener();
    };
    Selection.prototype.checkboxSelection = function (args) {
        var target = sf.grids.getObject('target', args);
        var checkWrap = sf.grids.parentsUntil(target, 'e-checkbox-wrapper');
        var checkBox;
        if (checkWrap && checkWrap.querySelectorAll('.e-treecheckselect').length > 0) {
            checkBox = checkWrap.querySelector('input[type="checkbox"]');
            var rowIndex = void 0;
            rowIndex = [];
            rowIndex.push(target.closest('tr').rowIndex);
            this.selectCheckboxes(rowIndex);
            this.triggerChkChangeEvent(checkBox, checkBox.nextElementSibling.classList.contains('e-check'), target.closest('tr'));
        }
        else if (checkWrap && checkWrap.querySelectorAll('.e-treeselectall').length > 0 && this.parent.autoCheckHierarchy) {
            var checkBoxvalue = !checkWrap.querySelector('.e-frame').classList.contains('e-check')
                && !checkWrap.querySelector('.e-frame').classList.contains('e-stop');
            this.headerSelection(checkBoxvalue);
            checkBox = checkWrap.querySelector('input[type="checkbox"]');
            this.triggerChkChangeEvent(checkBox, checkBoxvalue, target.closest('tr'));
        }
    };
    Selection.prototype.triggerChkChangeEvent = function (checkBox, checkState, rowElement) {
        var data = this.parent.getCurrentViewRecords()[rowElement.rowIndex];
        var args = { checked: checkState, target: checkBox, rowElement: rowElement,
            rowData: checkBox.classList.contains('e-treeselectall')
                ? this.parent.getCheckedRecords() : data };
        this.parent.trigger(checkboxChange, args);
    };
    Selection.prototype.getCheckboxcolumnIndex = function () {
        var mappingUid;
        var columnIndex;
        var columns = (this.parent.columns);
        for (var col = 0; col < columns.length; col++) {
            if (columns[col].showCheckbox) {
                mappingUid = this.parent.columns[col].uid;
            }
        }
        var headerCelllength = this.parent.getHeaderContent().querySelectorAll('.e-headercelldiv').length;
        for (var j = 0; j < headerCelllength; j++) {
            var headercell = this.parent.getHeaderContent().querySelectorAll('.e-headercelldiv')[j];
            if (headercell.getAttribute('e-mappinguid') === mappingUid) {
                columnIndex = j;
            }
        }
        return columnIndex;
    };
    Selection.prototype.headerCheckbox = function () {
        this.columnIndex = this.getCheckboxcolumnIndex();
        if (this.columnIndex > -1 && this.parent.getHeaderContent().querySelectorAll('.e-treeselectall').length === 0) {
            var headerElement = this.parent.getHeaderContent().querySelectorAll('.e-headercelldiv')[this.columnIndex];
            var checkWrap = void 0;
            var value = false;
            var rowChkBox = this.parent.createElement('input', { className: 'e-treeselectall', attrs: { 'type': 'checkbox' } });
            checkWrap = sf.buttons.createCheckBox(this.parent.createElement, false, { checked: value, label: ' ' });
            checkWrap.classList.add('e-hierarchycheckbox');
            checkWrap.querySelector('.e-frame').style.width = '18px';
            checkWrap.insertBefore(rowChkBox.cloneNode(), checkWrap.firstChild);
            if (!sf.base.isNullOrUndefined(headerElement)) {
                headerElement.insertBefore(checkWrap, headerElement.firstChild);
            }
            if (this.parent.autoCheckHierarchy) {
                this.headerSelection();
            }
        }
        else if (this.columnIndex > -1 && this.parent.getHeaderContent().querySelectorAll('.e-treeselectall').length > 0) {
            var checkWrap = this.parent.getHeaderContent().querySelectorAll('.e-checkbox-wrapper')[0];
            var checkBoxvalue = checkWrap.querySelector('.e-frame').classList.contains('e-check');
            if (this.parent.autoCheckHierarchy && checkBoxvalue) {
                this.headerSelection(checkBoxvalue);
            }
        }
    };
    Selection.prototype.renderColumnCheckbox = function (args) {
        var checkWrap;
        var rowChkBox = this.parent.createElement('input', { className: 'e-treecheckselect', attrs: { 'type': 'checkbox' } });
        var data = args.data;
        args.cell.classList.add('e-treegridcheckbox');
        args.cell.setAttribute('aria-label', 'checkbox');
        var value = (sf.base.isNullOrUndefined(data.checkboxState) || data.checkboxState === 'uncheck') ? false : true;
        checkWrap = sf.buttons.createCheckBox(this.parent.createElement, false, { checked: value, label: ' ' });
        checkWrap.classList.add('e-hierarchycheckbox');
        checkWrap.querySelector('.e-frame').style.width = '18px';
        if (data.checkboxState === 'indeterminate') {
            var checkbox = checkWrap.querySelectorAll('.e-frame')[0];
            sf.base.removeClass([checkbox], ['e-check', 'e-stop', 'e-uncheck']);
            checkWrap.querySelector('.e-frame').classList.add('e-stop');
        }
        checkWrap.insertBefore(rowChkBox.cloneNode(), checkWrap.firstChild);
        return checkWrap;
    };
    Selection.prototype.columnCheckbox = function (container) {
        var checkWrap = this.renderColumnCheckbox(container);
        var containerELe = container.cell.querySelector('.e-treecolumn-container');
        if (!sf.base.isNullOrUndefined(containerELe)) {
            if (!container.cell.querySelector('.e-hierarchycheckbox')) {
                containerELe.insertBefore(checkWrap, containerELe.querySelectorAll('.e-treecell')[0]);
            }
        }
        else {
            var spanEle = this.parent.createElement('span', { className: 'e-treecheckbox' });
            var data = container.cell.innerHTML;
            container.cell.innerHTML = '';
            spanEle.innerHTML = data;
            var divEle = this.parent.createElement('div', { className: 'e-treecheckbox-container' });
            divEle.appendChild(checkWrap);
            divEle.appendChild(spanEle);
            container.cell.appendChild(divEle);
        }
    };
    Selection.prototype.selectCheckboxes = function (rowIndexes) {
        var adaptorName = 'adaptorName';
        for (var i = 0; i < rowIndexes.length; i++) {
            var record = this.parent.getCurrentViewRecords()[rowIndexes[i]];
            var flatRecord = getParentData(this.parent, record.uniqueID);
            record = (sf.base.isBlazor() && this.parent.dataSource[adaptorName] === 'BlazorAdaptor') ?
                record : flatRecord;
            var checkboxState = (record.checkboxState === 'uncheck') ? 'check' : 'uncheck';
            record.checkboxState = checkboxState;
            var keys = Object.keys(record);
            for (var j = 0; j < keys.length; j++) {
                if (flatRecord.hasOwnProperty(keys[j])) {
                    flatRecord[keys[j]] = record[keys[j]];
                }
            }
            this.traverSelection(record, checkboxState, false);
            if (this.parent.autoCheckHierarchy) {
                this.headerSelection();
            }
        }
    };
    Selection.prototype.traverSelection = function (record, checkboxState, ischildItem) {
        var length = 0;
        this.updateSelectedItems(record, checkboxState);
        if (!ischildItem && record.parentItem && this.parent.autoCheckHierarchy) {
            this.updateParentSelection(record.parentItem);
        }
        if (record.childRecords && this.parent.autoCheckHierarchy) {
            var childRecords = record.childRecords;
            if (!sf.base.isNullOrUndefined(this.parent.filterModule) &&
                this.parent.filterModule.filteredResult.length > 0 && this.parent.autoCheckHierarchy) {
                childRecords = this.getFilteredChildRecords(childRecords);
            }
            length = childRecords.length;
            for (var count = 0; count < length; count++) {
                if (!childRecords[count].isSummaryRow) {
                    if (childRecords[count].hasChildRecords) {
                        this.traverSelection(childRecords[count], checkboxState, true);
                    }
                    else {
                        this.updateSelectedItems(childRecords[count], checkboxState);
                    }
                }
            }
        }
    };
    Selection.prototype.getFilteredChildRecords = function (childRecords) {
        var _this = this;
        var filteredChildRecords = childRecords.filter(function (e) {
            return _this.parent.filterModule.filteredResult.indexOf(e) > -1;
        });
        return filteredChildRecords;
    };
    Selection.prototype.updateParentSelection = function (parentRecord) {
        var adaptorName = 'adaptorName';
        var length = 0;
        var childRecords = [];
        var record = getParentData(this.parent, parentRecord.uniqueID);
        if (record && record.childRecords) {
            childRecords = record.childRecords;
        }
        if (!sf.base.isNullOrUndefined(this.parent.filterModule) &&
            this.parent.filterModule.filteredResult.length > 0 && this.parent.autoCheckHierarchy) {
            childRecords = this.getFilteredChildRecords(childRecords);
        }
        length = childRecords && childRecords.length;
        var indeter = 0;
        var checkChildRecords = 0;
        if (!sf.base.isNullOrUndefined(record)) {
            var _loop_1 = function (i) {
                var childRecord = this_1.parent.getCurrentViewRecords().filter(function (e) {
                    return e.uniqueID === childRecords[i].uniqueID;
                });
                var currentRecord = getParentData(this_1.parent, childRecords[i].uniqueID);
                var checkBoxRecord = (sf.base.isBlazor() && this_1.parent.dataSource[adaptorName] === 'BlazorAdaptor') ?
                    childRecord[0] : currentRecord;
                if (!sf.base.isNullOrUndefined(checkBoxRecord)) {
                    if (checkBoxRecord.checkboxState === 'indeterminate') {
                        indeter++;
                    }
                    else if (checkBoxRecord.checkboxState === 'check') {
                        checkChildRecords++;
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < childRecords.length; i++) {
                _loop_1(i);
            }
            if (indeter > 0 || (checkChildRecords > 0 && checkChildRecords !== length)) {
                record.checkboxState = 'indeterminate';
            }
            else if (checkChildRecords === 0 && indeter === 0) {
                record.checkboxState = 'uncheck';
            }
            else {
                record.checkboxState = 'check';
            }
            this.updateSelectedItems(record, record.checkboxState);
            if (record.parentItem) {
                this.updateParentSelection(record.parentItem);
            }
        }
    };
    Selection.prototype.headerSelection = function (checkAll) {
        var _this = this;
        var adaptorName = 'adaptorName';
        var index = -1;
        var length = 0;
        var data = (!sf.base.isNullOrUndefined(this.parent.filterModule) &&
            this.parent.filterModule.filteredResult.length > 0) ? this.parent.filterModule.filteredResult :
            this.parent.flatData;
        data = (sf.base.isBlazor() && this.parent.dataSource[adaptorName] === 'BlazorAdaptor') || isRemoteData(this.parent) ?
            this.parent.getCurrentViewRecords() : data;
        if (!sf.base.isNullOrUndefined(checkAll)) {
            for (var i = 0; i < data.length; i++) {
                if (checkAll) {
                    if (data[i].checkboxState === 'check') {
                        continue;
                    }
                    data[i].checkboxState = 'check';
                    this.updateSelectedItems(data[i], data[i].checkboxState);
                }
                else {
                    index = this.selectedItems.indexOf(data[i]);
                    if (index > -1) {
                        data[i].checkboxState = 'uncheck';
                        this.updateSelectedItems(data[i], data[i].checkboxState);
                        if (this.parent.autoCheckHierarchy) {
                            this.updateParentSelection(data[i]);
                        }
                    }
                }
            }
        }
        if (checkAll === false && this.parent.enableVirtualization) {
            this.selectedItems = [];
            this.selectedIndexes = [];
            data.filter(function (rec) {
                rec.checkboxState = 'uncheck';
                _this.updateSelectedItems(rec, rec.checkboxState);
            });
        }
        length = this.selectedItems.length;
        var checkbox = this.parent.getHeaderContent().querySelectorAll('.e-frame')[0];
        if (length > 0 && data.length > 0) {
            if (length !== data.length && !checkAll) {
                sf.base.removeClass([checkbox], ['e-check']);
                checkbox.classList.add('e-stop');
            }
            else {
                sf.base.removeClass([checkbox], ['e-stop']);
                checkbox.classList.add('e-check');
            }
        }
        else {
            sf.base.removeClass([checkbox], ['e-check', 'e-stop']);
        }
    };
    Selection.prototype.updateSelectedItems = function (currentRecord, checkState, filter) {
        var record = this.parent.getCurrentViewRecords().filter(function (e) {
            return e.uniqueID === currentRecord.uniqueID;
        });
        var checkedRecord;
        var adaptorName = 'adaptorName';
        var recordIndex = this.parent.getCurrentViewRecords().indexOf(record[0]);
        var checkboxRecord = getParentData(this.parent, currentRecord.uniqueID);
        var checkbox;
        if (recordIndex > -1) {
            var tr = this.parent.getRows()[recordIndex];
            var movableTr = void 0;
            if (this.parent.frozenRows || this.parent.getFrozenColumns()) {
                movableTr = this.parent.getMovableDataRows()[recordIndex];
            }
            checkbox = tr.querySelectorAll('.e-frame')[0] ? tr.querySelectorAll('.e-frame')[0]
                : movableTr.querySelectorAll('.e-frame')[0];
            if (!sf.base.isNullOrUndefined(checkbox)) {
                sf.base.removeClass([checkbox], ['e-check', 'e-stop', 'e-uncheck']);
            }
        }
        checkedRecord = (sf.base.isBlazor() && this.parent.dataSource[adaptorName] === 'BlazorAdaptor') ?
            record[0] : checkboxRecord;
        if (sf.base.isNullOrUndefined(checkedRecord)) {
            checkedRecord = currentRecord;
        }
        checkedRecord.checkboxState = checkState;
        if (checkState === 'check' && sf.base.isNullOrUndefined(currentRecord.isSummaryRow)) {
            if (recordIndex !== -1 && this.selectedIndexes.indexOf(recordIndex) === -1) {
                this.selectedIndexes.push(recordIndex);
            }
            if (this.selectedItems.indexOf(checkedRecord) === -1 && (recordIndex !== -1 &&
                (!sf.base.isNullOrUndefined(this.parent.filterModule) && this.parent.filterModule.filteredResult.length > 0))) {
                this.selectedItems.push(checkedRecord);
            }
            if (this.selectedItems.indexOf(checkedRecord) === -1 && (!sf.base.isNullOrUndefined(this.parent.filterModule) &&
                this.parent.filterModule.filteredResult.length === 0)) {
                this.selectedItems.push(checkedRecord);
            }
            if (this.selectedItems.indexOf(checkedRecord) === -1 && sf.base.isNullOrUndefined(this.parent.filterModule)) {
                this.selectedItems.push(checkedRecord);
            }
        }
        else if ((checkState === 'uncheck' || checkState === 'indeterminate') && sf.base.isNullOrUndefined(currentRecord.isSummaryRow)) {
            var index = this.selectedItems.indexOf(checkedRecord);
            if (index !== -1) {
                this.selectedItems.splice(index, 1);
            }
            if (this.selectedIndexes.indexOf(recordIndex) !== -1) {
                var checkedIndex = this.selectedIndexes.indexOf(recordIndex);
                this.selectedIndexes.splice(checkedIndex, 1);
            }
        }
        var checkBoxclass = checkState === 'indeterminate' ? 'e-stop' : 'e-' + checkState;
        if (recordIndex > -1) {
            if (!sf.base.isNullOrUndefined(checkbox)) {
                checkbox.classList.add(checkBoxclass);
            }
        }
    };
    Selection.prototype.updateGridActions = function (args) {
        var _this = this;
        var requestType = args.requestType;
        var childData;
        var childLength;
        if (isCheckboxcolumn(this.parent)) {
            if (this.parent.autoCheckHierarchy) {
                if ((requestType === 'sorting' || requestType === 'paging')) {
                    var rows = this.parent.grid.getRows();
                    childData = this.parent.getCurrentViewRecords();
                    childLength = childData.length;
                    this.selectedIndexes = [];
                    for (var i = 0; i < childLength; i++) {
                        if (!rows[i].classList.contains('e-summaryrow')) {
                            this.updateSelectedItems(childData[i], childData[i].checkboxState, true);
                        }
                    }
                }
                else if (requestType === 'delete' || args.action === 'add') {
                    var updatedData = [];
                    if (requestType === 'delete') {
                        updatedData = args.data;
                    }
                    else {
                        updatedData.push(args.data);
                    }
                    for (var i = 0; i < updatedData.length; i++) {
                        if (requestType === 'delete') {
                            var index = this.parent.flatData.indexOf(updatedData[i]);
                            var checkedIndex = this.selectedIndexes.indexOf(index);
                            this.selectedIndexes.splice(checkedIndex, 1);
                            this.updateSelectedItems(updatedData[i], 'uncheck');
                        }
                        if (!sf.base.isNullOrUndefined(updatedData[i].parentItem)) {
                            this.updateParentSelection(updatedData[i].parentItem);
                        }
                    }
                }
                else if (args.requestType === 'add' && this.parent.autoCheckHierarchy) {
                    args.data.checkboxState = 'uncheck';
                }
                else if (requestType === 'filtering' || requestType === 'searching' || requestType === 'refresh'
                    && !isRemoteData(this.parent)) {
                    this.selectedItems = [];
                    this.selectedIndexes = [];
                    childData = (!sf.base.isNullOrUndefined(this.parent.filterModule) && this.parent.filterModule.filteredResult.length > 0) ?
                        this.parent.getCurrentViewRecords() : this.parent.flatData;
                    childData.forEach(function (record) {
                        if (record.hasChildRecords) {
                            _this.updateParentSelection(record);
                        }
                        else {
                            _this.updateSelectedItems(record, record.checkboxState);
                        }
                    });
                    this.headerSelection();
                }
            }
        }
    };
    Selection.prototype.getCheckedrecords = function () {
        return this.selectedItems;
    };
    Selection.prototype.getCheckedRowIndexes = function () {
        return this.selectedIndexes;
    };
    return Selection;
}());

/**
 * TreeGrid Print module
 * @hidden
 */
var Print$1 = /** @class */ (function () {
    /**
     * Constructor for Print module
     */
    function Print$$1(parent) {
        this.parent = parent;
        sf.grids.Grid.Inject(sf.grids.Print);
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    Print$$1.prototype.getModuleName = function () {
        return 'print';
    };
    /**
     * @hidden
     */
    Print$$1.prototype.addEventListener = function () {
        this.parent.grid.on(printGridInit, this.printTreeGrid, this);
    };
    Print$$1.prototype.removeEventListener = function () {
        this.parent.grid.off(printGridInit, this.printTreeGrid);
    };
    Print$$1.prototype.printTreeGrid = function (printGrid) {
        var grid = sf.grids.getObject('printgrid', printGrid);
        var gridElement = sf.grids.getObject('element', printGrid);
        grid.addEventListener(queryCellInfo, this.parent.grid.queryCellInfo);
        grid.addEventListener(rowDataBound, this.parent.grid.rowDataBound);
        grid.addEventListener(beforeDataBound, this.parent.grid.beforeDataBound);
        sf.base.addClass([gridElement], 'e-treegrid');
    };
    Print$$1.prototype.print = function () {
        this.parent.grid.print();
    };
    /**
     * To destroy the Print
     * @return {void}
     * @hidden
     */
    Print$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    return Print$$1;
}());

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the filtering behavior of the TreeGrid.
 */
var SearchSettings = /** @class */ (function (_super) {
    __extends$4(SearchSettings, _super);
    function SearchSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$3([
        sf.base.Property()
    ], SearchSettings.prototype, "fields", void 0);
    __decorate$3([
        sf.base.Property(false)
    ], SearchSettings.prototype, "ignoreCase", void 0);
    __decorate$3([
        sf.base.Property('contains')
    ], SearchSettings.prototype, "operator", void 0);
    __decorate$3([
        sf.base.Property()
    ], SearchSettings.prototype, "key", void 0);
    __decorate$3([
        sf.base.Property()
    ], SearchSettings.prototype, "hierarchyMode", void 0);
    return SearchSettings;
}(sf.base.ChildProperty));

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the selection behavior of the TreeGrid.
 */
var SelectionSettings = /** @class */ (function (_super) {
    __extends$5(SelectionSettings, _super);
    function SelectionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$4([
        sf.base.Property('Row')
    ], SelectionSettings.prototype, "mode", void 0);
    __decorate$4([
        sf.base.Property('Flow')
    ], SelectionSettings.prototype, "cellSelectionMode", void 0);
    __decorate$4([
        sf.base.Property('Single')
    ], SelectionSettings.prototype, "type", void 0);
    __decorate$4([
        sf.base.Property(false)
    ], SelectionSettings.prototype, "persistSelection", void 0);
    __decorate$4([
        sf.base.Property('Default')
    ], SelectionSettings.prototype, "checkboxMode", void 0);
    __decorate$4([
        sf.base.Property(false)
    ], SelectionSettings.prototype, "checkboxOnly", void 0);
    __decorate$4([
        sf.base.Property(true)
    ], SelectionSettings.prototype, "enableToggle", void 0);
    return SelectionSettings;
}(sf.base.ChildProperty));

/**
 * TreeGrid render module
 * @hidden
 */
var Render = /** @class */ (function () {
    /**
     * Constructor for render module
     */
    function Render(parent) {
        this.parent = parent;
        this.templateResult = null;
        this.parent.grid.on('template-result', this.columnTemplateResult, this);
    }
    /**
     * Updated row elements for TreeGrid
     */
    Render.prototype.RowModifier = function (args) {
        if (!args.data) {
            return;
        }
        var data = args.data;
        var parentData = data.parentItem;
        var index;
        if (!sf.base.isNullOrUndefined(data.parentItem) && !isFilterChildHierarchy(this.parent) &&
            (!(this.parent.allowPaging && !(this.parent.pageSettings.pageSizeMode === 'Root')) ||
                (isRemoteData(this.parent) && !isOffline(this.parent)))) {
            index = data.parentItem.index;
            var collapsed$$1 = (this.parent.initialRender && (!(sf.base.isNullOrUndefined(parentData[this.parent.expandStateMapping]) ||
                parentData[this.parent.expandStateMapping]) || this.parent.enableCollapseAll)) ||
                !getExpandStatus(this.parent, args.data, this.parent.grid.getCurrentViewRecords());
            if (collapsed$$1) {
                args.row.style.display = 'none';
            }
        }
        else {
            index = +args.row.getAttribute('aria-rowindex');
        }
        if (isRemoteData(this.parent) && !isOffline(this.parent)) {
            var proxy_1 = this.parent;
            var parentrec = this.parent.getCurrentViewRecords().filter(function (rec) {
                return sf.base.getValue(proxy_1.idMapping, rec) === sf.base.getValue(proxy_1.parentIdMapping, data);
            });
            if (parentrec.length > 0) {
                var display = parentrec[0].expanded ? 'table-row' : 'none';
                args.row.setAttribute('style', 'display: ' + display + ';');
            }
        }
        //addClass([args.row], 'e-gridrowindex' + index + 'level' + (<ITreeData>args.data).level);
        var summaryRow = sf.grids.getObject('isSummaryRow', args.data);
        if (summaryRow) {
            sf.base.addClass([args.row], 'e-summaryrow');
        }
        if (args.row.querySelector('.e-treegridexpand')) {
            args.row.setAttribute('aria-expanded', 'true');
        }
        else if (args.row.querySelector('.e-treegridcollapse')) {
            args.row.setAttribute('aria-expanded', 'false');
        }
        if (this.parent.enableCollapseAll && this.parent.initialRender) {
            if (!sf.base.isNullOrUndefined(data.parentItem)) {
                args.row.style.display = 'none';
            }
        }
        this.parent.trigger(rowDataBound, args);
    };
    /**
     * cell renderer for tree column index cell
     */
    Render.prototype.cellRender = function (args) {
        if (!args.data) {
            return;
        }
        var grid = this.parent.grid;
        var data = args.data;
        var index;
        var ispadfilter = sf.base.isNullOrUndefined(data.filterLevel);
        var pad = ispadfilter ? data.level : data.filterLevel;
        var totalIconsWidth = 0;
        var cellElement;
        var column = this.parent.getColumnByField(args.column.field);
        var summaryRow = data.isSummaryRow;
        if (!sf.base.isNullOrUndefined(data.parentItem)) {
            index = data.parentItem.index;
        }
        else {
            index = data.index;
        }
        if (grid.getColumnIndexByUid(args.column.uid) === this.parent.treeColumnIndex
            && (args.requestType === 'add' || args.requestType === 'delete' || sf.base.isNullOrUndefined(args.cell.querySelector('.e-treecell')))) {
            var container = sf.base.createElement('div', { className: 'e-treecolumn-container' });
            var emptyExpandIcon = sf.base.createElement('span', {
                className: 'e-icons e-none',
                styles: 'width: 10px; display: inline-block'
            });
            for (var n = 0; n < pad; n++) {
                totalIconsWidth += 10;
                container.appendChild(emptyExpandIcon.cloneNode());
            }
            var iconRequired = !sf.base.isNullOrUndefined(data.hasFilteredChildRecords)
                ? data.hasFilteredChildRecords : data.hasChildRecords;
            if (iconRequired && !sf.base.isNullOrUndefined(data.childRecords)) {
                iconRequired = !(data.childRecords.length === 0);
            }
            if (iconRequired) {
                sf.base.addClass([args.cell], 'e-treerowcell');
                var expandIcon = sf.base.createElement('span', { className: 'e-icons' });
                var expand = void 0;
                if (this.parent.initialRender) {
                    expand = data.expanded &&
                        (sf.base.isNullOrUndefined(data[this.parent.expandStateMapping]) || data[this.parent.expandStateMapping]) &&
                        !this.parent.enableCollapseAll;
                }
                else {
                    expand = !(!data.expanded || !getExpandStatus(this.parent, data, this.parent.grid.getCurrentViewRecords()));
                }
                var collapsed$$1 = true;
                if (!sf.base.isNullOrUndefined(data.parentItem) && (!sf.base.isNullOrUndefined(data[this.parent.expandStateMapping])
                    && data[this.parent.expandStateMapping])
                    && !(this.parent.allowPaging && !(this.parent.pageSettings.pageSizeMode === 'Root'))) {
                    collapsed$$1 = !getExpandStatus(this.parent, args.data, this.parent.grid.getCurrentViewRecords());
                }
                sf.base.addClass([expandIcon], (expand && collapsed$$1) ? 'e-treegridexpand' : 'e-treegridcollapse');
                totalIconsWidth += 18;
                container.appendChild(expandIcon);
                emptyExpandIcon.style.width = '7px';
                totalIconsWidth += 7;
                container.appendChild(emptyExpandIcon.cloneNode());
            }
            else if (pad || !pad && !data.level) {
                // icons width
                totalIconsWidth += 20;
                container.appendChild(emptyExpandIcon.cloneNode());
                container.appendChild(emptyExpandIcon.cloneNode());
            }
            //should add below code when paging funcitonality implemented
            // if (data.hasChildRecords) {
            //     addClass([expandIcon], data.expanded ? 'e-treegridexpand' : 'e-treegridcollapse');
            // }
            cellElement = sf.base.createElement('span', { className: 'e-treecell' });
            if (this.parent.allowTextWrap) {
                cellElement.style.width = 'Calc(100% - ' + totalIconsWidth + 'px)';
            }
            sf.base.addClass([args.cell], 'e-gridrowindex' + index + 'level' + data.level);
            this.updateTreeCell(args, cellElement, container);
            container.appendChild(cellElement);
            args.cell.appendChild(container);
        }
        if (this.parent.frozenColumns > this.parent.treeColumnIndex &&
            grid.getColumnIndexByUid(args.column.uid) === this.parent.frozenColumns + 1) {
            sf.base.addClass([args.cell], 'e-gridrowindex' + index + 'level' + data.level);
        }
        else if (this.parent.frozenColumns <= this.parent.treeColumnIndex &&
            grid.getColumnIndexByUid(args.column.uid) === this.parent.frozenColumns - 1) {
            sf.base.addClass([args.cell], 'e-gridrowindex' + index + 'level' + data.level);
        }
        if (!sf.base.isNullOrUndefined(column) && column.showCheckbox) {
            this.parent.notify('columnCheckbox', args);
            if (this.parent.allowTextWrap) {
                var checkboxElement = args.cell.querySelectorAll('.e-frame')[0];
                var width = parseInt(checkboxElement.style.width, 16);
                totalIconsWidth += width;
                totalIconsWidth += 10;
                if (grid.getColumnIndexByUid(args.column.uid) === this.parent.treeColumnIndex) {
                    cellElement = args.cell.querySelector('.e-treecell');
                }
                else {
                    cellElement = args.cell.querySelector('.e-treecheckbox');
                }
                cellElement.style.width = 'Calc(100% - ' + totalIconsWidth + 'px)';
            }
        }
        if (summaryRow) {
            sf.base.addClass([args.cell], 'e-summarycell');
            var summaryData = sf.grids.getObject(args.column.field, args.data);
            args.cell.querySelector('.e-treecell') != null ?
                args.cell.querySelector('.e-treecell').innerHTML = summaryData : args.cell.innerHTML = summaryData;
        }
        if (sf.base.isNullOrUndefined(this.parent.rowTemplate)) {
            this.parent.trigger(queryCellInfo, args);
        }
    };
    Render.prototype.updateTreeCell = function (args, cellElement, container) {
        var textContent = args.cell.querySelector('.e-treecell') != null ?
            args.cell.querySelector('.e-treecell').innerHTML : args.cell.innerHTML;
        if (typeof (args.column.template) === 'object' && this.templateResult) {
            sf.grids.appendChildren(cellElement, this.templateResult);
            this.templateResult = null;
            args.cell.innerHTML = '';
        }
        else if (args.cell.classList.contains('e-templatecell')) {
            var len = args.cell.children.length;
            for (var i = 0; i < len; len = args.cell.children.length) {
                cellElement.appendChild(args.cell.children[i]);
            }
        }
        else {
            cellElement.innerHTML = textContent;
            args.cell.innerHTML = '';
        }
    };
    Render.prototype.columnTemplateResult = function (args) {
        this.templateResult = args.template;
    };
    Render.prototype.destroy = function () {
        this.parent.grid.off('template-result', this.columnTemplateResult);
    };
    return Render;
}());

/**
 * Internal dataoperations for tree grid
 * @hidden
 */
var DataManipulation = /** @class */ (function () {
    function DataManipulation(grid) {
        this.addedRecords = 'addedRecords';
        this.parent = grid;
        this.parentItems = [];
        this.taskIds = [];
        this.hierarchyData = [];
        this.storedIndex = -1;
        this.sortedData = [];
        this.isSortAction = false;
        this.addEventListener();
        this.dataResults = {};
        this.isSelfReference = !sf.base.isNullOrUndefined(this.parent.parentIdMapping);
    }
    /**
     * @hidden
     */
    DataManipulation.prototype.addEventListener = function () {
        this.parent.on('updateRemoteLevel', this.updateParentRemoteData, this);
        this.parent.grid.on('sorting-begin', this.beginSorting, this);
        this.parent.on('updateAction', this.updateData, this);
        this.parent.on(remoteExpand, this.collectExpandingRecs, this);
        this.parent.on('dataProcessor', this.dataProcessor, this);
    };
    /**
     * @hidden
     */
    DataManipulation.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off(remoteExpand, this.collectExpandingRecs);
        this.parent.off('updateRemoteLevel', this.updateParentRemoteData);
        this.parent.off('updateAction', this.updateData);
        this.parent.off('dataProcessor', this.dataProcessor);
        this.parent.grid.off('sorting-begin', this.beginSorting);
    };
    /**
     * To destroy the dataModule
     * @return {void}
     * @hidden
     */
    DataManipulation.prototype.destroy = function () {
        this.removeEventListener();
    };
    /** @hidden */
    DataManipulation.prototype.isRemote = function () {
        if (!(this.parent.dataSource instanceof sf.data.DataManager)) {
            return false;
        }
        return true;
        // let gridData:  DataManager = <DataManager>this.parent.dataSource;
        // return gridData.dataSource.offline !== true && gridData.dataSource.url !== undefined;
    };
    /**
     * Function to manipulate datasource
     * @hidden
     */
    DataManipulation.prototype.convertToFlatData = function (data) {
        var _this = this;
        this.parent.flatData = (Object.keys(data).length === 0 && !(this.parent.dataSource instanceof sf.data.DataManager) ?
            this.parent.dataSource : []);
        this.parent.parentData = [];
        var adaptorName = 'adaptorName';
        if ((isRemoteData(this.parent) && !isOffline(this.parent)) && data instanceof sf.data.DataManager && !(data instanceof Array)) {
            var dm = this.parent.dataSource;
            if (this.parent.parentIdMapping) {
                this.parent.query = sf.base.isNullOrUndefined(this.parent.query) ?
                    new sf.data.Query() : this.parent.query;
                if (this.parent.parentIdMapping) {
                    var filterKey = this.parent.query.params.filter(function (param) { return param.key === 'IdMapping'; });
                    if (this.parent.initialRender && !filterKey.length) {
                        this.parent.query.where(this.parent.parentIdMapping, 'equal', null);
                        this.parent.query.addParams('IdMapping', this.parent.idMapping);
                    }
                }
                var clientRender = 'isClientRender';
                if (!this.parent.hasChildMapping && !(this.parent.dataSource[adaptorName] === 'BlazorAdaptor' && !this.parent[clientRender])) {
                    var qry = this.parent.query.clone();
                    qry.queries = [];
                    qry = qry.select([this.parent.parentIdMapping]);
                    qry.isCountRequired = true;
                    dm.executeQuery(qry).then(function (e) {
                        _this.parentItems = sf.data.DataUtil.distinct(e.result, _this.parent.parentIdMapping, false);
                        var req = sf.grids.getObject('dataSource.requests', _this.parent).filter(function (e) {
                            return e.httpRequest.statusText !== 'OK';
                        }).length;
                        if (req === 0) {
                            sf.base.setValue('grid.contentModule.isLoaded', true, _this.parent);
                            if (!sf.base.isNullOrUndefined(_this.zerothLevelData)) {
                                sf.base.setValue('cancel', false, _this.zerothLevelData);
                                sf.base.getValue('grid.renderModule', _this.parent).dataManagerSuccess(_this.zerothLevelData);
                                _this.zerothLevelData = null;
                            }
                            _this.parent.grid.hideSpinner();
                        }
                    });
                }
            }
        }
        else if (data instanceof Array) {
            this.convertJSONData(data);
        }
    };
    DataManipulation.prototype.convertJSONData = function (data) {
        this.hierarchyData = [];
        this.taskIds = [];
        for (var i = 0; i < Object.keys(data).length; i++) {
            var tempData = data[i];
            this.hierarchyData.push(sf.base.extend({}, tempData));
            if (!sf.base.isNullOrUndefined(tempData[this.parent.idMapping])) {
                this.taskIds.push(tempData[this.parent.idMapping]);
            }
        }
        if (this.isSelfReference) {
            var selfData = [];
            var mappingData = new sf.data.DataManager(this.hierarchyData).executeLocal(new sf.data.Query()
                .group(this.parent.parentIdMapping));
            for (var i = 0; i < mappingData.length; i++) {
                var groupData = mappingData[i];
                var index = this.taskIds.indexOf(groupData.key);
                if (!sf.base.isNullOrUndefined(groupData.key)) {
                    if (index > -1) {
                        var childData = (groupData.items);
                        this.hierarchyData[index][this.parent.childMapping] = childData;
                        continue;
                    }
                }
                selfData.push.apply(selfData, groupData.items);
            }
            this.hierarchyData = this.selfReferenceUpdate(selfData);
        }
        if (!Object.keys(this.hierarchyData).length) {
            var isGantt = 'isGantt';
            var referenceData = !(this.parent.dataSource instanceof sf.data.DataManager) && this.parent[isGantt];
            this.parent.flatData = referenceData ? (this.parent.dataSource) : [];
        }
        else {
            this.createRecords(this.hierarchyData);
        }
        this.storedIndex = -1;
    };
    // private crudActions(): void {
    //   if (this.parent.dataSource instanceof DataManager && (this.parent.dataSource.adaptor instanceof RemoteSaveAdaptor)) {
    //     let oldUpdate: Function = this.parent.dataSource.adaptor.update;
    //     this.parent.dataSource.adaptor.update =
    //         function (dm: DataManager, keyField: string, value: Object, tableName?: string, query?: Query, original?: Object): Object {
    //                value = getPlainData(value);
    //                return oldUpdate.apply(this, [dm, keyField, value, tableName, query, original]);
    //              }
    //   }
    // }
    DataManipulation.prototype.selfReferenceUpdate = function (selfData) {
        var result = [];
        while (this.hierarchyData.length > 0 && selfData.length > 0) {
            var index = selfData.indexOf(this.hierarchyData[0]);
            if (index === -1) {
                this.hierarchyData.shift();
            }
            else {
                result.push(this.hierarchyData.shift());
                selfData.splice(index, 1);
            }
        }
        return result;
    };
    /**
     * Function to update the zeroth level parent records in remote binding
     * @hidden
     */
    DataManipulation.prototype.updateParentRemoteData = function (args) {
        var records = args.result;
        var adaptorName = 'adaptorName';
        var clientRender = 'isClientRender';
        if (!this.parent.hasChildMapping && !this.parentItems.length &&
            (!(this.parent.dataSource[adaptorName] === 'BlazorAdaptor' && !this.parent[clientRender]) && !this.parent.loadChildOnDemand)) {
            this.zerothLevelData = args;
            sf.base.setValue('cancel', true, args);
        }
        else {
            if (!(this.parent.dataSource[adaptorName] === 'BlazorAdaptor' && !this.parent[clientRender]) && !this.parent.loadChildOnDemand) {
                for (var rec = 0; rec < records.length; rec++) {
                    if (sf.base.isNullOrUndefined(records[rec].index)) {
                        records[rec].taskData = sf.base.extend({}, records[rec]);
                        records[rec].uniqueID = sf.grids.getUid(this.parent.element.id + '_data_');
                        sf.base.setValue('uniqueIDCollection.' + records[rec].uniqueID, records[rec], this.parent);
                        records[rec].level = 0;
                        records[rec].index = Math.ceil(Math.random() * 1000);
                        if ((records[rec][this.parent.hasChildMapping] || this.parentItems.indexOf(records[rec][this.parent.idMapping]) !== -1)) {
                            records[rec].hasChildRecords = true;
                        }
                        records[rec].checkboxState = 'uncheck';
                    }
                }
            }
            else {
                if (!sf.base.isNullOrUndefined(records)) {
                    this.convertToFlatData(records);
                }
            }
        }
        args.result = (this.parent.dataSource[adaptorName] === 'BlazorAdaptor' && !this.parent[clientRender] && !sf.base.isNullOrUndefined(records))
            || this.parent.loadChildOnDemand ? this.parent.flatData : records;
        this.parent.notify('updateResults', args);
    };
    /**
     * Function to manipulate datasource
     * @hidden
     */
    DataManipulation.prototype.collectExpandingRecs = function (rowDetails, isChild) {
        var gridRows = this.parent.getRows();
        if (this.parent.rowTemplate) {
            var rows = this.parent.getContentTable().rows;
            gridRows = [].slice.call(rows);
        }
        var childRecord;
        var adaptorName = 'adaptorName';
        var clientRender = 'isClientRender';
        if (rowDetails.rows.length > 0) {
            if (!isChild) {
                rowDetails.record.expanded = true;
            }
            for (var i = 0; i < rowDetails.rows.length; i++) {
                if (sf.base.isBlazor() && this.parent.isServerRendered) {
                    sf.base.removeClass([rowDetails.rows[i]], 'e-treerowcollapsed');
                    sf.base.addClass([rowDetails.rows[i]], 'e-treerowexpanded');
                }
                else {
                    rowDetails.rows[i].style.display = 'table-row';
                }
                if ((sf.base.isBlazor() && (this.parent.dataSource[adaptorName] === 'BlazorAdaptor' && !this.parent[clientRender]))
                    || this.parent.loadChildOnDemand) {
                    var targetEle = rowDetails.rows[i].getElementsByClassName('e-treegridcollapse')[0];
                    childRecord = this.parent.rowTemplate ? this.parent.grid.getCurrentViewRecords()[rowDetails.rows[i].rowIndex] :
                        this.parent.grid.getRowObjectFromUID(rowDetails.rows[i].getAttribute('data-Uid')).data;
                    if (!sf.base.isNullOrUndefined(targetEle) && childRecord.expanded) {
                        sf.base.addClass([targetEle], 'e-treegridexpand');
                        sf.base.removeClass([targetEle], 'e-treegridcollapse');
                    }
                    var childRows = [];
                    childRows = gridRows.filter(function (r) {
                        return r.querySelector('.e-gridrowindex' + childRecord.index + 'level' + (childRecord.level + 1));
                    });
                    if (childRows.length && childRecord.expanded) {
                        this.collectExpandingRecs({ record: childRecord, rows: childRows, parentRow: rowDetails.parentRow }, true);
                    }
                }
                var expandingTd = rowDetails.rows[i].querySelector('.e-detailrowcollapse');
                if (!sf.base.isNullOrUndefined(expandingTd)) {
                    this.parent.grid.detailRowModule.expand(expandingTd);
                }
            }
        }
        else {
            this.fetchRemoteChildData({ record: rowDetails.record, rows: rowDetails.rows, parentRow: rowDetails.parentRow });
        }
    };
    DataManipulation.prototype.fetchRemoteChildData = function (rowDetails, isChild) {
        var _this = this;
        var args = { row: rowDetails.parentRow, data: rowDetails.record };
        var dm = this.parent.dataSource;
        var qry = this.parent.grid.getDataModule().generateQuery();
        var clonequries = qry.queries.filter(function (e) { return e.fn !== 'onPage' && e.fn !== 'onWhere'; });
        qry.queries = clonequries;
        qry.isCountRequired = true;
        qry.where(this.parent.parentIdMapping, 'equal', rowDetails.record[this.parent.idMapping]);
        sf.popups.showSpinner(this.parent.element);
        dm.executeQuery(qry).then(function (e) {
            var datas = _this.parent.grid.currentViewData;
            var inx = datas.indexOf(rowDetails.record);
            var haveChild = sf.grids.getObject('actual.nextLevel', e);
            var result = e.result;
            rowDetails.record.childRecords = result;
            for (var r = 0; r < result.length; r++) {
                result[r].taskData = sf.base.extend({}, result[r]);
                result[r].level = rowDetails.record.level + 1;
                result[r].index = Math.ceil(Math.random() * 1000);
                var parentData = sf.base.extend({}, rowDetails.record);
                delete parentData.childRecords;
                result[r].parentItem = parentData;
                result[r].parentUniqueID = rowDetails.record.uniqueID;
                result[r].uniqueID = sf.grids.getUid(_this.parent.element.id + '_data_');
                result[r].checkboxState = 'uncheck';
                sf.base.setValue('uniqueIDCollection.' + result[r].uniqueID, result[r], _this.parent);
                // delete result[r].parentItem.childRecords;
                if ((result[r][_this.parent.hasChildMapping] || _this.parentItems.indexOf(result[r][_this.parent.idMapping]) !== -1)
                    && !(haveChild && !haveChild[r])) {
                    result[r].hasChildRecords = true;
                    result[r].expanded = false;
                }
                datas.splice(inx + r + 1, 0, result[r]);
            }
            sf.base.setValue('result', datas, e);
            sf.base.setValue('action', 'beforecontentrender', e);
            _this.parent.trigger(actionComplete, e);
            sf.popups.hideSpinner(_this.parent.element);
            if (_this.parent.grid.aggregates.length > 0 && !_this.parent.enableVirtualization) {
                var gridQuery = sf.grids.getObject('query', e);
                var result_1 = 'result';
                if (sf.base.isNullOrUndefined(gridQuery)) {
                    gridQuery = sf.base.getValue('grid.renderModule.data', _this.parent).aggregateQuery(new sf.data.Query());
                }
                if (!sf.base.isNullOrUndefined(gridQuery)) {
                    var summaryQuery = gridQuery.queries.filter(function (q) { return q.fn === 'onAggregates'; });
                    e[result_1] = _this.parent.summaryModule.calculateSummaryValue(summaryQuery, e[result_1], true);
                }
            }
            e.count = _this.parent.grid.pageSettings.totalRecordsCount;
            var virtualArgs = {};
            if (_this.parent.enableVirtualization) {
                _this.remoteVirtualAction(virtualArgs);
            }
            sf.base.getValue('grid.renderModule', _this.parent).dataManagerSuccess(e, virtualArgs);
            _this.parent.trigger(expanded, args);
        });
    };
    DataManipulation.prototype.remoteVirtualAction = function (virtualArgs) {
        virtualArgs.requestType = 'refresh';
        sf.base.setValue('isExpandCollapse', true, virtualArgs);
        var contentModule = sf.base.getValue('grid.contentModule', this.parent);
        var currentInfo = sf.base.getValue('currentInfo', contentModule);
        var prevInfo = sf.base.getValue('prevInfo', contentModule);
        if (currentInfo.loadNext && this.parent.grid.pageSettings.currentPage === currentInfo.nextInfo.page) {
            this.parent.grid.pageSettings.currentPage = prevInfo.page;
        }
    };
    DataManipulation.prototype.beginSorting = function () {
        this.isSortAction = true;
    };
    DataManipulation.prototype.createRecords = function (data, parentRecords) {
        var treeGridData = [];
        for (var i = 0, len = Object.keys(data).length; i < len; i++) {
            var currentData = sf.base.extend({}, data[i]);
            currentData.taskData = data[i];
            var level = 0;
            this.storedIndex++;
            if (!currentData.hasOwnProperty('index')) {
                currentData.index = this.storedIndex;
            }
            if (!sf.base.isNullOrUndefined(currentData[this.parent.childMapping]) ||
                (currentData[this.parent.hasChildMapping] && isCountRequired(this.parent))) {
                currentData.hasChildRecords = true;
                if (this.parent.enableCollapseAll || !sf.base.isNullOrUndefined(this.parent.dataStateChange)
                    && sf.base.isNullOrUndefined(currentData[this.parent.childMapping])) {
                    currentData.expanded = false;
                }
                else {
                    currentData.expanded = !sf.base.isNullOrUndefined(currentData[this.parent.expandStateMapping])
                        ? currentData[this.parent.expandStateMapping] : true;
                }
            }
            if (!currentData.hasOwnProperty('index')) {
                currentData.index = currentData.hasChildRecords ? this.storedIndex : this.storedIndex;
            }
            if (this.isSelfReference && sf.base.isNullOrUndefined(currentData[this.parent.parentIdMapping])) {
                this.parent.parentData.push(currentData);
            }
            currentData.uniqueID = sf.grids.getUid(this.parent.element.id + '_data_');
            sf.base.setValue('uniqueIDCollection.' + currentData.uniqueID, currentData, this.parent);
            if (!sf.base.isNullOrUndefined(parentRecords)) {
                var parentData = sf.base.extend({}, parentRecords);
                delete parentData.childRecords;
                delete parentData[this.parent.childMapping];
                if (this.isSelfReference) {
                    delete parentData.taskData[this.parent.childMapping];
                }
                currentData.parentItem = parentData;
                currentData.parentUniqueID = parentData.uniqueID;
                level = parentRecords.level + 1;
            }
            if (!currentData.hasOwnProperty('level')) {
                currentData.level = level;
            }
            currentData.checkboxState = 'uncheck';
            if (sf.base.isNullOrUndefined(currentData[this.parent.parentIdMapping]) || currentData.parentItem) {
                this.parent.flatData.push(currentData);
            }
            if (!this.isSelfReference && currentData.level === 0) {
                this.parent.parentData.push(currentData);
            }
            if (!sf.base.isNullOrUndefined(currentData[this.parent.childMapping] && currentData[this.parent.childMapping].length)) {
                var record = this.createRecords(currentData[this.parent.childMapping], currentData);
                currentData.childRecords = record;
            }
            treeGridData.push(currentData);
        }
        return treeGridData;
    };
    /**
     * Function to perform filtering/sorting action for local data
     * @hidden
     */
    DataManipulation.prototype.dataProcessor = function (args) {
        var isExport = sf.grids.getObject('isExport', args);
        var expresults = sf.grids.getObject('expresults', args);
        var exportType = sf.grids.getObject('exportType', args);
        var isPrinting = sf.grids.getObject('isPrinting', args);
        var dataObj;
        var actionArgs = sf.grids.getObject('actionArgs', args);
        var requestType = sf.grids.getObject('requestType', args);
        var actionData = sf.grids.getObject('data', args);
        var action = sf.grids.getObject('action', args);
        var actionAddArgs = actionArgs;
        var primaryKeyColumnName = this.parent.getPrimaryKeyFieldNames()[0];
        var dataValue = sf.grids.getObject('data', actionAddArgs);
        if ((!sf.base.isNullOrUndefined(actionAddArgs)) && (!sf.base.isNullOrUndefined(actionAddArgs.action)) && (actionAddArgs.action === 'add')
            && (!sf.base.isNullOrUndefined(actionAddArgs.data)) && sf.base.isNullOrUndefined(actionAddArgs.data[primaryKeyColumnName])) {
            actionAddArgs.data[primaryKeyColumnName] = args.result[actionAddArgs.index][primaryKeyColumnName];
            dataValue.taskData[primaryKeyColumnName] = args.result[actionAddArgs.index][primaryKeyColumnName];
        }
        if ((!sf.base.isNullOrUndefined(actionArgs) && Object.keys(actionArgs).length) || requestType === 'save') {
            requestType = requestType ? requestType : actionArgs.requestType;
            actionData = actionData ? actionData : sf.grids.getObject('data', actionArgs);
            action = action ? action : sf.grids.getObject('action', actionArgs);
            if (this.parent.editSettings.mode === 'Batch') {
                this.batchChanges = this.parent.grid.editModule.getBatchChanges();
            }
            if (action === 'add' || (requestType === 'batchsave' && (this.parent.editSettings.mode === 'Batch'
                && this.batchChanges[this.addedRecords].length))) {
                this.parent.grid.currentViewData = args.result;
            }
            if (this.parent.isLocalData) {
                this.updateAction(actionData, action, requestType);
            }
        }
        if (isExport && !sf.base.isNullOrUndefined(expresults)) {
            dataObj = expresults;
        }
        else {
            dataObj = isCountRequired(this.parent) ? sf.base.getValue('result', this.parent.grid.dataSource)
                : this.parent.grid.dataSource;
        }
        var results = dataObj instanceof sf.data.DataManager ? dataObj.dataSource.json : dataObj;
        var count = isCountRequired(this.parent) ? sf.base.getValue('count', this.parent.dataSource)
            : results.length;
        if ((this.parent.grid.allowFiltering && this.parent.grid.filterSettings.columns.length) ||
            (this.parent.grid.searchSettings.key.length > 0)) {
            var qry = new sf.data.Query();
            var gridQuery = sf.grids.getObject('query', args);
            if (sf.base.isNullOrUndefined(gridQuery)) {
                gridQuery = new sf.data.Query();
                gridQuery = sf.base.getValue('grid.renderModule.data', this.parent).filterQuery(gridQuery);
                gridQuery = sf.base.getValue('grid.renderModule.data', this.parent).searchQuery(gridQuery);
            }
            var fltrQuery = gridQuery.queries.filter(function (q) { return q.fn === 'onWhere'; });
            var srchQuery = gridQuery.queries.filter(function (q) { return q.fn === 'onSearch'; });
            qry.queries = fltrQuery.concat(srchQuery);
            var filteredData = new sf.data.DataManager(results).executeLocal(qry);
            this.parent.notify('updateFilterRecs', { data: filteredData });
            results = this.dataResults.result;
            this.dataResults.result = null;
            if (this.parent.grid.aggregates.length > 0) {
                var query = sf.grids.getObject('query', args);
                if (sf.base.isNullOrUndefined(gridQuery)) {
                    gridQuery = sf.base.getValue('grid.renderModule.data', this.parent).aggregateQuery(new sf.data.Query());
                }
                if (!sf.base.isNullOrUndefined(query)) {
                    var summaryQuery = query.queries.filter(function (q) { return q.fn === 'onAggregates'; });
                    results = this.parent.summaryModule.calculateSummaryValue(summaryQuery, results, true);
                }
            }
        }
        if (this.parent.grid.aggregates.length && this.parent.grid.sortSettings.columns.length === 0
            && this.parent.grid.filterSettings.columns.length === 0 && !this.parent.grid.searchSettings.key.length) {
            var gridQuery = sf.grids.getObject('query', args);
            if (sf.base.isNullOrUndefined(gridQuery)) {
                gridQuery = sf.base.getValue('grid.renderModule.data', this.parent).aggregateQuery(new sf.data.Query());
            }
            var summaryQuery = gridQuery.queries.filter(function (q) { return q.fn === 'onAggregates'; });
            results = this.parent.summaryModule.calculateSummaryValue(summaryQuery, this.parent.flatData, true);
        }
        if (this.parent.grid.sortSettings.columns.length > 0 || this.isSortAction) {
            this.isSortAction = false;
            var parentData = void 0;
            parentData = this.parent.parentData;
            var query = sf.grids.getObject('query', args);
            var srtQry = new sf.data.Query();
            for (var srt = this.parent.grid.sortSettings.columns.length - 1; srt >= 0; srt--) {
                var col = this.parent.grid.getColumnByField(this.parent.grid.sortSettings.columns[srt].field);
                var compFun = col.sortComparer && !this.isRemote() ?
                    col.sortComparer.bind(col) :
                    this.parent.grid.sortSettings.columns[srt].direction;
                srtQry.sortBy(this.parent.grid.sortSettings.columns[srt].field, compFun);
            }
            var modifiedData = new sf.data.DataManager(parentData).executeLocal(srtQry);
            var sortArgs = { modifiedData: modifiedData, filteredData: results, srtQry: srtQry };
            this.parent.notify('createSort', sortArgs);
            results = sortArgs.modifiedData;
            this.dataResults.result = null;
            this.sortedData = results;
            this.parent.notify('updateModel', {});
            if (this.parent.grid.aggregates.length > 0 && !sf.base.isNullOrUndefined(query)) {
                var isSort = false;
                var query_1 = sf.grids.getObject('query', args);
                var summaryQuery = query_1.queries.filter(function (q) { return q.fn === 'onAggregates'; });
                results = this.parent.summaryModule.calculateSummaryValue(summaryQuery, this.sortedData, isSort);
            }
        }
        count = isCountRequired(this.parent) ? sf.base.getValue('count', this.parent.dataSource)
            : results.length;
        var temp = this.paging(results, count, isExport, isPrinting, exportType, args);
        results = temp.result;
        count = temp.count;
        args.result = results;
        args.count = count;
        this.parent.notify('updateResults', args);
    };
    DataManipulation.prototype.paging = function (results, count, isExport, isPrinting, exportType, args) {
        if (this.parent.allowPaging && (!isExport || exportType === 'CurrentPage')
            && (!isPrinting || this.parent.printMode === 'CurrentPage')) {
            this.parent.notify(pagingActions, { result: results, count: count });
            results = this.dataResults.result;
            count = isCountRequired(this.parent) ? sf.base.getValue('count', this.parent.dataSource)
                : this.dataResults.count;
        }
        else if (this.parent.enableVirtualization && (!isExport || exportType === 'CurrentPage')
            && sf.base.getValue('requestType', args) !== 'save') {
            this.parent.notify(pagingActions, { result: results, count: count, actionArgs: sf.base.getValue('actionArgs', args) });
            results = this.dataResults.result;
            count = this.dataResults.count;
        }
        var value = { result: results, count: count };
        return value;
    };
    /**
     * update for datasource
     */
    DataManipulation.prototype.updateData = function (dataResult) {
        this.dataResults = dataResult;
    };
    DataManipulation.prototype.updateAction = function (actionData, action, requestType) {
        if ((requestType === 'delete' || requestType === 'save')) {
            this.parent.notify(crudAction, { value: actionData, action: action || requestType });
        }
        if (requestType === 'batchsave' && this.parent.editSettings.mode === 'Batch') {
            this.parent.notify(batchSave, {});
        }
    };
    return DataManipulation;
}());

/**
 * Defines Predefined toolbar items.
 * @hidden
 */

(function (ToolbarItem) {
    ToolbarItem[ToolbarItem["Add"] = 0] = "Add";
    ToolbarItem[ToolbarItem["Edit"] = 1] = "Edit";
    ToolbarItem[ToolbarItem["Update"] = 2] = "Update";
    ToolbarItem[ToolbarItem["Delete"] = 3] = "Delete";
    ToolbarItem[ToolbarItem["Cancel"] = 4] = "Cancel";
    ToolbarItem[ToolbarItem["Search"] = 5] = "Search";
    ToolbarItem[ToolbarItem["ExpandAll"] = 6] = "ExpandAll";
    ToolbarItem[ToolbarItem["CollapseAll"] = 7] = "CollapseAll";
    ToolbarItem[ToolbarItem["ExcelExport"] = 8] = "ExcelExport";
    ToolbarItem[ToolbarItem["PdfExport"] = 9] = "PdfExport";
    ToolbarItem[ToolbarItem["CsvExport"] = 10] = "CsvExport";
    ToolbarItem[ToolbarItem["Print"] = 11] = "Print";
    ToolbarItem[ToolbarItem["RowIndent"] = 12] = "RowIndent";
    ToolbarItem[ToolbarItem["RowOutdent"] = 13] = "RowOutdent";
})(exports.ToolbarItem || (exports.ToolbarItem = {}));
/**
 * Defines predefined contextmenu items.
 * @hidden
 */

(function (ContextMenuItems) {
    ContextMenuItems[ContextMenuItems["AutoFit"] = 0] = "AutoFit";
    ContextMenuItems[ContextMenuItems["AutoFitAll"] = 1] = "AutoFitAll";
    ContextMenuItems[ContextMenuItems["SortAscending"] = 2] = "SortAscending";
    ContextMenuItems[ContextMenuItems["SortDescending"] = 3] = "SortDescending";
    ContextMenuItems[ContextMenuItems["Edit"] = 4] = "Edit";
    ContextMenuItems[ContextMenuItems["Delete"] = 5] = "Delete";
    ContextMenuItems[ContextMenuItems["Save"] = 6] = "Save";
    ContextMenuItems[ContextMenuItems["Cancel"] = 7] = "Cancel";
    ContextMenuItems[ContextMenuItems["PdfExport"] = 8] = "PdfExport";
    ContextMenuItems[ContextMenuItems["ExcelExport"] = 9] = "ExcelExport";
    ContextMenuItems[ContextMenuItems["CsvExport"] = 10] = "CsvExport";
    ContextMenuItems[ContextMenuItems["FirstPage"] = 11] = "FirstPage";
    ContextMenuItems[ContextMenuItems["PrevPage"] = 12] = "PrevPage";
    ContextMenuItems[ContextMenuItems["LastPage"] = 13] = "LastPage";
    ContextMenuItems[ContextMenuItems["NextPage"] = 14] = "NextPage";
    ContextMenuItems[ContextMenuItems["AddRow"] = 15] = "AddRow";
})(exports.ContextMenuItems || (exports.ContextMenuItems = {}));

var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the paging behavior of the TreeGrid.
 */
var PageSettings = /** @class */ (function (_super) {
    __extends$6(PageSettings, _super);
    function PageSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$5([
        sf.base.Property(12)
    ], PageSettings.prototype, "pageSize", void 0);
    __decorate$5([
        sf.base.Property(8)
    ], PageSettings.prototype, "pageCount", void 0);
    __decorate$5([
        sf.base.Property(1)
    ], PageSettings.prototype, "currentPage", void 0);
    __decorate$5([
        sf.base.Property()
    ], PageSettings.prototype, "totalRecordsCount", void 0);
    __decorate$5([
        sf.base.Property(false)
    ], PageSettings.prototype, "enableQueryString", void 0);
    __decorate$5([
        sf.base.Property(false)
    ], PageSettings.prototype, "pageSizes", void 0);
    __decorate$5([
        sf.base.Property(null)
    ], PageSettings.prototype, "template", void 0);
    __decorate$5([
        sf.base.Property('All')
    ], PageSettings.prototype, "pageSizeMode", void 0);
    return PageSettings;
}(sf.base.ChildProperty));

var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the TreeGrid's aggregate column.
 */
var AggregateColumn = /** @class */ (function (_super) {
    __extends$7(AggregateColumn, _super);
    function AggregateColumn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.intl = new sf.base.Internationalization();
        _this.templateFn = {};
        return _this;
    }
    /**
     * @hidden
     */
    AggregateColumn.prototype.setFormatter = function (cultureName) {
        if (this.format && (this.format.skeleton || this.format.format)) {
            this.formatFn = this.getFormatFunction(this.format);
        }
    };
    /**
     * @hidden
     */
    AggregateColumn.prototype.getFormatFunction = function (format) {
        if (format.type) {
            return this.intl.getDateFormat(format);
        }
        else {
            return this.intl.getNumberFormat(format);
        }
    };
    /**
     * @hidden
     */
    AggregateColumn.prototype.getFormatter = function () {
        return this.formatFn;
    };
    /**
     * @hidden
     */
    AggregateColumn.prototype.setTemplate = function (helper) {
        if (helper === void 0) { helper = {}; }
        if (this.footerTemplate !== undefined) {
            this.templateFn[sf.base.getEnumValue(sf.grids.CellType, sf.grids.CellType.Summary)] = { fn: sf.base.compile(this.footerTemplate, helper),
                property: 'footerTemplate' };
        }
    };
    /**
     * @hidden
     */
    AggregateColumn.prototype.getTemplate = function (type) {
        return this.templateFn[sf.base.getEnumValue(sf.grids.CellType, type)];
    };
    /**
     * @hidden
     */
    AggregateColumn.prototype.setPropertiesSilent = function (prop) {
        this.setProperties(prop, true);
    };
    __decorate$6([
        sf.base.Property()
    ], AggregateColumn.prototype, "type", void 0);
    __decorate$6([
        sf.base.Property()
    ], AggregateColumn.prototype, "footerTemplate", void 0);
    __decorate$6([
        sf.base.Property()
    ], AggregateColumn.prototype, "field", void 0);
    __decorate$6([
        sf.base.Property()
    ], AggregateColumn.prototype, "format", void 0);
    __decorate$6([
        sf.base.Property()
    ], AggregateColumn.prototype, "columnName", void 0);
    __decorate$6([
        sf.base.Property()
    ], AggregateColumn.prototype, "customAggregate", void 0);
    return AggregateColumn;
}(sf.base.ChildProperty));
var AggregateRow = /** @class */ (function (_super) {
    __extends$7(AggregateRow, _super);
    function AggregateRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$6([
        sf.base.Collection([], AggregateColumn)
    ], AggregateRow.prototype, "columns", void 0);
    __decorate$6([
        sf.base.Property(true)
    ], AggregateRow.prototype, "showChildSummary", void 0);
    return AggregateRow;
}(sf.base.ChildProperty));

var __extends$8 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the edit behavior of the TreeGrid.
 */
var EditSettings = /** @class */ (function (_super) {
    __extends$8(EditSettings, _super);
    function EditSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$7([
        sf.base.Property(false)
    ], EditSettings.prototype, "allowAdding", void 0);
    __decorate$7([
        sf.base.Property(false)
    ], EditSettings.prototype, "allowEditing", void 0);
    __decorate$7([
        sf.base.Property(false)
    ], EditSettings.prototype, "allowDeleting", void 0);
    __decorate$7([
        sf.base.Property('Cell')
    ], EditSettings.prototype, "mode", void 0);
    __decorate$7([
        sf.base.Property('Top')
    ], EditSettings.prototype, "newRowPosition", void 0);
    __decorate$7([
        sf.base.Property(true)
    ], EditSettings.prototype, "allowEditOnDblClick", void 0);
    __decorate$7([
        sf.base.Property(true)
    ], EditSettings.prototype, "showConfirmDialog", void 0);
    __decorate$7([
        sf.base.Property(false)
    ], EditSettings.prototype, "showDeleteConfirmDialog", void 0);
    __decorate$7([
        sf.base.Property('')
    ], EditSettings.prototype, "template", void 0);
    __decorate$7([
        sf.base.Property({})
    ], EditSettings.prototype, "dialog", void 0);
    return EditSettings;
}(sf.base.ChildProperty));

var __extends$9 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Represents the field name and direction of sort column.
 */
var SortDescriptor = /** @class */ (function (_super) {
    __extends$9(SortDescriptor, _super);
    function SortDescriptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$8([
        sf.base.Property()
    ], SortDescriptor.prototype, "field", void 0);
    __decorate$8([
        sf.base.Property()
    ], SortDescriptor.prototype, "direction", void 0);
    return SortDescriptor;
}(sf.base.ChildProperty));
/**
 * Configures the sorting behavior of TreeGrid.
 */
var SortSettings = /** @class */ (function (_super) {
    __extends$9(SortSettings, _super);
    function SortSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$8([
        sf.base.Collection([], SortDescriptor)
    ], SortSettings.prototype, "columns", void 0);
    __decorate$8([
        sf.base.Property(true)
    ], SortSettings.prototype, "allowUnsort", void 0);
    return SortSettings;
}(sf.base.ChildProperty));

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Represents the TreeGrid component.
 * ```html
 * <div id='treegrid'></div>
 * <script>
 *  var treegridObj = new TreeGrid({ allowPaging: true });
 *  treegridObj.appendTo('#treegrid');
 * </script>
 * ```
 */
var TreeGrid = /** @class */ (function (_super) {
    __extends(TreeGrid, _super);
    function TreeGrid(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.dataResults = {};
        _this.uniqueIDCollection = {};
        _this.uniqueIDFilterCollection = {};
        _this.changedRecords = 'changedRecords';
        _this.deletedRecords = 'deletedRecords';
        _this.addedRecords = 'addedRecords';
        TreeGrid_1.Inject(Selection);
        sf.base.setValue('mergePersistData', _this.mergePersistTreeGridData, _this);
        _this.grid = new sf.grids.Grid();
        return _this;
    }
    TreeGrid_1 = TreeGrid;
    /**
     * Export TreeGrid data to Excel file(.xlsx).
     * @param  {ExcelExportProperties} excelExportProperties - Defines the export properties of the TreeGrid.
     * @param  {boolean} isMultipleExport - Define to enable multiple export.
     * @param  {workbook} workbook - Defines the Workbook if multiple export is enabled.
     * @param  {boolean} isBlob - If 'isBlob' set to true, then it will be returned as blob data.
     * @return {Promise<any>}
     * @blazorType void
     */
    TreeGrid.prototype.excelExport = function (excelExportProperties, isMultipleExport, 
    /* tslint:disable-next-line:no-any */
    workbook, isBlob) {
        if (sf.base.isBlazor()) {
            this.excelExportModule.Map(excelExportProperties, isMultipleExport, workbook, isBlob, false);
            return null;
        }
        return this.excelExportModule.Map(excelExportProperties, isMultipleExport, workbook, isBlob, false);
    };
    /**
     * Export TreeGrid data to CSV file.
     * @param  {ExcelExportProperties} excelExportProperties - Defines the export properties of the TreeGrid.
     * @param  {boolean} isMultipleExport - Define to enable multiple export.
     * @param  {workbook} workbook - Defines the Workbook if multiple export is enabled.
     * @param  {boolean} isBlob - If 'isBlob' set to true, then it will be returned as blob data.
     * @return {Promise<any>}
     * @blazorType void
     */
    TreeGrid.prototype.csvExport = function (excelExportProperties, 
    /* tslint:disable-next-line:no-any */
    isMultipleExport, workbook, isBlob) {
        if (sf.base.isBlazor()) {
            this.excelExportModule.Map(excelExportProperties, isMultipleExport, workbook, isBlob, true);
            return null;
        }
        return this.excelExportModule.Map(excelExportProperties, isMultipleExport, workbook, isBlob, true);
    };
    /**
     * Export TreeGrid data to PDF document.
     * @param  {pdfExportProperties} PdfExportProperties - Defines the export properties of the Grid.
     * @param  {isMultipleExport} isMultipleExport - Define to enable multiple export.
     * @param  {pdfDoc} pdfDoc - Defined the Pdf Document if multiple export is enabled.
     * @param  {boolean} isBlob - If 'isBlob' set to true, then it will be returned as blob data.
     * @return {Promise<any>}
     * @blazorType void
     */
    TreeGrid.prototype.pdfExport = function (pdfExportProperties, 
    /* tslint:disable-next-line:no-any */
    isMultipleExport, pdfDoc, isBlob) {
        if (sf.base.isBlazor()) {
            this.pdfExportModule.Map(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
            return null;
        }
        return this.pdfExportModule.Map(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    };
    /**
     * For internal use only - Get the module name.
     * @private
     */
    TreeGrid.prototype.getModuleName = function () {
        return 'treegrid';
    };
    /**
     * For internal use only - Initialize the event handler;
     * @private
     */
    TreeGrid.prototype.preRender = function () {
        this.TreeGridLocale();
        this.initProperties();
        this.defaultLocale = {
            Above: 'Above',
            Below: 'Below',
            AddRow: 'Add Row',
            ExpandAll: 'Expand All',
            CollapseAll: 'Collapse All',
            RowIndent: 'Indent',
            RowOutdent: 'Outdent'
        };
        this.l10n = new sf.base.L10n('treegrid', this.defaultLocale, this.locale);
        if (this.isSelfReference && sf.base.isNullOrUndefined(this.childMapping)) {
            this.childMapping = 'Children';
        }
    };
    /**
     * Sorts a column with the given options.
     * @param {string} columnName - Defines the column name to be sorted.
     * @param {SortDirection} direction - Defines the direction of sorting field.
     * @param {boolean} isMultiSort - Specifies whether the previous sorted columns are to be maintained.
     * @return {void}
     */
    TreeGrid.prototype.sortByColumn = function (columnName, direction, isMultiSort) {
        this.sortModule.sortColumn(columnName, direction, isMultiSort);
    };
    /**
     * Clears all the sorted columns of the TreeGrid.
     * @return {void}
     */
    TreeGrid.prototype.clearSorting = function () {
        if (this.sortModule) {
            this.sortModule.clearSorting();
        }
    };
    /**
     * Remove sorted column by field name.
     * @param {string} field - Defines the column field name to remove sort.
     * @return {void}
     * @hidden
     */
    TreeGrid.prototype.removeSortColumn = function (field) {
        this.sortModule.removeSortColumn(field);
    };
    /**
     * Searches TreeGrid records using the given key.
     * You can customize the default search option by using the
     * [`searchSettings`](./#searchsettings/).
     * @param  {string} searchString - Defines the key.
     * @return {void}
     */
    TreeGrid.prototype.search = function (searchString) {
        this.grid.search(searchString);
    };
    /**
     * Changes the column width to automatically fit its content to ensure that the width shows the content without wrapping/hiding.
     * > * This method ignores the hidden columns.
     * > * Uses the `autoFitColumns` method in the `dataBound` event to resize at initial rendering.
     * @param  {string |string[]} fieldNames - Defines the column names.
     * @return {void}
     *
     *
     *
     */
    TreeGrid.prototype.autoFitColumns = function (fieldNames) {
        this.resizeModule.autoFitColumns(fieldNames);
        this.updateColumnModel();
    };
    /**
     * Changes the TreeGrid column positions by field names.
     * @param  {string} fromFName - Defines the origin field name.
     * @param  {string} toFName - Defines the destination field name.
     * @return {void}
     */
    TreeGrid.prototype.reorderColumns = function (fromFName, toFName) {
        this.grid.reorderColumns(fromFName, toFName);
    };
    TreeGrid.prototype.TreeGridLocale = function () {
        /* tslint:disable-next-line:no-any */
        var locale = sf.base.L10n.locale;
        var localeObject;
        localeObject = {};
        sf.base.setValue(this.locale, {}, localeObject);
        var gridLocale;
        gridLocale = {};
        gridLocale = sf.grids.getObject(this.locale, locale);
        var treeGridLocale;
        treeGridLocale = {};
        treeGridLocale = sf.grids.getObject(this.getModuleName(), gridLocale);
        sf.base.setValue('grid', treeGridLocale, sf.grids.getObject(this.locale, localeObject));
        sf.base.L10n.load(localeObject);
    };
    /**
     * By default, prints all the pages of the TreeGrid and hides the pager.
     * > You can customize print options using the
     * [`printMode`](./#printmode).
     * @return {void}
     */
    TreeGrid.prototype.print = function () {
        this.printModule.print();
    };
    TreeGrid.prototype.treeGridkeyActionHandler = function (e) {
        if (this.allowKeyboard) {
            switch (e.action) {
                case 'ctrlDownArrow':
                    this.expandAll();
                    break;
                case 'ctrlUpArrow':
                    this.collapseAll();
                    break;
                case 'ctrlShiftUpArrow':
                    var collapsetarget = e.target;
                    var collapsecolumn = collapsetarget.closest('.e-rowcell');
                    var collapserow = collapsecolumn.closest('tr');
                    var collapseRow = collapserow.querySelector('.e-treegridexpand');
                    if (collapseRow !== null && collapseRow !== undefined) {
                        this.expandCollapseRequest(collapserow.querySelector('.e-treegridexpand'));
                    }
                    break;
                case 'ctrlShiftDownArrow':
                    var expandtarget = e.target;
                    var expandcolumn = expandtarget.closest('.e-rowcell');
                    var expandrow = expandcolumn.closest('tr');
                    var expandRow = expandrow.querySelector('.e-treegridcollapse');
                    if (expandRow !== null && expandRow !== undefined) {
                        this.expandCollapseRequest(expandrow.querySelector('.e-treegridcollapse'));
                    }
                    break;
                case 'downArrow':
                    var target = e.target.parentElement;
                    var summaryElement = this.findnextRowElement(target);
                    if (summaryElement !== null) {
                        var rowIndex = summaryElement.rowIndex;
                        this.selectRow(rowIndex);
                        var cellIndex = e.target.cellIndex;
                        var row = summaryElement.children[cellIndex];
                        sf.base.addClass([row], 'e-focused');
                        sf.base.addClass([row], 'e-focus');
                    }
                    else {
                        this.clearSelection();
                    }
                    break;
                case 'upArrow':
                    var targetRow = e.target.parentElement;
                    var summaryRowElement = this.findPreviousRowElement(targetRow);
                    if (summaryRowElement !== null) {
                        var rIndex = summaryRowElement.rowIndex;
                        this.selectRow(rIndex);
                        var cIndex = e.target.cellIndex;
                        var rows = summaryRowElement.children[cIndex];
                        sf.base.addClass([rows], 'e-focused');
                        sf.base.addClass([rows], 'e-focus');
                    }
                    else {
                        this.clearSelection();
                    }
            }
        }
    };
    // Get Proper Row Element from the summary 
    TreeGrid.prototype.findnextRowElement = function (summaryRowElement) {
        var rowElement = summaryRowElement.nextElementSibling;
        if (rowElement !== null && (rowElement.className.indexOf('e-summaryrow') !== -1 ||
            rowElement.style.display === 'none')) {
            rowElement = this.findnextRowElement(rowElement);
        }
        return rowElement;
    };
    // Get Proper Row Element from the summary 
    TreeGrid.prototype.findPreviousRowElement = function (summaryRowElement) {
        var rowElement = summaryRowElement.previousElementSibling;
        if (rowElement !== null && (rowElement.className.indexOf('e-summaryrow') !== -1 ||
            rowElement.style.display === 'none')) {
            rowElement = this.findPreviousRowElement(rowElement);
        }
        return rowElement;
    };
    TreeGrid.prototype.initProperties = function () {
        this.defaultLocale = {};
        this.flatData = [];
        this.parentData = [];
        this.columnModel = [];
        this.isExpandAll = false;
        this.isCollapseAll = false;
        this.keyConfigs = {
            ctrlDownArrow: 'ctrl+downarrow',
            ctrlUpArrow: 'ctrl+uparrow',
            ctrlShiftUpArrow: 'ctrl+shift+uparrow',
            ctrlShiftDownArrow: 'ctrl+shift+downarrow',
            downArrow: 'downArrow',
            upArrow: 'upArrow'
        };
        this.isLocalData = (!(this.dataSource instanceof sf.data.DataManager) || this.dataSource.dataSource.offline
            || (!sf.base.isNullOrUndefined(this.dataSource.ready)) || this.dataSource.adaptor instanceof sf.data.RemoteSaveAdaptor);
        this.isSelfReference = !sf.base.isNullOrUndefined(this.parentIdMapping);
    };
    /**
     * Binding events to the element while component creation.
     * @hidden
     */
    TreeGrid.prototype.wireEvents = function () {
        sf.base.EventHandler.add(this.grid.element, 'click', this.mouseClickHandler, this);
        sf.base.EventHandler.add(this.element, 'touchend', this.mouseClickHandler, this);
        this.keyboardModule = new sf.base.KeyboardEvents(this.element, {
            keyAction: this.treeGridkeyActionHandler.bind(this),
            keyConfigs: this.keyConfigs,
            eventName: 'keydown'
        });
        if (this.allowKeyboard) {
            this.element.tabIndex = this.element.tabIndex === -1 ? 0 : this.element.tabIndex;
        }
    };
    /**
     * To provide the array of modules needed for component rendering
     * @return {ModuleDeclaration[]}
     * @hidden
     */
    TreeGrid.prototype.requiredModules = function () {
        var modules = [];
        if (this.isDestroyed) {
            return modules;
        }
        modules.push({
            member: 'filter', args: [this, this.filterSettings]
        });
        if (!sf.base.isNullOrUndefined(this.toolbar)) {
            modules.push({
                member: 'toolbar',
                args: [this]
            });
        }
        if (this.contextMenuItems) {
            modules.push({
                member: 'contextMenu',
                args: [this]
            });
        }
        if (this.allowPaging) {
            modules.push({
                member: 'pager',
                args: [this, this.pageSettings]
            });
        }
        if (this.allowReordering) {
            modules.push({
                member: 'reorder',
                args: [this]
            });
        }
        if (this.allowSorting) {
            modules.push({
                member: 'sort',
                args: [this]
            });
        }
        if (this.aggregates.length > 0) {
            modules.push({
                member: 'summary', args: [this]
            });
        }
        modules.push({
            member: 'resize', args: [this]
        });
        if (this.allowExcelExport) {
            modules.push({
                member: 'ExcelExport', args: [this]
            });
        }
        if (this.frozenColumns || this.frozenRows || this.getFrozenColumns()) {
            modules.push({
                member: 'freeze', args: [this]
            });
        }
        if (this.detailTemplate) {
            modules.push({
                member: 'detailRow', args: [this]
            });
        }
        if (this.allowPdfExport) {
            modules.push({
                member: 'PdfExport', args: [this]
            });
        }
        if (this.showColumnMenu) {
            modules.push({
                member: 'columnMenu', args: [this]
            });
        }
        if (this.showColumnChooser) {
            modules.push({
                member: 'ColumnChooser', args: [this]
            });
        }
        this.extendRequiredModules(modules);
        return modules;
    };
    TreeGrid.prototype.extendRequiredModules = function (modules) {
        if (this.allowRowDragAndDrop) {
            modules.push({
                member: 'rowDragAndDrop',
                args: [this]
            });
        }
        if (this.editSettings.allowAdding || this.editSettings.allowDeleting || this.editSettings.allowEditing) {
            modules.push({
                member: 'edit',
                args: [this]
            });
        }
        if (this.isCommandColumn(this.columns)) {
            modules.push({
                member: 'commandColumn',
                args: [this]
            });
        }
        if (this.allowSelection) {
            modules.push({
                member: 'selection',
                args: [this]
            });
        }
        if (this.enableVirtualization) {
            modules.push({
                member: 'virtualScroll',
                args: [this]
            });
        }
    };
    TreeGrid.prototype.isCommandColumn = function (columns) {
        var _this = this;
        return columns.some(function (col) {
            if (col.columns) {
                return _this.isCommandColumn(col.columns);
            }
            return !!(col.commands || col.commandsTemplate);
        });
    };
    /**
     * Unbinding events from the element while component destroy.
     * @hidden
     */
    TreeGrid.prototype.unwireEvents = function () {
        if (this.grid && this.grid.element) {
            sf.base.EventHandler.remove(this.grid.element, 'click', this.mouseClickHandler);
        }
    };
    /**
     * For internal use only - To Initialize the component rendering.
     * @private
     */
    TreeGrid.prototype.render = function () {
        var _this = this;
        sf.popups.createSpinner({ target: this.element }, this.createElement);
        this.renderModule = new Render(this);
        this.dataModule = new DataManipulation(this);
        this.printModule = new Print$1(this);
        var clientRender = 'isClientRender';
        if (this[clientRender]) {
            this.isServerRendered = false;
        }
        this.trigger(load);
        this.autoGenerateColumns();
        this.initialRender = true;
        if (!sf.base.isNullOrUndefined(this.dataSource)) {
            this.convertTreeData(this.dataSource);
        }
        if (!sf.base.isBlazor() || !this.isServerRendered) {
            this.loadGrid();
            if (this.element.classList.contains('e-treegrid') && this.rowDropSettings.targetID) {
                this.grid.rowDropSettings.targetID += '_gridcontrol';
            }
            this.addListener();
            var gridContainer = sf.base.createElement('div', { id: this.element.id + '_gridcontrol' });
            sf.base.addClass([this.element], 'e-treegrid');
            if (!sf.base.isNullOrUndefined(this.height) && typeof (this.height) === 'string' && this.height.indexOf('%') !== -1) {
                this.element.style.height = this.height;
            }
            if (!sf.base.isNullOrUndefined(this.width) && typeof (this.width) === 'string' && this.width.indexOf('%') !== -1) {
                this.element.style.width = this.width;
            }
            this.element.appendChild(gridContainer);
            this.grid.appendTo(gridContainer);
            this.wireEvents();
        }
        this.renderComplete();
        var destroyTemplate = 'destroyTemplate';
        var destroyTemplateFn = this.grid[destroyTemplate];
        //tslint:disable-next-line:no-any
        this.grid[destroyTemplate] = function (args, index) {
            destroyTemplateFn.apply(_this.grid);
            _this.clearTemplate(args, index);
        };
        if (sf.base.isBlazor() && this.isServerRendered) {
            var fn_1 = function (args) { return _this.gridRendered(args, fn_1); };
            sf.grids.gridObserver.on('component-rendered', fn_1, this);
        }
    };
    TreeGrid.prototype.afterGridRender = function () {
        if (!sf.base.isNullOrUndefined(this.grid.clipboardModule)) {
            this.grid.clipboardModule.destroy();
        }
        this.clipboardModule = this.grid.clipboardModule = new TreeClipboard(this);
    };
    TreeGrid.prototype.gridRendered = function (args, fn) {
        if (args.id === this.element.id + '_gridcontrol') {
            this.grid = args.grid;
        }
        else {
            return;
        }
        this.grid.query.queries = [];
        var isJsComponent = 'isJsComponent';
        var isHybrid = 'isHybrid';
        if (!this.isServerRendered) {
            this.grid[isJsComponent] = true;
        }
        else {
            this.grid[isHybrid] = true;
        }
        this.setBlazorGUID();
        this.setColIndex(this.grid.columns);
        this.bindGridEvents();
        var headerCheckbox = 'headerCheckbox';
        if (!sf.base.isNullOrUndefined(this.selectionModule)) {
            this.grid.on('colgroup-refresh', this.selectionModule[headerCheckbox], this.selectionModule);
        }
        for (var i = 0; i < this.columns.length; i++) {
            this.columns[i].uid = this.grid.columns[i].uid;
        }
        this.wireEvents();
        this.afterGridRender();
        var processModel = 'processModel';
        this.grid[processModel]();
        sf.grids.gridObserver.off('component-rendered', this.gridRendered);
    };
    TreeGrid.prototype.setColIndex = function (columnModel, ind) {
        if (ind === void 0) { ind = 0; }
        for (var i = 0, len = columnModel.length; i < len; i++) {
            if (columnModel[i].columns) {
                columnModel[i].index = sf.base.isNullOrUndefined(columnModel[i].index) ? ind :
                    columnModel[i].index;
                ind++;
                ind = this.setColIndex(columnModel[i].columns, ind);
            }
            else {
                columnModel[i].index = sf.base.isNullOrUndefined(columnModel[i].index) ? ind :
                    columnModel[i].index;
                ind++;
            }
        }
        return ind;
    };
    TreeGrid.prototype.setBlazorGUID = function () {
        var guid = 'guid';
        if (this.editSettings) {
            this.grid.editSettings[guid] = this.editSettings[guid];
            this.grid.editSettings.template = this.editSettings.template;
        }
        for (var i = 0; i < this.aggregates.length; i++) {
            for (var j = 0; j < this.aggregates[i].columns.length; j++) {
                this.grid.aggregates[i].columns[j][guid] = this.aggregates[i].columns[j][guid];
            }
        }
        for (var i = 0; i < this.columns.length; i++) {
            this.grid.columns[i][guid] = this.columns[i][guid];
        }
    };
    
    TreeGrid.prototype.convertTreeData = function (data) {
        var _this = this;
        if (data instanceof Array && data.length > 0 && data[0].hasOwnProperty('level')) {
            this.flatData = isCountRequired(this) ? sf.base.getValue('result', data) : data;
            this.flatData.filter(function (e) {
                sf.base.setValue('uniqueIDCollection.' + e.uniqueID, e, _this);
                if (e.level === 0) {
                    _this.parentData.push(e);
                }
            });
        }
        else {
            if (isCountRequired(this)) {
                var griddata = sf.base.getValue('result', this.dataSource);
                this.dataModule.convertToFlatData(griddata);
            }
            else {
                this.dataModule.convertToFlatData(data);
            }
        }
    };
    // private getGridData(): Object {
    //   if (isRemoteData(this)) {
    //     return this.dataSource;
    //   } else if (this.isLocalData && this.dataSource instanceof DataManager) {
    //     this.dataSource.dataSource.json = this.flatData;
    //     return this.dataSource;
    //   }
    //   return this.flatData;
    // }
    TreeGrid.prototype.bindGridProperties = function () {
        this.bindedDataSource();
        this.grid.enableRtl = this.enableRtl;
        this.grid.allowKeyboard = this.allowKeyboard;
        this.grid.columns = this.getGridColumns(this.columns);
        this.grid.allowExcelExport = this.allowExcelExport;
        this.grid.allowPdfExport = this.allowPdfExport;
        this.grid.query = this.query;
        this.grid.columnQueryMode = this.columnQueryMode;
        this.grid.allowPaging = this.allowPaging;
        this.grid.pageSettings = sf.grids.getActualProperties(this.pageSettings);
        this.grid.pagerTemplate = this.pagerTemplate;
        this.grid.showColumnMenu = this.showColumnMenu;
        this.grid.allowSorting = this.allowSorting;
        this.grid.allowFiltering = this.allowFiltering;
        this.grid.enableVirtualization = this.enableVirtualization;
        this.grid.width = this.width;
        this.grid.height = this.height;
        this.grid.enableAltRow = this.enableAltRow;
        this.grid.allowReordering = this.allowReordering;
        this.grid.allowTextWrap = this.allowTextWrap;
        this.grid.allowResizing = this.allowResizing;
        this.grid.enableHover = this.enableHover;
        this.grid.enableAutoFill = this.enableAutoFill;
        this.grid.allowRowDragAndDrop = this.allowRowDragAndDrop;
        this.grid.rowDropSettings = sf.grids.getActualProperties(this.rowDropSettings);
        this.grid.rowHeight = this.rowHeight;
        this.grid.gridLines = this.gridLines;
        this.grid.allowSelection = this.allowSelection;
        this.grid.toolbar = sf.grids.getActualProperties(this.getGridToolbar());
        this.grid.toolbarTemplate = this.toolbarTemplate;
        this.grid.showColumnChooser = this.showColumnChooser;
        this.grid.filterSettings = sf.grids.getActualProperties(this.filterSettings);
        this.grid.selectionSettings = sf.grids.getActualProperties(this.selectionSettings);
        this.grid.sortSettings = sf.grids.getActualProperties(this.sortSettings);
        this.grid.searchSettings = sf.grids.getActualProperties(this.searchSettings);
        this.grid.aggregates = sf.grids.getActualProperties(this.aggregates);
        this.grid.textWrapSettings = sf.grids.getActualProperties(this.textWrapSettings);
        this.grid.printMode = sf.grids.getActualProperties(this.printMode);
        this.grid.locale = sf.grids.getActualProperties(this.locale);
        this.grid.selectedRowIndex = this.selectedRowIndex;
        this.grid.contextMenuItems = sf.grids.getActualProperties(this.getContextMenu());
        this.grid.columnMenuItems = sf.grids.getActualProperties(this.columnMenuItems);
        this.grid.editSettings = this.getGridEditSettings();
        this.grid.rowTemplate = sf.grids.getActualProperties(this.rowTemplate);
        this.grid.detailTemplate = sf.grids.getActualProperties(this.detailTemplate);
        this.grid.frozenRows = this.frozenRows;
        this.grid.frozenColumns = this.frozenColumns;
        var templateInstance = 'templateDotnetInstance';
        this.grid[templateInstance] = this[templateInstance];
        var isJsComponent = 'isJsComponent';
        this.grid[isJsComponent] = true;
    };
    TreeGrid.prototype.triggerEvents = function (args) {
        this.trigger(sf.grids.getObject('name', args), args);
    };
    TreeGrid.prototype.bindGridEvents = function () {
        var _this = this;
        var treeGrid = this;
        this.grid.rowSelecting = this.triggerEvents.bind(this);
        this.grid.rowSelected = function (args) {
            if (!sf.base.isBlazor()) {
                _this.selectedRowIndex = _this.grid.selectedRowIndex;
            }
            else if (sf.base.isBlazor() && _this.isServerRendered) {
                _this.allowServerDataBinding = false;
                _this.setProperties({ selectedRowIndex: _this.grid.selectedRowIndex }, true);
                _this.allowServerDataBinding = true;
            }
            treeGrid.notify(rowSelected, args);
            _this.trigger(rowSelected, args);
        };
        this.grid.rowDeselected = function (args) {
            _this.selectedRowIndex = _this.grid.selectedRowIndex;
            _this.trigger(rowDeselected, args);
        };
        this.grid.resizeStop = function (args) {
            _this.updateColumnModel();
            _this.trigger(resizeStop, args);
        };
        this.grid.excelQueryCellInfo = function (args) {
            _this.notify('excelCellInfo', args);
            args = _this.dataResults;
        };
        this.grid.pdfQueryCellInfo = function (args) {
            _this.notify('pdfCellInfo', args);
            args = _this.dataResults;
        };
        this.grid.checkBoxChange = function (args) {
            _this.trigger(checkboxChange, args);
        };
        this.grid.pdfExportComplete = this.triggerEvents.bind(this);
        this.grid.excelExportComplete = this.triggerEvents.bind(this);
        this.grid.excelHeaderQueryCellInfo = this.triggerEvents.bind(this);
        this.grid.pdfHeaderQueryCellInfo = this.triggerEvents.bind(this);
        this.grid.dataSourceChanged = this.triggerEvents.bind(this);
        this.grid.recordDoubleClick = this.triggerEvents.bind(this);
        this.grid.rowDeselecting = this.triggerEvents.bind(this);
        this.grid.cellDeselected = this.triggerEvents.bind(this);
        this.grid.cellDeselecting = this.triggerEvents.bind(this);
        this.grid.columnMenuOpen = this.triggerEvents.bind(this);
        this.grid.columnMenuClick = this.triggerEvents.bind(this);
        this.grid.cellSelected = this.triggerEvents.bind(this);
        this.grid.headerCellInfo = this.triggerEvents.bind(this);
        this.grid.resizeStart = this.triggerEvents.bind(this);
        this.grid.resizing = this.triggerEvents.bind(this);
        this.grid.columnDrag = this.triggerEvents.bind(this);
        this.grid.columnDragStart = this.triggerEvents.bind(this);
        this.grid.columnDrop = this.triggerEvents.bind(this);
        this.grid.beforePrint = this.triggerEvents.bind(this);
        this.grid.beforeCopy = this.triggerEvents.bind(this);
        this.grid.beforePaste = function (args) {
            var rows = _this.getRows();
            var rowIndex = 'rowIndex';
            while (rows[args[rowIndex]].classList.contains('e-summaryrow')) {
                args[rowIndex]++;
            }
            _this.trigger(beforePaste, args);
        };
        this.grid.load = function () {
            treeGrid.grid.on('initial-end', treeGrid.afterGridRender, treeGrid);
        };
        this.grid.printComplete = this.triggerEvents.bind(this);
        this.grid.actionFailure = this.triggerEvents.bind(this);
        this.extendedGridDataBoundEvent();
        this.extendedGridEvents();
        this.extendedGridActionEvents();
        this.extendedGridEditEvents();
        this.bindGridDragEvents();
        this.bindCallBackEvents();
    };
    TreeGrid.prototype.lastRowBorder = function (visiblerow, isAddBorder) {
        for (var j = 0; j < visiblerow.cells.length; j++) {
            isAddBorder ? sf.base.addClass([visiblerow.cells[j]], 'e-lastrowcell') : sf.base.removeClass([visiblerow.cells[j]], 'e-lastrowcell');
        }
    };
    
    TreeGrid.prototype.isPixelHeight = function () {
        if (this.height !== 'auto' && this.height.toString().indexOf('%') === -1) {
            return true;
        }
        else {
            return false;
        }
    };
    
    TreeGrid.prototype.extendedGridDataBoundEvent = function () {
        var _this = this;
        var treeGrid = this;
        this.grid.dataBound = function (args) {
            _this.updateRowTemplate(args);
            _this.updateColumnModel();
            _this.updateAltRow(_this.getRows());
            _this.notify('dataBoundArg', args);
            if (isRemoteData(_this) && !isOffline(_this) && !_this.hasChildMapping) {
                var req = sf.grids.getObject('dataSource.requests', _this).filter(function (e) {
                    return e.httpRequest.statusText !== 'OK';
                }).length;
                sf.base.setValue('grid.contentModule.isLoaded', !(req > 0), _this);
            }
            if (_this.isPixelHeight() && _this.initialRender) {
                var totalRows = _this.getRows();
                for (var i = totalRows.length - 1; i > 0; i--) {
                    if (!isHidden(totalRows[i])) {
                        if (totalRows[i].nextElementSibling) {
                            _this.lastRowBorder(totalRows[i], true);
                        }
                        break;
                    }
                }
            }
            _this.trigger(dataBound, args);
            _this.initialRender = false;
        };
        this.grid.beforeDataBound = function (args) {
            var dataSource = 'dataSource';
            var requestType = sf.grids.getObject('action', args);
            if (isRemoteData(treeGrid) && !isOffline(treeGrid) && requestType !== 'edit') {
                treeGrid.notify('updateRemoteLevel', args);
                args = (treeGrid.dataResults);
            }
            else if (treeGrid.flatData.length === 0 && isOffline(treeGrid) && treeGrid.dataSource instanceof sf.data.DataManager) {
                var dm = treeGrid.dataSource;
                treeGrid.dataModule.convertToFlatData(dm.dataSource.json);
                args.result = treeGrid.grid.dataSource[dataSource].json = treeGrid.flatData;
            }
            if (!isRemoteData(treeGrid) && !isCountRequired(this) && !sf.base.isNullOrUndefined(treeGrid.dataSource)) {
                if (this.isPrinting) {
                    sf.base.setValue('isPrinting', true, args);
                }
                treeGrid.notify('dataProcessor', args);
                //args = this.dataModule.dataProcessor(args);
            }
            sf.base.extend(args, treeGrid.dataResults);
            // this.notify(events.beforeDataBound, args);
            if (!this.isPrinting) {
                var callBackPromise_1 = new sf.data.Deferred();
                treeGrid.trigger(beforeDataBound, args, function (beforeDataBoundArgs) {
                    callBackPromise_1.resolve(beforeDataBoundArgs);
                });
                return callBackPromise_1;
            }
        };
    };
    TreeGrid.prototype.bindCallBackEvents = function () {
        var _this = this;
        var beginEdit$$1;
        if (sf.base.isBlazor() && this.isServerRendered) {
            if (!sf.base.isNullOrUndefined(this.grid.beginEdit)) {
                beginEdit$$1 = this.grid.beginEdit;
            }
        }
        this.grid.toolbarClick = function (args) {
            var callBackPromise = new sf.data.Deferred();
            _this.trigger(toolbarClick, args, function (toolbarargs) {
                if (!toolbarargs.cancel) {
                    _this.notify(toolbarClick, args);
                }
                callBackPromise.resolve(toolbarargs);
            });
            return callBackPromise;
        };
        this.grid.cellSelecting = function (args) {
            var callBackPromise = new sf.data.Deferred();
            _this.trigger(sf.grids.getObject('name', args), args, function (cellselectingArgs) {
                callBackPromise.resolve(cellselectingArgs);
            });
            return callBackPromise;
        };
        this.grid.beginEdit = function (args) {
            if (sf.base.isBlazor() && _this.isServerRendered) {
                if (beginEdit$$1 && typeof beginEdit$$1 === 'function') {
                    beginEdit$$1.apply(_this, [args]);
                }
            }
            var callBackPromise = new sf.data.Deferred();
            _this.trigger(beginEdit, args, function (begineditArgs) {
                callBackPromise.resolve(begineditArgs);
            });
            return callBackPromise;
        };
    };
    TreeGrid.prototype.extendedGridEditEvents = function () {
        var _this = this;
        var keypressed = 'key-pressed';
        var editKeyPress = 'keyPressed';
        var localobserver = 'localObserver';
        var cellEdit$$1;
        var cellSave$$1;
        if (sf.base.isBlazor() && this.isServerRendered) {
            if (!sf.base.isNullOrUndefined(this.grid.cellEdit)) {
                cellEdit$$1 = this.grid.cellEdit;
            }
            if (!sf.base.isNullOrUndefined(this.grid.cellSave)) {
                cellSave$$1 = this.grid.cellSave;
            }
        }
        if (this.editModule && sf.base.isBlazor() && this.isServerRendered) {
            this.grid.on(keypressed, this.editModule[editKeyPress], this.editModule);
            var events_1 = this.grid[localobserver].boundedEvents['key-pressed'];
            events_1.splice(0, 0, events_1.pop());
        }
        this.grid.dataStateChange = function (args) {
            if (_this.isExpandRefresh) {
                _this.isExpandRefresh = false;
                _this.grid.dataSource = { result: _this.flatData, count: sf.base.getValue('count', _this.grid.dataSource) };
            }
            else {
                _this.trigger(dataStateChange, args);
            }
        };
        this.grid.cellSave = function (args) {
            if (sf.base.isBlazor() && _this.isServerRendered) {
                if (cellSave$$1 && typeof cellSave$$1 === 'function') {
                    cellSave$$1.apply(_this, [args]);
                }
            }
            if (_this.grid.isContextMenuOpen()) {
                var contextitems = void 0;
                contextitems = _this.grid.contextMenuModule.contextMenu.element.getElementsByClassName('e-selected')[0];
                if ((sf.base.isNullOrUndefined(contextitems) || contextitems.id !== _this.element.id + '_gridcontrol_cmenu_Save')) {
                    args.cancel = true;
                }
            }
            var callBackPromise = new sf.data.Deferred();
            _this.trigger(cellSave, args, function (cellsaveArgs) {
                if (sf.base.isBlazor() && !_this.isServerRendered) {
                    cellsaveArgs.cell = sf.base.getElement(cellsaveArgs.cell);
                }
                if (!cellsaveArgs.cancel) {
                    _this.notify(cellSave, cellsaveArgs);
                }
                callBackPromise.resolve(cellsaveArgs);
            });
            return callBackPromise;
        };
        this.grid.cellSaved = function (args) {
            _this.trigger(cellSaved, args);
            _this.notify(cellSaved, args);
        };
        this.grid.cellEdit = function (args) {
            if (sf.base.isBlazor() && _this.isServerRendered) {
                if (cellEdit$$1 && typeof cellEdit$$1 === 'function') {
                    cellEdit$$1.apply(_this, [args]);
                }
            }
            var prom = 'promise';
            var promise = new sf.data.Deferred();
            args[prom] = promise;
            _this.notify(cellEdit, args);
            return promise;
        };
        this.grid.batchAdd = function (args) {
            _this.trigger(batchAdd, args);
            _this.notify(batchAdd, args);
        };
        this.grid.beforeBatchSave = function (args) {
            _this.trigger(beforeBatchSave, args);
            _this.notify(beforeBatchSave, args);
        };
        this.grid.beforeBatchAdd = function (args) {
            _this.trigger(beforeBatchAdd, args);
            _this.notify(beforeBatchAdd, args);
        };
        this.grid.batchDelete = function (args) {
            _this.trigger(batchDelete, args);
            _this.notify(batchDelete, args);
        };
        this.grid.beforeBatchDelete = function (args) {
            _this.trigger(beforeBatchDelete, args);
            _this.notify(beforeBatchDelete, args);
        };
        this.grid.batchCancel = function (args) {
            if (_this.editSettings.mode !== 'Cell') {
                _this.trigger(batchCancel, args);
            }
            _this.notify(batchCancel, args);
        };
    };
    TreeGrid.prototype.updateRowTemplate = function (args) {
        var _this = this;
        if (sf.base.isBlazor() && !this.isServerRendered) {
            setTimeout(function () {
                _this.treeColumnRowTemplate(args);
            }, 1000);
        }
        else {
            this.treeColumnRowTemplate(args);
        }
    };
    TreeGrid.prototype.bindedDataSource = function () {
        var dataSource = 'dataSource';
        var isDataAvailable = 'isDataAvailable';
        var adaptor = 'adaptor';
        var ready = 'ready';
        var adaptorName = 'adaptorName';
        var dotnetInstance = 'dotnetInstance';
        var key = 'key';
        if (this.dataSource && isCountRequired(this)) {
            var data = this.flatData;
            var datacount = sf.base.getValue('count', this.dataSource);
            this.grid.dataSource = { result: data, count: datacount };
        }
        else {
            this.grid.dataSource = !(this.dataSource instanceof sf.data.DataManager) ?
                this.flatData : new sf.data.DataManager(this.dataSource.dataSource, this.dataSource.defaultQuery, this.dataSource.adaptor);
        }
        if (sf.base.isBlazor() && this.dataSource instanceof sf.data.DataManager) {
            this.grid.dataSource[adaptorName] = this.dataSource[adaptorName];
            this.grid.dataSource[dotnetInstance] = this.dataSource[dotnetInstance];
            this.grid.dataSource[key] = this.dataSource[key];
        }
        if (this.dataSource instanceof sf.data.DataManager && (this.dataSource.dataSource.offline || this.dataSource.ready)) {
            this.grid.dataSource[dataSource].json = extendArray(this.dataSource[dataSource].json);
            this.grid.dataSource[ready] = this.dataSource.ready;
            var dm_1 = this.grid.dataSource;
            if (!sf.base.isNullOrUndefined(this.grid.dataSource[ready])) {
                this.grid.dataSource[ready].then(function (e) {
                    dm_1[dataSource].offline = true;
                    dm_1[isDataAvailable] = true;
                    dm_1[dataSource].json = e.result;
                    dm_1[adaptor] = new sf.data.JsonAdaptor();
                });
            }
        }
    };
    TreeGrid.prototype.extendedGridActionEvents = function () {
        var _this = this;
        var actionComplete$$1;
        if (sf.base.isBlazor() && this.isServerRendered) {
            if (!sf.base.isNullOrUndefined(this.grid.actionComplete)) {
                actionComplete$$1 = this.grid.actionComplete;
            }
        }
        this.grid.actionBegin = function (args) {
            if (args.requestType === 'sorting' && args.target && args.target.parentElement &&
                args.target.parentElement.classList.contains('e-hierarchycheckbox')) {
                args.cancel = true;
            }
            var requestType = sf.grids.getObject('requestType', args);
            if (requestType === 'reorder') {
                _this.notify('getColumnIndex', {});
            }
            _this.notify('actionBegin', { editAction: args });
            if (!isRemoteData(_this) && !sf.base.isNullOrUndefined(_this.filterModule) && !isCountRequired(_this)
                && (_this.grid.filterSettings.columns.length === 0 || _this.grid.searchSettings.key.length === 0)) {
                _this.notify('clearFilters', { flatData: _this.grid.dataSource });
                _this.grid.dataSource = _this.dataResults.result;
            }
            var callBackPromise = new sf.data.Deferred();
            if (sf.base.isBlazor() && args.requestType === 'delete' && !_this.isServerRendered) {
                var data = 'data';
                args[data] = args[data][0];
            }
            _this.trigger(actionBegin, args, function (actionArgs) {
                if (sf.base.isBlazor() && actionArgs.requestType === 'delete' && !_this.isServerRendered) {
                    var data = 'data';
                    actionArgs[data] = [actionArgs[data]];
                }
                if (!actionArgs.cancel) {
                    _this.notify(beginEdit, actionArgs);
                }
                if (sf.base.isBlazor() && actionArgs.requestType === 'beginEdit' && !_this.isServerRendered) {
                    actionArgs.row = sf.base.getElement(actionArgs.row);
                }
                callBackPromise.resolve(actionArgs);
            });
            return callBackPromise;
        };
        this.grid.actionComplete = function (args) {
            if (sf.base.isBlazor() && _this.isServerRendered && args.requestType !== 'filterAfterOpen') {
                var rows = _this.getRows();
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i].classList.contains('e-treerowcollapsed') || rows[i].classList.contains('e-treerowexpanded')) {
                        (_this.enableCollapseAll && args.requestType === 'paging') ? sf.base.removeClass([rows[i]], 'e-treerowexpanded') :
                            sf.base.removeClass([rows[i]], 'e-treerowcollapsed');
                        (_this.enableCollapseAll && args.requestType === 'paging') ? sf.base.addClass([rows[i]], 'e-treerowcollapsed') :
                            sf.base.addClass([rows[i]], 'e-treerowexpanded');
                    }
                    var cells = rows[i].querySelectorAll('.e-rowcell');
                    var expandicon = cells[_this.treeColumnIndex].getElementsByClassName('e-treegridcollapse')[0] ||
                        cells[_this.treeColumnIndex].getElementsByClassName('e-treegridexpand')[0];
                    if (expandicon) {
                        (_this.enableCollapseAll && args.requestType === 'paging') ? sf.base.removeClass([expandicon], 'e-treegridexpand') :
                            sf.base.removeClass([expandicon], 'e-treegridcollapse');
                        (_this.enableCollapseAll && args.requestType === 'paging') ? sf.base.addClass([expandicon], 'e-treegridcollapse') :
                            sf.base.addClass([expandicon], 'e-treegridexpand');
                    }
                }
                if (actionComplete$$1 && typeof actionComplete$$1 === 'function') {
                    actionComplete$$1.apply(_this, [args]);
                }
            }
            _this.notify('actioncomplete', args);
            _this.updateColumnModel();
            _this.updateTreeGridModel();
            if (args.requestType === 'reorder') {
                _this.notify('setColumnIndex', {});
            }
            _this.notify('actionComplete', { editAction: args });
            if (args.requestType === 'add' && (_this.editSettings.newRowPosition !== 'Top' && _this.editSettings.newRowPosition !== 'Bottom')) {
                _this.notify(beginAdd, args);
            }
            if (args.requestType === 'batchsave') {
                _this.notify(batchSave, args);
            }
            _this.notify('updateGridActions', args);
            if (sf.base.isBlazor() && args.requestType === 'delete' && !_this.isServerRendered) {
                var data = 'data';
                args[data] = args[data][0];
            }
            _this.trigger(actionComplete, args);
        };
    };
    TreeGrid.prototype.extendedGridEvents = function () {
        var _this = this;
        var treeGrid = this;
        this.grid.recordDoubleClick = function (args) {
            _this.trigger(recordDoubleClick, args);
            _this.notify(recordDoubleClick, args);
        };
        this.grid.detailDataBound = function (args) {
            _this.notify('detaildataBound', args);
            _this.trigger(detailDataBound, args);
        };
        this.grid.rowDataBound = function (args) {
            if (sf.base.isNullOrUndefined(this.isPrinting)) {
                sf.base.setValue('isPrinting', false, args);
            }
            else {
                sf.base.setValue('isPrinting', this.isPrinting, args);
            }
            treeGrid.renderModule.RowModifier(args);
        };
        this.grid.queryCellInfo = function (args) {
            if (sf.base.isNullOrUndefined(this.isPrinting)) {
                sf.base.setValue('isPrinting', false, args);
            }
            else {
                sf.base.setValue('isPrinting', this.isPrinting, args);
            }
            treeGrid.renderModule.cellRender(args);
        };
        this.grid.contextMenuClick = function (args) {
            _this.notify(contextMenuClick, args);
            _this.trigger(contextMenuClick, args);
        };
        this.grid.contextMenuOpen = function (args) {
            _this.notify(contextMenuOpen, args);
            _this.trigger(contextMenuOpen, args);
        };
        this.grid.queryCellInfo = function (args) {
            _this.renderModule.cellRender(args);
        };
    };
    TreeGrid.prototype.bindGridDragEvents = function () {
        var _this = this;
        var treeGrid = this;
        this.grid.rowDragStartHelper = function (args) {
            treeGrid.trigger(rowDragStartHelper, args);
        };
        this.grid.rowDragStart = function (args) {
            treeGrid.trigger(rowDragStart, args);
        };
        this.grid.rowDrag = function (args) {
            if (_this.grid.isEdit) {
                args.cancel = true;
                return;
            }
            treeGrid.notify(rowdraging, args);
            treeGrid.trigger(rowDrag, args);
        };
        this.grid.rowDrop = function (args) {
            if (_this.grid.isEdit) {
                args.cancel = true;
                return;
            }
            treeGrid.notify(rowDropped, args);
            args.cancel = true;
        };
    };
    /**
     * Renders TreeGrid component
     * @private
     */
    TreeGrid.prototype.loadGrid = function () {
        this.bindGridProperties();
        this.bindGridEvents();
        sf.base.setValue('registeredTemplate', this.registeredTemplate, this.grid);
        var ref = 'viewContainerRef';
        sf.base.setValue('viewContainerRef', this[ref], this.grid);
    };
    /**
     * AutoGenerate TreeGrid columns from first record
     * @hidden
     */
    TreeGrid.prototype.autoGenerateColumns = function () {
        if (!this.columns.length && (!this.dataModule.isRemote() && Object.keys(this.dataSource).length)) {
            this.columns = [];
            var record = void 0;
            // if (this.dataSource instanceof DataManager) {
            //   record = (<DataManager>this.dataSource).dataSource.json[0];
            // } else {
            record = this.dataSource[0];
            // }
            var keys = Object.keys(record);
            for (var i = 0; i < keys.length; i++) {
                if ([this.childMapping, this.parentIdMapping].indexOf(keys[i]) === -1) {
                    this.columns.push(keys[i]);
                }
            }
        }
    };
    TreeGrid.prototype.getGridEditSettings = function () {
        var edit = {};
        var guid = 'guid';
        edit.allowAdding = this.editSettings.allowAdding;
        edit.allowEditing = this.editSettings.allowEditing;
        edit.allowDeleting = this.editSettings.allowDeleting;
        edit.newRowPosition = this.editSettings.newRowPosition === 'Bottom' ? 'Bottom' : 'Top';
        edit.allowEditOnDblClick = this.editSettings.allowEditOnDblClick;
        edit.showConfirmDialog = this.editSettings.showConfirmDialog;
        edit.template = this.editSettings.template;
        edit.showDeleteConfirmDialog = this.editSettings.showDeleteConfirmDialog;
        edit[guid] = this.editSettings[guid];
        edit.dialog = this.editSettings.dialog;
        switch (this.editSettings.mode) {
            case 'Dialog':
                edit.mode = this.editSettings.mode;
                break;
            case 'Batch':
                edit.mode = this.editSettings.mode;
                break;
            case 'Row':
                edit.mode = 'Normal';
                break;
            case 'Cell':
                edit.mode = 'Normal';
                edit.showConfirmDialog = false;
                break;
        }
        return edit;
    };
    /**
     * Defines grid toolbar from treegrid toolbar model
     * @hidden
     */
    TreeGrid.prototype.getContextMenu = function () {
        if (this.contextMenuItems) {
            var items = [];
            for (var i = 0; i < this.contextMenuItems.length; i++) {
                switch (this.contextMenuItems[i]) {
                    case 'AddRow':
                    case exports.ContextMenuItems.AddRow:
                        items.push({ text: this.l10n.getConstant('AddRow'),
                            target: '.e-content', id: this.element.id + '_gridcontrol_cmenu_AddRow',
                            items: [{ text: this.l10n.getConstant('Above'), id: 'Above' }, { text: this.l10n.getConstant('Below'), id: 'Below' }] });
                        break;
                    default:
                        items.push(this.contextMenuItems[i]);
                }
            }
            return items;
        }
        else {
            return null;
        }
    };
    /**
     * Defines grid toolbar from treegrid toolbar model
     * @hidden
     */
    TreeGrid.prototype.getGridToolbar = function () {
        if (this.toolbar) {
            var items = [];
            for (var i = 0; i < this.toolbar.length; i++) {
                switch (this.toolbar[i]) {
                    case 'Search':
                    case exports.ToolbarItem.Search:
                        items.push('Search');
                        break;
                    case 'Print':
                    case exports.ToolbarItem.Print:
                        items.push('Print');
                        break;
                    case 'ExpandAll':
                    case exports.ToolbarItem.ExpandAll:
                        var tooltipText = this.l10n.getConstant('ExpandAll');
                        items.push({ text: tooltipText, tooltipText: tooltipText,
                            prefixIcon: 'e-expand', id: this.element.id + '_gridcontrol_expandall' });
                        break;
                    case 'CollapseAll':
                    case exports.ToolbarItem.CollapseAll:
                        var tooltip = this.l10n.getConstant('CollapseAll');
                        items.push({ text: tooltip,
                            tooltipText: tooltip, prefixIcon: 'e-collapse', id: this.element.id + '_gridcontrol_collapseall'
                        });
                        break;
                    case 'Indent':
                    case exports.ToolbarItem.RowIndent:
                        var tooltipindent = this.l10n.getConstant('RowIndent');
                        items.push({
                            text: tooltipindent, tooltipText: tooltipindent,
                            prefixIcon: 'e-indent', id: this.element.id + '_gridcontrol_indent'
                        });
                        break;
                    case 'Outdent':
                    case exports.ToolbarItem.RowOutdent:
                        var tooltipoutdent = this.l10n.getConstant('RowOutdent');
                        items.push({
                            text: tooltipoutdent, tooltipText: tooltipoutdent,
                            prefixIcon: 'e-outdent', id: this.element.id + '_gridcontrol_outdent'
                        });
                        break;
                    default:
                        items.push(this.toolbar[i]);
                }
            }
            return items;
        }
        else {
            return null;
        }
    };
    /**
     * Convert TreeGrid ColumnModel to Grid Column
     * @hidden
     */
    TreeGrid.prototype.getGridColumns = function (columns) {
        var column = columns;
        this.columnModel = [];
        var treeGridColumn;
        var gridColumn;
        var gridColumnCollection = [];
        for (var i = 0; i < column.length; i++) {
            var treeColumn = this.grid.getColumnByUid(column[i].uid);
            gridColumn = treeColumn ? treeColumn : {};
            treeGridColumn = {};
            if (typeof this.columns[i] === 'string') {
                gridColumn.field = treeGridColumn.field = this.columns[i];
            }
            else {
                for (var _i = 0, _a = Object.keys(column[i]); _i < _a.length; _i++) {
                    var prop = _a[_i];
                    gridColumn[prop] = treeGridColumn[prop] = column[i][prop];
                }
            }
            if (column[i].columns) {
                this.getGridColumns(columns[i].columns);
            }
            else {
                this.columnModel.push(new Column(treeGridColumn));
            }
            gridColumnCollection.push(gridColumn);
        }
        return gridColumnCollection;
    };
    /**
     * Called internally if any of the property value changed.
     * @hidden
     */
    /* tslint:disable-next-line:max-line-length */
    // tslint:disable-next-line:max-func-body-length
    TreeGrid.prototype.onPropertyChanged = function (newProp, oldProp) {
        var properties = Object.keys(newProp);
        var requireRefresh = false;
        var preventUpdate = 'preventUpdate';
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var prop = properties_1[_i];
            switch (prop) {
                case 'columns':
                    if (!(sf.base.isBlazor() && this.isServerRendered && this[preventUpdate])) {
                        this.grid.columns = this.getGridColumns(this.columns);
                    }
                    break;
                case 'treeColumnIndex':
                    this.grid.refreshColumns();
                    break;
                case 'allowPaging':
                    this.grid.allowPaging = this.allowPaging;
                    break;
                case 'pageSettings':
                    this.grid.pageSettings = sf.grids.getActualProperties(this.pageSettings);
                    requireRefresh = true;
                    break;
                case 'enableVirtualization':
                    this.grid.enableVirtualization = this.enableVirtualization;
                    break;
                case 'toolbar':
                    this.grid.toolbar = this.getGridToolbar();
                    break;
                case 'allowSelection':
                    this.grid.allowSelection = this.allowSelection;
                    break;
                case 'selectionSettings':
                    this.grid.selectionSettings = sf.grids.getActualProperties(this.selectionSettings);
                    break;
                case 'allowSorting':
                    this.grid.allowSorting = this.allowSorting;
                    break;
                case 'allowMultiSorting':
                    this.grid.allowMultiSorting = this.allowMultiSorting;
                    break;
                case 'sortSettings':
                    this.grid.sortSettings = sf.grids.getActualProperties(this.sortSettings);
                    break;
                case 'searchSettings':
                    this.grid.searchSettings = sf.grids.getActualProperties(this.searchSettings);
                    break;
                case 'allowFiltering':
                    this.grid.allowFiltering = this.allowFiltering;
                    break;
                case 'filterSettings':
                    this.grid.filterSettings = sf.grids.getActualProperties(this.filterSettings);
                    break;
                case 'showColumnMenu':
                    this.grid.showColumnMenu = this.showColumnMenu;
                    break;
                case 'allowRowDragAndDrop':
                    this.grid.allowRowDragAndDrop = this.allowRowDragAndDrop;
                    break;
                case 'aggregates':
                    this.grid.aggregates = sf.grids.getActualProperties(this.aggregates);
                    break;
                case 'dataSource':
                    this.isLocalData = (!(this.dataSource instanceof sf.data.DataManager) || (!sf.base.isNullOrUndefined(this.dataSource.ready))
                        || this.dataSource.adaptor instanceof sf.data.RemoteSaveAdaptor);
                    this.convertTreeData(this.dataSource);
                    if (this.isLocalData) {
                        if (isCountRequired(this)) {
                            var count = sf.base.getValue('count', this.dataSource);
                            this.grid.dataSource = { result: this.flatData, count: count };
                        }
                        else {
                            this.grid.dataSource = !(this.dataSource instanceof sf.data.DataManager) ?
                                this.flatData : new sf.data.DataManager(this.dataSource.dataSource, this.dataSource.defaultQuery, this.dataSource.adaptor);
                        }
                    }
                    else {
                        this.bindedDataSource();
                        if (this.enableVirtualization) {
                            this.grid.contentModule.removeEventListener();
                            this.grid.contentModule.eventListener('on');
                            this.grid.contentModule.renderTable();
                        }
                    }
                    break;
                case 'query':
                    this.grid.query = this.query;
                    break;
                case 'enableCollapseAll':
                    if (newProp[prop]) {
                        this.collapseAll();
                    }
                    else {
                        this.expandAll();
                    }
                    break;
                case 'expandStateMapping':
                    this.refresh();
                    break;
                case 'gridLines':
                    this.grid.gridLines = this.gridLines;
                    break;
                case 'rowTemplate':
                    this.grid.rowTemplate = sf.grids.getActualProperties(this.rowTemplate);
                    break;
                case 'frozenRows':
                    this.grid.frozenRows = this.frozenRows;
                    break;
                case 'frozenColumns':
                    this.grid.frozenColumns = this.frozenColumns;
                    break;
                case 'rowHeight':
                    this.grid.rowHeight = this.rowHeight;
                    break;
                case 'height':
                    if (!sf.base.isNullOrUndefined(this.height) && typeof (this.height) === 'string' && this.height.indexOf('%') !== -1) {
                        this.element.style.height = this.height;
                    }
                    this.grid.height = this.height;
                    break;
                case 'width':
                    if (!sf.base.isNullOrUndefined(this.width) && typeof (this.width) === 'string' && this.width.indexOf('%') !== -1) {
                        this.element.style.width = this.width;
                    }
                    this.grid.width = this.width;
                    break;
                case 'locale':
                    this.grid.locale = this.locale;
                    break;
                case 'selectedRowIndex':
                    this.grid.selectedRowIndex = this.selectedRowIndex;
                    break;
                case 'enableAltRow':
                    this.grid.enableAltRow = this.enableAltRow;
                    break;
                case 'enableHover':
                    this.grid.enableHover = this.enableHover;
                    break;
                case 'enableAutoFill':
                    this.grid.enableAutoFill = this.enableAutoFill;
                    break;
                case 'allowExcelExport':
                    this.grid.allowExcelExport = this.allowExcelExport;
                    break;
                case 'allowPdfExport':
                    this.grid.allowPdfExport = this.allowPdfExport;
                    break;
                case 'enableRtl':
                    this.grid.enableRtl = this.enableRtl;
                    break;
                case 'allowReordering':
                    this.grid.allowReordering = this.allowReordering;
                    break;
                case 'allowResizing':
                    this.grid.allowResizing = this.allowResizing;
                    break;
                case 'textWrapSettings':
                    this.grid.textWrapSettings = sf.grids.getActualProperties(this.textWrapSettings);
                    break;
                case 'allowTextWrap':
                    this.grid.allowTextWrap = sf.grids.getActualProperties(this.allowTextWrap);
                    this.refresh();
                    break;
                case 'contextMenuItems':
                    this.grid.contextMenuItems = this.getContextMenu();
                    break;
                case 'showColumnChooser':
                    this.grid.showColumnChooser = this.showColumnChooser;
                    break;
                case 'detailTemplate':
                    this.grid.detailTemplate = sf.grids.getActualProperties(this.detailTemplate);
                    break;
                case 'columnMenuItems':
                    this.grid.columnMenuItems = sf.grids.getActualProperties(this.columnMenuItems);
                    break;
                case 'editSettings':
                    if (this.grid.isEdit && this.grid.editSettings.mode === 'Normal' && newProp[prop].mode &&
                        (newProp[prop].mode === 'Cell' || newProp[prop].mode === 'Row')) {
                        this.grid.closeEdit();
                    }
                    this.grid.editSettings = this.getGridEditSettings();
                    break;
            }
            if (requireRefresh) {
                this.refresh();
            }
        }
    };
    /**
     * Destroys the component (detaches/removes all event handlers, attributes, classes, and empties the component element).
     * @method destroy
     * @return {void}
     */
    TreeGrid.prototype.destroy = function () {
        this.removeListener();
        this.unwireEvents();
        _super.prototype.destroy.call(this);
        if (this.grid) {
            this.grid.destroy();
        }
        if (this.dataModule) {
            this.dataModule.destroy();
        }
        var modules = ['dataModule', 'sortModule', 'renderModule', 'filterModule', 'printModule', 'clipboardModule',
            'excelExportModule', 'pdfExportModule', 'toolbarModule', 'summaryModule', 'reorderModule', 'resizeModule',
            'pagerModule', 'keyboardModule', 'columnMenuModule', 'contextMenuModule', 'editModule', 'virtualScrollModule',
            'selectionModule', 'detailRow', 'rowDragAndDropModule', 'freezeModule'];
        for (var i = 0; i < modules.length; i++) {
            if (this[modules[i]]) {
                this[modules[i]] = null;
            }
        }
        this.element.innerHTML = '';
        this.grid = null;
    };
    /**
     * Update the TreeGrid model
     * @method dataBind
     * @return {void}
     * @private
     */
    TreeGrid.prototype.dataBind = function () {
        _super.prototype.dataBind.call(this);
        if (!(sf.base.isBlazor() && this.isServerRendered) || sf.base.getValue('isRendered', this.grid) && !this.initialRender) {
            this.grid.dataBind();
        }
    };
    /**
     * Get the properties to be maintained in the persisted state.
     * @return {string}
     * @hidden
     */
    TreeGrid.prototype.getPersistData = function () {
        var keyEntity = ['pageSettings', 'sortSettings',
            'filterSettings', 'columns', 'searchSettings', 'selectedRowIndex'];
        var ignoreOnPersist = {
            pageSettings: ['template', 'pageSizes', 'pageSizeMode', 'enableQueryString', 'totalRecordsCount', 'pageCount'],
            filterSettings: ['type', 'mode', 'showFilterBarStatus', 'immediateModeDelay', 'ignoreAccent', 'hierarchyMode'],
            searchSettings: ['fields', 'operator', 'ignoreCase'],
            sortSettings: [], columns: [], selectedRowIndex: []
        };
        var ignoreOnColumn = ['filter', 'edit', 'filterBarTemplate', 'headerTemplate', 'template',
            'commandTemplate', 'commands', 'dataSource'];
        for (var i = 0; i < keyEntity.length; i++) {
            var currentObject = this[keyEntity[i]];
            for (var _i = 0, _a = ignoreOnPersist[keyEntity[i]]; _i < _a.length; _i++) {
                var val = _a[_i];
                delete currentObject[val];
            }
        }
        this.ignoreInArrays(ignoreOnColumn, this.columns);
        return this.addOnPersist(keyEntity);
    };
    TreeGrid.prototype.ignoreInArrays = function (ignoreOnColumn, columns) {
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].columns) {
                this.ignoreInColumn(ignoreOnColumn, columns[i]);
                this.ignoreInArrays(ignoreOnColumn, columns[i].columns);
            }
            else {
                this.ignoreInColumn(ignoreOnColumn, columns[i]);
            }
        }
    };
    TreeGrid.prototype.ignoreInColumn = function (ignoreOnColumn, column) {
        for (var i = 0; i < ignoreOnColumn.length; i++) {
            delete column[ignoreOnColumn[i]];
            column.filter = {};
        }
    };
    TreeGrid.prototype.mouseClickHandler = function (e) {
        if (!sf.base.isNullOrUndefined(e.touches)) {
            return;
        }
        var target = e.target;
        if ((target.classList.contains('e-treegridexpand') ||
            target.classList.contains('e-treegridcollapse')) && (!this.isEditCollapse && !this.grid.isEdit)) {
            this.expandCollapseRequest(target);
        }
        this.isEditCollapse = false;
        this.notify('checkboxSelection', { target: target });
    };
    /**
     * Returns TreeGrid rows
     * @return {HTMLTableRowElement[]}
     */
    TreeGrid.prototype.getRows = function () {
        return this.grid.getRows();
    };
    /**
     * Gets the pager of the TreeGrid.
     * @return {Element}
     */
    TreeGrid.prototype.getPager = function () {
        return this.grid.getPager(); //get element from pager
    };
    /**
     * Adds a new record to the TreeGrid. Without passing parameters, it adds empty rows.
     * > `editSettings.allowEditing` should be true.
     * @param {Object} data - Defines the new add record data.
     * @param {number} index - Defines the row index to be added.
     * @param {RowPosition} position - Defines the new row position to be added.
     */
    TreeGrid.prototype.addRecord = function (data, index, position) {
        if (this.editModule) {
            this.editModule.addRecord(data, index, position);
        }
    };
    /**
     * Cancels edited state.
     */
    TreeGrid.prototype.closeEdit = function () {
        if (this.grid.editModule) {
            this.grid.editModule.closeEdit();
        }
    };
    /**
     * Saves the cell that is currently edited. It does not save the value to the DataSource.
     */
    TreeGrid.prototype.saveCell = function () {
        if (this.grid.editModule) {
            this.grid.editModule.saveCell();
        }
    };
    /**
     * To update the specified cell by given value without changing into edited state.
     * @param {number} rowIndex Defines the row index.
     * @param {string} field Defines the column field.
     * @param {string | number | boolean | Date} value - Defines the value to be changed.
     */
    TreeGrid.prototype.updateCell = function (rowIndex, field, value) {
        if (this.grid.editModule) {
            this.grid.editModule.updateCell(rowIndex, field, value);
        }
    };
    /**
     * To update the specified row by given values without changing into edited state.
     * @param {number} index Defines the row index.
     * @param {Object} data Defines the data object to be updated.
     */
    TreeGrid.prototype.updateRow = function (index, data) {
        if (this.grid.editModule) {
            var griddata = this.grid.getCurrentViewRecords()[index];
            sf.base.extend(griddata, data);
            this.grid.editModule.updateRow(index, griddata);
        }
    };
    /**
     * Delete a record with Given options. If fieldName and data is not given then TreeGrid will delete the selected record.
     * > `editSettings.allowDeleting` should be true.
     * @param {string} fieldName - Defines the primary key field, 'Name of the column'.
     * @param {Object} data - Defines the JSON data of the record to be deleted.
     */
    TreeGrid.prototype.deleteRecord = function (fieldName, data) {
        if (this.grid.editModule) {
            this.grid.editModule.deleteRecord(fieldName, data);
        }
    };
    /**
     * To edit any particular row by TR element.
     * @param {HTMLTableRowElement} tr - Defines the table row to be edited.
     */
    TreeGrid.prototype.startEdit = function (row) {
        if (this.grid.editModule) {
            this.grid.editModule.startEdit(row);
        }
    };
    /**
     * To edit any particular cell using row index and cell index.
     * @param {number} rowIndex - Defines row index to edit a particular cell.
     * @param {string} field - Defines the field name of the column to perform cell edit.
     */
    TreeGrid.prototype.editCell = function (rowIndex, field) {
        if (this.editModule) {
            this.editModule.editCell(rowIndex, field);
        }
    };
    /**
     * Enables or disables ToolBar items.
     * @param {string[]} items - Defines the collection of itemID of ToolBar items.
     * @param {boolean} isEnable - Defines the items to be enabled or disabled.
     */
    TreeGrid.prototype.enableToolbarItems = function (items, isEnable) {
        if (this.grid.toolbarModule) {
            this.grid.toolbarModule.enableItems(items, isEnable);
        }
    };
    /**
     * If TreeGrid is in editable state, you can save a record by invoking endEdit.
     */
    TreeGrid.prototype.endEdit = function () {
        if (this.grid.editModule) {
            this.grid.editModule.endEdit();
        }
    };
    /**
     * Column chooser can be displayed on screen by given position(X and Y axis).
     * @param  {number} X - Defines the X axis.
     * @param  {number} Y - Defines the Y axis.
     * @return {void}
     */
    TreeGrid.prototype.openColumnChooser = function (x, y) {
        if (this.columnChooserModule) {
            this.columnChooserModule.openColumnChooser(x, y);
        }
    };
    /**
     * Delete any visible row by TR element.
     * @param {HTMLTableRowElement} tr - Defines the table row element.
     */
    TreeGrid.prototype.deleteRow = function (tr) {
        if (this.grid.editModule) {
            this.grid.editModule.deleteRow(tr);
        }
    };
    /**
     * Get the names of the primary key columns of the TreeGrid.
     * @return {string[]}
     */
    TreeGrid.prototype.getPrimaryKeyFieldNames = function () {
        return this.grid.getPrimaryKeyFieldNames();
    };
    /**
     * Updates particular cell value based on the given primary key value.
     * > Primary key column must be specified using `columns.isPrimaryKey` property.
     * @param {string| number} key - Specifies the PrimaryKey value of dataSource.
     * @param {string } field - Specifies the field name which you want to update.
     * @param {string | number | boolean | Date} value - To update new value for the particular cell.
     */
    TreeGrid.prototype.setCellValue = function (key, field, value) {
        this.grid.setCellValue(key, field, value);
    };
    /**
     * Updates and refresh the particular row values based on the given primary key value.
     * > Primary key column must be specified using `columns.isPrimaryKey` property.
     *  @param {string| number} key - Specifies the PrimaryKey value of dataSource.
     *  @param {Object} rowData - To update new data for the particular row.
     */
    TreeGrid.prototype.setRowData = function (key, rowData) {
        var currentRecords = this.getCurrentViewRecords();
        var primaryKey = this.grid.getPrimaryKeyFieldNames()[0];
        var level = 0;
        var record = {};
        currentRecords.some(function (value, i, e) {
            if (value[primaryKey] === key) {
                record = value;
                return true;
            }
            else {
                return false;
            }
        });
        level = record.level;
        rowData.level = level;
        rowData.index = record.index;
        rowData.childRecords = record.childRecords;
        rowData.taskData = record.taskData;
        rowData.uniqueID = record.uniqueID;
        rowData.parentItem = record.parentItem;
        rowData.checkboxState = record.checkboxState;
        rowData.hasChildRecords = record.hasChildRecords;
        rowData.parentUniqueID = record.parentUniqueID;
        rowData.expanded = record.expanded;
        this.grid.setRowData(key, rowData);
    };
    /**
     * Navigates to the specified target page.
     * @param  {number} pageNo - Defines the page number to navigate.
     * @return {void}
     */
    TreeGrid.prototype.goToPage = function (pageNo) {
        if (this.grid.pagerModule) {
            this.grid.pagerModule.goToPage(pageNo);
        }
    };
    /**
     * Defines the text of external message.
     * @param  {string} message - Defines the message to update.
     * @return {void}
     */
    TreeGrid.prototype.updateExternalMessage = function (message) {
        if (this.pagerModule) {
            this.grid.pagerModule.updateExternalMessage(message);
        }
    };
    /**
     * Gets a cell by row and column index.
     * @param  {number} rowIndex - Specifies the row index.
     * @param  {number} columnIndex - Specifies the column index.
     * @return {Element}
     */
    TreeGrid.prototype.getCellFromIndex = function (rowIndex, columnIndex) {
        return this.grid.getCellFromIndex(rowIndex, columnIndex);
    };
    /**
     * Gets a Column by column name.
     * @param  {string} field - Specifies the column name.
     * @return {Column}
     */
    TreeGrid.prototype.getColumnByField = function (field) {
        if (sf.base.isBlazor() && this.isServerRendered) {
            return sf.grids.iterateArrayOrObject(this.grid.columns, function (item, index) {
                if (item.field === field) {
                    return item;
                }
                return undefined;
            })[0];
        }
        else {
            return sf.grids.iterateArrayOrObject(this.columnModel, function (item, index) {
                if (item.field === field) {
                    return item;
                }
                return undefined;
            })[0];
        }
    };
    /**
     * Gets a column by UID.
     * @param  {string} uid - Specifies the column UID.
     * @return {Column}
     */
    TreeGrid.prototype.getColumnByUid = function (uid) {
        if (sf.base.isBlazor() && this.isServerRendered) {
            return sf.grids.iterateArrayOrObject(this.grid.columns, function (item, index) {
                if (item.uid === uid) {
                    return item;
                }
                return undefined;
            })[0];
        }
        else {
            return sf.grids.iterateArrayOrObject(this.columnModel, function (item, index) {
                if (item.uid === uid) {
                    return item;
                }
                return undefined;
            })[0];
        }
    };
    /**
     * Gets the collection of column fields.
     * @return {string[]}
     */
    TreeGrid.prototype.getColumnFieldNames = function () {
        return this.grid.getColumnFieldNames();
    };
    /**
     * Gets the footer div of the TreeGrid.
     * @return {Element}
     */
    TreeGrid.prototype.getFooterContent = function () {
        return this.grid.getFooterContent();
    };
    /**
     * Gets the footer table element of the TreeGrid.
     * @return {Element}
     */
    TreeGrid.prototype.getFooterContentTable = function () {
        return this.grid.getFooterContentTable();
    };
    /**
     * Shows a column by its column name.
     * @param  {string|string[]} keys - Defines a single or collection of column names.
     * @param  {string} showBy - Defines the column key either as field name or header text.
     * @return {void}
     */
    TreeGrid.prototype.showColumns = function (keys, showBy) {
        this.grid.showColumns(keys, showBy);
        this.updateColumnModel();
    };
    /**
     * Hides a column by column name.
     * @param  {string|string[]} keys - Defines a single or collection of column names.
     * @param  {string} hideBy - Defines the column key either as field name or header text.
     * @return {void}
     */
    TreeGrid.prototype.hideColumns = function (keys, hideBy) {
        this.grid.hideColumns(keys, hideBy);
        this.updateColumnModel();
    };
    /**
     * Gets a column header by column name.
     * @param  {string} field - Specifies the column name.
     * @return {Element}
     */
    TreeGrid.prototype.getColumnHeaderByField = function (field) {
        return this.grid.getColumnHeaderByField(field);
    };
    /**
     * Gets a column header by column index.
     * @param  {number} index - Specifies the column index.
     * @return {Element}
     */
    TreeGrid.prototype.getColumnHeaderByIndex = function (index) {
        return this.grid.getColumnHeaderByIndex(index);
    };
    /**
     * Gets a column header by UID.
     * @param  {string} field - Specifies the column uid.
     * @return {Element}
     */
    TreeGrid.prototype.getColumnHeaderByUid = function (uid) {
        return this.grid.getColumnHeaderByUid(uid);
    };
    /**
     * Gets a column index by column name.
     * @param  {string} field - Specifies the column name.
     * @return {number}
     */
    TreeGrid.prototype.getColumnIndexByField = function (field) {
        return this.grid.getColumnIndexByField(field);
    };
    /**
     * Gets a column index by UID.
     * @param  {string} uid - Specifies the column UID.
     * @return {number}
     */
    TreeGrid.prototype.getColumnIndexByUid = function (uid) {
        return this.grid.getColumnIndexByUid(uid);
    };
    /**
     * Gets the columns from the TreeGrid.
     * @return {Column[]}
     */
    TreeGrid.prototype.getColumns = function (isRefresh) {
        if (sf.base.isBlazor() && this.isServerRendered) {
            return this.grid.columns;
        }
        else {
            this.updateColumnModel(this.grid.getColumns(isRefresh));
            return this.columnModel;
        }
    };
    TreeGrid.prototype.updateColumnModel = function (column) {
        this.columnModel = [];
        var stackedHeader = false;
        var gridColumns = sf.base.isNullOrUndefined(column) ? this.grid.getColumns() : column;
        var gridColumn;
        for (var i = 0; i < gridColumns.length; i++) {
            gridColumn = {};
            for (var _i = 0, _a = Object.keys(gridColumns[i]); _i < _a.length; _i++) {
                var prop = _a[_i];
                if (!sf.base.isBlazor() || prop !== 'edit') {
                    gridColumn[prop] = gridColumns[i][prop];
                }
            }
            this.columnModel.push(new Column(gridColumn));
        }
        if (!sf.base.isBlazor() || !this.isServerRendered) {
            var merge$$1 = 'deepMerge';
            this[merge$$1] = ['columns']; // Workaround for blazor updateModel
            if (this.grid.columns.length !== this.columnModel.length) {
                stackedHeader = true;
            }
            if (!stackedHeader) {
                this.setProperties({ columns: this.columnModel }, true);
            }
            this[merge$$1] = undefined; // Workaround for blazor updateModel
        }
        return this.columnModel;
    };
    /**
     * Gets the content div of the TreeGrid.
     * @return {Element}
     */
    TreeGrid.prototype.getContent = function () {
        return this.grid.getContent();
    };
    TreeGrid.prototype.mergePersistTreeGridData = function () {
        var persist1 = 'mergePersistGridData';
        this.grid[persist1].apply(this);
    };
    TreeGrid.prototype.mergeColumns = function (storedColumn, columns) {
        var persist2 = 'mergeColumns';
        this.grid[persist2].apply(this, [storedColumn, columns]);
    };
    TreeGrid.prototype.updateTreeGridModel = function () {
        this.setProperties({ filterSettings: sf.grids.getObject('properties', this.grid.filterSettings) }, true);
        this.setProperties({ pageSettings: sf.grids.getObject('properties', this.grid.pageSettings) }, true);
        this.setProperties({ searchSettings: sf.grids.getObject('properties', this.grid.searchSettings) }, true);
        this.setProperties({ sortSettings: sf.grids.getObject('properties', this.grid.sortSettings) }, true);
    };
    /**
     * Gets the content table of the TreeGrid.
     * @return {Element}
     */
    TreeGrid.prototype.getContentTable = function () {
        return this.grid.getContentTable();
    };
    /**
     * Gets all the TreeGrid's data rows.
     * @return {Element[]}
     */
    TreeGrid.prototype.getDataRows = function () {
        var dRows = [];
        var rows = this.grid.getDataRows();
        for (var i = 0, len = rows.length; i < len; i++) {
            if (!rows[i].classList.contains('e-summaryrow')) {
                dRows.push(rows[i]);
            }
        }
        return dRows;
    };
    /**
     * Get current visible data of TreeGrid.
     * @return {Object[]}
     * @isGenericType true
     */
    TreeGrid.prototype.getCurrentViewRecords = function () {
        return this.grid.currentViewData;
    };
    /**
     * Gets the added, edited,and deleted data before bulk save to the DataSource in batch mode.
     * @return {Object}
     */
    TreeGrid.prototype.getBatchChanges = function () {
        return this.grid.editModule.getBatchChanges();
    };
    /**
     * Gets the header div of the TreeGrid.
     * @return {Element}
     */
    TreeGrid.prototype.getHeaderContent = function () {
        return this.grid.getHeaderContent();
    };
    /**
     * Gets the header table element of the TreeGrid.
     * @return {Element}
     */
    TreeGrid.prototype.getHeaderTable = function () {
        return this.grid.getHeaderTable();
    };
    /**
     * Gets a row by index.
     * @param  {number} index - Specifies the row index.
     * @return {Element}
     */
    TreeGrid.prototype.getRowByIndex = function (index) {
        return this.grid.getRowByIndex(index);
    };
    /**
     * Get a row information based on cell
     * @param {Element}
     * @return RowInfo
     */
    TreeGrid.prototype.getRowInfo = function (target) {
        return this.grid.getRowInfo(target);
    };
    /**
     * Gets UID by column name.
     * @param  {string} field - Specifies the column name.
     * @return {string}
     */
    TreeGrid.prototype.getUidByColumnField = function (field) {
        return this.grid.getUidByColumnField(field);
    };
    /**
     * Gets the visible columns from the TreeGrid.
     * @return {Column[]}
     */
    TreeGrid.prototype.getVisibleColumns = function () {
        var cols = [];
        for (var _i = 0, _a = this.columnModel; _i < _a.length; _i++) {
            var col = _a[_i];
            if (col.visible) {
                cols.push(col);
            }
        }
        return cols;
    };
    /**
     * By default, TreeGrid shows the spinner for all its actions. You can use this method to show spinner at your needed time.
     */
    TreeGrid.prototype.showSpinner = function () {
        sf.popups.showSpinner(this.element);
    };
    /**
     * Manually shown spinner needs to hide by `hideSpinnner`.
     */
    TreeGrid.prototype.hideSpinner = function () {
        sf.popups.hideSpinner(this.element);
    };
    /**
     * Refreshes the TreeGrid header and content.
     */
    TreeGrid.prototype.refresh = function () {
        this.grid.refresh();
    };
    /**
     * Get the records of checked rows.
     * @return {Object[]}
     * @isGenericType true
     */
    TreeGrid.prototype.getCheckedRecords = function () {
        return this.selectionModule.getCheckedrecords();
    };
    /**
     * Get the indexes of checked rows.
     * @return {number[]}
     */
    TreeGrid.prototype.getCheckedRowIndexes = function () {
        return this.selectionModule.getCheckedRowIndexes();
    };
    /**
     * Checked the checkboxes using rowIndexes.
     */
    TreeGrid.prototype.selectCheckboxes = function (indexes) {
        this.selectionModule.selectCheckboxes(indexes);
    };
    /**
     * Refreshes the TreeGrid column changes.
     */
    TreeGrid.prototype.refreshColumns = function (refreshUI) {
        if (sf.base.isNullOrUndefined(refreshUI) || refreshUI) {
            this.grid.columns = this.getGridColumns(this.columns);
            this.grid.refreshColumns();
        }
        else {
            this.grid.setProperties({ columns: this.getGridColumns(this.columns) }, true);
        }
    };
    /**
     * Refreshes the TreeGrid header.
     */
    TreeGrid.prototype.refreshHeader = function () {
        this.grid.refreshHeader();
    };
    /**
     * Expands or collapse child records
     * @return {string}
     * @hidden
     */
    TreeGrid.prototype.expandCollapseRequest = function (target) {
        if (this.editSettings.mode === 'Batch') {
            var obj = 'dialogObj';
            var showDialog = 'showDialog';
            if (this.getBatchChanges()[this.changedRecords].length ||
                this.getBatchChanges()[this.deletedRecords].length || this.getBatchChanges()[this.addedRecords].length) {
                var dialogObj = this.grid.editModule[obj];
                this.grid.editModule[showDialog]('CancelEdit', dialogObj);
                this.targetElement = target;
                return;
            }
        }
        if (this.rowTemplate) {
            var rowInfo = target.closest('.e-treerowcell').parentElement;
            var record = this.getCurrentViewRecords()[rowInfo.rowIndex];
            if (target.classList.contains('e-treegridexpand')) {
                this.collapseRow(rowInfo, record);
            }
            else {
                this.expandRow(rowInfo, record);
            }
        }
        else {
            var rowInfo = this.grid.getRowInfo(target);
            var record = rowInfo.rowData;
            if (target.classList.contains('e-treegridexpand')) {
                this.collapseRow(rowInfo.row, record);
            }
            else {
                this.expandRow(rowInfo.row, record);
            }
        }
    };
    /**
     * Expands child rows
     * @return {void}
     */
    TreeGrid.prototype.expandRow = function (row, record) {
        var _this = this;
        record = this.getCollapseExpandRecords(row, record);
        if (!sf.base.isNullOrUndefined(row) && row.cells[0].classList.contains('e-lastrowcell')) {
            this.lastRowBorder(row, false);
        }
        var args = { data: record, row: row, cancel: false };
        this.trigger(expanding, args, function (expandingArgs) {
            if (!expandingArgs.cancel) {
                _this.expandCollapse('expand', row, record);
                if (!(isRemoteData(_this) && !isOffline(_this)) && !isCountRequired(_this)) {
                    var collapseArgs = { data: record, row: row };
                    _this.trigger(expanded, collapseArgs);
                }
            }
        });
    };
    TreeGrid.prototype.getCollapseExpandRecords = function (row, record) {
        if (this.allowPaging && this.pageSettings.pageSizeMode === 'All' && this.isExpandAll && sf.base.isNullOrUndefined(record) &&
            !isRemoteData(this)) {
            record = this.flatData.filter(function (e) {
                return e.hasChildRecords;
            });
        }
        else if (sf.base.isNullOrUndefined(record)) {
            record = this.grid.getCurrentViewRecords()[row.rowIndex];
        }
        return record;
    };
    /**
     * Collapses child rows
     * @return {void}
     */
    TreeGrid.prototype.collapseRow = function (row, record) {
        var _this = this;
        record = this.getCollapseExpandRecords(row, record);
        var args = { data: record, row: row, cancel: false };
        this.trigger(collapsing, args, function (collapsingArgs) {
            if (!collapsingArgs.cancel) {
                _this.expandCollapse('collapse', row, record);
                var collapseArgs = { data: record, row: row };
                if (!isRemoteData(_this)) {
                    _this.trigger(collapsed, collapseArgs);
                }
            }
        });
    };
    /**
     * Expands the records at specific hierarchical level
     * @return {void}
     */
    TreeGrid.prototype.expandAtLevel = function (level) {
        if (((this.allowPaging && this.pageSettings.pageSizeMode === 'All') || this.enableVirtualization) && !isRemoteData(this)) {
            var rec = this.grid.dataSource.filter(function (e) {
                if (e.hasChildRecords && e.level === level) {
                    e.expanded = true;
                }
                return e.hasChildRecords && e.level === level;
            });
            this.expandRow(null, rec);
        }
        else {
            var rec = this.getRecordDetails(level);
            var row = sf.grids.getObject('rows', rec);
            var record = sf.grids.getObject('records', rec);
            for (var i = 0; i < record.length; i++) {
                this.expandRow(row[i], record[i]);
            }
        }
    };
    TreeGrid.prototype.getRecordDetails = function (level) {
        var rows = this.getRows().filter(function (e) {
            return (e.className.indexOf('level' + level) !== -1
                && (e.querySelector('.e-treegridcollapse') || e.querySelector('.e-treegridexpand')));
        });
        var records = this.getCurrentViewRecords().filter(function (e) { return e.level === level && e.hasChildRecords; });
        var obj = { records: records, rows: rows };
        return obj;
    };
    /**
     * Collapses the records at specific hierarchical level
     * @return {void}
     */
    TreeGrid.prototype.collapseAtLevel = function (level) {
        if (((this.allowPaging && this.pageSettings.pageSizeMode === 'All') || this.enableVirtualization) && !isRemoteData(this)) {
            var record = this.grid.dataSource.filter(function (e) {
                if (e.hasChildRecords && e.level === level) {
                    e.expanded = false;
                }
                return e.hasChildRecords && e.level === level;
            });
            this.collapseRow(null, record);
        }
        else {
            var rec = this.getRecordDetails(level);
            var rows = sf.grids.getObject('rows', rec);
            var records = sf.grids.getObject('records', rec);
            for (var i = 0; i < records.length; i++) {
                this.collapseRow(rows[i], records[i]);
            }
        }
    };
    /**
     * Expands All the rows
     * @return {void}
     */
    TreeGrid.prototype.expandAll = function () {
        this.expandCollapseAll('expand');
    };
    /**
     * Collapses All the rows
     * @return {void}
     */
    TreeGrid.prototype.collapseAll = function () {
        this.expandCollapseAll('collapse');
    };
    TreeGrid.prototype.expandCollapseAll = function (action) {
        var rows = this.getRows().filter(function (e) {
            return e.querySelector('.e-treegrid' + (action === 'expand' ? 'collapse' : 'expand'));
        });
        this.isExpandAll = true;
        this.isCollapseAll = true;
        if (((this.allowPaging && this.pageSettings.pageSizeMode === 'All') || this.enableVirtualization) && !isRemoteData(this)) {
            this.flatData.filter(function (e) {
                if (e.hasChildRecords) {
                    e.expanded = action === 'collapse' ? false : true;
                }
            });
            if (rows.length) {
                action === 'collapse' ? this.collapseRow(rows[0]) : this.expandRow(rows[0]);
            }
            else {
                var isExpandCollapseall = this.enableCollapseAll;
                this.setProperties({ enableCollapseAll: true }, true);
                this.grid.pagerModule.goToPage(1);
                this.setProperties({ enableCollapseAll: isExpandCollapseall }, true);
            }
        }
        else {
            for (var i = 0; i < rows.length; i++) {
                action === 'collapse' ? this.collapseRow(rows[i]) : this.expandRow(rows[i]);
            }
        }
        this.isExpandAll = false;
        this.isCollapseAll = false;
    };
    TreeGrid.prototype.expandCollapse = function (action, row, record, isChild) {
        var expandingArgs = { row: row, data: record, childData: [], requestType: action };
        if (!isRemoteData(this) && action === 'expand' && this.isSelfReference && isCountRequired(this)) {
            this.updateChildOnDemand(expandingArgs);
        }
        var gridRows = this.getRows();
        if (this.rowTemplate) {
            var rows = this.getContentTable().rows;
            gridRows = [].slice.call(rows);
        }
        var rowIndex;
        if (sf.base.isNullOrUndefined(row)) {
            rowIndex = this.getCurrentViewRecords().indexOf(record);
            row = gridRows[rowIndex];
        }
        else {
            rowIndex = +row.getAttribute('aria-rowindex');
        }
        if (!sf.base.isNullOrUndefined(row)) {
            row.setAttribute('aria-expanded', action === 'expand' ? 'true' : 'false');
        }
        if (((this.allowPaging && this.pageSettings.pageSizeMode === 'All') || this.enableVirtualization) && !isRemoteData(this)
            && !isCountRequired(this)) {
            this.notify(localPagedExpandCollapse, { action: action, row: row, record: record });
        }
        else {
            var displayAction = void 0;
            if (action === 'expand') {
                displayAction = 'table-row';
                if (!isChild) {
                    record.expanded = true;
                    this.uniqueIDCollection[record.uniqueID].expanded = record.expanded;
                }
                var targetEle = row.getElementsByClassName('e-treegridcollapse')[0];
                if (isChild && !sf.base.isNullOrUndefined(record[this.expandStateMapping]) &&
                    record[this.expandStateMapping] && sf.base.isNullOrUndefined(targetEle)) {
                    targetEle = row.getElementsByClassName('e-treegridexpand')[0];
                }
                if (sf.base.isNullOrUndefined(targetEle)) {
                    return;
                }
                if (!targetEle.classList.contains('e-treegridexpand')) {
                    sf.base.addClass([targetEle], 'e-treegridexpand');
                }
                sf.base.removeClass([targetEle], 'e-treegridcollapse');
            }
            else {
                displayAction = 'none';
                if (!isChild) {
                    record.expanded = false;
                    this.uniqueIDCollection[record.uniqueID].expanded = record.expanded;
                }
                var targetEle = row.getElementsByClassName('e-treegridexpand')[0];
                if (isChild && !sf.base.isNullOrUndefined(record[this.expandStateMapping]) &&
                    !record[this.expandStateMapping] && sf.base.isNullOrUndefined(targetEle)) {
                    targetEle = row.getElementsByClassName('e-treegridcollapse')[0];
                }
                if (sf.base.isNullOrUndefined(targetEle)) {
                    return;
                }
                if (!targetEle.classList.contains('e-treegridcollapse')) {
                    sf.base.addClass([targetEle], 'e-treegridcollapse');
                }
                sf.base.removeClass([targetEle], 'e-treegridexpand');
            }
            var detailrows = gridRows.filter(function (r) {
                return r.classList.contains('e-griddetailrowindex' + record.index + 'level' + (record.level + 1));
            });
            if (isRemoteData(this) && !isOffline(this)) {
                this.remoteExpand(action, row, record, isChild);
            }
            else {
                if (!isCountRequired(this) || action === 'collapse') {
                    this.localExpand(action, row, record, isChild);
                }
            }
            if (this.isPixelHeight() && !row.cells[0].classList.contains('e-lastrowcell')) {
                var totalRows = this.getRows();
                for (var i = totalRows.length - 1; i > 0; i--) {
                    if (!isHidden(totalRows[i])) {
                        var table = this.getContentTable();
                        var sHeight = table.scrollHeight;
                        var clientHeight = this.getContent().clientHeight;
                        this.lastRowBorder(totalRows[i], sHeight <= clientHeight);
                        break;
                    }
                }
            }
            this.notify('rowExpandCollapse', { detailrows: detailrows, action: displayAction, record: record, row: row });
            this.updateAltRow(gridRows);
        }
    };
    TreeGrid.prototype.updateChildOnDemand = function (expandingArgs) {
        var _this = this;
        var deff = new sf.data.Deferred();
        var childDataBind = 'childDataBind';
        expandingArgs[childDataBind] = deff.resolve;
        var record = expandingArgs.data;
        this.trigger(dataStateChange, expandingArgs);
        deff.promise.then(function (e) {
            if (expandingArgs.childData.length) {
                var currentData = (_this.flatData);
                var index = 0;
                for (var i = 0; i < currentData.length; i++) {
                    if (currentData[i].taskData === record.taskData) {
                        index = i;
                        break;
                    }
                }
                var data_1 = sf.base.getValue('result', _this.dataSource);
                var childData = extendArray(expandingArgs.childData);
                var length_1 = record[_this.childMapping] ?
                    record[_this.childMapping].length > childData.length ? record[_this.childMapping].length : childData.length : childData.length;
                for (var i = 0; i < length_1; i++) {
                    if (record[_this.childMapping]) {
                        data_1.filter(function (e, i) {
                            if (e[_this.parentIdMapping] === record[_this.idMapping]) {
                                data_1.splice(i, 1);
                            }
                        });
                    }
                    if (childData[i]) {
                        childData[i].level = record.level + 1;
                        childData[i].index = Math.ceil(Math.random() * 1000);
                        childData[i].parentItem = sf.base.extend({}, record);
                        childData[i].taskData = sf.base.extend({}, childData[i]);
                        delete childData[i].parentItem.childRecords;
                        delete childData[i].taskData.parentItem;
                        childData[i].parentUniqueID = record.uniqueID;
                        childData[i].uniqueID = sf.grids.getUid(_this.element.id + '_data_');
                        sf.base.setValue('uniqueIDCollection.' + childData[i].uniqueID, childData[i], _this);
                        if (!sf.base.isNullOrUndefined(childData[i][_this.childMapping]) ||
                            (childData[i][_this.hasChildMapping] && isCountRequired(_this))) {
                            childData[i].hasChildRecords = true;
                        }
                        currentData.splice(index + 1 + i, record[_this.childMapping] && record[_this.childMapping][i] ? 1 : 0, childData[i]);
                    }
                    else {
                        currentData.splice(index + 1 + i, 1);
                    }
                }
                currentData[index][_this.childMapping] = childData;
                currentData[index].childRecords = childData;
                currentData[index].expanded = true;
                sf.base.setValue('uniqueIDCollection.' + currentData[index].uniqueID, currentData[index], _this);
                for (var j = 0; j < expandingArgs.childData.length; j++) {
                    data_1.push(expandingArgs.childData[j]);
                }
            }
            _this.isExpandRefresh = true;
            _this.refresh();
            _this.trigger(expanded, expandingArgs);
        });
    };
    TreeGrid.prototype.remoteExpand = function (action, row, record, isChild) {
        var gridRows = this.getRows();
        if (this.rowTemplate) {
            var rows_1 = this.getContentTable().rows;
            gridRows = [].slice.call(rows_1);
        }
        var args = { data: record, row: row };
        var rows = [];
        rows = gridRows.filter(function (r) {
            return r.querySelector('.e-gridrowindex' + record.index + 'level' + (record.level + 1));
        });
        if (action === 'expand') {
            this.notify(remoteExpand, { record: record, rows: rows, parentRow: row });
            var args_1 = { row: row, data: record };
            if (rows.length > 0) {
                this.trigger(expanded, args_1);
            }
        }
        else {
            this.collapseRemoteChild({ record: record, rows: rows });
            this.trigger(collapsed, args);
        }
    };
    TreeGrid.prototype.localExpand = function (action, row, record, isChild) {
        var childRecords = this.getCurrentViewRecords().filter(function (e) {
            return e.parentUniqueID === record.uniqueID;
        });
        if (this.isPixelHeight() && row.cells[0].classList.contains('e-lastrowcell')) {
            this.lastRowBorder(row, false);
        }
        var movableRows;
        var gridRows = this.getRows();
        if (this.rowTemplate) {
            var rows_2 = this.getContentTable().rows;
            gridRows = [].slice.call(rows_2);
        }
        var displayAction = (action === 'expand') ? 'table-row' : 'none';
        var index = childRecords[0].parentItem.index;
        var rows = gridRows.filter(function (r) {
            return r.querySelector('.e-gridrowindex' + record.index + 'level' + (record.level + 1));
        });
        if (this.frozenRows || this.frozenColumns || this.getFrozenColumns()) {
            movableRows = this.getMovableRows().filter(function (r) {
                return r.querySelector('.e-gridrowindex' + record.index + 'level' + (record.level + 1));
            });
        }
        for (var i = 0; i < rows.length; i++) {
            rows[i].style.display = displayAction;
            if (!sf.base.isNullOrUndefined(movableRows)) {
                movableRows[i].style.display = displayAction;
            }
            this.notify('childRowExpand', { row: rows[i] });
            if (!sf.base.isNullOrUndefined(childRecords[i].childRecords) && (action !== 'expand' ||
                sf.base.isNullOrUndefined(childRecords[i].expanded) || childRecords[i].expanded)) {
                this.expandCollapse(action, rows[i], childRecords[i], true);
                if (this.frozenColumns <= this.treeColumnIndex && !sf.base.isNullOrUndefined(movableRows)) {
                    this.expandCollapse(action, movableRows[i], childRecords[i], true);
                }
            }
        }
    };
    TreeGrid.prototype.updateAltRow = function (rows) {
        if (this.enableAltRow && !this.rowTemplate) {
            var visibleRowCount = 0;
            for (var i = 0; rows && i < rows.length; i++) {
                var gridRow = rows[i];
                if (gridRow.style.display !== 'none') {
                    if (gridRow.classList.contains('e-altrow')) {
                        sf.base.removeClass([gridRow], 'e-altrow');
                    }
                    if (visibleRowCount % 2 !== 0 && !gridRow.classList.contains('e-summaryrow') && !gridRow.classList.contains('e-detailrow')) {
                        sf.base.addClass([gridRow], 'e-altrow');
                    }
                    if (!gridRow.classList.contains('e-summaryrow') && !gridRow.classList.contains('e-detailrow')) {
                        visibleRowCount++;
                    }
                }
            }
        }
    };
    TreeGrid.prototype.treeColumnRowTemplate = function (args) {
        if (this.rowTemplate) {
            var rows = this.getContentTable().rows;
            rows = [].slice.call(rows);
            for (var i = 0; i < rows.length; i++) {
                var rcell = this.grid.getContentTable().rows[i].cells[this.treeColumnIndex];
                var row = rows[i];
                var rowData = this.grid.getRowsObject()[i].data;
                var arg = { data: rowData, row: row, cell: rcell, column: this.getColumns()[this.treeColumnIndex] };
                this.renderModule.cellRender(arg);
            }
        }
    };
    TreeGrid.prototype.collapseRemoteChild = function (rowDetails, isChild) {
        if (!isChild) {
            rowDetails.record.expanded = false;
        }
        var rows = rowDetails.rows;
        var childRecord;
        for (var i = 0; i < rows.length; i++) {
            if (sf.base.isBlazor() && this.isServerRendered) {
                sf.base.removeClass([rows[i]], 'e-treerowexpanded');
                sf.base.addClass([rows[i]], 'e-treerowcollapsed');
            }
            else {
                rows[i].style.display = 'none';
            }
            var collapsingTd = rows[i].querySelector('.e-detailrowexpand');
            if (!sf.base.isNullOrUndefined(collapsingTd)) {
                this.grid.detailRowModule.collapse(collapsingTd);
            }
            if (rows[i].querySelector('.e-treecolumn-container .e-treegridexpand')) {
                var expandElement = rows[i].querySelector('.e-treecolumn-container .e-treegridexpand');
                childRecord = this.rowTemplate ? this.grid.getCurrentViewRecords()[rows[i].rowIndex] :
                    this.grid.getRowObjectFromUID(rows[i].getAttribute('data-Uid')).data;
                if (!sf.base.isNullOrUndefined(expandElement) && childRecord.expanded) {
                    sf.base.removeClass([expandElement], 'e-treegridexpand');
                    sf.base.addClass([expandElement], 'e-treegridcollapse');
                }
                var cRow = [];
                var eRows = this.getRows();
                for (var i_1 = 0; i_1 < eRows.length; i_1++) {
                    if (eRows[i_1].querySelector('.e-gridrowindex' + childRecord.index + 'level' + (childRecord.level + 1))) {
                        cRow.push(eRows[i_1]);
                    }
                }
                if (cRow.length && childRecord.expanded) {
                    this.collapseRemoteChild({ record: childRecord, rows: cRow }, true);
                }
            }
        }
    };
    /**
     * @hidden
     */
    TreeGrid.prototype.addListener = function () {
        this.on('updateResults', this.updateResultModel, this);
        this.grid.on('initial-end', this.afterGridRender, this);
    };
    TreeGrid.prototype.updateResultModel = function (returnResult) {
        this.dataResults = returnResult;
    };
    /**
     * @hidden
     */
    TreeGrid.prototype.removeListener = function () {
        if (this.isDestroyed) {
            return;
        }
        this.off('updateResults', this.updateResultModel);
        this.grid.off('initial-end', this.afterGridRender);
    };
    /**
     * Filters TreeGrid row by column name with the given options.
     * @param  {string} fieldName - Defines the field name of the column.
     * @param  {string} filterOperator - Defines the operator to filter records.
     * @param  {string | number | Date | boolean} filterValue - Defines the value used to filter records.
     * @param  {string} predicate - Defines the relationship between one filter query and another by using AND or OR predicate.
     * @param  {boolean} matchCase - If match case is set to true, TreeGrid filters the records with exact match. if false, it filters case
     * insensitive records (uppercase and lowercase letters treated the same).
     * @param  {boolean} ignoreAccent - If ignoreAccent set to true,
     * then filter ignores the diacritic characters or accents while filtering.
     * @param  {string} actualFilterValue - Defines the actual filter value for the filter column.
     * @param  {string} actualOperator - Defines the actual filter operator for the filter column.
     * @return {void}
     */
    TreeGrid.prototype.filterByColumn = function (fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator) {
        this.grid.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
    };
    /**
     * Clears all the filtered rows of the TreeGrid.
     * @return {void}
     */
    TreeGrid.prototype.clearFiltering = function () {
        this.grid.clearFiltering();
    };
    /**
     * Removes filtered column by field name.
     * @param  {string} field - Defines column field name to remove filter.
     * @param  {boolean} isClearFilterBar -  Specifies whether the filter bar value needs to be cleared.
     * @return {void}
     * @hidden
     */
    TreeGrid.prototype.removeFilteredColsByField = function (field, isClearFilterBar) {
        this.grid.removeFilteredColsByField(field, isClearFilterBar);
    };
    /**
     * Selects a row by given index.
     * @param  {number} index - Defines the row index.
     * @param  {boolean} isToggle - If set to true, then it toggles the selection.
     * @return {void}
     */
    TreeGrid.prototype.selectRow = function (index, isToggle) {
        this.grid.selectRow(index, isToggle);
    };
    /**
     * Selects a collection of rows by indexes.
     * @param  {number[]} rowIndexes - Specifies the row indexes.
     * @return {void}
     */
    TreeGrid.prototype.selectRows = function (rowIndexes) {
        this.grid.selectRows(rowIndexes);
    };
    /**
     * Deselects the current selected rows and cells.
     * @return {void}
     */
    TreeGrid.prototype.clearSelection = function () {
        this.grid.clearSelection();
    };
    /**
     * Copy the selected rows or cells data into clipboard.
     * @param {boolean} withHeader - Specifies whether the column header text needs to be copied along with rows or cells.
     */
    TreeGrid.prototype.copy = function (withHeader) {
        this.clipboardModule.copy(withHeader);
    };
    /**
     * Paste data from clipboard to selected cells.
     * @param {boolean} data - Specifies the date for paste.
     * @param {boolean} rowIndex - Specifies the row index.
     * @param {boolean} colIndex - Specifies the column index.
     */
    TreeGrid.prototype.paste = function (data, rowIndex, colIndex) {
        this.clipboardModule.paste(data, rowIndex, colIndex);
    };
    /**
     * Selects a cell by the given index.
     * @param  {IIndex} cellIndex - Defines the row and column indexes.
     * @param  {boolean} isToggle - If set to true, then it toggles the selection.
     * @return {void}
     */
    TreeGrid.prototype.selectCell = function (cellIndex, isToggle) {
        this.grid.selectCell(cellIndex, isToggle);
    };
    /**
     * Gets the collection of selected rows.
     * @return {Element[]}
     */
    TreeGrid.prototype.getSelectedRows = function () {
        return this.grid.getSelectedRows();
    };
    /**
     * Gets a movable table cell by row and column index.
     * @param  {number} rowIndex - Specifies the row index.
     * @param  {number} columnIndex - Specifies the column index.
     * @return {Element}
     */
    TreeGrid.prototype.getMovableCellFromIndex = function (rowIndex, columnIndex) {
        return this.grid.getMovableCellFromIndex(rowIndex, columnIndex);
    };
    /**
     * Gets all the TreeGrid's movable table data rows.
     * @return {Element[]}
     */
    TreeGrid.prototype.getMovableDataRows = function () {
        return this.grid.getMovableDataRows();
    };
    /**
     * Gets a movable tables row by index.
     * @param  {number} index - Specifies the row index.
     * @return {Element}
     */
    TreeGrid.prototype.getMovableRowByIndex = function (index) {
        return this.grid.getMovableRowByIndex(index);
    };
    /**
     * Gets the TreeGrid's movable content rows from frozen treegrid.
     * @return {Element[]}
     */
    TreeGrid.prototype.getMovableRows = function () {
        return this.grid.getMovableRows();
    };
    /**
     * @hidden
     */
    TreeGrid.prototype.getFrozenColumns = function () {
        return this.getFrozenCount(this.columns, 0);
    };
    TreeGrid.prototype.getFrozenCount = function (cols, cnt) {
        for (var i = 0, len = cols.length; i < len; i++) {
            if (cols[i].columns) {
                cnt = this.getFrozenCount(cols[i].columns, cnt);
            }
            else {
                if (cols[i].isFrozen) {
                    cnt++;
                }
            }
        }
        return cnt;
    };
    /**
     * Gets the collection of selected row indexes.
     * @return {number[]}
     */
    TreeGrid.prototype.getSelectedRowIndexes = function () {
        return this.grid.getSelectedRowIndexes();
    };
    /**
     * Gets the collection of selected row and cell indexes.
     * @return {number[]}
     */
    TreeGrid.prototype.getSelectedRowCellIndexes = function () {
        return this.grid.getSelectedRowCellIndexes();
    };
    /**
     * Gets the collection of selected records.
     * @isGenericType true
     * @return {Object[]}
     */
    TreeGrid.prototype.getSelectedRecords = function () {
        return this.grid.getSelectedRecords();
    };
    /**
     * Gets the data module.
     * @return {Data}
     */
    TreeGrid.prototype.getDataModule = function () {
        return { baseModule: this.grid.getDataModule(), treeModule: this.dataModule };
    };
    /**
     * Reorder the rows based on given indexes and position
     */
    TreeGrid.prototype.reorderRows = function (fromIndexes, toIndex, position) {
        this.rowDragAndDropModule.reorderRows(fromIndexes, toIndex, position);
    };
    var TreeGrid_1;
    __decorate([
        sf.base.Property(0)
    ], TreeGrid.prototype, "frozenRows", void 0);
    __decorate([
        sf.base.Property(0)
    ], TreeGrid.prototype, "frozenColumns", void 0);
    __decorate([
        sf.base.Property('Ellipsis')
    ], TreeGrid.prototype, "clipMode", void 0);
    __decorate([
        sf.base.Property([])
    ], TreeGrid.prototype, "columns", void 0);
    __decorate([
        sf.base.Property(null)
    ], TreeGrid.prototype, "childMapping", void 0);
    __decorate([
        sf.base.Property(null)
    ], TreeGrid.prototype, "hasChildMapping", void 0);
    __decorate([
        sf.base.Property(0)
    ], TreeGrid.prototype, "treeColumnIndex", void 0);
    __decorate([
        sf.base.Property(null)
    ], TreeGrid.prototype, "idMapping", void 0);
    __decorate([
        sf.base.Property(null)
    ], TreeGrid.prototype, "parentIdMapping", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "enableCollapseAll", void 0);
    __decorate([
        sf.base.Property(null)
    ], TreeGrid.prototype, "expandStateMapping", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "allowRowDragAndDrop", void 0);
    __decorate([
        sf.base.Property([])
    ], TreeGrid.prototype, "dataSource", void 0);
    __decorate([
        sf.base.Property()
    ], TreeGrid.prototype, "query", void 0);
    __decorate([
        sf.base.Property()
    ], TreeGrid.prototype, "cloneQuery", void 0);
    __decorate([
        sf.base.Property('AllPages')
    ], TreeGrid.prototype, "printMode", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "allowPaging", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "loadChildOnDemand", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "allowTextWrap", void 0);
    __decorate([
        sf.base.Complex({}, TextWrapSettings)
    ], TreeGrid.prototype, "textWrapSettings", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "allowReordering", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "allowResizing", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "autoCheckHierarchy", void 0);
    __decorate([
        sf.base.Complex({}, PageSettings)
    ], TreeGrid.prototype, "pageSettings", void 0);
    __decorate([
        sf.base.Complex({}, sf.grids.RowDropSettings)
    ], TreeGrid.prototype, "rowDropSettings", void 0);
    __decorate([
        sf.base.Property()
    ], TreeGrid.prototype, "pagerTemplate", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "showColumnMenu", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "showColumnChooser", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "allowSorting", void 0);
    __decorate([
        sf.base.Property(true)
    ], TreeGrid.prototype, "allowMultiSorting", void 0);
    __decorate([
        sf.base.Complex({}, SortSettings)
    ], TreeGrid.prototype, "sortSettings", void 0);
    __decorate([
        sf.base.Collection([], AggregateRow)
    ], TreeGrid.prototype, "aggregates", void 0);
    __decorate([
        sf.base.Complex({}, EditSettings)
    ], TreeGrid.prototype, "editSettings", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "allowFiltering", void 0);
    __decorate([
        sf.base.Property()
    ], TreeGrid.prototype, "detailTemplate", void 0);
    __decorate([
        sf.base.Complex({}, FilterSettings)
    ], TreeGrid.prototype, "filterSettings", void 0);
    __decorate([
        sf.base.Complex({}, SearchSettings)
    ], TreeGrid.prototype, "searchSettings", void 0);
    __decorate([
        sf.base.Property()
    ], TreeGrid.prototype, "toolbar", void 0);
    __decorate([
        sf.base.Property()
    ], TreeGrid.prototype, "toolbarTemplate", void 0);
    __decorate([
        sf.base.Property('Default')
    ], TreeGrid.prototype, "gridLines", void 0);
    __decorate([
        sf.base.Property()
    ], TreeGrid.prototype, "contextMenuItems", void 0);
    __decorate([
        sf.base.Property()
    ], TreeGrid.prototype, "columnMenuItems", void 0);
    __decorate([
        sf.base.Property()
    ], TreeGrid.prototype, "rowTemplate", void 0);
    __decorate([
        sf.base.Property('Parent')
    ], TreeGrid.prototype, "copyHierarchyMode", void 0);
    __decorate([
        sf.base.Property(null)
    ], TreeGrid.prototype, "rowHeight", void 0);
    __decorate([
        sf.base.Property(true)
    ], TreeGrid.prototype, "enableAltRow", void 0);
    __decorate([
        sf.base.Property(true)
    ], TreeGrid.prototype, "allowKeyboard", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "enableHover", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "enableAutoFill", void 0);
    __decorate([
        sf.base.Property('auto')
    ], TreeGrid.prototype, "height", void 0);
    __decorate([
        sf.base.Property('auto')
    ], TreeGrid.prototype, "width", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "enableVirtualization", void 0);
    __decorate([
        sf.base.Property('All')
    ], TreeGrid.prototype, "columnQueryMode", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "created", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "load", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "expanding", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "expanded", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "collapsing", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "collapsed", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "cellSave", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "cellSaved", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "actionBegin", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "actionComplete", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "beginEdit", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "batchAdd", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "batchDelete", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "batchCancel", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "beforeBatchAdd", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "beforeBatchDelete", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "beforeBatchSave", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "cellEdit", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "actionFailure", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "dataBound", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "dataSourceChanged", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "dataStateChange", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "recordDoubleClick", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "rowDataBound", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "detailDataBound", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "queryCellInfo", void 0);
    __decorate([
        sf.base.Property(true)
    ], TreeGrid.prototype, "allowSelection", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "rowSelecting", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "rowSelected", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "rowDeselecting", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "rowDeselected", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "headerCellInfo", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "cellSelecting", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "columnMenuOpen", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "columnMenuClick", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "cellSelected", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "cellDeselecting", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "cellDeselected", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "resizeStart", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "resizing", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "resizeStop", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "columnDragStart", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "columnDrag", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "columnDrop", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "checkboxChange", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "printComplete", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "beforePrint", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "toolbarClick", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "beforeDataBound", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "contextMenuOpen", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "contextMenuClick", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "beforeCopy", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "beforePaste", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "rowDrag", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "rowDragStart", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "rowDragStartHelper", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "rowDrop", void 0);
    __decorate([
        sf.base.Property(-1)
    ], TreeGrid.prototype, "selectedRowIndex", void 0);
    __decorate([
        sf.base.Complex({}, SelectionSettings)
    ], TreeGrid.prototype, "selectionSettings", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "allowExcelExport", void 0);
    __decorate([
        sf.base.Property(false)
    ], TreeGrid.prototype, "allowPdfExport", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "pdfQueryCellInfo", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "pdfHeaderQueryCellInfo", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "excelQueryCellInfo", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "excelHeaderQueryCellInfo", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "beforeExcelExport", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "excelExportComplete", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "beforePdfExport", void 0);
    __decorate([
        sf.base.Event()
    ], TreeGrid.prototype, "pdfExportComplete", void 0);
    TreeGrid = TreeGrid_1 = __decorate([
        sf.base.NotifyPropertyChanges
    ], TreeGrid);
    return TreeGrid;
}(sf.base.Component));

/**
 * TreeGrid Reorder module
 * @hidden
 */
var Reorder$1 = /** @class */ (function () {
    /**
     * Constructor for Reorder module
     */
    function Reorder$$1(parent, treeColumn) {
        sf.grids.Grid.Inject(sf.grids.Reorder);
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    Reorder$$1.prototype.getModuleName = function () {
        return 'reorder';
    };
    /**
     * @hidden
     */
    Reorder$$1.prototype.addEventListener = function () {
        this.parent.on('getColumnIndex', this.getTreeColumn, this);
    };
    Reorder$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('getColumnIndex', this.getTreeColumn);
    };
    /**
     * To destroy the Reorder
     * @return {void}
     * @hidden
     */
    Reorder$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    Reorder$$1.prototype.getTreeColumn = function () {
        var columnModel = 'columnModel';
        var treeColumn = this.parent[columnModel][this.parent.treeColumnIndex];
        var treeIndex;
        var updatedCols = this.parent.getColumns();
        for (var f = 0; f < updatedCols.length; f++) {
            var treeColumnfield = sf.grids.getObject('field', treeColumn);
            var parentColumnfield = sf.grids.getObject('field', updatedCols[f]);
            if (treeColumnfield === parentColumnfield) {
                treeIndex = f;
                break;
            }
        }
        this.parent.setProperties({ treeColumnIndex: treeIndex }, true);
    };
    return Reorder$$1;
}());

/**
 * TreeGrid Resize module
 * @hidden
 */
var Resize$1 = /** @class */ (function () {
    /**
     * Constructor for Resize module
     */
    function Resize$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.Resize);
        this.parent = parent;
    }
    /**
     * Resize by field names.
     * @param  {string|string[]} fName - Defines the field name.
     * @return {void}
     */
    Resize$$1.prototype.autoFitColumns = function (fName) {
        this.parent.grid.autoFitColumns(fName);
    };
    /**
     * For internal use only - Get the module name.
     * @private
     */
    Resize$$1.prototype.getModuleName = function () {
        return 'resize';
    };
    /**
     * Destroys the Resize.
     * @method destroy
     * @return {void}
     */
    Resize$$1.prototype.destroy = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.grid.resizeModule.destroy();
    };
    return Resize$$1;
}());

function editAction(details, control, isSelfReference, addRowIndex, selectedIndex, columnName, addRowRecord) {
    var value = details.value;
    var action = details.action;
    var changedRecords = 'changedRecords';
    var i;
    var j;
    var addedRecords = 'addedRecords';
    var batchChanges;
    var key = control.grid.getPrimaryKeyFieldNames()[0];
    var treeData = control.dataSource instanceof sf.data.DataManager ?
        control.dataSource.dataSource.json : control.dataSource;
    var modifiedData = [];
    var originalData = value;
    var isSkip = false;
    if (control.editSettings.mode === 'Batch') {
        batchChanges = control.grid.editModule.getBatchChanges();
    }
    if (action === 'add' || (action === 'batchsave' && (control.editSettings.mode === 'Batch'
        && batchChanges[addedRecords].length))) {
        var addAct = addAction(details, treeData, control, isSelfReference, addRowIndex, selectedIndex, addRowRecord);
        value = addAct.value;
        isSkip = addAct.isSkip;
    }
    if (value instanceof Array) {
        modifiedData = extendArray(value);
    }
    else {
        modifiedData.push(sf.base.extend({}, value));
    }
    if (!isSkip && (action !== 'add' ||
        (control.editSettings.newRowPosition !== 'Top' && control.editSettings.newRowPosition !== 'Bottom'))) {
        for (var k = 0; k < modifiedData.length; k++) {
            if (typeof (modifiedData[k][key]) === 'object') {
                modifiedData[k] = modifiedData[k][key];
            }
            var keys = Object.keys(modifiedData[k].taskData);
            i = treeData.length;
            var _loop_1 = function () {
                if (treeData[i][key] === modifiedData[k][key]) {
                    if (action === 'delete') {
                        var currentData_1 = treeData[i];
                        treeData.splice(i, 1);
                        if (isSelfReference) {
                            if (!sf.base.isNullOrUndefined(currentData_1[control.parentIdMapping])) {
                                var parentData = control.flatData.filter(function (e) {
                                    return e[control.idMapping] === currentData_1[control.parentIdMapping];
                                })[0];
                                var childRecords = parentData ? parentData[control.childMapping] : [];
                                for (var p = childRecords.length - 1; p >= 0; p--) {
                                    if (childRecords[p][control.idMapping] === currentData_1[control.idMapping]) {
                                        childRecords.splice(p, 1);
                                        if (!childRecords.length) {
                                            parentData.hasChildRecords = false;
                                            updateParentRow(key, parentData, action, control, isSelfReference);
                                        }
                                        break;
                                    }
                                }
                            }
                            return "break";
                        }
                    }
                    else {
                        if (action === 'edit') {
                            for (j = 0; j < keys.length; j++) {
                                if (treeData[i].hasOwnProperty(keys[j]) && ((control.editSettings.mode !== 'Cell'
                                    || (!sf.base.isNullOrUndefined(batchChanges) && batchChanges[changedRecords].length === 0))
                                    || keys[j] === columnName)) {
                                    var editedData = getParentData(control, modifiedData[k].uniqueID);
                                    editedData.taskData[keys[j]] = editedData[keys[j]] = treeData[i][keys[j]] = modifiedData[k][keys[j]];
                                }
                            }
                        }
                        else if (action === 'add' || action === 'batchsave') {
                            var index = void 0;
                            if (control.editSettings.newRowPosition === 'Child') {
                                if (isSelfReference) {
                                    originalData.taskData[control.parentIdMapping] = treeData[i][control.idMapping];
                                    treeData.splice(i + 1, 0, originalData.taskData);
                                }
                                else {
                                    if (!treeData[i].hasOwnProperty(control.childMapping)) {
                                        treeData[i][control.childMapping] = [];
                                    }
                                    treeData[i][control.childMapping].push(originalData.taskData);
                                    updateParentRow(key, treeData[i], action, control, isSelfReference, originalData);
                                }
                            }
                            else if (control.editSettings.newRowPosition === 'Below') {
                                treeData.splice(i + 1, 0, originalData.taskData);
                                updateParentRow(key, treeData[i], action, control, isSelfReference, originalData);
                            }
                            else if (!addRowIndex) {
                                index = 0;
                                treeData.splice(index, 0, originalData.taskData);
                            }
                            else if (control.editSettings.newRowPosition === 'Above') {
                                treeData.splice(i, 0, originalData.taskData);
                                updateParentRow(key, treeData[i], action, control, isSelfReference, originalData);
                            }
                        }
                        return "break";
                    }
                }
                else if (!sf.base.isNullOrUndefined(treeData[i][control.childMapping])) {
                    if (removeChildRecords(treeData[i][control.childMapping], modifiedData[k], action, key, control, isSelfReference, originalData, columnName)) {
                        updateParentRow(key, treeData[i], action, control, isSelfReference);
                    }
                }
            };
            while (i-- && i >= 0) {
                var state_1 = _loop_1();
                if (state_1 === "break")
                    break;
            }
        }
    }
}
function addAction(details, treeData, control, isSelfReference, addRowIndex, selectedIndex, addRowRecord) {
    var value;
    var isSkip = false;
    var currentViewRecords = control.grid.getCurrentViewRecords();
    value = sf.base.extend({}, details.value);
    value = getPlainData(value);
    switch (control.editSettings.newRowPosition) {
        case 'Top':
            treeData.unshift(value);
            isSkip = true;
            break;
        case 'Bottom':
            treeData.push(value);
            isSkip = true;
            break;
        case 'Above':
            if (!sf.base.isNullOrUndefined(addRowRecord)) {
                value = sf.base.extend({}, addRowRecord);
                value = getPlainData(value);
            }
            else {
                value = sf.base.extend({}, currentViewRecords[addRowIndex + 1]);
                value = getPlainData(value);
            }
            break;
        case 'Below':
        case 'Child':
            if (!sf.base.isNullOrUndefined(addRowRecord)) {
                value = sf.base.extend({}, addRowRecord);
                value = getPlainData(value);
            }
            else {
                var primaryKeys = control.grid.getPrimaryKeyFieldNames()[0];
                var currentdata = currentViewRecords[addRowIndex];
                if (!sf.base.isNullOrUndefined(currentdata) && currentdata[primaryKeys] === details.value[primaryKeys] || selectedIndex !== -1) {
                    value = sf.base.extend({}, currentdata);
                }
                else {
                    value = sf.base.extend({}, details.value);
                }
                value = getPlainData(value);
            }
            if (selectedIndex === -1) {
                treeData.unshift(value);
                isSkip = true;
            }
    }
    return { value: value, isSkip: isSkip };
}
function removeChildRecords(childRecords, modifiedData, action, key, control, isSelfReference, originalData, columnName) {
    var isChildAll = false;
    var j = childRecords.length;
    while (j-- && j >= 0) {
        if (childRecords[j][key] === modifiedData[key] ||
            (isSelfReference && childRecords[j][control.parentIdMapping] === modifiedData[control.idMapping])) {
            if (action === 'edit') {
                var keys = Object.keys(modifiedData);
                var editedData = getParentData(control, modifiedData.uniqueID);
                for (var i = 0; i < keys.length; i++) {
                    if (childRecords[j].hasOwnProperty(keys[i]) && (control.editSettings.mode !== 'Cell' || keys[i] === columnName)) {
                        editedData[keys[i]] = editedData.taskData[keys[i]] = childRecords[j][keys[i]] = modifiedData[keys[i]];
                    }
                }
                break;
            }
            else if (action === 'add' || action === 'batchsave') {
                if (control.editSettings.newRowPosition === 'Child') {
                    if (isSelfReference) {
                        originalData[control.parentIdMapping] = childRecords[j][control.idMapping];
                        childRecords.splice(j + 1, 0, originalData);
                        updateParentRow(key, childRecords[j], action, control, isSelfReference, originalData);
                    }
                    else {
                        if (!childRecords[j].hasOwnProperty(control.childMapping)) {
                            childRecords[j][control.childMapping] = [];
                        }
                        childRecords[j][control.childMapping].push(originalData.taskData);
                        updateParentRow(key, childRecords[j], action, control, isSelfReference, originalData);
                    }
                }
                else if (control.editSettings.newRowPosition === 'Above') {
                    childRecords.splice(j, 0, originalData.taskData);
                    updateParentRow(key, childRecords[j], action, control, isSelfReference, originalData);
                }
                else if (control.editSettings.newRowPosition === 'Below') {
                    childRecords.splice(j + 1, 0, originalData.taskData);
                    updateParentRow(key, childRecords[j], action, control, isSelfReference, originalData);
                }
            }
            else {
                var parentItem = childRecords[j].parentItem;
                childRecords.splice(j, 1);
                if (!childRecords.length) {
                    isChildAll = true;
                }
            }
        }
        else if (!sf.base.isNullOrUndefined(childRecords[j][control.childMapping])) {
            if (removeChildRecords(childRecords[j][control.childMapping], modifiedData, action, key, control, isSelfReference, originalData, columnName)) {
                updateParentRow(key, childRecords[j], action, control, isSelfReference);
            }
        }
    }
    return isChildAll;
}
function updateParentRow(key, record, action, control, isSelfReference, child) {
    if ((control.editSettings.newRowPosition === 'Above' || control.editSettings.newRowPosition === 'Below')
        && ((action === 'add' || action === 'batchsave')) && !sf.base.isNullOrUndefined(child.parentItem)) {
        var parentData = getParentData(control, child.parentItem.uniqueID);
        parentData.childRecords.push(child);
    }
    else {
        var currentRecords = control.grid.getCurrentViewRecords();
        var index_1;
        currentRecords.map(function (e, i) { if (e[key] === record[key]) {
            index_1 = i;
            return;
        } });
        record = currentRecords[index_1];
        if (control.enableVirtualization && sf.base.isNullOrUndefined(record) && !sf.base.isNullOrUndefined(child)) {
            record = sf.base.getValue('uniqueIDCollection.' + child.parentUniqueID, control);
        }
        record.hasChildRecords = false;
        if (action === 'add' || action === 'batchsave') {
            record.expanded = true;
            record.hasChildRecords = true;
            if (control.sortSettings.columns.length && sf.base.isNullOrUndefined(child)) {
                child = currentRecords.filter(function (e) {
                    if (e.parentUniqueID === record.uniqueID) {
                        return e;
                    }
                    else {
                        return null;
                    }
                });
            }
            var childRecords = child ? child instanceof Array ? child[0] : child : currentRecords[index_1 + 1];
            if (control.editSettings.newRowPosition !== 'Below') {
                if (!record.hasOwnProperty('childRecords')) {
                    record.childRecords = [];
                }
                else {
                    if (!sf.base.isNullOrUndefined(child) && record[key] !== child[key]) {
                        record.childRecords.push(child);
                    }
                }
                if (record.childRecords.indexOf(childRecords) === -1 && record[key] !== child[key]) {
                    record.childRecords.unshift(childRecords);
                }
                if (isSelfReference) {
                    if (!record.hasOwnProperty(control.childMapping)) {
                        record[control.childMapping] = [];
                    }
                    if (record[control.childMapping].indexOf(childRecords) === -1 && record[key] !== child[key]) {
                        record[control.childMapping].unshift(childRecords);
                    }
                }
            }
        }
        var primaryKeys = control.grid.getPrimaryKeyFieldNames()[0];
        var data = control.grid.dataSource instanceof sf.data.DataManager ?
            control.grid.dataSource.dataSource.json : control.grid.dataSource;
        for (var i = 0; i < data.length; i++) {
            if (data[i][primaryKeys] === record[primaryKeys]) {
                data[i] = record;
                break;
            }
        }
        control.grid.setRowData(key, record);
        var row = control.getRowByIndex(index_1);
        if (control.editSettings.mode === 'Batch') {
            row = control.getRows()[control.grid.getRowIndexByPrimaryKey(record[key])];
        }
        var movableRow = void 0;
        if (control.frozenRows || control.getFrozenColumns()) {
            movableRow = control.getMovableRowByIndex(index_1);
        }
        if (!control.enableVirtualization && !sf.base.isNullOrUndefined(row) || !sf.base.isNullOrUndefined(movableRow)) {
            control.renderModule.cellRender({
                data: record, cell: row.cells[control.treeColumnIndex] ? row.cells[control.treeColumnIndex]
                    : movableRow.cells[control.treeColumnIndex - control.frozenColumns],
                column: control.grid.getColumns()[control.treeColumnIndex],
                requestType: action
            });
        }
    }
}

/**
 * TreeGrid RowDragAndDrop module
 * @hidden
 */
var RowDD$1 = /** @class */ (function () {
    /**
     *
     * Constructor for render module
     */
    function RowDD$$1(parent) {
        /** @hidden */
        this.canDrop = true;
        /** @hidden */
        this.isDraggedWithChild = false;
        /** @hidden */
        this.isaddtoBottom = false;
        sf.grids.Grid.Inject(sf.grids.RowDD);
        this.parent = parent;
        this.addEventListener();
    }
    RowDD$$1.prototype.getChildrecordsByParentID = function (id) {
        var treeGridDataSource;
        if (this.parent.dataSource instanceof sf.data.DataManager && isOffline(this.parent)) {
            treeGridDataSource = this.parent.grid.dataSource.dataSource.json;
        }
        else {
            treeGridDataSource = this.parent.grid.dataSource;
        }
        var record = treeGridDataSource.filter(function (e) {
            return e.uniqueID === id;
        });
        return record;
    };
    /**
     * @hidden
     */
    RowDD$$1.prototype.addEventListener = function () {
        this.parent.on(rowdraging, this.Rowdraging, this);
        this.parent.on(rowDropped, this.rowDropped, this);
        this.parent.on(rowsAdd, this.rowsAdded, this);
        this.parent.on(rowsRemove, this.rowsRemoved, this);
    };
    /**
     * Reorder the rows based on given indexes and position
     */
    RowDD$$1.prototype.reorderRows = function (fromIndexes, toIndex, position) {
        var tObj = this.parent;
        if (fromIndexes[0] !== toIndex && position === 'above' || 'below' || 'child') {
            if (position === 'above') {
                this.dropPosition = 'topSegment';
            }
            if (position === 'below') {
                this.dropPosition = 'bottomSegment';
            }
            if (position === 'child') {
                this.dropPosition = 'middleSegment';
            }
            var data = [];
            for (var i = 0; i < fromIndexes.length; i++) {
                data[i] = this.parent.getCurrentViewRecords()[fromIndexes[i]];
            }
            var isByMethod = true;
            var args = {
                data: data,
                dropIndex: toIndex
            };
            if (!isCountRequired(this.parent)) {
                this.dropRows(args, isByMethod);
            }
            //this.refreshGridDataSource();
            if (tObj.isLocalData) {
                tObj.flatData = this.orderToIndex(tObj.flatData);
            }
            this.parent.refresh();
        }
        else {
            return;
        }
    };
    RowDD$$1.prototype.orderToIndex = function (currentData) {
        var _loop_1 = function (i) {
            currentData[i].index = i;
            if (!sf.base.isNullOrUndefined(currentData[i].parentItem)) {
                var updatedParent = currentData.filter(function (data) {
                    return data.uniqueID === currentData[i].parentUniqueID;
                })[0];
                currentData[i].parentItem.index = updatedParent.index;
            }
        };
        for (var i = 0; i < currentData.length; i++) {
            _loop_1(i);
        }
        return currentData;
    };
    RowDD$$1.prototype.rowsAdded = function (e) {
        var draggedRecord;
        var dragRecords = e.records;
        for (var i = e.records.length - 1; i > -1; i--) {
            draggedRecord = dragRecords[i];
            if (draggedRecord.parentUniqueID) {
                var record = dragRecords.filter(function (data) {
                    return data.uniqueID === draggedRecord.parentUniqueID;
                });
                if (record.length) {
                    var index = record[0].childRecords.indexOf(draggedRecord);
                    var parentRecord = record[0];
                    if (index !== -1) {
                        parentRecord.childRecords.splice(index, 1);
                        if (!parentRecord.childRecords.length) {
                            parentRecord.hasChildRecords = false;
                            parentRecord.hasFilteredChildRecords = false;
                        }
                        this.isDraggedWithChild = true;
                    }
                }
            }
        }
        if (sf.base.isNullOrUndefined(this.parent.dataSource) || !this.parent.dataSource.length) {
            var tObj = this.parent;
            var draggedRecord_1;
            var dragRecords_1 = e.records;
            var dragLength = e.records.length;
            for (var i = dragLength - 1; i > -1; i--) {
                draggedRecord_1 = dragRecords_1[i];
                var recordIndex1 = 0;
                if (!draggedRecord_1.taskData.hasOwnProperty(tObj.childMapping)) {
                    draggedRecord_1.taskData[tObj.childMapping] = [];
                }
                if (sf.base.isNullOrUndefined(tObj.dataSource)) {
                    tObj.dataSource = [];
                }
                tObj.dataSource.splice(recordIndex1, 0, draggedRecord_1.taskData);
                tObj.setProperties({ dataSource: tObj.dataSource }, false);
            }
        }
        else {
            for (var i = 0; i < dragRecords.length; i++) {
                sf.base.setValue('uniqueIDCollection.' + dragRecords[i].uniqueID, dragRecords[i], this.parent);
            }
            var args = { data: e.records, dropIndex: e.toIndex };
            if (this.parent.dataSource instanceof sf.data.DataManager) {
                this.treeGridData = this.parent.dataSource.dataSource.json;
            }
            else {
                this.treeGridData = this.parent.grid.dataSource;
            }
            this.dropRows(args);
        }
    };
    RowDD$$1.prototype.rowsRemoved = function (e) {
        for (var i = 0; i < e.records.length; i++) {
            this.draggedRecord = e.records[i];
            if (this.draggedRecord.hasChildRecords || this.draggedRecord.parentItem &&
                this.parent.grid.dataSource.
                    indexOf(this.getChildrecordsByParentID(this.draggedRecord.parentUniqueID)[0]) !== -1 ||
                this.draggedRecord.level === 0) {
                this.deleteDragRow();
            }
        }
    };
    RowDD$$1.prototype.refreshGridDataSource = function () {
        var draggedRecord = this.draggedRecord;
        var droppedRecord = this.droppedRecord;
        var proxy = this.parent;
        var tempDataSource;
        var idx;
        if (this.parent.dataSource instanceof sf.data.DataManager && isOffline(this.parent)) {
            tempDataSource = proxy.dataSource.dataSource.json;
        }
        else {
            tempDataSource = proxy.dataSource;
        }
        if (tempDataSource && (!sf.base.isNullOrUndefined(droppedRecord) && !droppedRecord.parentItem)) {
            for (var i = 0; i < Object.keys(tempDataSource).length; i++) {
                if (tempDataSource[i][this.parent.childMapping] === droppedRecord.taskData[this.parent.childMapping]) {
                    idx = i;
                }
            }
            if (this.dropPosition === 'topSegment') {
                if (!this.parent.idMapping) {
                    tempDataSource.splice(idx, 0, draggedRecord.taskData);
                }
            }
            else if (this.dropPosition === 'bottomSegment') {
                if (!this.parent.idMapping) {
                    tempDataSource.splice(idx + 1, 0, draggedRecord.taskData);
                }
            }
        }
        else if (!this.parent.parentIdMapping && (!sf.base.isNullOrUndefined(droppedRecord) && droppedRecord.parentItem)) {
            if (this.dropPosition === 'topSegment' || this.dropPosition === 'bottomSegment') {
                var record = this.getChildrecordsByParentID(droppedRecord.parentUniqueID)[0];
                var childRecords = record.childRecords;
                for (var i = 0; i < childRecords.length; i++) {
                    droppedRecord.parentItem.taskData[this.parent.childMapping][i] = childRecords[i].taskData;
                }
            }
        }
        if (this.parent.parentIdMapping) {
            if (draggedRecord.parentItem) {
                if (this.dropPosition === 'topSegment' || this.dropPosition === 'bottomSegment') {
                    draggedRecord[this.parent.parentIdMapping] = droppedRecord[this.parent.parentIdMapping];
                    draggedRecord.taskData[this.parent.parentIdMapping] = droppedRecord[this.parent.parentIdMapping];
                }
                else {
                    draggedRecord[this.parent.parentIdMapping] = droppedRecord[this.parent.idMapping];
                    draggedRecord.taskData[this.parent.parentIdMapping] = droppedRecord[this.parent.idMapping];
                }
            }
            else {
                draggedRecord.taskData[this.parent.parentIdMapping] = null;
                draggedRecord[this.parent.parentIdMapping] = null;
            }
        }
    };
    RowDD$$1.prototype.removeFirstrowBorder = function (element, isRemove) {
        var canremove = this.dropPosition === 'bottomSegment';
        if (this.parent.element.getElementsByClassName('e-firstrow-border').length > 0 && element &&
            (element.rowIndex !== 0 || canremove)) {
            this.parent.element.getElementsByClassName('e-firstrow-border')[0].remove();
        }
    };
    RowDD$$1.prototype.removeLastrowBorder = function (element, isRemove) {
        var isEmptyRow = element && (element.classList.contains('e-emptyrow') || element.classList.contains('e-columnheader'));
        var islastRowIndex = element && !isEmptyRow &&
            this.parent.getRowByIndex(this.parent.getRows().length - 1).getAttribute('data-uid') !==
                element.getAttribute('data-uid');
        var canremove = islastRowIndex || this.dropPosition === 'topSegment';
        if (this.parent.element.getElementsByClassName('e-lastrow-border').length > 0 && element && (islastRowIndex || canremove)) {
            this.parent.element.getElementsByClassName('e-lastrow-border')[0].remove();
        }
    };
    RowDD$$1.prototype.updateIcon = function (row, index, args) {
        var rowEle = args.target ? sf.base.closest(args.target, 'tr') : null;
        this.dropPosition = undefined;
        var rowPositionHeight = 0;
        this.removeFirstrowBorder(rowEle);
        this.removeLastrowBorder(rowEle);
        for (var i = 0; i < args.rows.length; i++) {
            if (!sf.base.isNullOrUndefined(rowEle) && rowEle.getAttribute('data-uid') === args.rows[i].getAttribute('data-uid')
                || !sf.grids.parentsUntil(args.target, 'e-gridcontent')) {
                this.dropPosition = 'Invalid';
                this.addErrorElem();
            }
        }
        // To get the corresponding drop position related to mouse position 
        var tObj = this.parent;
        var rowTop = 0;
        var roundOff = 0;
        var toolHeight = tObj.toolbar && tObj.toolbar.length ?
            document.getElementById(tObj.element.id + '_gridcontrol_toolbarItems').offsetHeight : 0;
        // tObj.lastRow = tObj.getRowByIndex(tObj.getCurrentViewRecords().length - 1);
        var positionOffSet = this.getOffset(tObj.element);
        // let contentHeight1: number = (tObj.element.offsetHeight  - (tObj.getContent() as HTMLElement).offsetHeight) + positionOffSet.top;
        var contentHeight = tObj.getHeaderContent().offsetHeight + positionOffSet.top + toolHeight;
        var scrollTop = tObj.getContent().firstElementChild.scrollTop;
        if (!sf.base.isNullOrUndefined(rowEle)) {
            rowPositionHeight = rowEle.offsetTop - scrollTop;
        }
        // let scrollTop = (tObj.grid.scrollModule as any).content.scrollTop;
        if (tObj.allowTextWrap) {
            rowTop = row[0].offsetHeight;
        }
        else {
            rowTop = rowPositionHeight + contentHeight + roundOff;
        }
        var rowBottom = rowTop + row[0].offsetHeight;
        var difference = rowBottom - rowTop;
        var divide = difference / 3;
        var topRowSegment = rowTop + divide;
        var middleRowSegment = topRowSegment + divide;
        var bottomRowSegment = middleRowSegment + divide;
        var posx = positionOffSet.left;
        var mouseEvent = sf.grids.getObject('originalEvent.event', args);
        var posy = mouseEvent.pageY;
        var isTopSegment = posy <= topRowSegment;
        var isMiddleRowSegment = (posy > topRowSegment && posy <= middleRowSegment);
        var isBottomRowSegment = (posy > middleRowSegment && posy <= bottomRowSegment);
        if (isTopSegment || isMiddleRowSegment || isBottomRowSegment) {
            if (isTopSegment && this.dropPosition !== 'Invalid') {
                this.removeChildBorder();
                this.dropPosition = 'topSegment';
                this.removetopOrBottomBorder();
                this.addFirstrowBorder(rowEle);
                this.removeErrorElem();
                this.removeLastrowBorder(rowEle);
                this.topOrBottomBorder(args.target);
            }
            if (isMiddleRowSegment && this.dropPosition !== 'Invalid') {
                this.removetopOrBottomBorder();
                var element = void 0;
                var rowElement = [];
                element = sf.base.closest(args.target, 'tr');
                rowElement = [].slice.call(element.querySelectorAll('.e-rowcell,.e-rowdragdrop,.e-detailrowcollapse'));
                if (rowElement.length > 0) {
                    this.addRemoveClasses(rowElement, true, 'e-childborder');
                }
                this.addLastRowborder(rowEle);
                this.addFirstrowBorder(rowEle);
                this.dropPosition = 'middleSegment';
            }
            if (isBottomRowSegment && this.dropPosition !== 'Invalid') {
                this.removeErrorElem();
                this.removetopOrBottomBorder();
                this.removeChildBorder();
                this.dropPosition = 'bottomSegment';
                this.addLastRowborder(rowEle);
                this.removeFirstrowBorder(rowEle);
                this.topOrBottomBorder(args.target);
            }
        }
        return this.dropPosition;
    };
    RowDD$$1.prototype.removeChildBorder = function () {
        var borderElem = [];
        borderElem = [].slice.call(this.parent.element.querySelectorAll('.e-childborder'));
        if (borderElem.length > 0) {
            this.addRemoveClasses(borderElem, false, 'e-childborder');
        }
    };
    RowDD$$1.prototype.addFirstrowBorder = function (targetRow) {
        var node = this.parent.element;
        var tObj = this.parent;
        if (targetRow && targetRow.rowIndex === 0 && !targetRow.classList.contains('e-emptyrow')) {
            var div = this.parent.createElement('div', { className: 'e-firstrow-border' });
            var gridheaderEle = this.parent.getHeaderContent();
            var toolbarHeight = 0;
            if (tObj.toolbar) {
                toolbarHeight = tObj.toolbarModule.getToolbar().offsetHeight;
            }
            var multiplegrid = !sf.base.isNullOrUndefined(this.parent.rowDropSettings.targetID);
            if (multiplegrid) {
                div.style.top = this.parent.grid.element.getElementsByClassName('e-gridheader')[0].offsetHeight
                    + toolbarHeight + 'px';
            }
            div.style.width = multiplegrid ? node.offsetWidth + 'px' :
                node.offsetWidth - this.getScrollWidth() + 'px';
            if (!gridheaderEle.querySelectorAll('.e-firstrow-border').length) {
                gridheaderEle.appendChild(div);
            }
        }
    };
    RowDD$$1.prototype.addLastRowborder = function (trElement) {
        var isEmptyRow = trElement && (trElement.classList.contains('e-emptyrow') ||
            trElement.classList.contains('e-columnheader'));
        if (trElement && !isEmptyRow && this.parent.getRowByIndex(this.parent.getRows().length - 1).getAttribute('data-uid') ===
            trElement.getAttribute('data-uid')) {
            var bottomborder = this.parent.createElement('div', { className: 'e-lastrow-border' });
            var gridcontentEle = this.parent.getContent();
            bottomborder.style.width = this.parent.element.offsetWidth - this.getScrollWidth() + 'px';
            if (!gridcontentEle.querySelectorAll('.e-lastrow-border').length) {
                gridcontentEle.classList.add('e-treegrid-relative');
                gridcontentEle.appendChild(bottomborder);
                bottomborder.style.bottom = this.getScrollWidth() + 'px';
            }
        }
    };
    RowDD$$1.prototype.getScrollWidth = function () {
        var scrollElem = this.parent.getContent().firstElementChild;
        return scrollElem.scrollWidth > scrollElem.offsetWidth ? sf.grids.Scroll.getScrollBarWidth() : 0;
    };
    RowDD$$1.prototype.addErrorElem = function () {
        var dragelem = document.getElementsByClassName('e-cloneproperties')[0];
        var errorelem = dragelem.querySelectorAll('.e-errorelem').length;
        if (!errorelem && !this.parent.rowDropSettings.targetID) {
            var ele = document.createElement('div');
            sf.base.classList(ele, ['e-errorcontainer'], []);
            sf.base.classList(ele, ['e-icons', 'e-errorelem'], []);
            var errorVal = dragelem.querySelector('.errorValue');
            var content = dragelem.querySelector('.e-rowcell').innerHTML;
            if (errorVal) {
                content = errorVal.innerHTML;
                errorVal.parentNode.removeChild(errorVal);
            }
            dragelem.querySelector('.e-rowcell').innerHTML = '';
            var spanContent = document.createElement('span');
            spanContent.className = 'errorValue';
            spanContent.style.paddingLeft = '16px';
            spanContent.innerHTML = content;
            dragelem.querySelector('.e-rowcell').appendChild(ele);
            dragelem.querySelector('.e-rowcell').appendChild(spanContent);
        }
    };
    RowDD$$1.prototype.removeErrorElem = function () {
        var errorelem = document.querySelector('.e-errorelem');
        if (errorelem) {
            errorelem.remove();
        }
    };
    RowDD$$1.prototype.topOrBottomBorder = function (target) {
        var element;
        var multiplegrid = !sf.base.isNullOrUndefined(this.parent.rowDropSettings.targetID);
        var rowElement = [];
        element = sf.base.closest(target, 'tr');
        rowElement = element ? [].slice.call(element.querySelectorAll('.e-rowcell,.e-rowdragdrop,.e-detailrowcollapse')) : [];
        if (rowElement.length) {
            if (this.dropPosition === 'topSegment') {
                this.addRemoveClasses(rowElement, true, 'e-droptop');
                if (this.parent.element.getElementsByClassName('e-lastrow-dragborder').length > 0) {
                    this.parent.element.getElementsByClassName('e-lastrow-dragborder')[0].remove();
                }
            }
            if (this.dropPosition === 'bottomSegment') {
                this.addRemoveClasses(rowElement, true, 'e-dropbottom');
            }
        }
    };
    RowDD$$1.prototype.removetopOrBottomBorder = function () {
        var border = [];
        border = [].slice.call(this.parent.element.querySelectorAll('.e-dropbottom, .e-droptop'));
        if (border.length) {
            this.addRemoveClasses(border, false, 'e-dropbottom');
            this.addRemoveClasses(border, false, 'e-droptop');
        }
    };
    RowDD$$1.prototype.addRemoveClasses = function (cells, add, className) {
        for (var i = 0, len = cells.length; i < len; i++) {
            if (add) {
                cells[i].classList.add(className);
            }
            else {
                cells[i].classList.remove(className);
            }
        }
    };
    RowDD$$1.prototype.getOffset = function (element) {
        var box = element.getBoundingClientRect();
        var body = document.body;
        var docElem = document.documentElement;
        var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
        var clientTop = docElem.clientTop || body.clientTop || 0;
        var clientLeft = docElem.clientLeft || body.clientLeft || 0;
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    RowDD$$1.prototype.Rowdraging = function (args) {
        var tObj = this.parent;
        var cloneElement = this.parent.element.querySelector('.e-cloneproperties');
        cloneElement.style.cursor = '';
        var rowEle = args.target ? sf.base.closest(args.target, 'tr') : null;
        var rowIdx = rowEle ? rowEle.rowIndex : -1;
        var dragRecords = [];
        var droppedRecord = tObj.getCurrentViewRecords()[rowIdx];
        this.removeErrorElem();
        this.canDrop = true;
        if (!args.data[0]) {
            dragRecords.push(args.data);
        }
        else {
            dragRecords = args.data;
        }
        if (rowIdx !== -1) {
            this.ensuredropPosition(dragRecords, droppedRecord);
        }
        else {
            this.canDrop = false;
            this.addErrorElem();
        }
        if (!tObj.rowDropSettings.targetID && this.canDrop) {
            tObj.rowDragAndDropModule.updateIcon(args.rows, rowIdx, args);
        }
        if (tObj.rowDropSettings.targetID) {
            var dropElement = sf.grids.parentsUntil(args.target, 'e-treegrid');
            if (dropElement && dropElement.id === this.parent.rowDropSettings.targetID) {
                var srcControl = dropElement.ej2_instances[0];
                srcControl.rowDragAndDropModule.updateIcon(args.rows, rowIdx, args);
            }
        }
        if (args.target && sf.base.closest(args.target, '#' + tObj.rowDropSettings.targetID)) {
            var dropElement = sf.grids.parentsUntil(args.target, 'e-treegrid');
            if (!dropElement) {
                cloneElement.style.cursor = 'default';
            }
        }
    };
    RowDD$$1.prototype.rowDropped = function (args) {
        var tObj = this.parent;
        if (!tObj.rowDropSettings.targetID) {
            if (sf.grids.parentsUntil(args.target, 'e-content')) {
                if (this.parent.element.querySelector('.e-errorelem')) {
                    this.dropPosition = 'Invalid';
                }
                sf.base.setValue('dropPosition', this.dropPosition, args);
                tObj.trigger(rowDrop, args);
                if (!args.cancel) {
                    if (!isCountRequired(this.parent)) {
                        this.dropRows(args);
                    }
                    if (tObj.isLocalData) {
                        tObj.flatData = this.orderToIndex(tObj.flatData);
                    }
                    tObj.refresh();
                    if (!sf.base.isNullOrUndefined(tObj.getHeaderContent().querySelector('.e-firstrow-border'))) {
                        tObj.getHeaderContent().querySelector('.e-firstrow-border').remove();
                    }
                }
            }
        }
        else {
            if (args.target && sf.base.closest(args.target, '#' + tObj.rowDropSettings.targetID) || sf.grids.parentsUntil(args.target, 'e-treegrid') &&
                sf.grids.parentsUntil(args.target, 'e-treegrid').id === tObj.rowDropSettings.targetID) {
                sf.base.setValue('dropPosition', this.dropPosition, args);
                tObj.trigger(rowDrop, args);
                if (!args.cancel && tObj.rowDropSettings.targetID) {
                    this.dragDropGrid(args);
                    if (tObj.isLocalData) {
                        tObj.flatData = this.orderToIndex(tObj.flatData);
                    }
                }
            }
        }
        this.removetopOrBottomBorder();
        this.removeChildBorder();
        if (!sf.base.isNullOrUndefined(this.parent.element.getElementsByClassName('e-firstrow-border')[0])) {
            this.parent.element.getElementsByClassName('e-firstrow-border')[0].remove();
        }
        else if (!sf.base.isNullOrUndefined(this.parent.element.getElementsByClassName('e-lastrow-border')[0])) {
            this.parent.element.getElementsByClassName('e-lastrow-border')[0].remove();
        }
    };
    RowDD$$1.prototype.dragDropGrid = function (args) {
        var tObj = this.parent;
        var targetRow = sf.base.closest(args.target, 'tr');
        var targetIndex = isNaN(this.getTargetIdx(targetRow)) ? 0 : this.getTargetIdx(targetRow);
        var dropElement = sf.grids.parentsUntil(args.target, 'e-treegrid');
        var srcControl;
        if (dropElement && dropElement.id === this.parent.rowDropSettings.targetID && !isRemoteData(this.parent)
            && !isCountRequired(this.parent)) {
            srcControl = dropElement.ej2_instances[0];
            var records = tObj.getSelectedRecords();
            var indexes = [];
            for (var i = 0; i < records.length; i++) {
                indexes[i] = records[i].index;
            }
            tObj.notify(rowsRemove, { indexes: indexes, records: records });
            srcControl.notify(rowsAdd, { toIndex: targetIndex, records: records });
            tObj.refresh();
            srcControl.refresh();
            if (srcControl.grid.dataSource.length > 1) {
                srcControl.refresh();
                if (!sf.base.isNullOrUndefined(srcControl.getHeaderContent().querySelector('.e-firstrow-border'))) {
                    srcControl.getHeaderContent().querySelector('.e-firstrow-border').remove();
                }
                if (!sf.base.isNullOrUndefined(srcControl.getContent().querySelector('.e-lastrow-border'))) {
                    srcControl.getContent().querySelector('.e-lastrow-border').remove();
                }
            }
        }
        if (isCountRequired(this.parent)) {
            srcControl = dropElement.ej2_instances[0];
            tObj.refresh();
            srcControl.refresh();
        }
    };
    RowDD$$1.prototype.getTargetIdx = function (targetRow) {
        return targetRow ? parseInt(targetRow.getAttribute('aria-rowindex'), 10) : 0;
    };
    RowDD$$1.prototype.getParentData = function (record) {
        var parentItem = record.parentItem;
        if (this.dropPosition === 'bottomSegment') {
            var selectedRecord = this.parent.getSelectedRecords()[0];
            this.droppedRecord = getParentData(this.parent, selectedRecord.parentItem.uniqueID);
        }
        if (this.dropPosition === 'middleSegment') {
            var level = this.parent.getSelectedRecords()[0].level;
            if (level === parentItem.level) {
                this.droppedRecord = getParentData(this.parent, parentItem.uniqueID);
            }
            else {
                this.getParentData(parentItem);
            }
        }
    };
    RowDD$$1.prototype.dropRows = function (args, isByMethod) {
        if (this.dropPosition !== 'Invalid' && !isRemoteData(this.parent)) {
            var tObj = this.parent;
            var draggedRecord = void 0;
            var droppedRecord = void 0;
            if (sf.base.isNullOrUndefined(args.dropIndex)) {
                var rowIndex = tObj.getSelectedRowIndexes()[0] - 1;
                var record = tObj.getCurrentViewRecords()[rowIndex];
                this.getParentData(record);
            }
            else {
                this.droppedRecord = tObj.getCurrentViewRecords()[args.dropIndex];
            }
            var dragRecords = [];
            droppedRecord = this.droppedRecord;
            if (!args.data[0]) {
                dragRecords.push(args.data);
            }
            else {
                dragRecords = args.data;
            }
            var count = 0;
            var multiplegrid = this.parent.rowDropSettings.targetID;
            this.isMultipleGrid = multiplegrid;
            var addToBottom = false;
            if (!multiplegrid) {
                this.ensuredropPosition(dragRecords, droppedRecord);
            }
            else {
                this.isaddtoBottom = addToBottom = multiplegrid && this.isDraggedWithChild;
            }
            var dragLength = dragRecords.length;
            for (var i = 0; i < dragLength; i++) {
                draggedRecord = dragRecords[i];
                this.draggedRecord = draggedRecord;
                var recordIndex = args.dropIndex;
                var isSelfReference = !sf.base.isNullOrUndefined(tObj.parentIdMapping);
                if (this.dropPosition !== 'Invalid') {
                    if (!tObj.rowDropSettings.targetID || isByMethod) {
                        this.deleteDragRow();
                    }
                    var recordIndex1 = this.treeGridData.indexOf(droppedRecord);
                    this.dropAtTop(recordIndex1, isSelfReference, i);
                    if (this.dropPosition === 'bottomSegment') {
                        if (!droppedRecord.hasChildRecords) {
                            if (this.parent.parentIdMapping) {
                                this.treeData.splice(recordIndex1 + 1, 0, this.draggedRecord.taskData);
                            }
                            this.treeGridData.splice(recordIndex1 + 1, 0, this.draggedRecord);
                        }
                        else {
                            count = this.getChildCount(droppedRecord, 0);
                            if (this.parent.parentIdMapping) {
                                this.treeData.splice(recordIndex1 + count + 1, 0, this.draggedRecord.taskData);
                            }
                            this.treeGridData.splice(recordIndex1 + count + 1, 0, this.draggedRecord);
                        }
                        draggedRecord.parentItem = this.treeGridData[recordIndex1].parentItem;
                        draggedRecord.parentUniqueID = this.treeGridData[recordIndex1].parentUniqueID;
                        draggedRecord.level = this.treeGridData[recordIndex1].level;
                        if (draggedRecord.hasChildRecords) {
                            var level = 1;
                            this.updateChildRecordLevel(draggedRecord, level);
                            this.updateChildRecord(draggedRecord, recordIndex1 + count + 1);
                        }
                        if (droppedRecord.parentItem) {
                            var rec = this.getChildrecordsByParentID(droppedRecord.parentUniqueID);
                            var childRecords = rec[0].childRecords;
                            var droppedRecordIndex = childRecords.indexOf(droppedRecord) + 1;
                            childRecords.splice(droppedRecordIndex, 0, draggedRecord);
                        }
                    }
                    this.dropMiddle(recordIndex, recordIndex1, args, isByMethod, isSelfReference, i);
                }
                if (sf.base.isNullOrUndefined(draggedRecord.parentItem)) {
                    var parentRecords = tObj.parentData;
                    var newParentIndex = parentRecords.indexOf(this.droppedRecord);
                    if (this.dropPosition === 'bottomSegment') {
                        parentRecords.splice(newParentIndex + 1, 0, draggedRecord);
                    }
                    else if (this.dropPosition === 'topSegment') {
                        parentRecords.splice(newParentIndex, 0, draggedRecord);
                    }
                }
                tObj.rowDragAndDropModule.refreshGridDataSource();
            }
        }
    };
    RowDD$$1.prototype.dropMiddle = function (recordIndex, recordIndex1, args, isSelfReference, isByMethod, i) {
        var tObj = this.parent;
        var childRecords = findChildrenRecords(this.droppedRecord);
        var childRecordsLength = (sf.base.isNullOrUndefined(childRecords) ||
            childRecords.length === 0) ? recordIndex1 + 1 :
            childRecords.length + recordIndex1 + 1;
        if (this.dropPosition === 'middleSegment') {
            if (tObj.parentIdMapping) {
                this.treeData.splice(childRecordsLength, 0, this.draggedRecord.taskData);
                this.treeGridData.splice(childRecordsLength, 0, this.draggedRecord);
            }
            else {
                this.treeGridData.splice(childRecordsLength, 0, this.draggedRecord);
            }
            this.recordLevel();
            if (this.draggedRecord.hasChildRecords) {
                this.updateChildRecord(this.draggedRecord, childRecordsLength, this.droppedRecord.expanded);
            }
        }
    };
    RowDD$$1.prototype.dropAtTop = function (recordIndex1, isSelfReference, i) {
        var tObj = this.parent;
        if (this.dropPosition === 'topSegment') {
            if (tObj.parentIdMapping) {
                this.treeData.splice(recordIndex1, 0, this.draggedRecord.taskData);
            }
            this.draggedRecord.parentItem = this.treeGridData[recordIndex1].parentItem;
            this.draggedRecord.parentUniqueID = this.treeGridData[recordIndex1].parentUniqueID;
            this.draggedRecord.level = this.treeGridData[recordIndex1].level;
            this.treeGridData.splice(recordIndex1, 0, this.draggedRecord);
            if (this.draggedRecord.hasChildRecords) {
                var level = 1;
                this.updateChildRecord(this.draggedRecord, recordIndex1);
                this.updateChildRecordLevel(this.draggedRecord, level);
            }
            if (this.droppedRecord.parentItem) {
                var rec = this.getChildrecordsByParentID(this.droppedRecord.parentUniqueID);
                var childRecords = rec[0].childRecords;
                var droppedRecordIndex = childRecords.indexOf(this.droppedRecord);
                childRecords.splice(droppedRecordIndex, 0, this.draggedRecord);
            }
        }
    };
    RowDD$$1.prototype.recordLevel = function () {
        var tObj = this.parent;
        var draggedRecord = this.draggedRecord;
        var droppedRecord = this.droppedRecord;
        var childItem = tObj.childMapping;
        if (!droppedRecord.hasChildRecords) {
            droppedRecord.hasChildRecords = true;
            droppedRecord.hasFilteredChildRecords = true;
            if (sf.base.isNullOrUndefined(droppedRecord.childRecords)) {
                droppedRecord.childRecords = [];
                if (!tObj.parentIdMapping && sf.base.isNullOrUndefined(droppedRecord.taskData[childItem])) {
                    droppedRecord.taskData[childItem] = [];
                }
            }
        }
        if (this.dropPosition === 'middleSegment') {
            var parentItem = sf.base.extend({}, droppedRecord);
            delete parentItem.childRecords;
            draggedRecord.parentItem = parentItem;
            draggedRecord.parentUniqueID = droppedRecord.uniqueID;
            droppedRecord.childRecords.splice(droppedRecord.childRecords.length, 0, draggedRecord);
            if (!sf.base.isNullOrUndefined(draggedRecord) && !tObj.parentIdMapping && !sf.base.isNullOrUndefined(droppedRecord.taskData[childItem])) {
                droppedRecord.taskData[tObj.childMapping].splice(droppedRecord.childRecords.length, 0, draggedRecord.taskData);
            }
            if (!draggedRecord.hasChildRecords) {
                draggedRecord.level = droppedRecord.level + 1;
            }
            else {
                var level = 1;
                draggedRecord.level = droppedRecord.level + 1;
                this.updateChildRecordLevel(draggedRecord, level);
            }
            droppedRecord.expanded = true;
            // if (tObj.isLocalData) {
            //     tObj.parentData.push(droppedRecord);
            // }
        }
    };
    RowDD$$1.prototype.deleteDragRow = function () {
        if (this.parent.dataSource instanceof sf.data.DataManager && isOffline(this.parent)) {
            this.treeGridData = this.parent.grid.dataSource.dataSource.json;
            this.treeData = this.parent.dataSource.dataSource.json;
        }
        else {
            this.treeGridData = this.parent.grid.dataSource;
            this.treeData = this.parent.dataSource;
        }
        var deletedRow;
        deletedRow = getParentData(this.parent, this.draggedRecord.uniqueID);
        this.removeRecords(deletedRow);
    };
    RowDD$$1.prototype.updateChildRecord = function (record, count, expanded$$1) {
        var currentRecord;
        var tObj = this.parent;
        var length = 0;
        if (!record.hasChildRecords) {
            return 0;
        }
        length = record.childRecords.length;
        for (var i = 0; i < length; i++) {
            currentRecord = record.childRecords[i];
            count++;
            tObj.flatData.splice(count, 0, currentRecord);
            if (tObj.parentIdMapping) {
                this.treeData.splice(count, 0, currentRecord.taskData);
            }
            if (currentRecord.hasChildRecords) {
                count = this.updateChildRecord(currentRecord, count);
            }
        }
        return count;
    };
    RowDD$$1.prototype.updateChildRecordLevel = function (record, level) {
        var length = 0;
        var currentRecord;
        level++;
        if (!record.hasChildRecords) {
            return 0;
        }
        length = record.childRecords.length;
        for (var i = 0; i < length; i++) {
            currentRecord = record.childRecords[i];
            var parentData = void 0;
            if (record.parentItem) {
                parentData = getParentData(this.parent, record.parentItem.uniqueID);
            }
            currentRecord.level = record.parentItem ? parentData.level + level : record.level + 1;
            if (currentRecord.hasChildRecords) {
                level--;
                level = this.updateChildRecordLevel(currentRecord, level);
            }
        }
        return level;
    };
    RowDD$$1.prototype.removeRecords = function (record) {
        var tObj = this.parent;
        var dataSource;
        if (this.parent.dataSource instanceof sf.data.DataManager && isOffline(this.parent)) {
            dataSource = this.parent.dataSource.dataSource.json;
        }
        else {
            dataSource = this.parent.dataSource;
        }
        var deletedRow = record;
        var isSelfReference = !sf.base.isNullOrUndefined(tObj.parentIdMapping);
        var flatParentData = this.getChildrecordsByParentID(deletedRow.parentUniqueID)[0];
        if (deletedRow) {
            if (deletedRow.parentItem) {
                var childRecords = flatParentData ? flatParentData.childRecords : [];
                var childIndex = 0;
                if (childRecords && childRecords.length > 0) {
                    childIndex = childRecords.indexOf(deletedRow);
                    flatParentData.childRecords.splice(childIndex, 1);
                    if (!this.parent.parentIdMapping) {
                        editAction({ value: deletedRow, action: 'delete' }, this.parent, isSelfReference, deletedRow.index, deletedRow.index);
                    }
                }
            }
            if (tObj.parentIdMapping) {
                if (deletedRow.hasChildRecords && deletedRow.childRecords.length > 0) {
                    this.removeChildItem(deletedRow);
                }
                var idx = void 0;
                var idz = void 0;
                var treeGridData = dataSource;
                for (var i = 0; i < treeGridData.length; i++) {
                    if (treeGridData[i][this.parent.idMapping] === deletedRow.taskData[this.parent.idMapping]) {
                        idx = i;
                    }
                }
                for (var i = 0; i < this.treeGridData.length; i++) {
                    if (this.treeGridData[i][this.parent.idMapping] === deletedRow.taskData[this.parent.idMapping]) {
                        idz = i;
                    }
                }
                if (idx !== -1 || idz !== -1) {
                    dataSource.splice(idx, 1);
                    this.treeGridData.splice(idz, 1);
                }
            }
            var recordIndex_1 = this.treeGridData.indexOf(deletedRow);
            if (!tObj.parentIdMapping) {
                var parentIndex = this.parent.parentData.indexOf(deletedRow);
                if (parentIndex !== -1) {
                    tObj.parentData.splice(parentIndex, 1);
                    dataSource.splice(parentIndex, 1);
                }
            }
            if (recordIndex_1 === -1 && !tObj.parentIdMapping) {
                var primaryKeyField = tObj.getPrimaryKeyFieldNames()[0];
                for (var j = 0; j < this.treeGridData.length; j++) {
                    if (this.treeGridData[j][primaryKeyField] === deletedRow[primaryKeyField]) {
                        recordIndex_1 = j;
                    }
                }
            }
            if (!tObj.parentIdMapping) {
                var deletedRecordCount = this.getChildCount(deletedRow, 0);
                this.treeGridData.splice(recordIndex_1, deletedRecordCount + 1);
            }
            if (deletedRow.parentItem && flatParentData && flatParentData.childRecords && !flatParentData.childRecords.length) {
                flatParentData.expanded = false;
                flatParentData.hasChildRecords = false;
                flatParentData.hasFilteredChildRecords = false;
            }
        }
    };
    RowDD$$1.prototype.removeChildItem = function (record) {
        var tObj = this.parent;
        var currentRecord;
        var idx;
        var idz;
        var dataSource;
        if (this.parent.dataSource instanceof sf.data.DataManager && isOffline(this.parent)) {
            dataSource = this.parent.dataSource.dataSource.json;
        }
        else {
            dataSource = this.parent.dataSource;
        }
        for (var i = 0; i < record.childRecords.length; i++) {
            currentRecord = record.childRecords[i];
            var treeGridData = void 0;
            if (this.parent.dataSource instanceof sf.data.DataManager && isOffline(this.parent)) {
                treeGridData = this.parent.dataSource.dataSource.json;
            }
            else {
                treeGridData = this.parent.dataSource;
            }
            for (var i_1 = 0; i_1 < treeGridData.length; i_1++) {
                if (treeGridData[i_1][this.parent.idMapping] === currentRecord.taskData[this.parent.idMapping]) {
                    idx = i_1;
                }
            }
            for (var i_2 = 0; i_2 < this.treeGridData.length; i_2++) {
                if (this.treeGridData[i_2][this.parent.idMapping] === currentRecord.taskData[this.parent.idMapping]) {
                    idz = i_2;
                    break;
                }
            }
            if (idx !== -1 || idz !== -1) {
                dataSource.splice(idx, 1);
                this.treeGridData.splice(idz, 1);
            }
            if (currentRecord.hasChildRecords) {
                this.removeChildItem(currentRecord);
            }
        }
    };
    RowDD$$1.prototype.getChildCount = function (record, count) {
        var currentRecord;
        if (!record.hasChildRecords) {
            return 0;
        }
        for (var i = 0; i < record.childRecords.length; i++) {
            currentRecord = record.childRecords[i];
            count++;
            if (currentRecord.hasChildRecords) {
                count = this.getChildCount(currentRecord, count);
            }
        }
        return count;
    };
    RowDD$$1.prototype.ensuredropPosition = function (draggedRecords, currentRecord) {
        var tObj = this.parent;
        var rowDragMoudule = this;
        draggedRecords.filter(function (e) {
            if (e.hasChildRecords && !sf.base.isNullOrUndefined(e.childRecords)) {
                var valid = e.childRecords.indexOf(currentRecord);
                if (valid === -1) {
                    rowDragMoudule.ensuredropPosition(e.childRecords, currentRecord);
                }
                else {
                    rowDragMoudule.dropPosition = 'Invalid';
                    rowDragMoudule.addErrorElem();
                    rowDragMoudule.canDrop = false;
                    return;
                }
            }
        });
    };
    RowDD$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    /**
     * @hidden
     */
    RowDD$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off(rowdraging, this.Rowdraging);
        this.parent.off(rowDropped, this.rowDropped);
        this.parent.off(rowsAdd, this.rowsAdded);
        this.parent.off(rowsRemove, this.rowsRemoved);
    };
    /**
     * hidden
     */
    /**
     * For internal use only - Get the module name.
     * @private
     */
    RowDD$$1.prototype.getModuleName = function () {
        return 'rowDragAndDrop';
    };
    return RowDD$$1;
}());

/**
 * Base export
 */

var __extends$10 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the row drop settings of the TreeGrid.
 */
var RowDropSettings$1 = /** @class */ (function (_super) {
    __extends$10(RowDropSettings$$1, _super);
    function RowDropSettings$$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$9([
        sf.base.Property()
    ], RowDropSettings$$1.prototype, "targetID", void 0);
    return RowDropSettings$$1;
}(sf.base.ChildProperty));

/**
 * Models export
 */

var __extends$11 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * RowModelGenerator is used to generate grid data rows.
 * @hidden
 */
var TreeVirtualRowModelGenerator = /** @class */ (function (_super) {
    __extends$11(TreeVirtualRowModelGenerator, _super);
    function TreeVirtualRowModelGenerator(parent) {
        var _this = _super.call(this, parent) || this;
        _this.addEventListener();
        return _this;
    }
    TreeVirtualRowModelGenerator.prototype.addEventListener = function () {
        this.parent.on(dataListener, this.getDatas, this);
    };
    TreeVirtualRowModelGenerator.prototype.getDatas = function (args) {
        this.visualData = args.data;
    };
    TreeVirtualRowModelGenerator.prototype.generateRows = function (data, notifyArgs) {
        if (this.parent.dataSource instanceof sf.data.DataManager && this.parent.dataSource.dataSource.url !== undefined
            && this.parent.dataSource.dataSource.url !== '') {
            return _super.prototype.generateRows.call(this, data, notifyArgs);
        }
        else {
            if (!sf.base.isNullOrUndefined(notifyArgs.requestType) && notifyArgs.requestType.toString() === 'collapseAll') {
                notifyArgs.requestType = 'refresh';
            }
            var rows = _super.prototype.generateRows.call(this, data, notifyArgs);
            for (var r = 0; r < rows.length; r++) {
                rows[r].index = (this.visualData).indexOf(rows[r].data);
            }
            return rows;
        }
    };
    TreeVirtualRowModelGenerator.prototype.checkAndResetCache = function (action) {
        var clear = ['paging', 'refresh', 'sorting', 'filtering', 'searching', 'reorder',
            'save', 'delete'].some(function (value) { return action === value; });
        if (this.parent.dataSource instanceof sf.data.DataManager && this.parent.dataSource.dataSource.url !== undefined
            && this.parent.dataSource.dataSource.url !== '') {
            var model = 'model';
            var currentPage = this[model].currentPage;
            if (clear) {
                this.cache = {};
                this.data = {};
                this.groups = {};
            }
            else if (action === 'virtualscroll' && this.cache[currentPage] &&
                this.cache[currentPage].length > (this.parent.contentModule).getBlockSize()) {
                delete this.cache[currentPage];
            }
        }
        else {
            if (clear || action === 'virtualscroll') {
                this.cache = {};
                this.data = {};
                this.groups = {};
            }
        }
        return clear;
    };
    return TreeVirtualRowModelGenerator;
}(sf.grids.VirtualRowModelGenerator));

/**
 * Renderer export
 */

/**
 * TreeGrid Filter module will handle filtering action
 * @hidden
 */
var Filter$1 = /** @class */ (function () {
    /**
     * Constructor for Filter module
     */
    function Filter$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.Filter);
        this.parent = parent;
        this.isHierarchyFilter = false;
        this.filteredResult = [];
        this.flatFilteredData = [];
        this.filteredParentRecs = [];
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    Filter$$1.prototype.getModuleName = function () {
        return 'filter';
    };
    /**
     * To destroy the Filter module
     * @return {void}
     * @hidden
     */
    Filter$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    /**
     * @hidden
     */
    Filter$$1.prototype.addEventListener = function () {
        this.parent.on('updateFilterRecs', this.updatedFilteredRecord, this);
        this.parent.on('clearFilters', this.clearFilterLevel, this);
    };
    /**
     * @hidden
     */
    Filter$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('updateFilterRecs', this.updatedFilteredRecord);
        this.parent.off('clearFilters', this.clearFilterLevel);
    };
    /**
     * Function to update filtered records
     *  @hidden
     */
    Filter$$1.prototype.updatedFilteredRecord = function (dataDetails) {
        sf.base.setValue('uniqueIDFilterCollection', {}, this.parent);
        this.flatFilteredData = dataDetails.data;
        this.filteredParentRecs = [];
        this.filteredResult = [];
        this.isHierarchyFilter = false;
        for (var f = 0; f < this.flatFilteredData.length; f++) {
            var rec = this.flatFilteredData[f];
            this.addParentRecord(rec);
            var hierarchyMode = this.parent.grid.searchSettings.key === '' ? this.parent.filterSettings.hierarchyMode
                : this.parent.searchSettings.hierarchyMode;
            if (((hierarchyMode === 'Child' || hierarchyMode === 'None') &&
                (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== ''))) {
                this.isHierarchyFilter = true;
            }
            var ischild = sf.grids.getObject('childRecords', rec);
            if (!sf.base.isNullOrUndefined(ischild) && ischild.length) {
                sf.base.setValue('hasFilteredChildRecords', this.checkChildExsist(rec), rec);
            }
            var parent_1 = sf.grids.getObject('parentItem', rec);
            if (!sf.base.isNullOrUndefined(parent_1)) {
                var parRecord = getParentData(this.parent, rec.parentItem.uniqueID, true);
                //let parRecord: Object = this.flatFilteredData.filter((e: ITreeData) => {
                //          return e.uniqueID === rec.parentItem.uniqueID; })[0];
                sf.base.setValue('hasFilteredChildRecords', true, parRecord);
                if (parRecord && parRecord.parentItem) {
                    this.updateParentFilteredRecord(parRecord);
                }
            }
        }
        if (this.flatFilteredData.length > 0 && this.isHierarchyFilter) {
            this.updateFilterLevel();
        }
        this.parent.notify('updateAction', { result: this.filteredResult });
    };
    Filter$$1.prototype.updateParentFilteredRecord = function (record) {
        var parRecord = getParentData(this.parent, record.parentItem.uniqueID, true);
        var uniqueIDValue = sf.base.getValue('uniqueIDFilterCollection', this.parent);
        if (parRecord && uniqueIDValue.hasOwnProperty(parRecord.uniqueID)) {
            sf.base.setValue('hasFilteredChildRecords', true, parRecord);
        }
        if (parRecord && parRecord.parentItem) {
            this.updateParentFilteredRecord(parRecord);
        }
    };
    
    Filter$$1.prototype.addParentRecord = function (record) {
        var parent = getParentData(this.parent, record.parentUniqueID);
        //let parent: Object = this.parent.flatData.filter((e: ITreeData) => {return e.uniqueID === record.parentUniqueID; })[0];
        var hierarchyMode = this.parent.grid.searchSettings.key === '' ? this.parent.filterSettings.hierarchyMode
            : this.parent.searchSettings.hierarchyMode;
        if (hierarchyMode === 'None' && (this.parent.grid.filterSettings.columns.length !== 0
            || this.parent.grid.searchSettings.key !== '')) {
            if (sf.base.isNullOrUndefined(parent)) {
                if (this.flatFilteredData.indexOf(record) !== -1) {
                    if (this.filteredResult.indexOf(record) === -1) {
                        this.filteredResult.push(record);
                        sf.base.setValue('uniqueIDFilterCollection.' + record.uniqueID, record, this.parent);
                        record.hasFilteredChildRecords = true;
                    }
                    return;
                }
            }
            else {
                this.addParentRecord(parent);
                if (this.flatFilteredData.indexOf(parent) !== -1 || this.filteredResult.indexOf(parent) !== -1) {
                    if (this.filteredResult.indexOf(record) === -1) {
                        this.filteredResult.push(record);
                        sf.base.setValue('uniqueIDFilterCollection.' + record.uniqueID, record, this.parent);
                    }
                }
                else {
                    if (this.filteredResult.indexOf(record) === -1 && this.flatFilteredData.indexOf(record) !== -1) {
                        this.filteredResult.push(record);
                        sf.base.setValue('uniqueIDFilterCollection.' + record.uniqueID, record, this.parent);
                    }
                }
            }
        }
        else {
            if (!sf.base.isNullOrUndefined(parent)) {
                var hierarchyMode_1 = this.parent.grid.searchSettings.key === '' ?
                    this.parent.filterSettings.hierarchyMode : this.parent.searchSettings.hierarchyMode;
                if (hierarchyMode_1 === 'Child' && (this.parent.grid.filterSettings.columns.length !== 0
                    || this.parent.grid.searchSettings.key !== '')) {
                    if (this.flatFilteredData.indexOf(parent) !== -1) {
                        this.addParentRecord(parent);
                    }
                }
                else {
                    this.addParentRecord(parent);
                }
            }
            if (this.filteredResult.indexOf(record) === -1) {
                this.filteredResult.push(record);
                sf.base.setValue('uniqueIDFilterCollection.' + record.uniqueID, record, this.parent);
            }
        }
    };
    Filter$$1.prototype.checkChildExsist = function (records) {
        var childRec = sf.grids.getObject('childRecords', records);
        var isExist = false;
        for (var count = 0; count < childRec.length; count++) {
            var ischild = childRec[count].childRecords;
            var hierarchyMode = this.parent.grid.searchSettings.key === '' ?
                this.parent.filterSettings.hierarchyMode : this.parent.searchSettings.hierarchyMode;
            if (((hierarchyMode === 'Child' || hierarchyMode === 'Both') && (this.parent.grid.filterSettings.columns.length !== 0
                || this.parent.grid.searchSettings.key !== ''))) {
                var uniqueIDValue = sf.base.getValue('uniqueIDFilterCollection', this.parent);
                if (!uniqueIDValue.hasOwnProperty(childRec[count].uniqueID)) {
                    this.filteredResult.push(childRec[count]);
                    sf.base.setValue('uniqueIDFilterCollection.' + childRec[count].uniqueID, childRec[count], this.parent);
                    isExist = true;
                }
            }
            if ((hierarchyMode === 'None')
                && (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== '')) {
                if (this.flatFilteredData.indexOf(childRec[count]) !== -1) {
                    isExist = true;
                    break;
                }
            }
            if (!sf.base.isNullOrUndefined(ischild) && ischild.length) {
                isExist = this.checkChildExsist(childRec[count]);
            }
            if ((hierarchyMode === 'Child' || hierarchyMode === 'Both') && childRec.length) {
                isExist = true;
            }
        }
        return isExist;
    };
    Filter$$1.prototype.updateFilterLevel = function () {
        var record = this.filteredResult;
        var len = this.filteredResult.length;
        for (var c = 0; c < len; c++) {
            var parent_2 = getParentData(this.parent, record[c].parentUniqueID);
            var isPrst = record.indexOf(parent_2) !== -1;
            if (isPrst) {
                var parent_3 = getParentData(this.parent, record[c].parentUniqueID, true);
                record[c].filterLevel = parent_3.filterLevel + 1;
            }
            else {
                record[c].filterLevel = 0;
                this.filteredParentRecs.push(record[c]);
            }
        }
    };
    Filter$$1.prototype.clearFilterLevel = function (data) {
        var count = 0;
        var flatData = data.flatData;
        var len = flatData.length;
        var currentRecord;
        for (count; count < len; count++) {
            currentRecord = flatData[count];
            var fLevel = currentRecord.filterLevel;
            if (fLevel || fLevel === 0 || !sf.base.isNullOrUndefined(currentRecord.hasFilteredChildRecords)) {
                currentRecord.hasFilteredChildRecords = null;
                currentRecord.filterLevel = null;
            }
        }
        this.filteredResult = [];
        this.parent.notify('updateResults', { result: flatData, count: flatData.length });
    };
    return Filter$$1;
}());

/**
 * TreeGrid Excel Export module
 * @hidden
 */
var ExcelExport$1 = /** @class */ (function () {
    /**
     * Constructor for Excel Export module
     */
    function ExcelExport$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.ExcelExport);
        this.parent = parent;
        this.dataResults = {};
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    ExcelExport$$1.prototype.getModuleName = function () {
        return 'ExcelExport';
    };
    /**
     * @hidden
     */
    ExcelExport$$1.prototype.addEventListener = function () {
        this.parent.on('updateResults', this.updateExcelResultModel, this);
        this.parent.on('excelCellInfo', this.excelQueryCellInfo, this);
        this.parent.grid.on('export-RowDataBound', this.exportRowDataBound, this);
        this.parent.grid.on('finalPageSetup', this.finalPageSetup, this);
    };
    /**
     * To destroy the Excel Export
     * @return {void}
     * @hidden
     */
    ExcelExport$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    /**
     * @hidden
     */
    ExcelExport$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('updateResults', this.updateExcelResultModel);
        this.parent.off('excelCellInfo', this.excelQueryCellInfo);
        this.parent.grid.off('export-RowDataBound', this.exportRowDataBound);
        this.parent.grid.off('finalPageSetup', this.finalPageSetup);
    };
    ExcelExport$$1.prototype.updateExcelResultModel = function (returnResult) {
        this.dataResults = returnResult;
    };
    ExcelExport$$1.prototype.Map = function (excelExportProperties, 
    /* tslint:disable-next-line:no-any */
    isMultipleExport, workbook, isBlob, isCsv) {
        var _this = this;
        var dataSource = this.parent.dataSource;
        var property = Object();
        sf.base.setValue('isCsv', isCsv, property);
        sf.base.setValue('cancel', false, property);
        return new Promise(function (resolve, reject) {
            var dm = _this.isLocal() ? new sf.data.DataManager(dataSource) : _this.parent.dataSource;
            var query = new sf.data.Query();
            if (!_this.isLocal()) {
                query = _this.generateQuery(query);
                sf.base.setValue('query', query, property);
            }
            _this.parent.trigger(beforeExcelExport, sf.base.extend(property, excelExportProperties));
            if (sf.grids.getObject('cancel', property)) {
                return null;
            }
            dm.executeQuery(query).then(function (e) {
                var customData = null;
                if (!sf.base.isNullOrUndefined(excelExportProperties) && !sf.base.isNullOrUndefined(excelExportProperties.dataSource)) {
                    customData = excelExportProperties.dataSource;
                }
                excelExportProperties = _this.manipulateExportProperties(excelExportProperties, dataSource, e);
                return _this.parent.grid.excelExportModule.Map(_this.parent.grid, excelExportProperties, isMultipleExport, workbook, isCsv, isBlob).then(function (book) {
                    if (customData != null) {
                        excelExportProperties.dataSource = customData;
                    }
                    else {
                        delete excelExportProperties.dataSource;
                    }
                    resolve(book);
                });
            });
        });
    };
    ExcelExport$$1.prototype.generateQuery = function (query, property) {
        if (!sf.base.isNullOrUndefined(property) && property.exportType === 'CurrentPage'
            && this.parent.allowPaging) {
            property.exportType = 'AllPages';
            query.addParams('ExportType', 'CurrentPage');
            query.where(this.parent.parentIdMapping, 'equal', null);
            query = sf.grids.getObject('grid.renderModule.data.pageQuery', this.parent)(query);
        }
        return query;
    };
    ExcelExport$$1.prototype.manipulateExportProperties = function (property, dtSrc, queryResult) {
        //count not required for this query
        var args = Object();
        sf.base.setValue('query', this.parent.grid.getDataModule().generateQuery(true), args);
        sf.base.setValue('isExport', true, args);
        if (!sf.base.isNullOrUndefined(property) && !sf.base.isNullOrUndefined(property.exportType)) {
            sf.base.setValue('exportType', property.exportType, args);
        }
        if (!this.isLocal() || !sf.base.isNullOrUndefined(this.parent.parentIdMapping)) {
            this.parent.parentData = [];
            this.parent.dataModule.convertToFlatData(sf.grids.getObject('result', queryResult));
            sf.base.setValue('expresults', this.parent.flatData, args);
        }
        this.parent.notify('dataProcessor', args);
        //args = this.parent.dataModule.dataProcessor(args);
        args = this.dataResults;
        dtSrc = sf.base.isNullOrUndefined(args.result) ? this.parent.flatData.slice(0) : args.result;
        if (!this.isLocal()) {
            this.parent.flatData = [];
        }
        if (property && property.dataSource && this.isLocal()) {
            var flatsData = this.parent.flatData;
            var dataSrc = property.dataSource instanceof sf.data.DataManager ? property.dataSource.dataSource.json : property.dataSource;
            this.parent.dataModule.convertToFlatData(dataSrc);
            dtSrc = this.parent.flatData;
            this.parent.flatData = flatsData;
        }
        property = sf.base.isNullOrUndefined(property) ? Object() : property;
        property.dataSource = new sf.data.DataManager({ json: dtSrc });
        return property;
    };
    /**
     * TreeGrid Excel Export cell modifier
     * @hidden
     */
    ExcelExport$$1.prototype.excelQueryCellInfo = function (args) {
        if (this.parent.grid.getColumnIndexByUid(args.column.uid) === this.parent.treeColumnIndex) {
            var style = {};
            var data = args.data;
            var ispadfilter = sf.base.isNullOrUndefined(data.filterLevel);
            var pad = ispadfilter ? data.level : data.filterLevel;
            style.indent = pad;
            args.style = style;
        }
        this.parent.notify('updateResults', args);
        this.parent.trigger('excelQueryCellInfo', args);
    };
    ExcelExport$$1.prototype.exportRowDataBound = function (excelRow) {
        if (excelRow.type === 'excel') {
            var excelrowobj = excelRow.rowObj.data;
            var filtercolumnlength = this.parent.grid.filterSettings.columns.length;
            if (excelrowobj.parentItem && getParentData(this.parent, excelrowobj.parentItem.uniqueID, Boolean(filtercolumnlength))) {
                var rowlength = excelRow.excelRows.length;
                var rowlevel = excelrowobj.level;
                excelRow.excelRows[rowlength - 1].grouping = { outlineLevel: rowlevel, isCollapsed: false };
            }
        }
    };
    /* tslint:disable-next-line:max-func-body-length */
    ExcelExport$$1.prototype.finalPageSetup = function (/* tslint:disable-next-line:no-any */ workbook) {
        for (var i = 0; i < workbook.worksheets.length; i++) {
            if (workbook.worksheets[i].rows) {
                workbook.worksheets[i].pageSetup = { isSummaryRowBelow: false };
            }
        }
    };
    ExcelExport$$1.prototype.isLocal = function () {
        return !isRemoteData(this.parent) && isOffline(this.parent);
    };
    return ExcelExport$$1;
}());

/**
 * TreeGrid PDF Export module
 * @hidden
 */
var PdfExport$1 = /** @class */ (function () {
    /**
     * Constructor for PDF export module
     */
    function PdfExport$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.PdfExport);
        this.parent = parent;
        this.dataResults = {};
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    PdfExport$$1.prototype.getModuleName = function () {
        return 'PdfExport';
    };
    /**
     * @hidden
     */
    PdfExport$$1.prototype.addEventListener = function () {
        this.parent.on('pdfCellInfo', this.pdfQueryCellInfo, this);
        this.parent.on('updateResults', this.updatePdfResultModel, this);
    };
    /**
     * @hidden
     */
    PdfExport$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('pdfCellInfo', this.pdfQueryCellInfo);
        this.parent.off('updateResults', this.updatePdfResultModel);
    };
    /**
     * To destroy the PDF Export
     * @return {void}
     * @hidden
     */
    PdfExport$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    PdfExport$$1.prototype.updatePdfResultModel = function (returnResult) {
        this.dataResults = returnResult;
    };
    PdfExport$$1.prototype.Map = function (pdfExportProperties, 
    /* tslint:disable-next-line:no-any */
    isMultipleExport, pdfDoc, isBlob) {
        var _this = this;
        var dtSrc = this.parent.dataSource;
        var prop = Object();
        var isLocal = !isRemoteData(this.parent) && isOffline(this.parent);
        sf.base.setValue('cancel', false, prop);
        return new Promise(function (resolve, reject) {
            var dm = isLocal ? new sf.data.DataManager(dtSrc) : _this.parent.dataSource;
            var query = new sf.data.Query();
            if (!isLocal) {
                query = _this.generateQuery(query);
                sf.base.setValue('query', query, prop);
            }
            _this.parent.trigger(beforePdfExport, sf.base.extend(prop, pdfExportProperties));
            if (sf.grids.getObject('cancel', prop)) {
                return null;
            }
            dm.executeQuery(query).then(function (e) {
                var customsData = null;
                if (!sf.base.isNullOrUndefined(pdfExportProperties) && !sf.base.isNullOrUndefined(pdfExportProperties.dataSource)) {
                    customsData = pdfExportProperties.dataSource;
                }
                pdfExportProperties = _this.manipulatePdfProperties(pdfExportProperties, dtSrc, e);
                return _this.parent.grid.pdfExportModule.Map(_this.parent.grid, pdfExportProperties, isMultipleExport, pdfDoc, isBlob).then(function (document) {
                    if (customsData != null) {
                        pdfExportProperties.dataSource = customsData;
                    }
                    else {
                        delete pdfExportProperties.dataSource;
                    }
                    resolve(document);
                });
            });
        });
    };
    PdfExport$$1.prototype.generateQuery = function (query, prop) {
        if (!sf.base.isNullOrUndefined(prop) && prop.exportType === 'CurrentPage'
            && this.parent.allowPaging) {
            prop.exportType = 'AllPages';
            query.addParams('ExportType', 'CurrentPage');
            query.where(this.parent.parentIdMapping, 'equal', null);
            query = sf.grids.getObject('grid.renderModule.data.pageQuery', this.parent)(query);
        }
        return query;
    };
    PdfExport$$1.prototype.manipulatePdfProperties = function (prop, dtSrc, queryResult) {
        var args = {};
        //count not required for this query  
        var isLocal = !isRemoteData(this.parent) && isOffline(this.parent);
        sf.base.setValue('query', this.parent.grid.getDataModule().generateQuery(true), args);
        sf.base.setValue('isExport', true, args);
        if (!sf.base.isNullOrUndefined(prop) && !sf.base.isNullOrUndefined(prop.exportType)) {
            sf.base.setValue('exportType', prop.exportType, args);
        }
        if (!isLocal || !sf.base.isNullOrUndefined(this.parent.parentIdMapping)) {
            this.parent.parentData = [];
            this.parent.dataModule.convertToFlatData(sf.base.getValue('result', queryResult));
            sf.base.setValue('expresults', this.parent.flatData, args);
        }
        this.parent.notify('dataProcessor', args);
        //args = this.parent.dataModule.dataProcessor(args);
        args = this.dataResults;
        dtSrc = sf.base.isNullOrUndefined(args.result) ? this.parent.flatData.slice(0) : args.result;
        if (!isLocal) {
            this.parent.flatData = [];
        }
        if (prop && prop.dataSource && isLocal) {
            var flatDatas = this.parent.flatData;
            var dataSrc = prop.dataSource instanceof sf.data.DataManager ? prop.dataSource.dataSource.json : prop.dataSource;
            this.parent.dataModule.convertToFlatData(dataSrc);
            dtSrc = this.parent.flatData;
            this.parent.flatData = flatDatas;
        }
        prop = sf.base.isNullOrUndefined(prop) ? {} : prop;
        prop.dataSource = new sf.data.DataManager({ json: dtSrc });
        return prop;
    };
    /**
     * TreeGrid PDF Export cell modifier
     * @hidden
     */
    PdfExport$$1.prototype.pdfQueryCellInfo = function (args) {
        if (this.parent.grid.getColumnIndexByUid(args.column.uid) === this.parent.treeColumnIndex) {
            var style = {};
            var data = sf.grids.getObject('data', args);
            var ispadfilter = sf.base.isNullOrUndefined(data.filterLevel);
            var pad = ispadfilter ? data.level : data.filterLevel;
            style.paragraphIndent = pad * 3;
            args.style = style;
        }
        this.parent.notify('updateResults', args);
        this.parent.trigger('pdfQueryCellInfo', args);
    };
    return PdfExport$$1;
}());

/**
 * The `Page` module is used to render pager and handle paging action.
 * @hidden
 */
var Page$1 = /** @class */ (function () {
    function Page$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.Page);
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * @hidden
     */
    Page$$1.prototype.addEventListener = function () {
        this.parent.on(localPagedExpandCollapse, this.collapseExpandPagedchilds, this);
        this.parent.on(pagingActions, this.pageAction, this);
    };
    /**
     * @hidden
     */
    Page$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off(localPagedExpandCollapse, this.collapseExpandPagedchilds);
        this.parent.off(pagingActions, this.pageAction);
    };
    /**
     * For internal use only - Get the module name.
     * @private
     */
    Page$$1.prototype.getModuleName = function () {
        return 'pager';
    };
    /**
     * Refreshes the page count, pager information, and external message.
     * @return {void}
     */
    Page$$1.prototype.refresh = function () {
        this.parent.grid.pagerModule.refresh();
    };
    /**
     * To destroy the pager
     * @return {void}
     * @hidden
     */
    Page$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    /**
     * Navigates to the target page according to the given number.
     * @param  {number} pageNo - Defines the page number to navigate.
     * @return {void}
     */
    Page$$1.prototype.goToPage = function (pageNo) {
        this.parent.grid.pagerModule.goToPage(pageNo);
    };
    /**
     * Defines the text of the external message.
     * @param  {string} message - Defines the message to update.
     * @return {void}
     */
    Page$$1.prototype.updateExternalMessage = function (message) {
        this.parent.grid.pagerModule.updateExternalMessage(message);
    };
    /**
     * @hidden
     */
    Page$$1.prototype.collapseExpandPagedchilds = function (rowDetails) {
        rowDetails.record.expanded = rowDetails.action === 'collapse' ? false : true;
        if (sf.base.isBlazor()) {
            this.parent.flatData.filter(function (e) {
                return e.uniqueID === rowDetails.record.uniqueID;
            })[0].expanded = rowDetails.action === 'collapse' ? false : true;
        }
        var ret = {
            result: this.parent.flatData,
            row: rowDetails.row,
            action: rowDetails.action,
            record: rowDetails.record,
            count: this.parent.flatData.length
        };
        sf.base.getValue('grid.renderModule', this.parent).dataManagerSuccess(ret);
    };
    Page$$1.prototype.pageRoot = function (pagedResults, temp, result) {
        var newResults = sf.base.isNullOrUndefined(result) ? [] : result;
        var _loop_1 = function (t) {
            newResults.push(temp[t]);
            var res = [];
            if (temp[t].hasChildRecords) {
                res = pagedResults.filter(function (e) {
                    return temp[t].uniqueID === e.parentUniqueID;
                });
                newResults = this_1.pageRoot(pagedResults, res, newResults);
            }
        };
        var this_1 = this;
        for (var t = 0; t < temp.length; t++) {
            _loop_1(t);
        }
        return newResults;
    };
    Page$$1.prototype.pageAction = function (pageingDetails) {
        var _this = this;
        var dm = new sf.data.DataManager(pageingDetails.result);
        if (this.parent.pageSettings.pageSizeMode === 'Root') {
            var temp = [];
            var propname = (this.parent.grid.filterSettings.columns.length > 0) &&
                (this.parent.filterSettings.hierarchyMode === 'Child' || this.parent.filterSettings.hierarchyMode === 'None') ?
                'filterLevel' : 'level';
            var query = new sf.data.Query().where(propname, 'equal', 0);
            temp = dm.executeLocal(query);
            pageingDetails.count = temp.length;
            var size = this.parent.grid.pageSettings.pageSize;
            var current = this.parent.grid.pageSettings.currentPage;
            var skip = size * (current - 1);
            query = query.skip(skip).take(size);
            temp = dm.executeLocal(query);
            var newResults = this.pageRoot(pageingDetails.result, temp);
            pageingDetails.result = newResults;
        }
        else {
            var dm_1 = new sf.data.DataManager(pageingDetails.result);
            var expanded$$1 = new sf.data.Predicate('expanded', 'notequal', null).or('expanded', 'notequal', undefined);
            var parents_1 = dm_1.executeLocal(new sf.data.Query().where(expanded$$1));
            var visualData = void 0;
            if (isFilterChildHierarchy(this.parent)) {
                visualData = parents_1;
            }
            else {
                visualData = parents_1.filter(function (e) {
                    return getExpandStatus(_this.parent, e, parents_1);
                });
            }
            pageingDetails.count = visualData.length;
            var query = new sf.data.Query();
            var size = this.parent.grid.pageSettings.pageSize;
            var current = this.parent.grid.pageSettings.currentPage;
            if (visualData.length < (current * size)) {
                current = (Math.floor(visualData.length / size)) + ((visualData.length % size) ? 1 : 0);
                current = current ? current : 1;
                this.parent.grid.setProperties({ pageSettings: { currentPage: current } }, true);
            }
            var skip = size * (current - 1);
            query = query.skip(skip).take(size);
            dm_1.dataSource.json = visualData;
            pageingDetails.result = dm_1.executeLocal(query);
        }
        this.parent.notify('updateAction', pageingDetails);
    };
    return Page$$1;
}());

/**
 * Toolbar Module for TreeGrid
 * @hidden
 */
var Toolbar$1 = /** @class */ (function () {
    function Toolbar$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.Toolbar);
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    Toolbar$$1.prototype.getModuleName = function () {
        return 'toolbar';
    };
    /**
     * @hidden
     */
    Toolbar$$1.prototype.addEventListener = function () {
        this.parent.on(rowSelected, this.refreshToolbar, this);
        this.parent.on(toolbarClick, this.toolbarClickHandler, this);
    };
    /**
     * @hidden
     */
    Toolbar$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off(rowSelected, this.refreshToolbar);
        this.parent.off(toolbarClick, this.toolbarClickHandler);
    };
    Toolbar$$1.prototype.refreshToolbar = function (args) {
        var tObj = this.parent;
        if (args.row.rowIndex === 0 || tObj.getSelectedRecords().length > 1) {
            this.enableItems([tObj.element.id + '_gridcontrol_indent', tObj.element.id + '_gridcontrol_outdent'], false);
        }
        else {
            if (!sf.base.isNullOrUndefined(tObj.getCurrentViewRecords()[args.row.rowIndex])) {
                if (!sf.base.isNullOrUndefined(tObj.getCurrentViewRecords()[args.row.rowIndex]) &&
                    (tObj.getCurrentViewRecords()[args.row.rowIndex].level >
                        tObj.getCurrentViewRecords()[args.row.rowIndex - 1].level)) {
                    this.enableItems([tObj.element.id + '_gridcontrol_indent'], false);
                }
                else {
                    this.enableItems([tObj.element.id + '_gridcontrol_indent'], true);
                }
                if (tObj.getCurrentViewRecords()[args.row.rowIndex].level ===
                    tObj.getCurrentViewRecords()[args.row.rowIndex - 1].level) {
                    this.enableItems([tObj.element.id + '_gridcontrol_indent'], true);
                }
                if (tObj.getCurrentViewRecords()[args.row.rowIndex].level === 0) {
                    this.enableItems([tObj.element.id + '_gridcontrol_outdent'], false);
                }
                if (tObj.getCurrentViewRecords()[args.row.rowIndex].level !== 0) {
                    this.enableItems([tObj.element.id + '_gridcontrol_outdent'], true);
                }
            }
        }
        if (args.row.rowIndex === 0 && !sf.base.isNullOrUndefined(args.data.parentItem)) {
            this.enableItems([tObj.element.id + '_gridcontrol_outdent'], true);
        }
    };
    Toolbar$$1.prototype.toolbarClickHandler = function (args) {
        var tObj = this.parent;
        if (this.parent.editSettings.mode === 'Cell' && this.parent.grid.editSettings.mode === 'Batch' &&
            args.item.id === this.parent.grid.element.id + '_update') {
            args.cancel = true;
            this.parent.grid.editModule.saveCell();
        }
        if (args.item.id === this.parent.grid.element.id + '_expandall') {
            this.parent.expandAll();
        }
        if (args.item.id === this.parent.grid.element.id + '_collapseall') {
            this.parent.collapseAll();
        }
        if (args.item.id === tObj.grid.element.id + '_indent' && tObj.getSelectedRecords().length) {
            var record = tObj.getCurrentViewRecords()[tObj.getSelectedRowIndexes()[0] - 1];
            var dropIndex = void 0;
            if (record.level > tObj.getSelectedRecords()[0].level) {
                for (var i = 0; i < tObj.getCurrentViewRecords().length; i++) {
                    if (tObj.getCurrentViewRecords()[i].taskData === record.parentItem.taskData) {
                        dropIndex = i;
                    }
                }
            }
            else {
                dropIndex = tObj.getSelectedRowIndexes()[0] - 1;
            }
            tObj.reorderRows([tObj.getSelectedRowIndexes()[0]], dropIndex, 'child');
        }
        if (args.item.id === tObj.grid.element.id + '_outdent' && tObj.getSelectedRecords().length) {
            var index = tObj.getSelectedRowIndexes()[0];
            var dropIndex = void 0;
            var parentItem = tObj.getSelectedRecords()[0].parentItem;
            for (var i = 0; i < tObj.getCurrentViewRecords().length; i++) {
                if (tObj.getCurrentViewRecords()[i].taskData === parentItem.taskData) {
                    dropIndex = i;
                }
            }
            tObj.reorderRows([index], dropIndex, 'below');
        }
    };
    /**
     * Gets the toolbar of the TreeGrid.
     * @return {Element}
     * @hidden
     */
    Toolbar$$1.prototype.getToolbar = function () {
        return this.parent.grid.toolbarModule.getToolbar();
    };
    /**
     * Enables or disables ToolBar items.
     * @param {string[]} items - Defines the collection of itemID of ToolBar items.
     * @param {boolean} isEnable - Defines the items to be enabled or disabled.
     * @return {void}
     * @hidden
     */
    Toolbar$$1.prototype.enableItems = function (items, isEnable) {
        this.parent.grid.toolbarModule.enableItems(items, isEnable);
    };
    /**
     * Destroys the ToolBar.
     * @method destroy
     * @return {void}
     */
    Toolbar$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    return Toolbar$$1;
}());

/**
 * TreeGrid Aggregate module
 * @hidden
 */
var Aggregate$1 = /** @class */ (function () {
    /**
     * Constructor for Aggregate module
     */
    function Aggregate$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.Aggregate);
        this.parent = parent;
        this.flatChildRecords = [];
        this.summaryQuery = [];
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    Aggregate$$1.prototype.getModuleName = function () {
        return 'summary';
    };
    Aggregate$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
    };
    /**
     * Function to calculate summary values
     *  @hidden
     */
    Aggregate$$1.prototype.calculateSummaryValue = function (summaryQuery, filteredData, isSort) {
        this.summaryQuery = summaryQuery;
        var parentRecord;
        var parentDataLength = Object.keys(filteredData).length;
        var parentData;
        parentData = [];
        for (var p = 0, len = parentDataLength; p < len; p++) {
            var summaryRow = sf.grids.getObject('isSummaryRow', filteredData[p]);
            if (!summaryRow) {
                parentData.push(filteredData[p]);
            }
        }
        var parentRecords = findParentRecords(parentData);
        var flatRecords;
        flatRecords = parentData.slice();
        var columnLength = Object.keys(this.parent.columns).length;
        var summaryLength = Object.keys(this.parent.aggregates).length;
        var dataLength = Object.keys(parentRecords).length;
        var childRecordsLength;
        for (var i = 0, len = dataLength; i < len; i++) {
            parentRecord = parentRecords[i];
            childRecordsLength = this.getChildRecordsLength(parentRecord, flatRecords);
            if (childRecordsLength) {
                var _loop_1 = function (summaryRowIndex, len_1) {
                    var item = void 0;
                    item = {};
                    for (var columnIndex = 0, len_2 = columnLength; columnIndex < len_2; columnIndex++) {
                        var field = sf.base.isNullOrUndefined(sf.grids.getObject('field', this_1.parent.columns[columnIndex])) ?
                            this_1.parent.columns[columnIndex] : sf.grids.getObject('field', this_1.parent.columns[columnIndex]);
                        item[field] = null;
                    }
                    if (this_1.parent.aggregates[summaryRowIndex - 1].showChildSummary) {
                        item = this_1.createSummaryItem(item, this_1.parent.aggregates[summaryRowIndex - 1]);
                        var idx_1;
                        flatRecords.map(function (e, i) { if (e.uniqueID === parentRecord.uniqueID) {
                            idx_1 = i;
                            return;
                        } });
                        var currentIndex = idx_1 + childRecordsLength + summaryRowIndex;
                        var summaryParent = sf.base.extend({}, parentRecord);
                        delete summaryParent.childRecords;
                        delete summaryParent[this_1.parent.childMapping];
                        sf.base.setValue('parentItem', summaryParent, item);
                        var level = sf.grids.getObject('level', summaryParent);
                        sf.base.setValue('level', level + 1, item);
                        var index = sf.grids.getObject('index', summaryParent);
                        sf.base.setValue('isSummaryRow', true, item);
                        sf.base.setValue('parentUniqueID', summaryParent.uniqueID, item);
                        if (isSort) {
                            var childRecords = sf.grids.getObject('childRecords', parentRecord);
                            if (childRecords.length) {
                                childRecords.push(item);
                            }
                        }
                        flatRecords.splice(currentIndex, 0, item);
                    }
                    else {
                        return "continue";
                    }
                };
                var this_1 = this;
                for (var summaryRowIndex = 1, len_1 = summaryLength; summaryRowIndex <= len_1; summaryRowIndex++) {
                    _loop_1(summaryRowIndex, len_1);
                }
                this.flatChildRecords = [];
            }
        }
        return flatRecords;
    };
    Aggregate$$1.prototype.getChildRecordsLength = function (parentData, flatData) {
        var recordLength = Object.keys(flatData).length;
        var record;
        for (var i = 0, len = recordLength; i < len; i++) {
            record = flatData[i];
            var parent_1 = sf.base.isNullOrUndefined(record.parentItem) ? null :
                flatData.filter(function (e) { return e.uniqueID === record.parentItem.uniqueID; })[0];
            if (parentData === parent_1) {
                this.flatChildRecords.push(record);
                var hasChild = sf.grids.getObject('hasChildRecords', record);
                if (hasChild) {
                    this.getChildRecordsLength(record, flatData);
                }
                else {
                    continue;
                }
            }
        }
        return this.flatChildRecords.length;
    };
    Aggregate$$1.prototype.createSummaryItem = function (itemData, summary) {
        var summaryColumnLength = Object.keys(summary.columns).length;
        for (var i = 0, len = summaryColumnLength; i < len; i++) {
            var displayColumn = sf.base.isNullOrUndefined(summary.columns[i].columnName) ? summary.columns[i].field :
                summary.columns[i].columnName;
            var keys = Object.keys(itemData);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (key === displayColumn) {
                    itemData[key] = this.getSummaryValues(summary.columns[i], this.flatChildRecords);
                }
                else {
                    continue;
                }
            }
        }
        return itemData;
    };
    Aggregate$$1.prototype.getSummaryValues = function (summaryColumn, summaryData) {
        var qry = new sf.data.Query();
        var single;
        single = {};
        var helper = {};
        var type = !sf.base.isNullOrUndefined(summaryColumn.field) ?
            this.parent.getColumnByField(summaryColumn.field).type : undefined;
        summaryColumn.setPropertiesSilent({ format: this.getFormatFromType(summaryColumn.format, type) });
        summaryColumn.setFormatter(this.parent.grid.locale);
        var formatFn = summaryColumn.getFormatter() || (function () { return function (a) { return a; }; })();
        summaryColumn.setTemplate(helper);
        var tempObj = summaryColumn.getTemplate(2);
        qry.queries = this.summaryQuery;
        qry.requiresCount();
        var sumData = new sf.data.DataManager(summaryData).executeLocal(qry);
        var types = summaryColumn.type;
        var summaryKey;
        types = [summaryColumn.type];
        for (var i = 0; i < types.length; i++) {
            summaryKey = types[i];
            var key = summaryColumn.field + ' - ' + types[i].toLowerCase();
            var val = types[i] !== 'Custom' ? sf.grids.getObject('aggregates', sumData) :
                sf.grids.calculateAggregate(types[i], sumData, summaryColumn, this.parent);
            var disp = summaryColumn.columnName;
            var value_1 = types[i] !== 'Custom' ? val[key] : val;
            single[disp] = single[disp] || {};
            single[disp][key] = value_1;
            single[disp][types[i]] = !sf.base.isNullOrUndefined(val) ? formatFn(value_1) : ' ';
        }
        helper.format = summaryColumn.getFormatter();
        var cellElement = sf.base.createElement('td', {
            className: 'e-summary'
        });
        sf.grids.appendChildren(cellElement, tempObj.fn(single[summaryColumn.columnName], this.parent, tempObj.property));
        var value = single[summaryColumn.columnName][summaryKey];
        var summaryValue;
        if (cellElement.innerHTML.indexOf(value) === -1) {
            summaryValue = cellElement.innerHTML + value;
            return summaryValue;
        }
        else {
            return cellElement.innerHTML;
        }
    };
    Aggregate$$1.prototype.getFormatFromType = function (summaryformat, type) {
        if (sf.base.isNullOrUndefined(type) || typeof summaryformat !== 'string') {
            return summaryformat;
        }
        var obj;
        switch (type) {
            case 'number':
                obj = { format: summaryformat };
                break;
            case 'datetime':
                obj = { type: 'dateTime', skeleton: summaryformat };
                break;
            case 'date':
                obj = { type: type, skeleton: summaryformat };
                break;
        }
        return obj;
    };
    /**
     * To destroy the Aggregate module
     * @return {void}
     * @hidden
     */
    Aggregate$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    return Aggregate$$1;
}());

/**
 * Internal dataoperations for TreeGrid
 * @hidden
 */
var Sort$1 = /** @class */ (function () {
    function Sort$$1(grid) {
        sf.grids.Grid.Inject(sf.grids.Sort);
        this.parent = grid;
        this.taskIds = [];
        this.flatSortedData = [];
        this.storedIndex = -1;
        this.isSelfReference = !sf.base.isNullOrUndefined(this.parent.parentIdMapping);
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    Sort$$1.prototype.getModuleName = function () {
        return 'sort';
    };
    /**
     * @hidden
     */
    Sort$$1.prototype.addEventListener = function () {
        this.parent.on('updateModel', this.updateModel, this);
        this.parent.on('createSort', this.createdSortedRecords, this);
    };
    /**
     * @hidden
     */
    Sort$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('updateModel', this.updateModel);
        this.parent.off('createSort', this.createdSortedRecords);
    };
    Sort$$1.prototype.createdSortedRecords = function (sortParams) {
        var data = sortParams.modifiedData;
        var srtQry = sortParams.srtQry;
        this.iterateSort(data, srtQry);
        this.storedIndex = -1;
        sortParams.modifiedData = this.flatSortedData;
        this.flatSortedData = [];
    };
    Sort$$1.prototype.iterateSort = function (data, srtQry) {
        for (var d = 0; d < data.length; d++) {
            if (this.parent.grid.filterSettings.columns.length > 0 || this.parent.grid.searchSettings.key !== '') {
                if (!sf.base.isNullOrUndefined(getParentData(this.parent, data[d].uniqueID, true))) {
                    this.storedIndex++;
                    this.flatSortedData[this.storedIndex] = data[d];
                }
            }
            else {
                this.storedIndex++;
                this.flatSortedData[this.storedIndex] = data[d];
            }
            if (data[d].hasChildRecords) {
                var childSort = (new sf.data.DataManager(data[d].childRecords).executeLocal(srtQry));
                this.iterateSort(childSort, srtQry);
            }
        }
    };
    /**
     * Sorts a column with the given options.
     * @param {string} columnName - Defines the column name to be sorted.
     * @param {SortDirection} direction - Defines the direction of sorting field.
     * @param {boolean} isMultiSort - Specifies whether the previous sorted columns are to be maintained.
     * @return {void}
     */
    Sort$$1.prototype.sortColumn = function (columnName, direction, isMultiSort) {
        this.parent.grid.sortColumn(columnName, direction, isMultiSort);
    };
    Sort$$1.prototype.removeSortColumn = function (field) {
        this.parent.grid.removeSortColumn(field);
    };
    /**
     * The function used to update sortSettings of TreeGrid.
     * @return {void}
     * @hidden
     */
    Sort$$1.prototype.updateModel = function () {
        this.parent.setProperties({ sortSettings: sf.grids.getActualProperties(this.parent.grid.sortSettings) }, true);
    };
    /**
     * Clears all the sorted columns of the TreeGrid.
     * @return {void}
     */
    Sort$$1.prototype.clearSorting = function () {
        this.parent.grid.clearSorting();
        this.updateModel();
    };
    /**
     * Destroys the Sorting of TreeGrid.
     * @method destroy
     * @return {void}
     */
    Sort$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    return Sort$$1;
}());

/**
 * TreeGrid ColumnMenu module
 * @hidden
 */
var ColumnMenu$1 = /** @class */ (function () {
    /**
     * Constructor for render module
     */
    function ColumnMenu$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.ColumnMenu);
        this.parent = parent;
    }
    ColumnMenu$$1.prototype.getColumnMenu = function () {
        return this.parent.grid.columnMenuModule.getColumnMenu();
    };
    ColumnMenu$$1.prototype.destroy = function () {
        //this.parent.grid.columnMenuModule.destroy();
    };
    /**
     * For internal use only - Get the module name.
     * @private
     */
    ColumnMenu$$1.prototype.getModuleName = function () {
        return 'columnMenu';
    };
    return ColumnMenu$$1;
}());

/**
 * ContextMenu Module for TreeGrid
 * @hidden
 */
var ContextMenu$1 = /** @class */ (function () {
    function ContextMenu$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.ContextMenu);
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * @hidden
     */
    ContextMenu$$1.prototype.addEventListener = function () {
        this.parent.on('contextMenuOpen', this.contextMenuOpen, this);
        this.parent.on('contextMenuClick', this.contextMenuClick, this);
    };
    /**
     * @hidden
     */
    ContextMenu$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('contextMenuOpen', this.contextMenuOpen);
        this.parent.off('contextMenuClick', this.contextMenuClick);
    };
    ContextMenu$$1.prototype.contextMenuOpen = function (args) {
        var addRow = args.element.querySelector('#' + this.parent.element.id + '_gridcontrol_cmenu_AddRow');
        var editRecord = args.element.querySelector('#' + this.parent.element.id + '_gridcontrol_cmenu_Edit');
        if (addRow) {
            if (this.parent.grid.editSettings.allowAdding === false) {
                addRow.style.display = 'none';
            }
            else {
                addRow.style.display = 'block';
            }
        }
        if ((this.parent.editSettings.mode === 'Cell' || this.parent.editSettings.mode === 'Batch')
            && !(sf.base.isNullOrUndefined(editRecord)) && !(editRecord.classList.contains('e-menu-hide'))) {
            editRecord.style.display = 'none';
        }
    };
    ContextMenu$$1.prototype.contextMenuClick = function (args) {
        if (args.item.id === 'Above' || args.item.id === 'Below') {
            this.parent.notify('savePreviousRowPosition', args);
            this.parent.setProperties({ editSettings: { newRowPosition: args.item.id } }, true);
            this.parent.addRecord();
        }
    };
    /**
     * For internal use only - Get the module name.
     * @private
     */
    ContextMenu$$1.prototype.getModuleName = function () {
        return 'contextMenu';
    };
    /**
     * Destroys the ContextMenu.
     * @method destroy
     * @return {void}
     */
    ContextMenu$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    /**
     * Gets the context menu element from the TreeGrid.
     * @return {Element}
     */
    ContextMenu$$1.prototype.getContextMenu = function () {
        return this.parent.grid.contextMenuModule.getContextMenu();
    };
    return ContextMenu$$1;
}());

/**
 * `BatchEdit` module is used to handle batch editing actions.
 * @hidden
 */
var BatchEdit = /** @class */ (function () {
    function BatchEdit(parent) {
        this.batchChildCount = 0;
        this.addedRecords = 'addedRecords';
        this.deletedRecords = 'deletedRecords';
        this.batchAddedRecords = [];
        this.batchDeletedRecords = [];
        this.batchAddRowRecord = [];
        this.parent = parent;
        this.isSelfReference = !sf.base.isNullOrUndefined(parent.parentIdMapping);
        this.batchRecords = [];
        this.currentViewRecords = [];
        this.isAdd = false;
        this.addEventListener();
    }
    BatchEdit.prototype.addEventListener = function () {
        this.parent.on(cellSaved, this.cellSaved, this);
        this.parent.on(batchAdd, this.batchAdd, this);
        this.parent.on(beforeBatchAdd, this.beforeBatchAdd, this);
        this.parent.on(batchSave, this.batchSave, this);
        this.parent.on(beforeBatchDelete, this.beforeBatchDelete, this);
        this.parent.on(beforeBatchSave, this.beforeBatchSave, this);
        this.parent.on('batchPageAction', this.batchPageAction, this);
        this.parent.on('batchCancelAction', this.batchCancelAction, this);
    };
    /**
     * @hidden
     */
    BatchEdit.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off(cellSaved, this.cellSaved);
        this.parent.off(batchAdd, this.batchAdd);
        this.parent.off(batchSave, this.batchSave);
        this.parent.off(beforeBatchAdd, this.beforeBatchAdd);
        this.parent.off(beforeBatchDelete, this.beforeBatchDelete);
        this.parent.off(beforeBatchSave, this.beforeBatchSave);
        this.parent.off('batchPageAction', this.batchPageAction);
        this.parent.off('batchCancelAction', this.batchCancelAction);
    };
    /**
     * To destroy the editModule
     * @return {void}
     * @hidden
     */
    BatchEdit.prototype.destroy = function () {
        this.removeEventListener();
    };
    /**
     * @hidden
     */
    BatchEdit.prototype.getBatchRecords = function () {
        return this.batchRecords;
    };
    /**
     * @hidden
     */
    BatchEdit.prototype.getAddRowIndex = function () {
        return this.addRowIndex;
    };
    /**
     * @hidden
     */
    BatchEdit.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    /**
     * @hidden
     */
    BatchEdit.prototype.getBatchChildCount = function () {
        return this.batchChildCount;
    };
    BatchEdit.prototype.batchPageAction = function () {
        var data = (this.parent.grid.dataSource instanceof sf.data.DataManager ?
            this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource);
        var primaryKey = this.parent.grid.getPrimaryKeyFieldNames()[0];
        var index;
        if (!sf.base.isNullOrUndefined(this.batchAddedRecords) && this.batchAddedRecords.length) {
            for (var i = 0; i < this.batchAddedRecords.length; i++) {
                index = data.map(function (e) { return e[primaryKey]; }).indexOf(this.batchAddedRecords[i][primaryKey]);
                data.splice(index, 1);
            }
        }
        this.batchAddedRecords = this.batchRecords = this.batchAddRowRecord = this.batchDeletedRecords = this.currentViewRecords = [];
    };
    BatchEdit.prototype.cellSaved = function (args) {
        var actualCellIndex = args.cell.cellIndex;
        var frozenCols = this.parent.frozenColumns || this.parent.getFrozenColumns();
        if (frozenCols && args.columnObject.index > frozenCols) {
            actualCellIndex = actualCellIndex + frozenCols;
        }
        if (actualCellIndex === this.parent.treeColumnIndex) {
            this.parent.renderModule.cellRender({ data: args.rowData, cell: args.cell,
                column: this.parent.grid.getColumnByIndex(args.cell.cellIndex)
            });
        }
        if (this.isAdd && this.parent.editSettings.mode === 'Batch' && this.parent.editSettings.newRowPosition !== 'Bottom') {
            var data = (this.parent.grid.dataSource instanceof sf.data.DataManager ?
                this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource);
            var added = void 0;
            var level = 'level';
            var primaryKey_1 = this.parent.grid.getPrimaryKeyFieldNames()[0];
            var currentDataIndex = void 0;
            var parentRecord = void 0;
            var indexvalue = void 0;
            var parentItem = 'parentItem';
            var uniqueID = 'uniqueID';
            parentRecord = this.selectedIndex > -1 ? this.batchRecords[this.addRowIndex][parentItem] : null;
            var idMapping = void 0;
            var parentUniqueID = void 0;
            var parentIdMapping = void 0;
            var rowObjectIndex = this.parent.editSettings.newRowPosition === 'Top' || this.selectedIndex === -1 ? 0 :
                this.parent.editSettings.newRowPosition === 'Above' ? this.addRowIndex
                    : this.addRowIndex + 1;
            rowObjectIndex = this.getActualRowObjectIndex(rowObjectIndex);
            if (this.newBatchRowAdded) {
                if (this.batchRecords.length) {
                    idMapping = this.batchRecords[this.addRowIndex][this.parent.idMapping];
                    parentIdMapping = this.batchRecords[this.addRowIndex][this.parent.parentIdMapping];
                    if (this.batchRecords[this.addRowIndex][parentItem]) {
                        parentUniqueID = this.batchRecords[this.addRowIndex][parentItem][uniqueID];
                    }
                }
                this.batchAddedRecords = extendArray(this.batchAddedRecords);
                this.batchAddRowRecord = extendArray(this.batchAddRowRecord);
                this.batchAddRowRecord.push(this.batchRecords[this.addRowIndex]);
                added = this.parent.grid.getRowsObject()[rowObjectIndex].changes;
                added.uniqueID = sf.grids.getUid(this.parent.element.id + '_data_');
                sf.base.setValue('uniqueIDCollection.' + added.uniqueID, added, this.parent);
                if (!added.hasOwnProperty('level')) {
                    this.batchIndex = this.selectedIndex === -1 ? 0 : this.batchIndex;
                    if (this.parent.editSettings.newRowPosition === 'Child') {
                        added.primaryParent = parentRecord;
                        if (this.selectedIndex > -1) {
                            added.parentItem = sf.base.extend({}, this.batchRecords[this.addRowIndex]);
                            added.parentUniqueID = added.parentItem.uniqueID;
                            delete added.parentItem.childRecords;
                            delete added.parentItem[this.parent.childMapping];
                            added.level = added.parentItem.level + 1;
                            added.index = this.batchIndex;
                            var childRecordCount = findChildrenRecords(this.batchRecords[this.addRowIndex]).length;
                            var record = findChildrenRecords(this.batchRecords[this.addRowIndex])[childRecordCount - 1];
                            record = sf.base.isNullOrUndefined(record) ? this.batchRecords[this.addRowIndex] : record;
                            currentDataIndex = data.map(function (e) { return e[primaryKey_1]; }).indexOf(record[primaryKey_1]);
                            if (this.isSelfReference) {
                                added[this.parent.parentIdMapping] = idMapping;
                            }
                            updateParentRow(primaryKey_1, added.parentItem, 'add', this.parent, this.isSelfReference, added);
                        }
                    }
                    else if ((this.parent.editSettings.newRowPosition === 'Above' || this.parent.editSettings.newRowPosition === 'Below')
                        && !sf.base.isNullOrUndefined(this.batchRecords[this.addRowIndex])) {
                        added.level = this.batchRecords[this.addRowIndex][level];
                        if (added.level && this.selectedIndex > -1) {
                            added.parentItem = parentRecord;
                            added.parentUniqueID = parentUniqueID;
                            delete added.parentItem.childRecords;
                            delete added.parentItem[this.parent.childMapping];
                        }
                        added.index = this.parent.editSettings.newRowPosition === 'Below' ? this.batchIndex : this.batchIndex - 1;
                        if (this.parent.editSettings.newRowPosition === 'Below' && this.selectedIndex > -1) {
                            var childRecordCount = findChildrenRecords(this.batchRecords[this.addRowIndex]).length;
                            var record = findChildrenRecords(this.batchRecords[this.addRowIndex])[childRecordCount - 1];
                            record = sf.base.isNullOrUndefined(record) ? this.batchRecords[this.addRowIndex] : record;
                            currentDataIndex = data.map(function (e) { return e[primaryKey_1]; }).indexOf(record[primaryKey_1]);
                        }
                        if (this.parent.editSettings.newRowPosition === 'Above' && this.selectedIndex > -1) {
                            var record = this.batchRecords[this.addRowIndex];
                            currentDataIndex = data.map(function (e) { return e[primaryKey_1]; }).indexOf(record[primaryKey_1]);
                        }
                        if (this.isSelfReference) {
                            added[this.parent.parentIdMapping] = parentIdMapping;
                        }
                    }
                    added.index = added.index === -1 ? 0 : added.index;
                    added.hasChildRecords = false;
                    added.childRecords = [];
                    this.batchRecords.splice(added.index, 0, added);
                    this.currentViewRecords.splice(added.index, 0, added);
                    if (currentDataIndex) {
                        indexvalue = currentDataIndex;
                    }
                    else {
                        indexvalue = added.index;
                    }
                    if (this.parent.editSettings.newRowPosition !== 'Above') {
                        indexvalue = added.index === 0 ? indexvalue : indexvalue + 1;
                    }
                    data.splice(indexvalue, 0, added);
                    this.batchAddedRecords.push(added);
                }
                this.parent.grid.getRowsObject()[rowObjectIndex].data = added;
                this.newBatchRowAdded = false;
            }
            if (this.parent.frozenColumns || this.parent.getFrozenColumns()
                && this.parent.grid.getRowsObject()[rowObjectIndex].edit === 'add') {
                sf.base.merge(this.currentViewRecords[rowObjectIndex], this.parent.grid.getRowsObject()[rowObjectIndex].changes);
            }
        }
    };
    BatchEdit.prototype.beforeBatchAdd = function (e) {
        var isTabLastRow = 'isTabLastRow';
        if (this.parent.editSettings.mode === 'Cell' && this.parent.editModule[isTabLastRow]) {
            e.cancel = true;
            this.parent.editModule[isTabLastRow] = false;
            return;
        }
        this.selectedIndex = this.parent.grid.selectedRowIndex;
        this.addRowIndex = this.parent.grid.selectedRowIndex > -1 ? this.parent.grid.selectedRowIndex : 0;
        this.addRowRecord = this.parent.getSelectedRecords()[0];
    };
    BatchEdit.prototype.batchAdd = function (e) {
        if (this.parent.editSettings.newRowPosition !== 'Bottom') {
            this.isAdd = true;
            this.newBatchRowAdded = true;
            var actualIndex = 0;
            if (!this.batchRecords.length) {
                this.batchAddedRecords = [];
                this.batchRecords = extendArray(this.parent.grid.getCurrentViewRecords());
                this.currentViewRecords = extendArray(this.parent.grid.getCurrentViewRecords());
            }
            if (this.parent.editSettings.newRowPosition !== 'Top') {
                var records = this.parent.grid.getCurrentViewRecords();
                if (this.parent.editSettings.mode === 'Batch' && (this.parent.getBatchChanges()[this.addedRecords].length > 1
                    || this.parent.getBatchChanges()[this.deletedRecords].length)) {
                    records = this.batchRecords;
                }
                this.updateChildCount(records);
                this.parent.notify(beginAdd, {});
                this.batchChildCount = 0;
            }
            this.updateRowIndex();
            // update focus module, need to refix this once grid source modified.
            var focusModule = sf.base.getValue('focusModule', this.parent.grid);
            var table = this.parent.getContentTable();
            if (this.parent.getBatchChanges()[this.deletedRecords].length && this.parent.editSettings.newRowPosition === 'Above') {
                actualIndex = e.row.rowIndex;
                focusModule.getContent().matrix.matrix = this.matrix;
            }
            else {
                actualIndex = table.getElementsByClassName('e-batchrow')[0].rowIndex;
                // if (this.parent.frozenRows || this.parent.frozenColumns) {
                //   actualIndex = this.batchIndex;
                // }
            }
            focusModule.getContent().matrix.current = [actualIndex, focusModule.getContent().matrix.current[1]];
        }
    };
    BatchEdit.prototype.beforeBatchDelete = function (e) {
        if (!this.batchRecords.length) {
            this.batchRecords = extendArray(this.parent.grid.getCurrentViewRecords());
            this.currentViewRecords = extendArray(this.parent.grid.getCurrentViewRecords());
        }
        var focusModule = sf.base.getValue('focusModule', this.parent.grid);
        this.matrix = focusModule.getContent().matrix.matrix;
        this.parent = this.parent;
        var row = [];
        var records;
        var data;
        var primarykey = this.parent.grid.getPrimaryKeyFieldNames()[0];
        data = this.parent.grid.getSelectedRecords()[this.parent.grid.getSelectedRecords().length - 1];
        var childs = findChildrenRecords(data);
        if (childs.length) {
            for (var i = 0; i < childs.length; i++) {
                var index = this.parent.grid.getRowIndexByPrimaryKey(childs[i][primarykey]);
                row.push(this.parent.grid.getRows()[index]);
                if (this.parent.frozenRows || this.parent.frozenColumns || this.parent.getFrozenColumns()) {
                    row.push(this.parent.grid.getMovableRows()[index]);
                }
            }
        }
        if (!sf.base.isNullOrUndefined(data.parentItem)) {
            var parentItem = getParentData(this.parent, data.parentItem.uniqueID);
            if (!sf.base.isNullOrUndefined(parentItem) && parentItem.hasChildRecords) {
                var childIndex = parentItem.childRecords.indexOf(data);
                parentItem.childRecords.splice(childIndex, 1);
            }
            this.batchDeletedRecords = extendArray(this.batchDeletedRecords);
            this.batchDeletedRecords.push(data);
        }
        childs.push(data);
        records = childs;
        for (var i = 0; i < records.length; i++) {
            var indexvalue = this.batchRecords.map(function (e) { return e[primarykey]; }).indexOf(records[i][primarykey]);
            if (indexvalue !== -1) {
                this.batchRecords.splice(indexvalue, 1);
            }
        }
        for (var i = 0; i < row.length; i++) {
            if (!sf.base.isNullOrUndefined(row[i])) {
                this.parent.grid.selectionModule.selectedRecords.push(row[i]);
            }
        }
    };
    BatchEdit.prototype.updateRowIndex = function () {
        var rows = this.parent.grid.getDataRows();
        for (var i = 0; i < rows.length; i++) {
            rows[i].setAttribute('aria-rowindex', i.toString());
        }
        if (this.parent.frozenRows || this.parent.getFrozenColumns() || this.parent.frozenColumns) {
            var mRows = this.parent.grid.getMovableDataRows();
            for (var i = 0; i < mRows.length; i++) {
                mRows[i].setAttribute('aria-rowindex', i.toString());
            }
        }
    };
    BatchEdit.prototype.updateChildCount = function (records) {
        var primaryKey = this.parent.grid.getPrimaryKeyFieldNames()[0];
        var addedRecords = 'addedRecords';
        var parentItem = this.parent.editSettings.newRowPosition === 'Child' ? 'primaryParent' : 'parentItem';
        for (var i = 0; i < this.parent.getBatchChanges()[addedRecords].length; i++) {
            if (!sf.base.isNullOrUndefined(this.parent.getBatchChanges()[addedRecords][i][parentItem])) {
                if (this.parent.getBatchChanges()[addedRecords][i][parentItem][primaryKey] === records[this.addRowIndex][primaryKey]) {
                    this.batchChildCount = this.batchChildCount + 1;
                }
            }
        }
    };
    BatchEdit.prototype.beforeBatchSave = function (e) {
        var changeRecords = 'changedRecords';
        var deleterecords = 'deletedRecords';
        var changedRecords = e.batchChanges[changeRecords];
        if (e.batchChanges[changeRecords].length) {
            var columnName = void 0;
            for (var i = 0; i < changedRecords.length; i++) {
                editAction({ value: changedRecords[i], action: 'edit' }, this.parent, this.isSelfReference, this.addRowIndex, this.selectedIndex, columnName);
            }
        }
        if (e.batchChanges[deleterecords].length) {
            var deletedRecords = e.batchChanges[deleterecords];
            var record = deletedRecords;
            for (var i = 0; i < record.length; i++) {
                this.deleteUniqueID(record[i].uniqueID);
                var childs = findChildrenRecords(record[i]);
                for (var c = 0; c < childs.length; c++) {
                    this.deleteUniqueID(childs[c].uniqueID);
                }
                e.batchChanges[deleterecords] = e.batchChanges[deleterecords].concat(childs);
            }
        }
        this.isAdd = false;
    };
    BatchEdit.prototype.deleteUniqueID = function (value) {
        var idFilter = 'uniqueIDFilterCollection';
        delete this.parent[idFilter][value];
        var id = 'uniqueIDCollection';
        delete this.parent[id][value];
    };
    BatchEdit.prototype.batchCancelAction = function () {
        var targetElement = 'targetElement';
        var index;
        var parentItem = 'parentItem';
        var indexvalue = 'index';
        var currentViewRecords = this.parent.grid.getCurrentViewRecords();
        var childRecords = 'childRecords';
        var data = (this.parent.grid.dataSource instanceof sf.data.DataManager ?
            this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource);
        var primaryKey = this.parent.grid.getPrimaryKeyFieldNames()[0];
        if (!sf.base.isNullOrUndefined(this.parent[targetElement])) {
            var row = this.parent[targetElement].closest('tr');
            this.parent.collapseRow(row);
            this.parent[targetElement] = null;
        }
        if (!sf.base.isNullOrUndefined(this.batchAddedRecords)) {
            for (var i = 0; i < this.batchAddedRecords.length; i++) {
                index = data.map(function (e) { return e[primaryKey]; }).indexOf(this.batchAddedRecords[i][primaryKey]);
                data.splice(index, 1);
                if (this.parent.editSettings.newRowPosition === 'Child') {
                    index = currentViewRecords.map(function (e) { return e[primaryKey]; })
                        .indexOf(this.batchAddedRecords[i][parentItem] ? this.batchAddedRecords[i][parentItem][primaryKey]
                        : this.batchAddedRecords[i][primaryKey]);
                    if (!sf.base.isNullOrUndefined(currentViewRecords[index])) {
                        var children = currentViewRecords[index][childRecords];
                        for (var j = 0; children && j < children.length; j++) {
                            if (children[j][primaryKey] === this.batchAddedRecords[i][primaryKey]) {
                                currentViewRecords[index][childRecords].splice(j, 1);
                            }
                        }
                    }
                }
            }
        }
        if (!sf.base.isNullOrUndefined(this.batchDeletedRecords)) {
            for (var i = 0; i < this.batchDeletedRecords.length; i++) {
                if (!sf.base.isNullOrUndefined(this.batchDeletedRecords[i][parentItem])) {
                    index = currentViewRecords.map(function (e) { return e[primaryKey]; })
                        .indexOf(this.batchDeletedRecords[i][parentItem][primaryKey]);
                    var positionIndex = this.batchDeletedRecords[i][indexvalue] === 0 ? this.batchDeletedRecords[i][indexvalue] :
                        this.batchDeletedRecords[i][indexvalue] - 1;
                    if (!sf.base.isNullOrUndefined(currentViewRecords[index])) {
                        currentViewRecords[index][childRecords].splice(positionIndex, 0, this.batchDeletedRecords[i]);
                    }
                }
            }
        }
        this.batchAddedRecords = this.batchRecords = this.batchAddRowRecord = this.currentViewRecords = [];
        this.batchRecords = extendArray(this.parent.grid.getCurrentViewRecords());
        this.batchIndex = 0;
        this.currentViewRecords = extendArray(this.parent.grid.getCurrentViewRecords());
        this.batchDeletedRecords = [];
        this.parent.refresh();
    };
    BatchEdit.prototype.batchSave = function (args) {
        if (this.parent.editSettings.mode === 'Batch') {
            var i = void 0;
            var batchChanges = this.parent.getBatchChanges();
            var deletedRecords = 'deletedRecords';
            var addedRecords = 'addedRecords';
            var index = 'index';
            var uniqueID = 'uniqueID';
            var data = (this.parent.grid.dataSource instanceof sf.data.DataManager ?
                this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource);
            var currentViewRecords = this.parent.grid.getCurrentViewRecords();
            var primarykey_1 = this.parent.grid.getPrimaryKeyFieldNames()[0];
            var level = 'level';
            var addRecords = batchChanges[addedRecords];
            var parentItem = 'parentItem';
            var selectedIndex = void 0;
            var addRowIndex = void 0;
            var columnName = void 0;
            var addRowRecord = void 0;
            var childRecords = 'childRecords';
            if (addRecords.length > 1 && this.parent.editSettings.newRowPosition !== 'Bottom') {
                addRecords.reverse();
            }
            if (this.parent.editSettings.newRowPosition !== 'Bottom') {
                data.splice(data.length - addRecords.length, addRecords.length);
                if (!this.parent.allowPaging) {
                    if (currentViewRecords.length > addRecords.length) {
                        currentViewRecords.splice(currentViewRecords.length - addRecords.length, addRecords.length);
                    }
                }
                else {
                    var totalRecords = extendArray(data);
                    var startIndex = totalRecords.map(function (e) { return e[primarykey_1]; })
                        .indexOf(currentViewRecords[0][primarykey_1]);
                    var endIndex = startIndex + this.parent.grid.pageSettings.pageSize;
                    currentViewRecords = totalRecords.splice(startIndex, endIndex);
                }
            }
            for (i = 0; i < addRecords.length; i++) {
                var taskData = sf.base.extend({}, addRecords[i]);
                delete taskData.parentItem;
                delete taskData.uniqueID;
                delete taskData.index;
                delete taskData.level;
                delete taskData.hasChildRecords;
                delete taskData.childRecords;
                delete taskData.parentUniqueID;
                if (!sf.base.isNullOrUndefined(taskData.primaryParent)) {
                    delete taskData.primaryParent;
                }
                addRecords[i].taskData = taskData;
                addRowRecord = this.batchAddRowRecord[i];
                if (sf.base.isNullOrUndefined(addRowRecord)) {
                    addRowRecord = this.batchAddRowRecord[i - 1];
                }
                if (this.isSelfReference) {
                    if (!sf.base.isNullOrUndefined(addRecords[i].parentItem)) {
                        updateParentRow(primarykey_1, addRecords[i].parentItem, 'add', this.parent, this.isSelfReference, addRecords[i]);
                    }
                }
                if (!sf.base.isNullOrUndefined(addRowRecord)) {
                    addRowIndex = addRowRecord.index;
                }
                if (this.parent.editSettings.newRowPosition !== 'Top' && this.parent.editSettings.newRowPosition !== 'Bottom') {
                    if (sf.base.isNullOrUndefined(addRecords[i].parentItem) && this.selectedIndex === -1) {
                        selectedIndex = -1;
                        addRowRecord = null;
                    }
                }
                editAction({ value: addRecords[i], action: 'add' }, this.parent, this.isSelfReference, addRowIndex, selectedIndex, columnName, addRowRecord);
                selectedIndex = null;
                if (this.parent.editSettings.newRowPosition === 'Child' && !sf.base.isNullOrUndefined(addRecords[i][parentItem])) {
                    var indexValue = currentViewRecords.map(function (e) { return e[primarykey_1]; })
                        .indexOf(addRecords[i][parentItem][primarykey_1]);
                    var children = currentViewRecords[indexValue][childRecords];
                    for (var j = 0; j < children.length; j++) {
                        if (children[j][primarykey_1] === addRecords[i][primarykey_1]) {
                            currentViewRecords[indexValue][childRecords].splice(j, 1);
                        }
                    }
                }
            }
            if (batchChanges[deletedRecords].length) {
                for (i = 0; i < batchChanges[deletedRecords].length; i++) {
                    editAction({ value: batchChanges[deletedRecords][i], action: 'delete' }, this.parent, this.isSelfReference, addRowIndex, selectedIndex, columnName, addRowRecord);
                }
            }
            this.parent.parentData = [];
            for (var i_1 = 0; i_1 < data.length; i_1++) {
                data[i_1][index] = i_1;
                sf.base.setValue('uniqueIDCollection.' + data[i_1][uniqueID] + '.index', i_1, this.parent);
                if (!data[i_1][level]) {
                    this.parent.parentData.push(data[i_1]);
                }
            }
        }
        this.batchAddRowRecord = this.batchAddedRecords = this.batchRecords = this.batchDeletedRecords = this.currentViewRecords = [];
    };
    BatchEdit.prototype.getActualRowObjectIndex = function (index) {
        var rows = this.parent.grid.getDataRows();
        if ((this.parent.editSettings.newRowPosition === 'Below' || this.parent.editSettings.newRowPosition === 'Child')
            && this.selectedIndex > -1) {
            if (!sf.base.isNullOrUndefined(this.batchRecords[this.addRowIndex]) && this.batchRecords[this.addRowIndex].expanded) {
                if (this.parent.getBatchChanges()[this.addedRecords].length > 1
                    || this.parent.getBatchChanges()[this.deletedRecords].length) {
                    index += findChildrenRecords(this.batchRecords[this.addRowIndex]).length;
                    if (this.parent.editSettings.newRowPosition !== 'Child') {
                        var batchChildCount = this.getBatchChildCount();
                        index = index + batchChildCount;
                    }
                }
                else {
                    index += findChildrenRecords(this.batchRecords[this.addRowIndex]).length;
                }
            }
            if (index >= rows.length) {
                index = rows.length - 1;
            }
            this.updateChildCount(this.parent.grid.getCurrentViewRecords());
            if (this.batchChildCount) {
                index += this.batchChildCount;
            }
            this.batchChildCount = 0;
        }
        return index;
    };
    return BatchEdit;
}());

/**
 * TreeGrid Edit Module
 * The `Edit` module is used to handle editing actions.
 */
var Edit$1 = /** @class */ (function () {
    /**
     * Constructor for Edit module
     */
    function Edit$$1(parent) {
        this.addedRecords = 'addedRecords';
        this.deletedRecords = 'deletedRecords';
        this.prevAriaRowIndex = '-1';
        sf.grids.Grid.Inject(sf.grids.Edit);
        this.parent = parent;
        this.isSelfReference = !sf.base.isNullOrUndefined(parent.parentIdMapping);
        this.previousNewRowPosition = null;
        this.internalProperties = {};
        this.batchEditModule = new BatchEdit(this.parent);
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    Edit$$1.prototype.getModuleName = function () {
        return 'edit';
    };
    /**
     * @hidden
     */
    Edit$$1.prototype.addEventListener = function () {
        this.parent.on(crudAction, this.crudAction, this);
        this.parent.on(beginEdit, this.beginEdit, this);
        this.parent.on(beginAdd, this.beginAdd, this);
        this.parent.on(recordDoubleClick, this.recordDoubleClick, this);
        this.parent.on(cellSave, this.cellSave, this);
        this.parent.on(batchCancel, this.batchCancel, this);
        this.parent.grid.on(keyPressed, this.keyPressed, this);
        this.parent.grid.on('batchedit-form', this.lastCellTab, this);
        this.parent.grid.on('content-ready', this.contentready, this);
        this.parent.on(cellEdit, this.cellEdit, this);
        this.parent.on('actionBegin', this.editActionEvents, this);
        this.parent.on('actionComplete', this.editActionEvents, this);
        this.parent.grid.on(doubleTap, this.recordDoubleClick, this);
        this.parent.grid.on('dblclick', this.gridDblClick, this);
        this.parent.on('savePreviousRowPosition', this.savePreviousRowPosition, this);
        // this.parent.on(events.beforeDataBound, this.beforeDataBound, this);
        this.parent.grid.on(beforeStartEdit, this.beforeStartEdit, this);
        this.parent.grid.on(beforeBatchCancel, this.beforeBatchCancel, this);
        this.parent.grid.on('reset-edit-props', this.resetIsOnBatch, this);
        this.parent.grid.on('get-row-position', this.getRowPosition, this);
    };
    Edit$$1.prototype.gridDblClick = function (e) {
        this.doubleClickTarget = e.target;
    };
    Edit$$1.prototype.getRowPosition = function (addArgs) {
        addArgs.newRowPosition = this.parent.editSettings.newRowPosition;
        addArgs.addRowIndex = this.addRowIndex;
        addArgs.ariaRowIndex = +this.prevAriaRowIndex;
    };
    Edit$$1.prototype.beforeStartEdit = function (args) {
        this.parent.trigger(actionBegin, args);
    };
    Edit$$1.prototype.beforeBatchCancel = function (args) {
        if (this.parent.editSettings.mode === 'Cell') {
            this.parent.trigger(actionComplete, args);
        }
    };
    /**
     * @hidden
     */
    Edit$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off(crudAction, this.crudAction);
        this.parent.off(beginEdit, this.beginEdit);
        this.parent.off(beginAdd, this.beginAdd);
        this.parent.off(recordDoubleClick, this.recordDoubleClick);
        this.parent.off(batchCancel, this.batchCancel);
        this.parent.grid.off(keyPressed, this.keyPressed);
        this.parent.grid.off('batchedit-form', this.lastCellTab);
        this.parent.grid.off('content-ready', this.contentready);
        this.parent.off(cellEdit, this.cellEdit);
        this.parent.off('actionBegin', this.editActionEvents);
        this.parent.off('actionComplete', this.editActionEvents);
        this.parent.grid.off(doubleTap, this.recordDoubleClick);
        this.parent.off('savePreviousRowPosition', this.savePreviousRowPosition);
        this.parent.grid.off(beforeStartEdit, this.beforeStartEdit);
        this.parent.grid.off(beforeBatchCancel, this.beforeBatchCancel);
        this.parent.grid.off('dblclick', this.gridDblClick);
        this.parent.grid.off('reset-edit-props', this.resetIsOnBatch);
        this.parent.grid.off('get-row-position', this.getRowPosition);
        //this.parent.grid.off('click', this.gridSingleClick);
    };
    /**
     * To destroy the editModule
     * @return {void}
     * @hidden
     */
    Edit$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    /**
     * @hidden
     */
    Edit$$1.prototype.applyFormValidation = function (cols) {
        this.parent.grid.editModule.applyFormValidation(cols);
    };
    Edit$$1.prototype.editActionEvents = function (args) {
        var eventArgs = sf.grids.getObject('editAction', args);
        var eventName = sf.grids.getObject('name', eventArgs);
        var treeObj = this.parent;
        var adaptor = treeObj.dataSource.adaptor;
        if ((isRemoteData(treeObj) || adaptor instanceof sf.data.RemoteSaveAdaptor) &&
            (eventArgs.requestType === 'save' && eventArgs.action === 'add') &&
            (treeObj.editSettings.newRowPosition === 'Child' || treeObj.editSettings.newRowPosition === 'Below'
                || treeObj.editSettings.newRowPosition === 'Above')) {
            if (eventName === 'actionBegin') {
                var rowIndex = sf.base.isNullOrUndefined(eventArgs.row) || !Object.keys(eventArgs.row).length ? this.selectedIndex :
                    eventArgs.row.rowIndex - 1;
                var keyData = (!sf.base.isNullOrUndefined(rowIndex) && rowIndex !== -1) ?
                    treeObj.getCurrentViewRecords()[rowIndex][treeObj.getPrimaryKeyFieldNames()[0]] : -1;
                treeObj.grid.query.addParams('relationalKey', keyData);
            }
            else if (eventName === 'actionComplete') {
                var paramsLength = treeObj.grid.query.params.length;
                for (var i = 0; i < paramsLength; i++) {
                    if (treeObj.grid.query.params[i].key === 'relationalKey') {
                        treeObj.grid.query.params.splice(i);
                    }
                }
            }
        }
        if (this.parent.editSettings.mode === 'Batch' && eventArgs.requestType === 'paging') {
            this.parent.notify('batchPageAction', {});
        }
    };
    Edit$$1.prototype.recordDoubleClick = function (args) {
        var target = args.target;
        if (sf.base.isNullOrUndefined(target.closest('td.e-rowcell'))) {
            return;
        }
        var column = this.parent.grid.getColumnByIndex(+target.closest('td.e-rowcell').getAttribute('aria-colindex'));
        if (this.parent.editSettings.mode === 'Cell' && !this.isOnBatch && column && !column.isPrimaryKey &&
            column.allowEditing && !(target.classList.contains('e-treegridexpand') ||
            target.classList.contains('e-treegridcollapse')) && this.parent.editSettings.allowEditOnDblClick) {
            this.isOnBatch = true;
            this.parent.grid.setProperties({ selectedRowIndex: args.rowIndex }, true);
            if (this.parent.enableVirtualization) {
                var tr = sf.grids.parentsUntil(args.target, 'e-row');
                this.prevAriaRowIndex = tr.getAttribute('aria-rowindex');
                tr.setAttribute('aria-rowindex', tr.rowIndex + '');
            }
            this.updateGridEditMode('Batch');
        }
    };
    Edit$$1.prototype.updateGridEditMode = function (mode) {
        this.parent.grid.setProperties({ editSettings: { mode: mode } }, true);
        var updateMethod = sf.grids.getObject('updateEditObj', this.parent.grid.editModule);
        updateMethod.apply(this.parent.grid.editModule);
        this.parent.grid.isEdit = false;
    };
    Edit$$1.prototype.resetIsOnBatch = function () {
        if (this.parent.enableVirtualization && this.parent.editSettings.mode === 'Cell') {
            this.isOnBatch = false;
            this.updateGridEditMode('Normal');
        }
    };
    Edit$$1.prototype.keyPressed = function (args) {
        if (this.isOnBatch || (this.parent.editSettings.mode === 'Cell' && sf.base.isBlazor() && this.parent.isServerRendered)) {
            this.keyPress = args.action;
        }
        if (args.action === 'f2') {
            this.recordDoubleClick(args);
        }
    };
    Edit$$1.prototype.deleteUniqueID = function (value) {
        var idFilter = 'uniqueIDFilterCollection';
        delete this.parent[idFilter][value];
        var id = 'uniqueIDCollection';
        delete this.parent[id][value];
    };
    Edit$$1.prototype.cellEdit = function (args) {
        var _this = this;
        var promise = 'promise';
        var prom = args[promise];
        delete args[promise];
        if (this.parent.enableVirtualization && !sf.base.isNullOrUndefined(this.prevAriaRowIndex)) {
            args.row.setAttribute('aria-rowindex', this.prevAriaRowIndex);
            this.prevAriaRowIndex = undefined;
        }
        if (this.keyPress !== 'enter') {
            this.parent.trigger(cellEdit, args, function (celleditArgs) {
                if (!celleditArgs.cancel && _this.parent.editSettings.mode === 'Cell') {
                    _this.enableToolbarItems('edit');
                }
                else if (celleditArgs.cancel && _this.parent.editSettings.mode === 'Cell') {
                    _this.isOnBatch = false;
                    _this.updateGridEditMode('Normal');
                }
                if (!sf.base.isNullOrUndefined(prom)) {
                    prom.resolve(celleditArgs);
                }
            });
        }
        if (this.doubleClickTarget && (this.doubleClickTarget.classList.contains('e-treegridexpand') ||
            this.doubleClickTarget.classList.contains('e-treegridcollapse'))) {
            args.cancel = true;
            this.doubleClickTarget = null;
            return;
        }
        if (this.parent.editSettings.mode === 'Cell') {
            if (this.keyPress === 'tab' || this.keyPress === 'shiftTab') {
                this.keyPress = null;
            }
            else if (this.keyPress === 'enter') {
                args.cancel = true;
                this.keyPress = null;
            }
        }
        // if (this.isAdd && this.parent.editSettings.mode === 'Batch' && !args.cell.parentElement.classList.contains('e-insertedrow')) {
        //   this.isAdd = false;
        // }
    };
    Edit$$1.prototype.enableToolbarItems = function (request) {
        if (!sf.base.isNullOrUndefined(this.parent.grid.toolbarModule)) {
            var toolbarID = this.parent.element.id + '_gridcontrol_';
            this.parent.grid.toolbarModule.enableItems([toolbarID + 'add', toolbarID + 'edit', toolbarID + 'delete'], request === 'save');
            this.parent.grid.toolbarModule.enableItems([toolbarID + 'update', toolbarID + 'cancel'], request === 'edit');
        }
    };
    Edit$$1.prototype.batchCancel = function (e) {
        if (this.parent.editSettings.mode === 'Cell') {
            var cellDetails = sf.base.getValue('editModule.cellDetails', this.parent.grid.editModule);
            var selectRowIndex = cellDetails.rowIndex;
            var treeCell = void 0;
            if (this.parent.allowRowDragAndDrop === true && !(this.parent.rowDropSettings.targetID)) {
                treeCell = this.parent.getRows()[selectRowIndex].cells[this.parent.treeColumnIndex + 1];
            }
            else {
                treeCell = this.parent.getRows()[selectRowIndex].cells[this.parent.treeColumnIndex];
            }
            this.parent.renderModule.cellRender({
                data: cellDetails.rowData,
                cell: treeCell,
                column: this.parent.grid.getColumns()[this.parent.treeColumnIndex]
            });
            this.updateGridEditMode('Normal');
            this.isOnBatch = false;
        }
        if (this.parent.editSettings.mode === 'Batch') {
            this.parent.notify('batchCancelAction', {});
        }
    };
    Edit$$1.prototype.cellSave = function (args) {
        if (this.parent.editSettings.mode === 'Cell' && this.parent.element.querySelector('form')) {
            args.cancel = true;
            var editModule = 'editModule';
            sf.base.setValue('isEdit', false, this.parent.grid);
            sf.base.setValue('isEditCollapse', true, this.parent);
            args.rowData[args.columnName] = args.value;
            var row = void 0;
            var mRow = void 0;
            if (sf.base.isNullOrUndefined(args.cell)) {
                row = this.parent.grid.editModule[editModule].form.parentElement.parentNode;
            }
            else {
                row = args.cell.parentNode;
            }
            var rowIndex_1;
            var primaryKeys_1 = this.parent.getPrimaryKeyFieldNames();
            if (sf.base.isNullOrUndefined(row)) {
                this.parent.grid.getCurrentViewRecords().filter(function (e, i) {
                    if (e[primaryKeys_1[0]] === args.rowData[primaryKeys_1[0]]) {
                        rowIndex_1 = i;
                        return;
                    }
                });
            }
            else {
                rowIndex_1 = (this.parent.getRows().indexOf(row) === -1 && this.parent.frozenColumns > 0) ?
                    this.parent.grid.getMovableRows().indexOf(row) : this.parent.getRows().indexOf(row);
            }
            var arg = {};
            sf.base.extend(arg, args);
            arg.cancel = false;
            arg.type = 'save';
            row = this.parent.grid.getRows()[row.rowIndex];
            this.parent.trigger(actionBegin, arg);
            if (!arg.cancel) {
                if ((row.rowIndex === this.parent.getCurrentViewRecords().length - 1) && this.keyPress === 'tab') {
                    this.isTabLastRow = true;
                }
                this.blazorTemplates(args);
                this.updateCell(args, rowIndex_1);
                if (this.parent.grid.aggregateModule) {
                    this.parent.grid.aggregateModule.refresh(args.rowData);
                }
                this.parent.grid.editModule.destroyWidgets([this.parent.grid.getColumnByField(args.columnName)]);
                this.parent.grid.editModule.formObj.destroy();
                if (this.keyPress !== 'tab' && this.keyPress !== 'shiftTab') {
                    this.updateGridEditMode('Normal');
                    this.isOnBatch = false;
                }
                this.enableToolbarItems('save');
                if (this.parent.frozenColumns > 0) {
                    mRow = this.parent.grid.getMovableRows()[rowIndex_1];
                    sf.base.removeClass([mRow], ['e-editedrow', 'e-batchrow']);
                    sf.base.removeClass(mRow.querySelectorAll('.e-rowcell'), ['e-editedbatchcell', 'e-updatedtd']);
                }
                sf.base.removeClass([row], ['e-editedrow', 'e-batchrow']);
                sf.base.removeClass(row.querySelectorAll('.e-rowcell'), ['e-editedbatchcell', 'e-updatedtd']);
                this.parent.grid.focusModule.restoreFocus();
                editAction({ value: args.rowData, action: 'edit' }, this.parent, this.isSelfReference, this.addRowIndex, this.selectedIndex, args.columnName);
                var saveArgs = {
                    type: 'save', column: this.parent.getColumnByField(args.columnName), data: args.rowData,
                    previousData: args.previousValue, row: row, target: args.cell
                };
                this.parent.trigger(actionComplete, saveArgs);
            }
            else {
                this.parent.grid.isEdit = true;
            }
        }
    };
    Edit$$1.prototype.lastCellTab = function (formObj) {
        if (!this.parent.grid.isEdit && this.isOnBatch && this.keyPress === 'tab' && this.parent.editSettings.mode === 'Cell') {
            this.updateGridEditMode('Normal');
            this.isOnBatch = false;
            this.keyPress = null;
        }
    };
    Edit$$1.prototype.blazorTemplates = function (args) {
        if (sf.base.isBlazor() && this.parent.isServerRendered) {
            var cols = this.parent.grid.getColumns();
            var colModel = 'columnModel';
            var columnModel = this.parent.grid[colModel];
            var str = 'isStringTemplate';
            for (var i = 0; i < cols.length; i++) {
                if (columnModel[i].template) {
                    var templateID = this.parent.grid.element.id + cols[i].uid;
                    columnModel[i].getColumnTemplate()(sf.base.extend({ 'index': [i] }, args.rowData), this.parent.grid, 'template', templateID, this.parent.grid[str], null);
                }
                if (cols[i].editTemplate) {
                    sf.base.updateBlazorTemplate(this.parent.grid.element.id + cols[i].uid + 'editTemplate', 'EditTemplate', cols[i]);
                }
                if (cols[i].template) {
                    sf.base.updateBlazorTemplate(this.parent.grid.element.id + cols[i].uid, 'Template', cols[i], false);
                }
            }
        }
    };
    Edit$$1.prototype.updateCell = function (args, rowIndex) {
        this.parent.grid.editModule.updateRow(rowIndex, args.rowData);
        this.parent.grid.getRowsObject()[rowIndex].data = args.rowData;
    };
    Edit$$1.prototype.crudAction = function (details, columnName) {
        editAction(details, this.parent, this.isSelfReference, this.addRowIndex, this.selectedIndex, columnName, this.addRowRecord);
        this.parent.parentData = [];
        var data = this.parent.grid.dataSource instanceof sf.data.DataManager ?
            this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource;
        for (var i = 0; i < data.length; i++) {
            data[i].index = i;
            var key = this.parent.grid.getPrimaryKeyFieldNames()[0];
            if (details.value[key] === data[i][key]) {
                if (details.action === 'add') {
                    data[i].level = this.internalProperties.level;
                    data[i].taskData = this.internalProperties.taskData;
                    data[i].uniqueID = this.internalProperties.uniqueID;
                    if (!sf.base.isNullOrUndefined(this.internalProperties.parentItem)) {
                        data[i].parentItem = this.internalProperties.parentItem;
                        data[i].parentUniqueID = this.internalProperties.parentUniqueID;
                    }
                    data[i].childRecords = this.internalProperties.childRecords;
                }
            }
            sf.base.setValue('uniqueIDCollection.' + data[i].uniqueID + '.index', i, this.parent);
            if (!data[i].level) {
                this.parent.parentData.push(data[i]);
            }
        }
        if (details.action === 'add' && this.previousNewRowPosition != null) {
            this.parent.setProperties({ editSettings: { newRowPosition: this.previousNewRowPosition } }, true);
            this.previousNewRowPosition = null;
        }
    };
    Edit$$1.prototype.updateIndex = function (data, rows, records) {
        for (var j = 0; j < this.parent.getDataRows().length; j++) {
            var data1 = records[j];
            var index = sf.base.getValue('uniqueIDCollection.' + data1.uniqueID + '.index', this.parent);
            data1.index = index;
            if (!sf.base.isNullOrUndefined(data1.parentItem)) {
                var parentIndex = sf.base.getValue('uniqueIDCollection.' + data1.parentItem.uniqueID + '.index', this.parent);
                data1.parentItem.index = parentIndex;
            }
        }
        var count = -1;
        for (var k = 0; k < this.parent.getRows().length; k++) {
            if (!rows[k].classList.contains('e-detailrow')) {
                count++;
            }
            var data2 = records[count];
            var index = data2.index;
            var level = data2.level;
            var row = rows[k];
            if (!sf.base.isNullOrUndefined(data2.parentItem)) {
                index = sf.base.getValue('uniqueIDCollection.' + data2.parentItem.uniqueID + '.index', this.parent);
            }
            var treecell = row.cells[this.parent.treeColumnIndex];
            for (var l = 0; l < treecell.classList.length; l++) {
                var value = treecell.classList[l];
                var remove = /e-gridrowindex/i;
                var removed = /e-griddetailrowindex/i;
                var result = value.match(remove);
                var results = value.match(removed);
                if (result != null) {
                    sf.base.removeClass([treecell], value);
                }
                if (results != null) {
                    sf.base.removeClass([treecell], value);
                }
            }
            if (!rows[k].classList.contains('e-detailrow')) {
                sf.base.addClass([treecell], 'e-gridrowindex' + index + 'level' + level);
            }
            else {
                sf.base.addClass([treecell], 'e-griddetailrowindex' + index + 'level' + level);
            }
        }
    };
    Edit$$1.prototype.beginAdd = function (args) {
        var position;
        var index = this.addRowIndex;
        var records = this.parent.grid.getCurrentViewRecords();
        if (this.parent.editSettings.mode === 'Batch') {
            index = this.batchEditModule.getAddRowIndex();
            this.selectedIndex = this.batchEditModule.getSelectedIndex();
            if (this.parent.getBatchChanges()[this.addedRecords].length > 1
                || this.parent.getBatchChanges()[this.deletedRecords].length) {
                records = this.batchEditModule.getBatchRecords();
            }
        }
        var rows = this.parent.grid.getDataRows();
        var firstAriaIndex = rows.length ? +rows[0].getAttribute('aria-rowindex') : 0;
        var lastAriaIndex = rows.length ? +rows[rows.length - 1].getAttribute('aria-rowindex') : 0;
        var withinRange = this.selectedIndex >= firstAriaIndex && this.selectedIndex <= lastAriaIndex;
        var isVirtualization = this.parent.enableVirtualization && this.addRowIndex > -1 && this.prevAriaRowIndex !== '-1';
        if (this.parent.editSettings.mode !== 'Dialog') {
            if (this.parent.editSettings.newRowPosition === 'Above') {
                position = 'before';
            }
            else if ((this.parent.editSettings.newRowPosition === 'Below' || this.parent.editSettings.newRowPosition === 'Child')
                && (this.selectedIndex > -1 || isVirtualization) && withinRange) {
                position = 'after';
                if (!sf.base.isNullOrUndefined(records[index]) && records[index].expanded) {
                    if (this.parent.editSettings.mode === 'Batch' && (this.parent.getBatchChanges()[this.addedRecords].length > 1
                        || this.parent.getBatchChanges()[this.deletedRecords].length)) {
                        index += findChildrenRecords(records[index]).length;
                        if (this.parent.editSettings.newRowPosition !== 'Child') {
                            var batchChildCount = this.batchEditModule.getBatchChildCount();
                            index = index + batchChildCount;
                        }
                    }
                    else {
                        index += findChildrenRecords(records[index]).length;
                    }
                }
            }
            if ((this.selectedIndex > -1 || isVirtualization) && withinRange
                && (index || (this.parent.editSettings.newRowPosition === 'Child'
                    || this.parent.editSettings.newRowPosition === 'Below'))) {
                if (index >= rows.length) {
                    index = rows.length - 2;
                }
                var r = 'rows';
                var newRowObject = this.parent.grid.contentModule[r][0];
                var focussedElement = document.activeElement;
                rows[index + 1][position](rows[0]);
                sf.base.setValue('batchIndex', index + 1, this.batchEditModule);
                var rowObjectIndex = this.parent.editSettings.newRowPosition === 'Above' ? index : index + 1;
                this.parent.grid.contentModule[r].splice(0, 1);
                this.parent.grid.contentModule[r].splice(rowObjectIndex, 0, newRowObject);
                if (this.parent.frozenRows || this.parent.getFrozenColumns() || this.parent.frozenColumns) {
                    var movableRows = this.parent.getMovableDataRows();
                    var frows = 'freezeRows';
                    var newFreezeRowObject = this.parent.grid.getRowsObject()[0];
                    movableRows[index + 1][position](movableRows[0]);
                    this.parent.grid.contentModule[frows].splice(0, 1);
                    this.parent.grid.contentModule[frows].splice(rowObjectIndex, 0, newFreezeRowObject);
                    sf.base.setValue('batchIndex', index + 1, this.batchEditModule);
                }
                if (this.parent.editSettings.mode === 'Row' || this.parent.editSettings.mode === 'Cell') {
                    var errors = this.parent.grid.getContentTable().querySelectorAll('.e-griderror');
                    for (var i = 0; i < errors.length; i++) {
                        errors[i].remove();
                    }
                    sf.base.setValue('errorRules', [], this.parent.grid.editModule.formObj);
                }
                if (isVirtualization) {
                    this.prevAriaRowIndex = '-1';
                }
                focussedElement.focus();
            }
        }
    };
    // private beforeDataBound(args: BeforeDataBoundArgs): void {
    //   if (this.parent.grid.isEdit && this.parent.dataSource instanceof DataManager &&
    //         this.parent.dataSource.adaptor instanceof RemoteSaveAdaptor) {
    //     let action: string = getValue('action', args);
    //     let data: Object = getValue('data', args);
    //     if (action === 'edit' && !isNullOrUndefined(this.editedData)) {
    //       data = extend(this.editedData, data);
    //       this.editedData = null;
    //     }
    //     if (!isNullOrUndefined(this.addedData)) {
    //       let addedData: Object = args.result[args.result.length - 1];
    //       addedData = extend(this.addedData, addedData);
    //       this.addedData = null;
    //       args.result.splice(this.addedIndex, 0, addedData);
    //       args.result.splice(args.result.length, 1);
    //     }
    //   }
    // }
    Edit$$1.prototype.beginEdit = function (args) {
        if (args.requestType === 'refresh' && this.isOnBatch) {
            args.cancel = true;
            return;
        }
        if (this.parent.editSettings.mode === 'Cell' && args.requestType === 'beginEdit') {
            args.cancel = true;
            return;
        }
        if (this.doubleClickTarget && (this.doubleClickTarget.classList.contains('e-treegridexpand') ||
            this.doubleClickTarget.classList.contains('e-treegridcollapse') || this.doubleClickTarget.classList.contains('e-frame'))) {
            args.cancel = true;
            this.doubleClickTarget = null;
            return;
        }
        if (args.requestType === 'delete') {
            var data = args.data;
            for (var i = 0; i < data.length; i++) {
                this.deleteUniqueID(data[i].uniqueID);
                var childs = findChildrenRecords(data[i]);
                for (var c = 0; c < childs.length; c++) {
                    this.deleteUniqueID(childs[c].uniqueID);
                }
                args.data = data.concat(childs);
            }
        }
        if (args.requestType === 'add') {
            this.selectedIndex = this.parent.grid.selectedRowIndex;
            if (this.parent.enableVirtualization) {
                var selector = '.e-row[aria-rowindex="' + this.selectedIndex + '"]';
                var row = void 0;
                if (this.selectedIndex > -1 && this.parent.editSettings.newRowPosition !== 'Top' &&
                    this.parent.editSettings.newRowPosition !== 'Bottom') {
                    this.prevAriaRowIndex = this.selectedIndex.toString();
                    row = this.parent.getContent().querySelector(selector);
                    this.addRowIndex = row ? row.rowIndex : 0;
                }
                else {
                    if (this.prevAriaRowIndex && this.prevAriaRowIndex !== '-1') {
                        selector = '.e-row[aria-rowindex="' + this.prevAriaRowIndex + '"]';
                        row = this.parent.getContent().querySelector(selector);
                        this.addRowIndex = row ? row.rowIndex : 0;
                    }
                    else {
                        this.addRowIndex = 0;
                    }
                }
            }
            else {
                this.addRowIndex = this.parent.grid.selectedRowIndex > -1 ? this.parent.grid.selectedRowIndex : 0;
            }
            this.addRowRecord = this.parent.getSelectedRecords()[0];
        }
        args = this.beginAddEdit(args);
        // if (args.requestType === 'save' &&
        //    ((this.parent.dataSource instanceof DataManager && this.parent.dataSource.adaptor instanceof RemoteSaveAdaptor))) {
        //      if (args.action === 'edit') {
        //           this.editedData = args.data;
        //      } else if (args.action === 'add') {
        //           this.addedData = value;
        //      }
        // }
    };
    Edit$$1.prototype.savePreviousRowPosition = function (args) {
        if (this.previousNewRowPosition === null) {
            this.previousNewRowPosition = this.parent.editSettings.newRowPosition;
        }
    };
    Edit$$1.prototype.beginAddEdit = function (args) {
        var value = args.data;
        if (args.action === 'add') {
            var key = this.parent.grid.getPrimaryKeyFieldNames()[0];
            var position = null;
            value.taskData = sf.base.isNullOrUndefined(value.taskData) ? sf.base.extend({}, args.data) : value.taskData;
            // let currentData: ITreeData[] = this.batchRecords.length ? this.batchRecords :
            //            <ITreeData[]>this.parent.grid.getCurrentViewRecords();
            var currentData = this.parent.grid.getCurrentViewRecords();
            var index = this.addRowIndex;
            value.uniqueID = sf.grids.getUid(this.parent.element.id + '_data_');
            sf.base.setValue('uniqueIDCollection.' + value.uniqueID, value, this.parent);
            var level = 0;
            var dataIndex = void 0;
            var idMapping = void 0;
            var parentUniqueID = void 0;
            var parentItem = void 0;
            var parentIdMapping = void 0;
            var isVirtualization = this.parent.enableVirtualization && this.addRowIndex > -1 && this.prevAriaRowIndex !== '-1';
            var rows = this.parent.getRows();
            var firstAriaIndex = rows.length ? +rows[0].getAttribute('aria-rowindex') : 0;
            var lastAriaIndex = rows.length ? +rows[rows.length - 1].getAttribute('aria-rowindex') : 0;
            var withinRange = this.selectedIndex >= firstAriaIndex && this.selectedIndex <= lastAriaIndex;
            if (currentData.length) {
                dataIndex = currentData[this.addRowIndex].index;
                idMapping = currentData[this.addRowIndex][this.parent.idMapping];
                parentIdMapping = currentData[this.addRowIndex][this.parent.parentIdMapping];
                if (currentData[this.addRowIndex].parentItem) {
                    parentUniqueID = currentData[this.addRowIndex].parentItem.uniqueID;
                }
                parentItem = currentData[this.addRowIndex].parentItem;
            }
            if (this.parent.editSettings.newRowPosition !== 'Top' && currentData.length) {
                level = currentData[this.addRowIndex].level;
                if (this.parent.editSettings.newRowPosition === 'Above') {
                    position = 'before';
                    index = currentData[this.addRowIndex].index;
                }
                else if (this.parent.editSettings.newRowPosition === 'Below') {
                    position = 'after';
                    var childRecordCount = findChildrenRecords(currentData[this.addRowIndex]).length;
                    var currentDataIndex = currentData[this.addRowIndex].index;
                    index = (childRecordCount > 0) ? (currentDataIndex + childRecordCount) : (currentDataIndex);
                }
                else if (this.parent.editSettings.newRowPosition === 'Child') {
                    position = 'after';
                    if ((this.selectedIndex > -1 || isVirtualization) && withinRange) {
                        value.parentItem = sf.base.extend({}, currentData[this.addRowIndex]);
                        value.parentUniqueID = value.parentItem.uniqueID;
                        delete value.parentItem.childRecords;
                        delete value.parentItem[this.parent.childMapping];
                    }
                    var childRecordCount1 = findChildrenRecords(currentData[this.addRowIndex]).length;
                    var currentDataIndex1 = currentData[this.addRowIndex].index;
                    value.level = level + 1;
                    index = (childRecordCount1 > 0) ? (currentDataIndex1 + childRecordCount1) : (currentDataIndex1);
                    if (this.isSelfReference) {
                        value.taskData[this.parent.parentIdMapping] = value[this.parent.parentIdMapping] = idMapping;
                        if (!sf.base.isNullOrUndefined(value.parentItem)) {
                            updateParentRow(key, value.parentItem, 'add', this.parent, this.isSelfReference, value);
                        }
                    }
                }
                if (this.parent.editSettings.newRowPosition === 'Above' || this.parent.editSettings.newRowPosition === 'Below') {
                    if ((this.selectedIndex > -1 || isVirtualization) && level && withinRange) {
                        value.parentUniqueID = parentUniqueID;
                        value.parentItem = sf.base.extend({}, parentItem);
                        delete value.parentItem.childRecords;
                        delete value.parentItem[this.parent.childMapping];
                    }
                    value.level = level;
                    if (this.isSelfReference) {
                        value.taskData[this.parent.parentIdMapping] = value[this.parent.parentIdMapping] = parentIdMapping;
                        if (!sf.base.isNullOrUndefined(value.parentItem)) {
                            updateParentRow(key, value.parentItem, 'add', this.parent, this.isSelfReference, value);
                        }
                    }
                }
                if (position != null && (this.selectedIndex > -1 || isVirtualization) && withinRange) {
                    args.index = position === 'before' ? index : index + 1;
                }
                if (this.parent.editSettings.newRowPosition === 'Bottom') {
                    var dataSource = (this.parent.grid.dataSource instanceof sf.data.DataManager ?
                        this.parent.grid.dataSource.dataSource.json : this.parent.grid.dataSource);
                    args.index = dataSource.length;
                }
            }
            if (sf.base.isNullOrUndefined(value.level)) {
                value.level = level;
            }
            // this.addedIndex = args.index;
            value.hasChildRecords = false;
            value.childRecords = [];
            value.index = 0;
        }
        if (args.action === 'add') {
            this.internalProperties = { level: value.level, parentItem: value.parentItem, uniqueID: value.uniqueID,
                taskData: value.taskData, parentUniqueID: sf.base.isNullOrUndefined(value.parentItem) ? undefined : value.parentItem.uniqueID,
                childRecords: value.childRecords };
        }
        if (args.requestType === 'delete') {
            var deletedValues = args.data;
            for (var i = 0; i < deletedValues.length; i++) {
                if (deletedValues[i].parentItem) {
                    var parentItem = getParentData(this.parent, deletedValues[i].parentItem.uniqueID);
                    if (!sf.base.isNullOrUndefined(parentItem) && parentItem.hasChildRecords) {
                        var childIndex = parentItem.childRecords.indexOf(deletedValues[i]);
                        parentItem.childRecords.splice(childIndex, 1);
                    }
                }
            }
        }
        return args;
    };
    /**
     * If the data,index and position given, Adds the record to treegrid rows otherwise it will create edit form.
     * @return {void}
     */
    Edit$$1.prototype.addRecord = function (data, index, position) {
        this.previousNewRowPosition = this.parent.editSettings.newRowPosition;
        if (data) {
            if (index > -1) {
                this.selectedIndex = index;
                this.addRowIndex = index;
            }
            else {
                this.selectedIndex = this.parent.selectedRowIndex;
                this.addRowIndex = this.parent.selectedRowIndex;
            }
            if (position) {
                this.parent.setProperties({ editSettings: { newRowPosition: position } }, true);
            }
            this.parent.grid.editModule.addRecord(data, index);
        }
        else {
            this.parent.grid.editModule.addRecord(data, index);
        }
    };
    /**
     * Checks the status of validation at the time of editing. If validation is passed, it returns true.
     * @return {boolean}
     */
    Edit$$1.prototype.editFormValidate = function () {
        return this.parent.grid.editModule.editFormValidate();
    };
    /**
     * @hidden
     */
    Edit$$1.prototype.destroyForm = function () {
        this.parent.grid.editModule.destroyForm();
    };
    Edit$$1.prototype.contentready = function (e) {
        if (!sf.base.isNullOrUndefined(e.args.requestType)
            && (e.args.requestType.toString() === 'delete' || e.args.requestType.toString() === 'save'
                || (this.parent.editSettings.mode === 'Batch' && e.args.requestType.toString() === 'batchsave'))) {
            this.updateIndex(this.parent.grid.dataSource, this.parent.getRows(), this.parent.getCurrentViewRecords());
            if (this.parent.frozenRows || this.parent.getFrozenColumns() || this.parent.frozenColumns) {
                if (this.parent.grid.dataSource.length === this.parent.getMovableDataRows().length) {
                    this.updateIndex(this.parent.grid.dataSource, this.parent.getMovableDataRows(), this.parent.getCurrentViewRecords());
                }
            }
        }
    };
    /**
     * If the row index and field is given, edits the particular cell in a row.
     * @return {void}
     */
    Edit$$1.prototype.editCell = function (rowIndex, field) {
        if (this.parent.editSettings.mode === 'Cell' || this.parent.editSettings.mode === 'Batch') {
            if (this.parent.editSettings.mode !== 'Batch') {
                this.isOnBatch = true;
                this.updateGridEditMode('Batch');
            }
            this.parent.grid.editModule.editCell(rowIndex, field);
        }
    };
    return Edit$$1;
}());

/**
 * Command Column Module for TreeGrid
 * @hidden
 */
var CommandColumn$1 = /** @class */ (function () {
    function CommandColumn$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.CommandColumn);
        this.parent = parent;
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    CommandColumn$$1.prototype.getModuleName = function () {
        return 'commandColumn';
    };
    /**
     * Destroys the ContextMenu.
     * @method destroy
     * @return {void}
     */
    CommandColumn$$1.prototype.destroy = function () {
        //this.removeEventListener();
    };
    return CommandColumn$$1;
}());

/**
 * TreeGrid Detail Row module
 * @hidden
 */
var DetailRow$1 = /** @class */ (function () {
    function DetailRow$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.DetailRow);
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * @hidden
     */
    /**
     * For internal use only - Get the module name.
     * @private
     */
    DetailRow$$1.prototype.getModuleName = function () {
        return 'detailRow';
    };
    DetailRow$$1.prototype.addEventListener = function () {
        this.parent.on('dataBoundArg', this.dataBoundArg, this);
        this.parent.on('detaildataBound', this.detaildataBound, this);
        this.parent.grid.on('detail-indentcell-info', this.setIndentVisibility, this);
        this.parent.on('childRowExpand', this.childRowExpand, this);
        this.parent.on('rowExpandCollapse', this.rowExpandCollapse, this);
        this.parent.on('actioncomplete', this.actioncomplete, this);
    };
    /**
     * @hidden
     */
    DetailRow$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('dataBoundArg', this.dataBoundArg);
        this.parent.off('detaildataBound', this.detaildataBound);
        this.parent.off('childRowExpand', this.childRowExpand);
        this.parent.off('rowExpandCollapse', this.rowExpandCollapse);
        this.parent.off('actioncomplete', this.actioncomplete);
        this.parent.grid.off('detail-indentcell-info', this.setIndentVisibility);
    };
    DetailRow$$1.prototype.setIndentVisibility = function (args) {
        var visible = 'visible';
        args[visible] = false;
    };
    DetailRow$$1.prototype.dataBoundArg = function () {
        var detailele = this.parent.getRows().filter(function (e) {
            return !e.classList.contains('e-detailrow');
        });
        for (var i = 0; i < detailele.length; i++) {
            var elements = detailele[i].getElementsByClassName('e-detailrowcollapse');
            var detailData = this.parent.grid.getRowObjectFromUID(detailele[i].getAttribute('data-Uid'));
            var parentItem = sf.grids.getObject('parentItem', this.parent.grid.getCurrentViewRecords()[i]);
            if (sf.base.isNullOrUndefined(parentItem) || !sf.base.isNullOrUndefined(parentItem) &&
                getExpandStatus(this.parent, detailData.data, this.parent.grid.getCurrentViewRecords())) {
                this.parent.grid.detailRowModule.expand(elements[0]);
            }
        }
    };
    DetailRow$$1.prototype.childRowExpand = function (args) {
        var detailRowElement = args.row.getElementsByClassName('e-detailrowcollapse');
        if (!sf.base.isNullOrUndefined(detailRowElement[0])) {
            this.parent.grid.detailRowModule.expand(detailRowElement[0]);
        }
    };
    DetailRow$$1.prototype.rowExpandCollapse = function (args) {
        if (isRemoteData(this.parent)) {
            return;
        }
        for (var i = 0; i < args.detailrows.length; i++) {
            args.detailrows[i].style.display = args.action;
        }
    };
    DetailRow$$1.prototype.detaildataBound = function (args) {
        if (!sf.base.isBlazor() || !this.parent.isServerRendered) {
            var data = args.data;
            var row = args.detailElement.parentElement.previousSibling;
            var index = !sf.base.isNullOrUndefined(data.parentItem) ? data.parentItem.index : data.index;
            var expandClass_1 = 'e-gridrowindex' + index + 'level' + data.level;
            var classlist = row.querySelector('.' + expandClass_1).classList;
            var gridClas = [].slice.call(classlist).filter(function (gridclass) { return (gridclass === expandClass_1); });
            var newNo = gridClas[0].length;
            var slicedclas = gridClas.toString().slice(6, newNo);
            var detailClass = 'e-griddetail' + slicedclas;
            sf.base.addClass([args.detailElement.parentElement], detailClass);
        }
    };
    
    DetailRow$$1.prototype.actioncomplete = function (args) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            var spann = (args.row.querySelectorAll('.e-editcell')[0].getAttribute('colSpan'));
            var colum = parseInt(spann, 10) - 1;
            var updtdcolum = colum.toString();
            args.row.querySelectorAll('.e-editcell')[0].setAttribute('colSpan', updtdcolum);
        }
        var focusElement = this.parent.grid.contentModule.getRows();
        for (var i = 0; i < focusElement.length; i++) {
            focusElement[i].cells[0].visible = false;
        }
        var focusModule = sf.grids.getObject('focusModule', this.parent.grid);
        var matrix = 'refreshMatrix';
        focusModule[matrix](true)({ rows: this.parent.grid.contentModule.getRows() });
    };
    /**
     * Destroys the DetailModule.
     * @method destroy
     * @return {void}
     */
    DetailRow$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    return DetailRow$$1;
}());

var __extends$13 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VirtualTreeContentRenderer = /** @class */ (function (_super) {
    __extends$13(VirtualTreeContentRenderer, _super);
    function VirtualTreeContentRenderer(parent, locator) {
        var _this = _super.call(this, parent, locator) || this;
        _this.isExpandCollapse = false;
        _this.translateY = 0;
        _this.maxiPage = 0;
        _this.recordAdded = false;
        /** @hidden */
        _this.startIndex = -1;
        _this.endIndex = -1;
        _this.preTranslate = 0;
        _this.isRemoteExpand = false;
        _this.addEventListener();
        return _this;
    }
    VirtualTreeContentRenderer.prototype.getModelGenerator = function () {
        return new TreeVirtualRowModelGenerator(this.parent);
    };
    VirtualTreeContentRenderer.prototype.getRowByIndex = function (index) {
        return this.parent.getDataRows().filter(function (e) { return parseInt(e.getAttribute('aria-rowindex'), 0) === index; })[0];
    };
    VirtualTreeContentRenderer.prototype.addEventListener = function () {
        this.parent.on(virtualActionArgs, this.virtualOtherAction, this);
        this.parent.on(indexModifier, this.indexModifier, this);
    };
    VirtualTreeContentRenderer.prototype.virtualOtherAction = function (args) {
        if (args.setTop) {
            this.translateY = 0;
            this.startIndex = 0;
            this.endIndex = this.parent.pageSettings.pageSize - 1;
        }
        else if (args.isExpandCollapse) {
            this.isExpandCollapse = true;
        }
    };
    VirtualTreeContentRenderer.prototype.indexModifier = function (args) {
        var content = this.parent.getContent().querySelector('.e-content');
        if (this.recordAdded && this.startIndex > -1 && this.endIndex > -1) {
            if (this.endIndex > args.count - this.parent.pageSettings.pageSize) {
                var nextSetResIndex = ~~(content.scrollTop / this.parent.getRowHeight());
                var lastIndex = nextSetResIndex + this.parent.getRows().length;
                if (lastIndex > args.count) {
                    lastIndex = nextSetResIndex +
                        (args.count - nextSetResIndex);
                }
                this.startIndex = lastIndex - this.parent.getRows().length;
                this.endIndex = lastIndex;
            }
            else {
                this.startIndex += 1;
                this.endIndex += 1;
            }
            this.recordAdded = false;
        }
        args.startIndex = this.startIndex;
        args.endIndex = this.endIndex;
    };
    VirtualTreeContentRenderer.prototype.eventListener = function (action) {
        var _this = this;
        if (!(this.parent.dataSource instanceof sf.data.DataManager && this.parent.dataSource.dataSource.url !== undefined
            && this.parent.dataSource.dataSource.url !== '')) {
            this.parent[action]('data-ready', this.onDataReady, this);
            //this.parent[action]('refresh-virtual-block', this.refreshContentRows, this);
            this.fn = function () {
                _this.observers.observes(function (scrollArgs) { return _this.scrollListeners(scrollArgs); });
                _this.parent.off('content-ready', _this.fn);
            };
            this.parent.on('content-ready', this.fn, this);
            this.parent.addEventListener(actionComplete, this.onActionComplete.bind(this));
            this.parent[action]('virtual-scroll-edit-action-begin', this.beginEdit, this);
            this.parent[action]('virtual-scroll-add-action-begin', this.beginAdd, this);
            this.parent[action]('virtual-scroll-edit-success', this.virtualEditSuccess, this);
            this.parent[action]('edit-reset', this.resetIseditValue, this);
            this.parent[action]('get-virtual-data', this.getData, this);
            this.parent[action]('virtual-scroll-edit-cancel', this.cancelEdit, this);
        }
        else {
            _super.prototype.eventListener.call(this, 'on');
        }
    };
    VirtualTreeContentRenderer.prototype.onDataReady = function (e) {
        _super.prototype.onDataReady.call(this, e);
        if (!(this.parent.dataSource instanceof sf.data.DataManager && this.parent.dataSource.dataSource.url !== undefined
            && this.parent.dataSource.dataSource.url !== '')) {
            if (!sf.base.isNullOrUndefined(e.count)) {
                this.totalRecords = e.count;
                sf.base.getValue('virtualEle', this).setVirtualHeight(this.parent.getRowHeight() * e.count, '100%');
                 // this.parent.pageSettings.pageSize - Math.ceil(this.parent.pageSettings.pageSize / 1.5);
            }
            if (!sf.base.isNullOrUndefined(e.requestType) && e.requestType.toString() === 'collapseAll') {
                this.contents.scrollTop = 0;
            }
        }
    };
    VirtualTreeContentRenderer.prototype.renderTable = function () {
        _super.prototype.renderTable.call(this);
        if (!(this.parent.dataSource instanceof sf.data.DataManager && this.parent.dataSource.dataSource.url !== undefined
            && this.parent.dataSource.dataSource.url !== '')) {
            sf.base.getValue('observer', this).options.debounceEvent = false;
            this.observers = new TreeInterSectionObserver(sf.base.getValue('observer', this).element, sf.base.getValue('observer', this).options);
            this.contents = this.getPanel().firstChild;
        }
    };
    VirtualTreeContentRenderer.prototype.getTranslateY = function (sTop, cHeight, info, isOnenter) {
        if (this.parent.dataSource instanceof sf.data.DataManager && this.parent.dataSource.dataSource.url !== undefined
            && this.parent.dataSource.dataSource.url !== '') {
            if (this.isRemoteExpand) {
                this.isRemoteExpand = false;
                return this.preTranslate;
            }
            else {
                this.preTranslate = _super.prototype.getTranslateY.call(this, sTop, cHeight, info, isOnenter);
                return _super.prototype.getTranslateY.call(this, sTop, cHeight, info, isOnenter);
            }
        }
        else {
            return _super.prototype.getTranslateY.call(this, sTop, cHeight, info, isOnenter);
        }
    };
    VirtualTreeContentRenderer.prototype.beginEdit = function (e) {
        var selector = '.e-row[aria-rowindex="' + e.index + '"]';
        var index = this.parent.getContent().querySelector(selector).rowIndex;
        var rowData = this.parent.getCurrentViewRecords()[index];
        e.data = rowData;
    };
    VirtualTreeContentRenderer.prototype.beginAdd = function (args) {
        var addAction = 'addActionBegin';
        var isAdd = 'isAdd';
        var addArgs = { newRowPosition: this.rowPosition, addRowIndex: this.addRowIndex, ariaRowIndex: this.ariaRowIndex };
        this.parent.notify('get-row-position', addArgs);
        this.rowPosition = addArgs.newRowPosition;
        this.addRowIndex = addArgs.addRowIndex;
        this.ariaRowIndex = addArgs.ariaRowIndex;
        var rows = this.parent.getRows();
        var firstAriaIndex = rows.length ? +rows[0].getAttribute('aria-rowindex') : 0;
        var lastAriaIndex = rows.length ? +rows[rows.length - 1].getAttribute('aria-rowindex') : 0;
        var withInRange = this.parent.selectedRowIndex >= firstAriaIndex && this.parent.selectedRowIndex <= lastAriaIndex;
        if (!(this.rowPosition === 'Top' || this.rowPosition === 'Bottom')) {
            this[isAdd] = true;
        }
        if (this.rowPosition === 'Top' || this.rowPosition === 'Bottom' ||
            ((!this.addRowIndex || this.addRowIndex === -1) && (this.parent.selectedRowIndex === -1 || !withInRange))) {
            _super.prototype[addAction].call(this, args);
        }
    };
    VirtualTreeContentRenderer.prototype.restoreEditState = function () {
        var restoreEdit = 'restoreEdit';
        _super.prototype[restoreEdit].call(this);
    };
    VirtualTreeContentRenderer.prototype.resetIseditValue = function () {
        var resetIsEdit = 'resetIsedit';
        var isAdd = 'isAdd';
        this.parent.notify('reset-edit-props', {});
        if ((this.rowPosition === 'Top' || this.rowPosition === 'Bottom') && this[isAdd]) {
            _super.prototype[resetIsEdit].call(this);
        }
    };
    VirtualTreeContentRenderer.prototype.virtualEditSuccess = function (args) {
        var isAdd = 'isAdd';
        var content = this.parent.getContent().querySelector('.e-content');
        if (this[isAdd] && content.querySelector('.e-addedrow')) {
            this.recordAdded = true;
        }
    };
    VirtualTreeContentRenderer.prototype.cancelEdit = function (args) {
        var editCancel = 'editCancel';
        _super.prototype[editCancel].call(this, args);
    };
    VirtualTreeContentRenderer.prototype.restoreNewRow = function () {
        var isAdd = 'isAdd';
        var content = this.parent.getContent().querySelector('.e-content');
        if (this[isAdd] && !content.querySelector('.e-addedrow')) {
            this.parent.isEdit = false;
            this.parent.addRecord();
        }
    };
    VirtualTreeContentRenderer.prototype.getData = function (data) {
        var getVirtualData = 'getVirtualData';
        _super.prototype[getVirtualData].call(this, data);
    };
    VirtualTreeContentRenderer.prototype.onActionComplete = function (args) {
        if (args.requestType === 'add') {
            var addArgs = { newRowPosition: this.rowPosition, addRowIndex: this.addRowIndex, ariaRowIndex: this.ariaRowIndex };
            this.parent.notify('get-row-position', addArgs);
            this.rowPosition = addArgs.newRowPosition;
            this.addRowIndex = addArgs.addRowIndex;
            this.ariaRowIndex = addArgs.ariaRowIndex;
        }
        var actionComplete$$1 = 'actionComplete';
        _super.prototype[actionComplete$$1].call(this, args);
    };
    VirtualTreeContentRenderer.prototype.scrollListeners = function (scrollArgs) {
        var info = scrollArgs.sentinel;
        var outBuffer = 10; //this.parent.pageSettings.pageSize - Math.ceil(this.parent.pageSettings.pageSize / 1.5);
        var content = this.parent.getContent().querySelector('.e-content');
        var scrollHeight = outBuffer * this.parent.getRowHeight();
        var upScroll = (scrollArgs.offset.top - this.translateY) < 0;
        var downScroll = (scrollArgs.offset.top - this.translateY) > scrollHeight;
        if (upScroll) {
            var vHeight = +(this.parent.height.toString().indexOf('%') < 0 ? this.parent.height :
                this.parent.element.getBoundingClientRect().height);
            var index = (~~(content.scrollTop / this.parent.getRowHeight())
                + Math.ceil(vHeight / this.parent.getRowHeight()))
                - this.parent.getRows().length;
            index = (index > 0) ? index : 0;
            this.startIndex = index;
            this.endIndex = index + this.parent.getRows().length;
            if (this.endIndex > this.totalRecords) {
                var lastInx = this.totalRecords - 1;
                var remains = this.endIndex % lastInx;
                this.endIndex = lastInx;
                this.startIndex = this.startIndex - remains;
            }
            //var firsttdinx = parseInt(this.parent.getContent().querySelector('.e-content td').getAttribute('index'), 0);
            var rowPt = Math.ceil(scrollArgs.offset.top / this.parent.getRowHeight());
            rowPt = rowPt % this.parent.pageSettings.pageSize;
            var firsttdinx = 0;
            if (!sf.base.isNullOrUndefined(this.parent.getRows()[rowPt])) {
                var attr = this.parent.getContent().querySelectorAll('.e-content tr')[rowPt]
                    .querySelector('td').getAttribute('index');
                firsttdinx = +attr; // this.parent.getContent().querySelector('.e-content tr').getAttribute('aria-rowindex');
            }
            if (firsttdinx === 0) {
                this.translateY = scrollArgs.offset.top;
            }
            else {
                var height = this.parent.getRowHeight();
                this.translateY = (scrollArgs.offset.top - (outBuffer * height) > 0) ?
                    scrollArgs.offset.top - (outBuffer * height) + 10 : 0;
            }
        }
        else if (downScroll) {
            var nextSetResIndex = ~~(content.scrollTop / this.parent.getRowHeight());
            var lastIndex = nextSetResIndex + this.parent.getRows().length;
            if (lastIndex > this.totalRecords) {
                lastIndex = nextSetResIndex +
                    (this.totalRecords - nextSetResIndex);
            }
            this.startIndex = lastIndex - this.parent.getRows().length;
            this.endIndex = lastIndex;
            if (scrollArgs.offset.top > (this.parent.getRowHeight() * this.totalRecords)) {
                this.translateY = this.getTranslateY(scrollArgs.offset.top, content.getBoundingClientRect().height);
            }
            else {
                this.translateY = scrollArgs.offset.top;
            }
        }
        if ((downScroll && (scrollArgs.offset.top < (this.parent.getRowHeight() * this.totalRecords)))
            || (upScroll)) {
            var viewInfo = sf.base.getValue('getInfoFromView', this).apply(this, [scrollArgs.direction, info, scrollArgs.offset]);
            this.previousInfo = viewInfo;
            var page = viewInfo.loadNext && !viewInfo.loadSelf ? viewInfo.nextInfo.page : viewInfo.page;
            this.parent.setProperties({ pageSettings: { currentPage: page } }, true);
            if (viewInfo.event === 'refresh-virtual-block') {
                this.parent.refresh();
            }
            else {
                this.parent.notify(viewInfo.event, { requestType: 'virtualscroll', focusElement: scrollArgs.focusElement });
            }
        }
    };
    VirtualTreeContentRenderer.prototype.appendContent = function (target, newChild, e) {
        if (this.parent.dataSource instanceof sf.data.DataManager && this.parent.dataSource.dataSource.url !== undefined
            && this.parent.dataSource.dataSource.url !== '') {
            if (sf.base.getValue('isExpandCollapse', e)) {
                this.isRemoteExpand = true;
            }
            _super.prototype.appendContent.call(this, target, newChild, e);
        }
        else {
            var info = e.virtualInfo.sentinelInfo && e.virtualInfo.sentinelInfo.axis === 'Y' &&
                sf.base.getValue('currentInfo', this).page && sf.base.getValue('currentInfo', this).page !== e.virtualInfo.page ?
                sf.base.getValue('currentInfo', this) : e.virtualInfo;
            var cBlock = (info.columnIndexes[0]) - 1;
            var cOffset = this.getColumnOffset(cBlock);
            //this.virtualEle.setWrapperWidth(width, ( Browser.isIE || Browser.info.name === 'edge') as boolean);
            target = this.parent.createElement('tbody');
            target.appendChild(newChild);
            var replace = 'replaceWith';
            this.getTable().querySelector('tbody')[replace](target);
            if (!this.isExpandCollapse || this.translateY === 0) {
                sf.base.getValue('virtualEle', this).adjustTable(cOffset, this.translateY);
            }
            else {
                this.isExpandCollapse = false;
            }
            sf.base.setValue('prevInfo', this.previousInfo ? this.previousInfo : info, this);
            var focusCell = 'focusCell';
            var restoreAdd = 'restoreAdd';
            _super.prototype[focusCell].call(this, e);
            var isAdd = 'isAdd';
            if (this[isAdd] && !this.parent.getContent().querySelector('.e-content').querySelector('.e-addedrow')) {
                if (!(this.rowPosition === 'Top' || this.rowPosition === 'Bottom')) {
                    if (this.ariaRowIndex >= this.startIndex) {
                        this.restoreNewRow();
                    }
                    else if (this.addRowIndex && this.addRowIndex > -1) {
                        this[isAdd] = false;
                        this.parent.isEdit = false;
                    }
                }
            }
            this.restoreEditState();
            _super.prototype[restoreAdd].call(this);
        }
    };
    VirtualTreeContentRenderer.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('data-ready', this.onDataReady);
        this.parent.off('content-ready', this.fn);
        this.parent.off(virtualActionArgs, this.virtualOtherAction);
        this.parent.off(indexModifier, this.indexModifier);
        this.parent.off('virtual-scroll-edit-action-begin', this.beginEdit);
        this.parent.off('virtual-scroll-add-action-begin', this.beginAdd);
        this.parent.off('virtual-scroll-edit-success', this.virtualEditSuccess);
        this.parent.off('edit-reset', this.resetIseditValue);
        this.parent.off('get-virtual-data', this.getData);
        this.parent.off('virtual-scroll-edit-cancel', this.cancelEdit);
    };
    return VirtualTreeContentRenderer;
}(sf.grids.VirtualContentRenderer));
var TreeInterSectionObserver = /** @class */ (function (_super) {
    __extends$13(TreeInterSectionObserver, _super);
    function TreeInterSectionObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isWheeling = false;
        _this.newPos = 0;
        _this.lastPos = 0;
        _this.timer = 0;
        return _this;
    }
    TreeInterSectionObserver.prototype.observes = function (callback) {
        sf.base.setValue('containerRect', sf.base.getValue('options', this).container.getBoundingClientRect(), this);
        sf.base.EventHandler.add(sf.base.getValue('options', this).container, 'scroll', this.virtualScrollHandlers(callback), this);
    };
    TreeInterSectionObserver.prototype.clear = function () {
        this.lastPos = null;
    };
    TreeInterSectionObserver.prototype.virtualScrollHandlers = function (callback) {
        var _this = this;
        var prevTop = 0;
        var prevLeft = 0;
        return function (e) {
            var scrollTop = e.target.scrollTop;
            var scrollLeft = e.target.scrollLeft;
            var direction = prevTop < scrollTop ? 'down' : 'up';
            direction = prevLeft === scrollLeft ? direction : prevLeft < scrollLeft ? 'right' : 'left';
            prevTop = scrollTop;
            prevLeft = scrollLeft;
            var current = sf.base.getValue('sentinelInfo', _this)[direction];
            var delta = 0;
            _this.newPos = scrollTop;
            if (_this.lastPos != null) { // && newPos < maxScroll 
                delta = _this.newPos - _this.lastPos;
            }
            _this.lastPos = _this.newPos;
            if (_this.timer) {
                clearTimeout(_this.timer);
            }
            _this.timer = setTimeout(_this.clear, 0);
            /*if (this.options.axes.indexOf(current.axis) === -1) {
                return;
            }*/
            /*if(delta > 45 || delta < -45){
              this.isWheeling = true;
            }*/
            if ((delta > 100 || delta < -100) && (e && e.preventDefault)) {
                e.returnValue = false;
                e.preventDefault();
            }
            callback({ direction: direction, isWheel: _this.isWheeling,
                sentinel: current, offset: { top: scrollTop, left: scrollLeft },
                focusElement: document.activeElement });
        };
    };
    return TreeInterSectionObserver;
}(sf.grids.InterSectionObserver));

var __extends$12 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * TreeGrid Virtual Scroll module will handle Virtualization
 * @hidden
 */
var VirtualScroll$1 = /** @class */ (function () {
    /**
     * Constructor for VirtualScroll module
     */
    function VirtualScroll$$1(parent) {
        this.prevstartIndex = -1;
        this.prevendIndex = -1;
        this.parent = parent;
        var injectedModules = 'injectedModules';
        var modules = sf.grids.Grid.prototype[injectedModules];
        for (var i = 0; i < modules.length; i++) {
            if (modules[i] === sf.grids.VirtualScroll) {
                modules.splice(i, 1);
                break;
            }
        }
        sf.grids.Grid.Inject(TreeVirtual);
        this.addEventListener();
    }
    VirtualScroll$$1.prototype.returnVisualData = function (args) {
        args.data = this.visualData;
    };
    /**
     * For internal use only - Get the module name.
     * @private
     */
    VirtualScroll$$1.prototype.getModuleName = function () {
        return 'virtualScroll';
    };
    /**
     * @hidden
     */
    VirtualScroll$$1.prototype.addEventListener = function () {
        this.parent.on(localPagedExpandCollapse, this.collapseExpandVirtualchilds, this);
        this.parent.on(pagingActions, this.virtualPageAction, this);
    };
    /**
     * @hidden
     */
    VirtualScroll$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off(localPagedExpandCollapse, this.collapseExpandVirtualchilds);
        this.parent.off(pagingActions, this.virtualPageAction);
    };
    VirtualScroll$$1.prototype.collapseExpandVirtualchilds = function (row) {
        this.parent.grid.notify(virtualActionArgs, { isExpandCollapse: true });
        this.expandCollapseRec = row.record;
        row.record.expanded = row.action === 'collapse' ? false : true;
        var ret = {
            result: this.parent.flatData,
            row: row.row,
            action: row.action,
            record: row.record,
            count: this.parent.flatData.length
        };
        var requestType = sf.base.getValue('isCollapseAll', this.parent) ? 'collapseAll' : 'refresh';
        sf.base.getValue('grid.renderModule', this.parent).dataManagerSuccess(ret, { requestType: requestType });
    };
    VirtualScroll$$1.prototype.virtualPageAction = function (pageingDetails) {
        var _this = this;
        var dm = new sf.data.DataManager(pageingDetails.result);
        var expanded$$1 = new sf.data.Predicate('expanded', 'notequal', null).or('expanded', 'notequal', undefined);
        var parents = dm.executeLocal(new sf.data.Query().where(expanded$$1));
        var visualData = parents.filter(function (e) {
            return getExpandStatus(_this.parent, e, parents);
        });
        this.visualData = visualData;
        this.parent.grid.notify(dataListener, { data: visualData });
        var counts = { startIndex: -1, endIndex: -1, count: pageingDetails.count };
        this.parent.grid.notify(indexModifier, counts);
        var startIndex = counts.startIndex;
        var endIndex = counts.endIndex;
        pageingDetails.count = visualData.length;
        if (startIndex === -1 && endIndex === -1) {
            var query = new sf.data.Query();
            var size = this.parent.grid.pageSettings.pageSize;
            var current = this.parent.grid.pageSettings.currentPage;
            var skip = size * (current - 1);
            query = query.skip(skip).take(size);
            dm.dataSource.json = visualData;
            pageingDetails.result = dm.executeLocal(query);
        }
        else {
            var requestType = pageingDetails.actionArgs.requestType;
            if (requestType === 'filtering') {
                startIndex = 0;
                endIndex = this.parent.grid.pageSettings.pageSize - 1;
                this.parent.grid.notify(virtualActionArgs, { setTop: true });
            }
            //if ((this.prevendIndex !== -1 && this.prevstartIndex !== -1) && 
            //this.prevendIndex === endIndex && this.prevstartIndex === startIndex) {
            if (!sf.base.isNullOrUndefined(this.expandCollapseRec)) {
                var resourceCount = this.parent.getRows();
                var sIndex = visualData.indexOf(this.expandCollapseRec);
                var tempdata = visualData.slice(sIndex, sIndex + resourceCount.length);
                if (tempdata.length < resourceCount.length && sIndex >= 0) {
                    sIndex = visualData.length - resourceCount.length;
                    sIndex = sIndex > 0 ? sIndex : 0;
                    startIndex = sIndex;
                    endIndex = visualData.length;
                }
                else if (sf.base.getValue('isCollapseAll', this.parent)) {
                    startIndex = 0;
                    endIndex = this.parent.grid.pageSettings.pageSize - 1;
                    this.parent.grid.notify(virtualActionArgs, { setTop: true });
                }
                this.expandCollapseRec = null;
            }
            //}
            pageingDetails.result = visualData.slice(startIndex, endIndex);
            this.prevstartIndex = startIndex;
            this.prevendIndex = endIndex;
        }
        this.parent.notify('updateAction', pageingDetails);
    };
    /**
     * To destroy the virtualScroll module
     * @return {void}
     * @hidden
     */
    VirtualScroll$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    return VirtualScroll$$1;
}());
var TreeVirtual = /** @class */ (function (_super) {
    __extends$12(TreeVirtual, _super);
    function TreeVirtual(parent, locator) {
        var _this = _super.call(this, parent, locator) || this;
        sf.base.getValue('parent', _this).off('initial-load', sf.base.getValue('instantiateRenderer', _this), _this);
        sf.base.getValue('parent', _this).on('initial-load', _this.instantiateRenderers, _this);
        return _this;
    }
    TreeVirtual.prototype.instantiateRenderers = function () {
        sf.base.getValue('parent', this).log(['limitation', 'virtual_height'], 'virtualization');
        var renderer = sf.base.getValue('locator', this).getService('rendererFactory');
        sf.base.getValue('addRenderer', renderer)
            .apply(renderer, [sf.grids.RenderType.Content, new VirtualTreeContentRenderer(sf.base.getValue('parent', this), sf.base.getValue('locator', this))]);
        //renderer.addRenderer(RenderType.Content, new VirtualTreeContentRenderer(getValue('parent', this), getValue('locator', this)));
        this.ensurePageSize();
    };
    TreeVirtual.prototype.ensurePageSize = function () {
        var parentGrid = sf.base.getValue('parent', this);
        var rowHeight = parentGrid.getRowHeight();
        if (!sf.base.isNullOrUndefined(parentGrid.height) && typeof (parentGrid.height) === 'string' && parentGrid.height.indexOf('%') !== -1) {
            parentGrid.element.style.height = parentGrid.height;
        }
        var vHeight = parentGrid.height.toString().indexOf('%') < 0 ? parentGrid.height :
            parentGrid.element.getBoundingClientRect().height;
        var blockSize = ~~(vHeight / rowHeight);
        var height = blockSize * 2;
        var size = parentGrid.pageSettings.pageSize;
        parentGrid.setProperties({ pageSettings: { pageSize: size < height ? height : size } }, true);
    };
    return TreeVirtual;
}(sf.grids.VirtualScroll));

/**
 * TreeGrid Freeze module
 * @hidden
 */
var Freeze$1 = /** @class */ (function () {
    /**
     * Constructor for render module
     */
    function Freeze$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.Freeze);
        this.parent = parent;
        this.addEventListener();
    }
    Freeze$$1.prototype.addEventListener = function () {
        this.parent.on('rowExpandCollapse', this.rowExpandCollapse, this);
        this.parent.on('dataBoundArg', this.dataBoundArg, this);
        this.parent.grid.on('dblclick', this.dblClickHandler, this);
    };
    Freeze$$1.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('rowExpandCollapse', this.rowExpandCollapse);
        this.parent.off('dataBoundArg', this.dataBoundArg);
        this.parent.grid.off('dblclick', this.dblClickHandler);
    };
    Freeze$$1.prototype.rowExpandCollapse = function (args) {
        var movableRows = this.parent.getMovableDataRows();
        var frozenrows = this.parent.getRows();
        var rows;
        if (!args.detailrows.length) {
            rows = movableRows.filter(function (e) {
                return e.querySelector('.e-gridrowindex' + args.record.index + 'level' + (args.record.level + 1));
            });
        }
        else {
            rows = args.detailrows;
        }
        for (var i = 0; i < rows.length; i++) {
            var rData = this.parent.grid.getRowObjectFromUID(rows[i].getAttribute('data-Uid')).data;
            rows[i].style.display = args.action;
            var queryselector = args.action === 'none' ? '.e-treecolumn-container .e-treegridcollapse'
                : '.e-treecolumn-container .e-treegridexpand';
            if (frozenrows[rows[i].rowIndex].querySelector(queryselector)) {
                var cRow = [];
                for (var i_1 = 0; i_1 < movableRows.length; i_1++) {
                    if (movableRows[i_1].querySelector('.e-gridrowindex' + rData.index + 'level' + (rData.level + 1))) {
                        cRow.push(movableRows[i_1]);
                    }
                }
                if (cRow.length) {
                    this.rowExpandCollapse({ detailrows: cRow, action: args.action });
                }
            }
        }
    };
    Freeze$$1.prototype.dblClickHandler = function (e) {
        if (sf.grids.parentsUntil(e.target, 'e-rowcell') &&
            this.parent.grid.editSettings.allowEditOnDblClick && this.parent.editSettings.mode !== 'Cell') {
            this.parent.grid.editModule.startEdit(sf.grids.parentsUntil(e.target, 'e-row'));
        }
    };
    Freeze$$1.prototype.dataBoundArg = function (args) {
        var checkboxColumn = this.parent.getColumns().filter(function (e) {
            return e.showCheckbox;
        });
        if (checkboxColumn.length && this.parent.freezeModule && this.parent.initialRender) {
            sf.base.addClass([this.parent.element.getElementsByClassName('e-grid')[0]], 'e-checkselection');
        }
    };
    Freeze$$1.prototype.destroy = function () {
        this.removeEventListener();
    };
    /**
     * For internal use only - Get the module name.
     * @private
     */
    Freeze$$1.prototype.getModuleName = function () {
        return 'freeze';
    };
    return Freeze$$1;
}());

/**
 * TreeGrid ColumnChooser module
 * @hidden
 */
var ColumnChooser$1 = /** @class */ (function () {
    /**
     * Constructor for render module
     */
    function ColumnChooser$$1(parent) {
        sf.grids.Grid.Inject(sf.grids.ColumnChooser);
        this.parent = parent;
    }
    /**
     * Column chooser can be displayed on screen by given position(X and Y axis).
     * @param  {number} X - Defines the X axis.
     * @param  {number} Y - Defines the Y axis.
     * @return {void}
     */
    ColumnChooser$$1.prototype.openColumnChooser = function (X, Y) {
        return this.parent.grid.columnChooserModule.openColumnChooser(X, Y);
    };
    /**
     * Destroys the openColumnChooser.
     * @method destroy
     * @return {void}
     */
    ColumnChooser$$1.prototype.destroy = function () {
        //this.parent.grid.ColumnChooserModule.destroy();
    };
    /**
     * For internal use only - Get the module name.
     * @private
     */
    ColumnChooser$$1.prototype.getModuleName = function () {
        return 'ColumnChooser';
    };
    return ColumnChooser$$1;
}());

/**
 * actions export
 */

/**
 * TreeGrid component exported items
 */

TreeGrid.Inject(Filter$1, Page$1, Sort$1, Reorder$1, Toolbar$1, Aggregate$1, Resize$1, ColumnMenu$1, ExcelExport$1, PdfExport$1, CommandColumn$1, ContextMenu$1, Edit$1, Selection, VirtualScroll$1, DetailRow$1, RowDD$1, Freeze$1, ColumnChooser$1);

exports.TreeGrid = TreeGrid;
exports.load = load;
exports.rowDataBound = rowDataBound;
exports.dataBound = dataBound;
exports.queryCellInfo = queryCellInfo;
exports.beforeDataBound = beforeDataBound;
exports.actionBegin = actionBegin;
exports.dataStateChange = dataStateChange;
exports.actionComplete = actionComplete;
exports.rowSelecting = rowSelecting;
exports.rowSelected = rowSelected;
exports.checkboxChange = checkboxChange;
exports.rowDeselected = rowDeselected;
exports.toolbarClick = toolbarClick;
exports.beforeExcelExport = beforeExcelExport;
exports.beforePdfExport = beforePdfExport;
exports.resizeStop = resizeStop;
exports.expanded = expanded;
exports.expanding = expanding;
exports.collapsed = collapsed;
exports.collapsing = collapsing;
exports.remoteExpand = remoteExpand;
exports.localPagedExpandCollapse = localPagedExpandCollapse;
exports.pagingActions = pagingActions;
exports.printGridInit = printGridInit;
exports.contextMenuOpen = contextMenuOpen;
exports.contextMenuClick = contextMenuClick;
exports.beforeCopy = beforeCopy;
exports.beforePaste = beforePaste;
exports.savePreviousRowPosition = savePreviousRowPosition;
exports.crudAction = crudAction;
exports.beginEdit = beginEdit;
exports.beginAdd = beginAdd;
exports.recordDoubleClick = recordDoubleClick;
exports.cellSave = cellSave;
exports.cellSaved = cellSaved;
exports.cellEdit = cellEdit;
exports.batchDelete = batchDelete;
exports.batchCancel = batchCancel;
exports.batchAdd = batchAdd;
exports.beforeBatchDelete = beforeBatchDelete;
exports.beforeBatchAdd = beforeBatchAdd;
exports.beforeBatchSave = beforeBatchSave;
exports.batchSave = batchSave;
exports.keyPressed = keyPressed;
exports.updateData = updateData;
exports.doubleTap = doubleTap;
exports.virtualColumnIndex = virtualColumnIndex;
exports.virtualActionArgs = virtualActionArgs;
exports.dataListener = dataListener;
exports.indexModifier = indexModifier;
exports.beforeStartEdit = beforeStartEdit;
exports.beforeBatchCancel = beforeBatchCancel;
exports.batchEditFormRendered = batchEditFormRendered;
exports.detailDataBound = detailDataBound;
exports.rowDrag = rowDrag;
exports.rowDragStartHelper = rowDragStartHelper;
exports.rowDrop = rowDrop;
exports.rowDragStart = rowDragStart;
exports.rowsAdd = rowsAdd;
exports.rowsRemove = rowsRemove;
exports.rowdraging = rowdraging;
exports.rowDropped = rowDropped;
exports.DataManipulation = DataManipulation;
exports.Reorder = Reorder$1;
exports.Resize = Resize$1;
exports.RowDD = RowDD$1;
exports.Column = Column;
exports.EditSettings = EditSettings;
exports.Predicate = Predicate$1;
exports.FilterSettings = FilterSettings;
exports.PageSettings = PageSettings;
exports.SearchSettings = SearchSettings;
exports.SelectionSettings = SelectionSettings;
exports.AggregateColumn = AggregateColumn;
exports.AggregateRow = AggregateRow;
exports.SortDescriptor = SortDescriptor;
exports.SortSettings = SortSettings;
exports.RowDropSettings = RowDropSettings$1;
exports.Render = Render;
exports.TreeVirtualRowModelGenerator = TreeVirtualRowModelGenerator;
exports.isRemoteData = isRemoteData;
exports.isCountRequired = isCountRequired;
exports.isCheckboxcolumn = isCheckboxcolumn;
exports.isFilterChildHierarchy = isFilterChildHierarchy;
exports.findParentRecords = findParentRecords;
exports.getExpandStatus = getExpandStatus;
exports.findChildrenRecords = findChildrenRecords;
exports.isOffline = isOffline;
exports.extendArray = extendArray;
exports.getPlainData = getPlainData;
exports.getParentData = getParentData;
exports.isHidden = isHidden;
exports.Filter = Filter$1;
exports.ExcelExport = ExcelExport$1;
exports.PdfExport = PdfExport$1;
exports.Page = Page$1;
exports.Toolbar = Toolbar$1;
exports.Aggregate = Aggregate$1;
exports.Sort = Sort$1;
exports.TreeClipboard = TreeClipboard;
exports.ColumnMenu = ColumnMenu$1;
exports.ContextMenu = ContextMenu$1;
exports.Edit = Edit$1;
exports.CommandColumn = CommandColumn$1;
exports.Selection = Selection;
exports.DetailRow = DetailRow$1;
exports.VirtualScroll = VirtualScroll$1;
exports.TreeVirtual = TreeVirtual;
exports.Freeze = Freeze$1;
exports.ColumnChooser = ColumnChooser$1;

return exports;

});
sfBlazor.modules["treegrid"] = "treegrid.TreeGrid";
sfBlazor.loadDependencies(sfBlazor.dependencyJson.treegrid, () => {
    sf.treegrid = sf.base.extend({}, sf.treegrid, sftreegrid({}));
});