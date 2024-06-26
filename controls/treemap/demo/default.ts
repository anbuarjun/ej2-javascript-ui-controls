import { TreeMap } from '../src/treemap/treemap';
import { TreeMapHighlight, TreeMapSelection } from '../src/treemap/user-interaction/highlight-selection';
import { TreeMapTooltip } from '../src/treemap/user-interaction/tooltip';
import { TreeMapLegend } from '../src/treemap/layout/legend';
import { DrillDown } from '../demo/Data/Drilldown_Sample';
import { TreeMapAjax } from '../src';
TreeMap.Inject(TreeMapTooltip, TreeMapHighlight, TreeMapSelection, TreeMapLegend);

/**
 * Default sample
 */

let prevTime: Date; let curTime: Date;
let treemap: TreeMap = new TreeMap({
    palette: ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'],
    titleSettings: {
        text: 'List of countries by population',
        textStyle: { size: '15px' }
    },
    enableDrillDown: true,
    format: 'n',
    initialDrillDown: {
        groupIndex: 1,
        groupName: 'Eastern Africa'
    },
    useGroupingSeparator: true,
    dataSource: DrillDown,
    weightValuePath: 'Population',
    tooltipSettings: {
        visible: true,
        format: '${Name} : ${Population}'
    },
    leafItemSettings: {
        labelPath: 'Name',
        showLabels: false,
        labelStyle: { size: '0px' },
        border: { color: 'black', width: 0.5 }
    },
    levels: [
        { groupPath: 'Continent', border: { color: 'black', width: 0.5 } },
        { groupPath: 'States', border: { color: 'black', width: 0.5 } },
        { groupPath: 'Region', showHeader: false, border: { color: 'black', width: 0.5 } },
    ]
});
treemap.appendTo('#container');
document.getElementById("fill").onclick = () => {
    treemap.levels[0].fill = "#336699"
    treemap.levels[1].fill = "#336699"
    treemap.levels[2].fill = "#336699"
    treemap.refresh();
}