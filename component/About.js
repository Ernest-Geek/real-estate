'use client';

import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import { Phone, Email, LocationOn } from '@mui/icons-material';

// Styled Box for background image
const BackgroundBox = styled(Box)({
  padding: '60px 20px',
  textAlign: 'center',
  position: 'relative',
  color: '#fff',
});

const Overlay = styled(Box)({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '20px',
  borderRadius: '8px',
});

const ContactBox = styled(Box)({
  marginTop: '40px',
});

const About = () => {
  return (
    <BackgroundBox>
      <Overlay>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            About Goldfern Limited
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4 }}>
            A fast-growing real estate company that builds high-quality properties at affordable prices.
            Our properties are aesthetically designed and uniquely built with the utmost attention to quality.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Explore our portfolio to find your ideal property, whether you're looking to rent or buy. 
            At Goldfern Limited, we are committed to providing exceptional real estate solutions tailored to your needs.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <StarIcon sx={{ fontSize: 40, color: '#f1c40f' }} />
              <Typography variant="body2" sx={{ mt: 1 }}>
                Premium Quality
              </Typography>
            </Grid>
            <Grid item>
              <StarIcon sx={{ fontSize: 40, color: '#f1c40f' }} />
              <Typography variant="body2" sx={{ mt: 1 }}>
                Affordable Prices
              </Typography>
            </Grid>
            <Grid item>
              <StarIcon sx={{ fontSize: 40, color: '#f1c40f' }} />
              <Typography variant="body2" sx={{ mt: 1 }}>
                Unique Designs
              </Typography>
            </Grid>
          </Grid>

          {/* Contact Section */}
          <ContactBox>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
              Get to Know Us
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={6} sx={{ padding: 4, textAlign: 'center', backgroundColor: '#fff', color: '#000', borderRadius: 4, boxShadow: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Phone sx={{ fontSize: 50, color: '#0288d1', borderRadius: '50%', border: '2px solid #0288d1', padding: '10px' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Phone
                  </Typography>
                  <Typography variant="body1">
                    +233 50 811 9126
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={6} sx={{ padding: 4, textAlign: 'center', backgroundColor: '#fff', color: '#000', borderRadius: 4, boxShadow: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Email sx={{ fontSize: 50, color: '#d32f2f', borderRadius: '50%', border: '2px solid #d32f2f', padding: '10px' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Email
                  </Typography>
                  <Typography variant="body1">
                    sales@goldfern.net
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={6} sx={{ padding: 4, textAlign: 'center', backgroundColor: '#fff', color: '#000', borderRadius: 4, boxShadow: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <LocationOn sx={{ fontSize: 50, color: '#388e3c', borderRadius: '50%', border: '2px solid #388e3c', padding: '10px' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Address
                  </Typography>
                  <Typography variant="body1">
                    Fertilizer Link, Teshie Greda Estate, Accra, Ghana
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </ContactBox>
        </Container>
      </Overlay>
    </BackgroundBox>
  );
};

export default About;





