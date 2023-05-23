import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#026fe3',
      light: '#77cbff',
      dark: '#024a97',
    },
    secondary: {
      main: '#f2cd68',
      light: '#f2cd68',
      dark: '#f2cd68',
    },
    grey: {
      100: '#f3f5f8',
      200: '#e6e7e8',
      300: '#d2d3d4',
      400: '#bdbebf',
      500: '#acadad',
      600: '#979999',
      700: '#737373',
      800: '#2b2b2b',
    }
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          fontSize: '1rem',
          boxShadow: 'unset',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '100px',
        }
      }
    },
    MuiButton: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '3.5rem',
          fontWeight: 500,
        },
        h2: {
          fontSize: '2.5rem',
          fontWeight: 700,
        },
        h3: {
          fontSize: '2rem',
        },
        h4: {
          fontSize: '1.5rem',
          fontWeight: 300,
        },
        h5: {
          fontSize: '1rem',
          fontWeight: 500,
        },
        h6: {
          fontSize: '1rem',
          fontWeight: 500,
        },
        body1: {

        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root:{
          "&:last-child": {
            padding: '8px'
          }
        }
      }
    },
  },
});

export default theme
