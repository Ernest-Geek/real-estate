'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Stack, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Property = ({ property: { imageUrl, price, title, location, externalID } }) => (
  <Link href={`/property/${externalID}`} passHref>
    <Box 
      sx={{ 
        maxWidth: 400, 
        borderRadius: '16px', 
        overflow: 'hidden', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
        },
        cursor: 'pointer',
        position: 'relative',
        textDecoration: 'none' // Remove underline from the link
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Image 
          src={imageUrl} 
          width={400} 
          height={260} 
          alt={title} 
          style={{ 
            borderTopLeftRadius: '16px', 
            borderTopRightRadius: '16px', 
            objectFit: 'cover' 
          }} 
        />
        <Chip 
          label={`GHS ${price}`} 
          color="secondary" 
          sx={{ 
            position: 'absolute', 
            top: 16, 
            left: 16, 
            backgroundColor: 'rgba(0,0,0,0.7)', 
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '8px 12px',
            borderRadius: '8px'
          }} 
        />
      </Box>
      <Box sx={{ padding: '16px' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
          {title}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 1 }}>
          <LocationOnIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </Stack>
      </Box>
    </Box>
  </Link>
);

export default Property;


