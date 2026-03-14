// create signup page using mui library
import { Avatar, Box, Button, Container, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { PersonAddOutlined } from '@mui/icons-material';
const SignUp = () => {
  return (
    <Container maxWidth="xs">
        <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
            <Avatar sx={{ mx: "auto", bgcolor: "secondary.main", textAlign: "center", mb: 1 }}>
                <PersonAddOutlined />
            </Avatar>
            <Typography variant="h5" align="center" gutterBottom>
                Sign Up
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
                <TextField id="name" label="Full Name" variant="outlined" fullWidth autoFocus sx={{ mt: 1 }} />
                <TextField id="email" label="Email Address" variant="outlined" fullWidth sx={{ mt: 2 }} />
                <TextField id="password" label="Password" variant="outlined" type="password" fullWidth sx={{ mt: 2 }} />
                <TextField id="confirmPassword" label="Confirm Password" variant="outlined" type="password" fullWidth sx={{ mt: 2 }} />
                <Button type="button" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
                    Sign Up
                </Button>
                <Link href="/signin" variant="body2" sx={{ mt: 3 }}>
                    Already have an account? Sign In
                </Link>
            </Box>
        </Paper>
    </Container>
  );
};

export default SignUp;