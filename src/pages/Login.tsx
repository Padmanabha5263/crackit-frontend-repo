// login page using mui library
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import {LockOutlined} from '@mui/icons-material';

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{marginTop:8, padding:2}}>
       <Avatar sx={{mx:"auto",bgcolor:"secondary.main",textAlign:"center", mb:1}}>
          <LockOutlined />
       </Avatar>
       <Typography variant="h5" align="center" gutterBottom>
          Sign In
       </Typography>
       {/* Add your login form here */}
       <Box component="form" sx={{ mt: 1 }}>
          <TextField id="email" label="Enter Email Address" variant="outlined" fullWidth autoFocus sx={{mt:1}}/>
          <TextField id="password" label="Enter Password" variant="outlined" type="password" fullWidth sx={{mt:2}}/>
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Button type="button" fullWidth variant="contained" color="primary" sx={{mt:3}}>
            Sign In
          </Button>
          <Grid container sx={{mt:2}}>
            <Grid size={{ xs: 5 }}>
              <Typography variant="body2">
                <Link href="#">Forgot password?</Link>
                  
                </Typography>
            </Grid>
            <Grid size={{ xs: 7 }}>
              <Typography variant="body2">
                <Link href="#">Don't have an account? Sign Up</Link>
              </Typography>
            </Grid>
          </Grid>
       </Box>
      </Paper>
    </Container>
  );
};

export default Login;