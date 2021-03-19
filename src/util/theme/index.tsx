import { createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';

import PaperConfig from './paper-config';
import ButtonConfig from './button-config';

const ThemeConfig = createMuiTheme({
  // 改变 material-ui 主色
  palette: {
    primary: {
      light: pink.A200,
      main: pink.A400,
      dark: pink.A700,
    },
    secondary: {
      light: blue.A200,
      main: blue.A400,
      dark: blue.A700,
    },
  },

  // 改变全局 material-ui 字体
  typography: {
    fontFamily: [
      'Open Sans',
      'Noto Sans SC',
      'sans-serif',
      'system-ui',
    ].join(','),
  },

  // 覆盖组件样式
  overrides: {
    ...ButtonConfig,
    ...PaperConfig,
  },
});

export default ThemeConfig;
