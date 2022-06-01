import { ThemeProvider, createTheme } from '@mui/material/styles';
import Tools from "./components/Tools";


//Theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4d51c5',
    },
    secondary: {
      main: '#67bcc1',
    }
  },
  text: {
    primary: {
      main: '#0f0f17',
    }
  },
  typography: {
    fontFamily: 'Archivo',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Tools/>
    </ThemeProvider>
  );
}

export default App;
