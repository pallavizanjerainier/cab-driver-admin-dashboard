import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
  colors: {
    gradients: {
      blue1: '',
      blue2: '',
      blue3: '',
      blue4: '',
      blue5: '',
      orange1: '',
      orange2: '',
      orange3: '',
      purple1: '',
      purple3: '',
      pink1: '',
      pink2: '',
      green1: '',
      green2: '',
      black1: '',
      black2: ''
    },
    shadows: {
      success: '',
      error: '',
      primary: '',
      warning: '',
      info: ''
    },
    alpha: {
      white: {
        5: '',
        10: '',
        30: '',
        50: '',
        70: '',
        100: ''
      },
      trueWhite: {
        5: '',
        10: '',
        30: '',
        50: '',
        70: '',
        100: ''
      },
      black: {
        5: '',
        10: '',
        30: '',
        50: '',
        70: '',
        100: ''
      }
    },
    secondary: {
      lighter: '',
      light: '',
      main: '',
      dark: ''
    },
    primary: {
      lighter: '',
      light: '',
      main: '',
      dark: ''
    },
    success: {
      lighter: '',
      light: '',
      main: '',
      dark: ''
    },
    warning: {
      lighter: '',
      light: '',
      main: '',
      dark: ''
    },
    error: {
      lighter: '',
      light: '',
      main: '',
      dark: ''
    },
    info: {
      lighter: '',
      light: '',
      main: '',
      dark: ''
    }
  },
  general: {
    reactFrameworkColor: undefined,
    borderRadiusSm: '',
    borderRadius: '',
    borderRadiusLg: '',
    borderRadiusXl: ''
  },
  sidebar: {
    background: undefined,
    boxShadow: undefined,
    width: '',
    textColor: undefined,
    dividerBg: undefined,
    menuItemColor: undefined,
    menuItemColorActive: undefined,
    menuItemBg: undefined,
    menuItemBgActive: undefined,
    menuItemIconColor: undefined,
    menuItemIconColorActive: undefined,
    menuItemHeadingColor: undefined
  },
  header: {
    height: '',
    background: undefined,
    boxShadow: undefined,
    textColor: undefined
  }
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Roboto Condensed', sans-serif",
  textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;
