import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
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
      main: "#2FAA57",
    },
    secondary: {
      main: "#072F41",
    },
    background: {
      default: "#fff",
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