import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'times',
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          fontFamily: "Material Icons Outlined",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#aa1935",
    },
    secondary: {
      main: "#23232f",
    },
    background: {
      default: "#f6f6f6",
    }
  },
  breakpoints: {
    values: {
      xs: 281,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default defaultTheme