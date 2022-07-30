import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#502894',
      main: '#2C204D'
    },
    secondary: {
      main: '#FF884A'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
});
