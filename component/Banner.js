// Banner.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import view from '../assets/images/view.jpg';

const Banner = ({ purpose, title1, title2, desc1, desc2, desc3 }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '60vh', 
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '"."',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${view.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Creates parallax effect
          zIndex: -1,
          opacity: 0.7, 
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
  <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
    {title1}
  </Typography>
  <Typography variant="h4" sx={{ mb: 3 }}>
    {title2}
  </Typography>
</Box>

    </Box>
  );
};

export default Banner;
