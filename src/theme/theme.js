import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#f5f5f7',
    },
    navBg: {
      main: '#000000',
    },
    bgColor: {
      main: 'linear-gradient(rgb(2, 13, 31) 16%, black 35%)',
    },
  },
});

export default theme;
