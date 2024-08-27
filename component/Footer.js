'use client';

import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 4,
        mt: 4,
        borderTop: '4px solid #FFD700', // Gold accent for a touch of elegance
        boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Goldfern Limited
            </Typography>
            <Typography variant="body2">
              Leading the way in real estate development with high-end properties at affordable prices. Explore our diverse offerings tailored to meet your needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Goldfern Limited. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

