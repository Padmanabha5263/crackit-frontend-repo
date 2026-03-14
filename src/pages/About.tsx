import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 , minHeight: 'calc(100vh - 64px)'}}>
      <Box textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          About CrackIt
        </Typography>
        <Typography variant="body1" paragraph>
          CrackIt is your ultimate interview preparation platform. We provide comprehensive resources,
          practice questions, and tools to help you ace your technical interviews.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're preparing for software engineering roles, data science positions, or any
          other technical field, CrackIt has everything you need to succeed.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;