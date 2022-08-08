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
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    h1: {
      fontSize: '1.8rem',
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (min-width:576px)': {
        fontSize: '2.2rem'
      },
      '@media (min-width:768px)': {
        fontSize: '2.6rem'
      }
    },
    h2: {
      fontSize: '1.6rem',
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (min-width:768px)': {
        fontSize: '2rem'
      }
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (min-width:768px)': {
        fontSize: '1.8rem'
      }
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (min-width:768px)': {
        fontSize: '1.6rem'
      }
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (min-width:768px)': {
        fontSize: '1.2rem'
      }
    },
    h6: {
      fontSize: '0.9rem',
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (min-width:768px)': {
        fontSize: '1rem'
      }
    },
    body1: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      '@media (min-width:576px)': {
        fontSize: '0.95rem'
      },
      '@media (min-width:768px)': {
        fontSize: '1rem'
      }
    },
    body2: {
      fontSize: '0.8rem',
      lineHeight: 1.6,
      '@media (min-width:576px)': {
        fontSize: '0.85rem'
      },
      '@media (min-width:768px)': {
        fontSize: '0.9rem'
      }
    }
  }
});
