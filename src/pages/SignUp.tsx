// create signup page using mui library
import { Avatar, Box, Button, Container, Link, Paper, TextField, Typography } from '@mui/material';
import { PersonAddOutlined } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    fname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
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
    const newErrors = { fname: '', email: '', password: '', confirmPassword: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fname.trim()) {
      newErrors.fname = 'Full name is required';
    } else if (formData.fname.trim().length < 2) {
      newErrors.fname = 'Full name must be at least 2 characters';
    }

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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle signup logic here
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
            <PersonAddOutlined />
          </Avatar>
          <Typography variant="h5" align="center" gutterBottom>
            Create your account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              id="fname"
              name="fname"
              label="Full Name"
              variant="outlined"
              fullWidth
              autoFocus
              sx={{ mt: 1 }}
              value={formData.fname}
              onChange={handleChange}
              error={!!errors.fname}
              helperText={errors.fname}
            />
            <TextField
              id="email"
              name="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
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
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{ mt: 2 }}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, py: 1.2 }}>
              Sign Up
            </Button>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Link component={RouterLink} to="/signin" variant="body2" underline="hover">
                Already have an account? Sign In
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp;
  // Form validation function
