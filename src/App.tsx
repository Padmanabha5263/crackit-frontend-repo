
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f4f7ff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Box
          sx={{
            minHeight: 'calc(100vh - 64px)',
            background: 'linear-gradient(120deg, #e3f2fd 0%, #f3e5f5 50%, #f4f7ff 100%)'
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/signin" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
