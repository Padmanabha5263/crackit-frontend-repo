// create signup page using mui library
import { Avatar, Box, Button, Container, Link, Paper, TextField, Typography } from '@mui/material';
import { PersonAddOutlined } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const SignUp = () => {
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
          <Box component="form" sx={{ mt: 2 }}>
            <TextField id="name" label="Full Name" variant="outlined" fullWidth autoFocus sx={{ mt: 1 }} />
            <TextField id="email" label="Email Address" variant="outlined" fullWidth sx={{ mt: 2 }} />
            <TextField id="password" label="Password" variant="outlined" type="password" fullWidth sx={{ mt: 2 }} />
            <TextField id="confirmPassword" label="Confirm Password" variant="outlined" type="password" fullWidth sx={{ mt: 2 }} />
            <Button type="button" fullWidth variant="contained" color="primary" sx={{ mt: 3, py: 1.2 }}>
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