// login page using mui library
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Link, Paper, TextField, Typography } from '@mui/material';
import {LockOutlined} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
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

          <Box component="form" sx={{ mt: 2 }}>
            <TextField id="email" label="Email Address" variant="outlined" fullWidth autoFocus sx={{ mt: 1 }} />
            <TextField id="password" label="Password" variant="outlined" type="password" fullWidth sx={{ mt: 2 }} />
            <FormControlLabel control={<Checkbox />} label="Remember me" sx={{ mt: 1 }} />
            <Button type="button" fullWidth variant="contained" color="primary" sx={{ mt: 3, py: 1.2 }}>
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