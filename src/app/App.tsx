import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { theme } from './theme';
import HomePage from './components/HomePage';
import { globalStyles } from './global-styles';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
