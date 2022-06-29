import { createTheme } from '@mui/material/styles';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#004581',
    },
    secondary: {
      main: '#F5F5F7',
    },
    navBg: {
      main: '#000000',
    },
    textColor: {
      main: '#141414',
    },
    btnColor: {
      main: '#004581',
    },
    bgColor: {
      main: 'linear-gradient(rgb(2, 13, 31) 16%, black 35%)',
    },
  },
});

export default theme;
