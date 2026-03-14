import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky" sx={{ top: 0 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CrackIt
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/signin">
            Sign In
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Sign Up
          </Button>
          {/* <Button color="inherit" component={Link} to="/signup">
            Contact Us
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
</Box>
  );
};

export default NavBar;