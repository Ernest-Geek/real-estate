'use client';
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import logo from '../assets/images/logo.jpeg';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="static" color="primary" sx={{ mb: 4, backgroundColor: '#333', padding: '0 16px' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Image src={logo} alt="Company Logo" width={120} height={40} style={{ cursor: 'pointer', marginRight: '16px' }} />
          <Typography variant="h6" sx={{ color: '#fff', display: { xs: 'none', md: 'block' } }}>
            Goldfern Limited
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Button color="inherit" onClick={() => handleScroll('home')} sx={{ fontSize: '16px', textTransform: 'none' }}>
            Home
          </Button>
          <Button color="inherit" onClick={() => handleScroll('properties')} sx={{ fontSize: '16px', textTransform: 'none' }}>
            Properties
          </Button>
          <Button color="inherit" onClick={() => handleScroll('about')} sx={{ fontSize: '16px', textTransform: 'none' }}>
            About Us
          </Button>
          <Button color="inherit" onClick={() => handleScroll('contact')} sx={{ fontSize: '16px', textTransform: 'none' }}>
            Contact Us
          </Button>
        </Box>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenu} sx={{ display: { md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: '45px' }}
      >
        <MenuItem onClick={() => { handleScroll('home'); handleClose(); }}>
          Home
        </MenuItem>
        <MenuItem onClick={() => { handleScroll('properties'); handleClose(); }}>
          Properties
        </MenuItem>
        <MenuItem onClick={() => { handleScroll('about'); handleClose(); }}>
          About Us
        </MenuItem>
        <MenuItem onClick={() => { handleScroll('contact'); handleClose(); }}>
          Contact Us
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;



