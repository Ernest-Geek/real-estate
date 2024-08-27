import React from 'react';
import { Box, Typography } from '@mui/material';
import view from '../assets/images/view.jpg';

const Banner = ({ title1, title2 }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: '40vh', sm: '50vh', md: '60vh' }, // Adjust height based on screen size
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${view.src})`,
          backgroundSize: 'contain', // Adjust background size to prevent zooming
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          opacity: 0.9, 
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
          {title1}
        </Typography>
        <Typography variant="h4" sx={{ mb: 3, fontSize: { xs: '1rem', md: '2rem' } }}>
          {title2}
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
