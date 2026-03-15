
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import { darkTheme } from './utils/darkTheme';
import { lightTheme } from './utils/lightTheme';
import React from 'react';


function App() {

  const [darkMode] = React.useState(false)
  const theme = darkMode? darkTheme: lightTheme;

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
