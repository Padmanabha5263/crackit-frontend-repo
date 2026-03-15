// login page using mui library
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Link, Paper, TextField, Typography } from '@mui/material';
import {LockOutlined} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = { email: '', password: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle login logic here
      console.log('Form submitted:', formData);
      // For now, just log; in real app, call auth service
    }
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={12}
          sx={{
            p: 4,
            borderRadius: 4,
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
          }}
        >
          <Avatar sx={{ mx: 'auto', bgcolor: 'secondary.main', mb: 1 }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5" align="center" gutterBottom>
            Welcome back
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              id="email"
              name="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              autoFocus
              sx={{ mt: 1 }}
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{ mt: 2 }}
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <FormControlLabel
              control={<Checkbox name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />}
              label="Remember me"
              sx={{ mt: 1 }}
            />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, py: 1.2 }}>
              Sign In
            </Button>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Link component={RouterLink} to="#" underline="hover" variant="body2">
                Forgot password?
              </Link>
              <Link component={RouterLink} to="/signup" underline="hover" variant="body2">
                Don't have an account?
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;