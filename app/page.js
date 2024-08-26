'use client';

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Navbar from '../component/Navbar'; // Default import
import Property from '../component/Property'; // Default import
import Footer from '../component/Footer'; // Default import
import Banner from '../component/Banner'; // Default import
import About from '../component/About'; // Default import
import apart2 from '../assets/images/apart2.jpeg'; // Imported asset
import apart1 from '../assets/images/apart1.jpeg'; // Imported asset
import apart3 from '../assets/images/apart3.jpeg'; // Imported asset
import apart4 from '../assets/images/apart4.jpeg'; // Imported asset
import apart5 from '../assets/images/apart5.jpeg'; // Imported asset
import apart6 from '../assets/images/apart6.jpeg'; // Imported asset
import view from '../assets/images/view.jpg'; // Imported asset

const Home = () => {
  const propertiesForRent = [
    { id: 1, imageUrl: apart1, price: '100,000', title: 'Exclusive 4-Bedroom Apartment | East Legon', location: 'East Legon, Accra, Ghana', externalID: 1 },
    { id: 2, imageUrl: apart2, price: '500,000', title: 'Exquisite 3-Bedroom Apartment | Upper Cantonments', location: 'Upper Cantonments, Accra, Ghana', externalID: 2 },
    { id: 3, imageUrl: apart6, price: '105,000', title: 'Classic 2-Bedroom Residence | Upper Cantonments', location: 'Greda Estate, Accra, Ghana', externalID: 3 },
  ];
  
  const propertiesForSale = [
    { id: 4, imageUrl: apart3, price: '200,000', title: 'Ideal Small Plot | Corner | AirBnB Investment', location: 'Teshie Greda Estate, Accra, Ghana', externalID: 4 },
    { id: 5, imageUrl: apart4, price: '600,000', title: 'Spacious Corner Plot | New Villa Opportunity', location: 'Airport Residential Area, Accra, Ghana', externalID: 5 },
    { id: 6, imageUrl: apart5, price: '700,000', title: 'Elegant 1-Bedroom Duplex | High Ceilings', location: 'Cantonments, Accra, Ghana', externalID: 6 },
  ];

  return (
    <Box 
      sx={{ 
        backgroundImage: `url(${view.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', 
        color: '#fff',
      }}
    >
      <Navbar />

      {/* Home Section */}
      <Box id="home">
        <Banner
          title1='Exclusive Location'
          title2='Premium Investment at Fertilizer link Teshie Greda Estate'
          linkName='/app/rent.js'
          imageUrl={view.src}
        />
      </Box>

      {/* Properties for Rent Section */}
      <Box id="properties" sx={{ my: 4 }}>
        <Typography variant="h4" sx={{ my: 4, textAlign: 'center', color: '#fff' }}>
          Properties for Rent
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {propertiesForRent.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <Paper elevation={3} sx={{ padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Property property={property} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Properties for Sale Section */}
      <Box id="buy" sx={{ my: 4 }}>
        <Banner
          purpose='BUY A HOME'
          title1='Find, Buy & Own Your'
          title2='Dream Home'
          linkName='/app/buy.js'
          imageUrl={apart6}
        />
        
        <Typography variant="h4" sx={{ my: 4, textAlign: 'center', color: '#fff' }}>
          Properties for Sale
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {propertiesForSale.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <Paper elevation={3} sx={{ padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Property property={property} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* About Section */}
      <Box id="about">
        <About />
      </Box>

      {/* Contact Section */}
      <Box id="contact">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;

