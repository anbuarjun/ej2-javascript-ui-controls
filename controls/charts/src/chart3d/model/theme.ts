import { ChartTheme } from "../../common/utils/enum";
import { Chart3DThemeStyle } from "./chart3d-Interface";

/**
 * Gets the 3D theme color based on the specified chart theme.
 *
 * @param {ChartTheme} theme - The theme to determine the 3D color for.
 * @returns {Chart3DThemeStyle} An object containing 3D theme color styles.
 * @private
 */
export function get3DThemeColor(theme: ChartTheme ): Chart3DThemeStyle {
    let style: Chart3DThemeStyle;
    switch (theme) {
    case 'HighContrastLight':
    case 'HighContrast':
        style = {
            axisLabel: '#969696',
            axisTitle: '#969696',
            majorGridLine: '#BFBFBF',
            minorGridLine: '#969696',
            majorTickLine: '#BFBFBF',
            minorTickLine: '#969696',
            chartTitle: '#ffffff',
            legendLabel: '#ffffff',
            background: 'transparent',
            tooltipFill: '#ffffff',
            tooltipBoldLabel: '#000000',
            tooltipLightLabel: '#000000',
            tooltipHeaderLine: '#969696',
            tabColor: '#FFD939',
            backWallColor: '#222222',
            leftWallColor: '#272727',
            chartTitleFont: {
                color: '#FFFFFF', fontFamily: 'Segoe UI'
            },
            axisLabelFont: {
                color: '#969696', fontFamily: 'Segoe UI'
            },
            legendTitleFont: {
                color: '#FFFFFF', fontFamily: 'Segoe UI'
            },
            legendLabelFont: {
                color: '#969696', fontFamily: 'Segoe UI'
            },
            tooltipLabelFont: {
                color: '#000000', fontFamily: 'Segoe UI'
            },
            axisTitleFont: {
                color: '#000000', fontFamily: 'Segoe UI'
            },
            datalabelFont: {
                color: '#969696', fontFamily: 'Segoe UI'
            },
            chartSubTitleFont: {
                color: '#FFFFFF', fontFamily: 'Segoe UI'
            }
        };
        break;
    case 'MaterialDark':
    case 'FabricDark':
    case 'BootstrapDark':
        style = {
            axisLabel: theme === 'MaterialDark' ? 'rgba(255, 255, 255, 0.6)' : theme === 'FabricDark' ? '#A19F9D' : '#676767',
            axisTitle: theme === 'MaterialDark' ? 'rgba(255, 255, 255, 0.6)' : theme === 'FabricDark' ? '#A19F9D' : '#676767',
            majorGridLine: '#414040',
            minorGridLine: '#514F4F',
            majorTickLine: '#414040',
            minorTickLine: '#4A4848',
            chartTitle: '#ffffff',
            legendLabel: '#DADADA',
            background: 'transparent',
            tooltipFill: '#F4F4F4',
            tooltipBoldLabel: '#282727',
            tooltipLightLabel: '#333232',
            tooltipHeaderLine: '#9A9A9A',
            backWallColor: '#222222',
            leftWallColor: '#272727',
            tabColor: theme === 'MaterialDark' ? '#00B0FF' : theme === 'FabricDark' ? '#0074CC' : '#0070F0',
            chartTitleFont: {
                color: theme === 'MaterialDark' ? 'rgba(255, 255, 255, 0.87)' : theme === 'FabricDark' ? '#DADADA' : '#FFFFFF', fontFamily: theme === 'MaterialDark' ? 'Roboto' : theme === 'FabricDark' ? 'Segoe UI' : 'Helvetica'
            },
            axisLabelFont: {
                color: theme === 'MaterialDark' ? 'rgba(255, 255, 255, 0.6)' : theme === 'FabricDark' ? '#A19F9D' : '#676767', fontFamily: theme === 'MaterialDark' ? 'Roboto' : theme === 'FabricDark' ? 'Segoe UI' : 'Helvetica'
            },
            legendTitleFont: {
                color: theme === 'MaterialDark' ? 'rgba(255, 255, 255, 0.87)' : theme === 'FabricDark' ? '#DADADA' : '#FFFFFF', fontFamily: theme === 'MaterialDark' ? 'Roboto' : theme === 'FabricDark' ? 'Segoe UI' : 'Helvetica'
            },
            legendLabelFont: {
                color: theme === 'MaterialDark' ? 'rgba(255, 255, 255, 0.6)' : theme === 'FabricDark' ? '#A19F9D' : '#676767', fontFamily: theme === 'MaterialDark' ? 'Roboto' : theme === 'FabricDark' ? 'Segoe UI' : 'Helvetica'
            },
            tooltipLabelFont: {
                color: theme === 'MaterialDark' ? 'rgba(18, 18, 18, 1)' : theme === 'FabricDark' ? '#DADADA' : '#1A1A1A', fontFamily: theme === 'MaterialDark' ? 'Roboto' : theme === 'FabricDark' ? 'Segoe UI' : 'Helvetica'
            },
            axisTitleFont: {
                color: theme === 'MaterialDark' ? 'rgba(255, 255, 255, 0.6)' : theme === 'FabricDark' ? '#A19F9D' : '#676767', fontFamily: theme === 'MaterialDark' ? 'Roboto' : theme === 'FabricDark' ? 'Segoe UI' : 'Helvetica'
            },
            datalabelFont: {
                color: theme === 'MaterialDark' ? '#000000' : theme === 'FabricDark' ? '#000000' : '#FFFFFF', fontFamily: theme === 'MaterialDark' ? 'Roboto' : theme === 'FabricDark' ? 'Segoe UI' : 'Helvetica'
            },
            chartSubTitleFont: {
                color: theme === 'MaterialDark' ? 'rgba(255, 255, 255, 0.87)' : theme === 'FabricDark' ? '#DADADA' : '#FFFFFF', fontFamily: theme === 'MaterialDark' ? 'Roboto' : theme === 'FabricDark' ? 'Segoe UI' : 'Helvetica'
            }
        };
        break;
    case 'Bootstrap4':
        style = {
            axisLabel: '#222222',
            axisTitle: '#212529',
            majorGridLine: '#CED4DA',
            minorGridLine: '#DEE2E6',
            majorTickLine: '#ADB5BD',
            minorTickLine: '#CED4DA',
            chartTitle: '#212529',
            legendLabel: '#212529',
            background: 'transparent',
            tooltipFill: '#020202',
            tooltipBoldLabel: 'rgba(255,255,255)',
            tooltipLightLabel: 'rgba(255,255,255, 0.9)',
            tooltipHeaderLine: 'rgba(255,255,255, 0.2)',
            tabColor: '#007BFF',
            backWallColor: '#F9F9F9',
            leftWallColor: '#EBEBEB',
            chartTitleFont: {
                color: '#212529', fontFamily: 'Helvetica'
            },
            axisLabelFont: {
                color: '#222222', fontFamily: 'Helvetica'
            },
            legendTitleFont: {
                color: '#212529', fontFamily: 'Helvetica'
            },
            legendLabelFont: {
                color: '#666666', fontFamily: 'Helvetica'
            },
            tooltipLabelFont: {
                color: '#F9FAFB', fontFamily: 'Helvetica'
            },
            axisTitleFont: {
                color: '#212529', fontFamily: 'Helvetica'
            },
            datalabelFont: {
                color: '#222222', fontFamily: 'Helvetica'
            },
            chartSubTitleFont: {
                color: '#212529', fontFamily: 'Helvetica'
            }
        };
        break;
    case 'Tailwind':
        style = {
            axisLabel: '#222222',
            axisTitle: '#374151',
            majorGridLine: '#E5E7EB',
            minorGridLine: '#E5E7EB',
            majorTickLine: '#D1D5DB',
            minorTickLine: '#D1D5DB',
            chartTitle: '#374151',
            legendLabel: '#374151',
            background: 'transparent',
            tooltipFill: '#111827',
            tooltipBoldLabel: '#D1D5DB',
            tooltipLightLabel: '#F9FAFB',
            tooltipHeaderLine: '#6B7280',
            tabColor: '#4F46E5',
            backWallColor: '#F9F9F9',
            leftWallColor: '#EBEBEB',
            chartTitleFont: {
                color: '#374151', fontFamily: 'Inter'
            },
            axisLabelFont: {
                color: '#222222', fontFamily: 'Inter'
            },
            legendTitleFont: {
                color: '#374151', fontFamily: 'Inter'
            },
            legendLabelFont: {
                color: '#374151', fontFamily: 'Inter'
            },
            tooltipLabelFont: {
                color: '#F9FAFB', fontFamily: 'Inter'
            },
            axisTitleFont: {
                color: '#374151', fontFamily: 'Inter'
            },
            datalabelFont: {
                color: '#FFFFFF', fontFamily: 'Inter'
            },
            chartSubTitleFont: {
                color: '#374151', fontFamily: 'Inter'
            }
        };
        break;
    case 'TailwindDark':
        style = {
            axisLabel: '#D1D5DB',
            axisTitle: '#D1D5DB',
            majorGridLine: '#374151',
            minorGridLine: '#374151',
            majorTickLine: '#4B5563',
            minorTickLine: '#4B5563',
            chartTitle: '#D1D5DB',
            legendLabel: '#D1D5DB',
            background:  'transparent',
            tooltipFill: '#F9FAFB',
            tooltipBoldLabel: '#6B7280',
            tooltipLightLabel: '#1F2937',
            tooltipHeaderLine: '#9CA3AF',
            tabColor: '#22D3EE',
            backWallColor: '#222222',
            leftWallColor: '#272727',
            chartTitleFont: {
                color: '#D1D5DB', fontFamily: 'Inter'
            },
            axisLabelFont: {
                color: '#D1D5DB', fontFamily: 'Inter'
            },
            legendTitleFont: {
                color: '#D1D5DB', fontFamily: 'Inter'
            },
            legendLabelFont: {
                color: '#D1D5DB', fontFamily: 'Inter'
            },
            tooltipLabelFont: {
                color: '#1F2937', fontFamily: 'Inter'
            },
            axisTitleFont: {
                color: '#D1D5DB', fontFamily: 'Inter'
            },
            datalabelFont: {
                color: '#9CA3AF', fontFamily: 'Inter'
            },
            chartSubTitleFont: {
                color: '#D1D5DB', fontFamily: 'Inter'
            }
        };
        break;
    case 'Bootstrap5':
        style = {
            axisLabel: '#222222',
            axisTitle: '#343A40',
            majorGridLine: '#E5E7EB',
            minorGridLine: '#E5E7EB',
            majorTickLine: '#D1D5DB',
            minorTickLine: '#D1D5DB',
            chartTitle: '#343A40',
            legendLabel: '#343A40',
            background: 'transparent',
            tooltipFill: '#212529',
            tooltipBoldLabel: '#F9FAFB',
            tooltipLightLabel: '#F9FAFB',
            tooltipHeaderLine: '#9CA3AF',
            tabColor: '#0D6EFD',
            backWallColor: '#F9F9F9',
            leftWallColor: '#EBEBEB',
            chartTitleFont: {
                color: '#343A40', fontFamily: 'Helvetica'
            },
            axisLabelFont: {
                color: '#222222', fontFamily: 'Helvetica'
            },
            legendTitleFont: {
                color: '#343A40', fontFamily: 'Helvetica'
            },
            legendLabelFont: {
                color: '#343A40', fontFamily: 'Helvetica'
            },
            tooltipLabelFont: {
                color: '#F9FAFB', fontFamily: 'Helvetica'
            },
            axisTitleFont: {
                color: '#343A40', fontFamily: 'Helvetica'
            },
            datalabelFont: {
                color: '#FFFFFF', fontFamily: 'Helvetica'
            },
            chartSubTitleFont: {
                color: '#343A40', fontFamily: 'Helvetica'
            }
        };
        break;
    case 'Bootstrap5Dark':
        style = {
            axisLabel: '#E9ECEF',
            axisTitle: '#E9ECEF',
            majorGridLine: '#343A40',
            minorGridLine: '#343A40',
            majorTickLine: '#495057',
            minorTickLine: '#495057',
            chartTitle: '#E9ECEF',
            legendLabel: '#E9ECEF',
            background: 'transparent',
            tooltipFill: '#E9ECEF',
            tooltipBoldLabel: '#212529',
            tooltipLightLabel: '#212529',
            tooltipHeaderLine: '#ADB5BD',
            tabColor: '#0D6EFD',
            backWallColor: '#222222',
            leftWallColor: '#272727',
            chartTitleFont: {
                color: '#E9ECEF', fontFamily: 'Helvetica'
            },
            axisLabelFont: {
                color: '#E9ECEF', fontFamily: 'Helvetica'
            },
            legendTitleFont: {
                color: '#E9ECEF', fontFamily: 'Helvetica'
            },
            legendLabelFont: {
                color: '#E9ECEF', fontFamily: 'Helvetica'
            },
            tooltipLabelFont: {
                color: '#212529', fontFamily: 'Helvetica'
            },
            axisTitleFont: {
                color: '#E9ECEF', fontFamily: 'Helvetica'
            },
            datalabelFont: {
                color: '#000000', fontFamily: 'Helvetica'
            },
            chartSubTitleFont: {
                color: '#E9ECEF', fontFamily: 'Helvetica'
            }
        };
        break;
    case 'Fluent':
        style = {
            axisLabel: '#222222',
            axisTitle: '#201F1E',
            majorGridLine: '#DDDDDD',
            minorGridLine: '#DDDDDD',
            majorTickLine: '#DDDDDD',
            minorTickLine: '#DDDDDD',
            chartTitle: '#201F1E',
            legendLabel: '#323130',
            background: 'transparent',
            tooltipFill: '#FFFFFF',
            tooltipBoldLabel: '#323130',
            tooltipLightLabel: '#323130',
            tooltipHeaderLine: '#D2D0CE',
            tabColor: '#0078D4',
            backWallColor: '#F9F9F9',
            leftWallColor: '#EBEBEB',
            chartTitleFont: {
                color: '#201F1E', fontFamily: 'Segoe UI'
            },
            axisLabelFont: {
                color: '#222222', fontFamily: 'Segoe UI'
            },
            legendTitleFont: {
                color: '#201F1E', fontFamily: 'Segoe UI'
            },
            legendLabelFont: {
                color: '#49454E', fontFamily: 'Segoe UI'
            },
            tooltipLabelFont: {
                color: '#323130', fontFamily: 'Segoe UI'
            },
            axisTitleFont: {
                color: '#201F1E', fontFamily: 'Segoe UI'
            },
            datalabelFont: {
                color: '#FFFFFF', fontFamily: 'Segoe UI'
            },
            chartSubTitleFont: {
                color: '#323129', fontFamily: 'Segoe UI'
            }
        };
        break;
    case 'FluentDark':
        style = {
            axisLabel: '#D2D0CE',
            axisTitle: '#D2D0CE',
            majorGridLine: '#414040',
            minorGridLine: '#414040',
            majorTickLine: '#3B3A39',
            minorTickLine: '#3B3A39',
            chartTitle: '#F3F2F1',
            legendLabel: '#D2D0CE',
            background: 'transparent',
            tooltipFill: '#252423',
            tooltipBoldLabel: '#F3F2F1',
            tooltipLightLabel: '#F3F2F1',
            tooltipHeaderLine: '#3B3A39',
            tabColor: '#0078D4',
            backWallColor: '#222222',
            leftWallColor: '#272727',
            chartTitleFont: {
                color: '#C8C6C4', fontFamily: 'Segoe UI'
            },
            axisLabelFont: {
                color: '#D2D0CE', fontFamily: 'Segoe UI'
            },
            legendTitleFont: {
                color: '#F3F2F1', fontFamily: 'Segoe UI'
            },
            legendLabelFont: {
                color: '#D2D0CE', fontFamily: 'Segoe UI'
            },
            tooltipLabelFont: {
                color: '#F3F2F1', fontFamily: 'Segoe UI'
            },
            axisTitleFont: {
                color: '#F3F2F2', fontFamily: 'Segoe UI'
            },
            datalabelFont: {
                color: '#000000', fontFamily: 'Segoe UI'
            },
            chartSubTitleFont: {
                color: '#F3F2F1', fontFamily: 'Segoe UI'
            }
        };
        break;
    case 'Material3':
        style = {
            axisLabel: '#222222',
            axisTitle: '#1C1B1F',
            majorGridLine: '#DDDDDD',
            minorGridLine: '#DDDDDD',
            majorTickLine: '#DDDDDD',
            minorTickLine: '#DDDDDD',
            chartTitle: '#1C1B1F',
            legendLabel: '#49454E',
            background: 'transparent',
            tooltipFill: '#313033',
            tooltipBoldLabel: '#F4EFF4',
            tooltipLightLabel: '#F4EFF4',
            tooltipHeaderLine: '#F4EFF4',
            tabColor: '#49454E',
            backWallColor: '#F9F9F9',
            leftWallColor: '#EBEBEB',
            chartTitleFont: {
                color: '#1C1B1F', fontFamily: 'Roboto'
            },
            axisLabelFont: {
                color: '#222222', fontFamily: 'Roboto'
            },
            legendTitleFont: {
                color: '#1C1B1F', fontFamily: 'Roboto'
            },
            legendLabelFont: {
                color: '#49454E', fontFamily: 'Roboto'
            },
            tooltipLabelFont: {
                color: '#F4EFF4', fontFamily: 'Roboto'
            },
            axisTitleFont: {
                color: '#1C1B1F', fontFamily: 'Roboto'
            },
            datalabelFont: {
                color: '#FFFFFF', fontFamily: 'Roboto'
            },
            chartSubTitleFont: {
                color: '#49454E', fontFamily: 'Roboto'
            }
        };
        break;
    case 'Material3Dark':
        style = {
            axisLabel: '#CAC4D0',
            axisTitle: '#CAC4D0',
            majorGridLine: '#444746',
            minorGridLine: '#444746',
            majorTickLine: '#444746',
            minorTickLine: '#444746',
            chartTitle: '#E6E1E5',
            legendLabel: '#CAC4D0',
            background: 'transparent',
            tooltipFill: '#E6E1E5',
            tooltipBoldLabel: '#313033',
            tooltipLightLabel: '#313033',
            tooltipHeaderLine: '#313033',
            tabColor: '#CAC4D0',
            backWallColor: '#222222',
            leftWallColor: '#272727',
            chartTitleFont: {
                color: '#E6E1E5', fontFamily: 'Roboto'
            },
            axisLabelFont: {
                color: '#CAC4D0', fontFamily: 'Roboto'
            },
            legendTitleFont: {
                color: '#E6E1E5', fontFamily: 'Roboto'
            },
            legendLabelFont: {
                color: '#CAC4D0', fontFamily: 'Roboto'
            },
            tooltipLabelFont: {
                color: '#313033', fontFamily: 'Roboto'
            },
            axisTitleFont: {
                color: '#E6E1E5', fontFamily: 'Roboto'
            },
            datalabelFont: {
                color: '#000000', fontFamily: 'Roboto'
            },
            chartSubTitleFont: {
                color: '#CAC4D0', fontFamily: 'Roboto'
            }
        };
        break;
    default:
        style = {
            axisLabel: '#222222',
            axisTitle: '#424242',
            majorGridLine: '#dbdbdb',
            minorGridLine: '#eaeaea',
            majorTickLine: '#b5b5b5',
            minorTickLine: '#d6d6d6',
            chartTitle: '#424242',
            legendLabel: '#353535',
            background: 'transparent',
            tooltipFill: '#000816',
            tooltipBoldLabel: '#ffffff',
            tooltipLightLabel: '#dbdbdb',
            tooltipHeaderLine: '#ffffff',
            backWallColor: '#F9F9F9',
            leftWallColor: '#EBEBEB',
            tabColor: theme === 'Material' ? '#ff4081' : theme === 'Fabric' ? '#0078D6' : '#317AB9',
            chartTitleFont: {
                color: theme === 'Material' ? 'rgba(0, 0, 0, 1)' : theme === 'Fabric' ? '#333333' : '#212529', fontFamily: theme === 'Material' ? 'Roboto' : theme === 'Fabric' ? 'Segoe UI' : 'Helvetica'
            },
            axisLabelFont: {
                color: '#222222', fontFamily: theme === 'Material' ? 'Roboto' : theme === 'Fabric' ? 'Segoe UI' : 'Helvetica'
            },
            legendTitleFont: {
                color: theme === 'Material' ? 'rgba(0, 0, 0, 1)' : theme === 'Fabric' ? '#333333' : '#212529', fontFamily: theme === 'Material' ? 'Roboto' : theme === 'Fabric' ? 'Segoe UI' : 'Helvetica'
            },
            legendLabelFont: {
                color: theme === 'Material' ? 'rgba(97, 97, 97, 1)' : theme === 'Fabric' ? '#666666' : '#666666', fontFamily: theme === 'Material' ? 'Roboto' : theme === 'Fabric' ? 'Segoe UI' : 'Helvetica'
            },
            tooltipLabelFont: {
                color: theme === 'Material' ? 'rgba(249, 250, 251, 1)' : theme === 'Fabric' ? '#333333' : '#F9FAFB', fontFamily: theme === 'Material' ? 'Roboto' : theme === 'Fabric' ? 'Segoe UI' : 'Helvetica'
            },
            axisTitleFont: {
                color: theme === 'Material' ? 'rgba(0, 0, 0, 1)' : theme === 'Fabric' ? '#333333' : '#212529', fontFamily: theme === 'Material' ? 'Roboto' : theme === 'Fabric' ? 'Segoe UI' : 'Helvetica'
            },
            datalabelFont: {
                color: '#FFFFFF', fontFamily: theme === 'Material' ? 'Roboto' : theme === 'Fabric' ? 'Segoe UI' : 'Helvetica'
            },
            chartSubTitleFont: {
                color: theme === 'Material' ? 'rgba(0, 0, 0, 1)' : theme === 'Fabric' ? '#333333' : '#212529', fontFamily: theme === 'Material' ? 'Roboto' : theme === 'Fabric' ? 'Segoe UI' : 'Helvetica'
            }
        };
        break;
    }
    return style;
}

/**
 * Gets the color palette for 3D chart series based on the specified theme.
 *
 * @param {ChartTheme} theme - The theme to determine the color palette for.
 * @returns {string[]} An array of color values representing the 3D series color palette.
 * @private
 */
export function get3DSeriesColor(theme: ChartTheme): string[] {
    let palette: string[];
    switch (theme) {
    case 'Fabric':
        palette = ['#06DCFF', '#EF36BB', '#ffc000', '#70ad47', '#5b9bd5',
            '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300'];
        break;
    case 'Bootstrap4':
        palette = ['#9B43F4', '#F7523F', '#55a5c2', '#7ddf1e', '#ff6ea6',
            '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
        break;
    case 'Bootstrap':
        palette = ['#6355C7', '#FFB400', '#55a5c2', '#7ddf1e', '#ff6ea6',
            '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
        break;
    case 'HighContrastLight':
    case 'HighContrast':
        palette = ['#41E4FF', '#FF5B5B', '#DFE6B6', '#C6E773', '#BA98FF',
            '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];
        break;
    case 'MaterialDark':
        palette = ['#55C75A', '#FFB400', '#C57AFF', '#61EAA9', '#EBBB3E',
            '#F45C5C', '#8A77FF', '#63C7FF', '#FF84B0', '#F7C928'];
        break;
    case 'FabricDark':
        palette = ['#41E4FF', '#FD7400', '#ffc000', '#70ad47', '#5b9bd5',
            '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300'];
        break;
    case 'BootstrapDark':
        palette = ['#BC43F4', '#FFC539', '#55a5c2', '#7ddf1e', '#ff6ea6',
            '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
        break;
    case 'Tailwind':
        palette = ['#5C43F4', '#FFB400', '#334155', '#14B8A6', '#8B5CF6',
            '#0369A1', '#F97316', '#9333EA', '#F59E0B', '#15803D'];
        break;
    case 'TailwindDark':
        palette = ['#00C2FF', '#FD7400', '#F87171', '#4ADE80', '#E879F9',
            '#FCD34D', '#F97316', '#2DD4BF', '#F472B6', '#10B981'];
        break;
    case 'Bootstrap5':
        palette = ['#6355C7', '#9B43F4', '#2196F5', '#F7523F', '#963C70',
            '#4BE0BC', '#FD7400', '#C9E422', '#DE3D8A', '#162F88'];
        break;
    case 'Bootstrap5Dark':
        palette = ['#A598FF', '#FF7E6F', '#6CBDFF', '#FF7F71', '#FF6DB3',
            '#63F5D2', '#FCAA65', '#ECFF77', '#EF8EFF', '#5F82FD'];
        break;
    case 'FluentDark':
        palette = ['#41E4FF', '#FF7E6F', '#EDBB40', '#AF4BCF', '#FF7266',
            '#1BD565', '#EE993D', '#5887FF', '#EC548D', '#7D39C0'];
        break;
    case 'Fluent':
        palette = ['#2196F5', '#FC7400', '#EDBB40', '#AF4BCF', '#FF7266',
            '#1BD565', '#EE993D', '#5887FF', '#EC548D', '#7D39C0'];
        break;
    case 'Material3':
        palette = ['#6A56FF', '#00DBFF', '#FFB400', '#F7523F', '#963C70',
            '#FD7400', '#4BE0BC', '#2196F5', '#DE3D8A', '#162F88'];
        break;
    case 'Material3Dark':
        palette = ['#00C2FF', '#FFB400', '#FFF500', '#17EA58', '#38FFE7',
            '#FF9E45', '#B3F32F', '#B93CE4', '#FC5664', '#9B55FF'];
        break;
    default:
        palette = ['#6355C7', '#00AEE0', '#357cd2', '#e56590', '#f8b883',
            '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
        break;
    }
    return palette;
}