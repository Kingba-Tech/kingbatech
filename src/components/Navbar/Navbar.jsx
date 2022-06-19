import React from 'react';
import {
  Button,
  Menu,
  MenuItem,
  AppBar,
  Box,
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Fade,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Link from 'next/link';
import logo from '../../assets/main_logo.png';
import Image from 'next/image';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position='sticky'
      sx={{ backgroundColor: '#000000', opacity: '0.9' }}
    >
      <Container maxWidth='xl'>
        <Toolbar sx={{ minWidth: { xs: 250, md: '100%' } }} disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image src={logo} alt='site_logo' layout='intrinsic' />
          </Typography>

          <Box
            py={1}
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='primary'
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              // anchorOrigin={{
              //   vertical: 'bottom',
              //   horizontal: 'left',
              // }}
              keepMounted
              // transformOrigin={{
              //   vertical: 'top',
              //   horizontal: 'left',
              // }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                width: {xs: 250, md: '100%'}
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>Home</Typography>
              </MenuItem>

              <Typography
                onClick={handleClick}
                onMouseEnter={handleClick}
                onMouseLeave={handleClick}
                textAlign='center'
              >
                Services
              </Typography>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>Projects</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>Blog</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>Career</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>About</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image
              src={logo}
              alt='site_logo'
              layout='intrinsic'
              heigh={30}
              width={200}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              margin: '0 2rem',
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textTransform: 'capitalize',
                fontSize: '1rem',
                padding: '0 1rem',
              }}
            >
              Home
            </Button>
            <Button
              onMouseOver={handleClick}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textTransform: 'capitalize',
                fontSize: '1rem',
                padding: '0 1rem',
              }}
            >
              Services
            </Button>
            <Menu
              id='fade-menu'
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '15',
              }}
            >
              <MenuItem onClick={handleClose}>Web Development</MenuItem>
              <MenuItem onClick={handleClose}>E-Commerce Solution</MenuItem>
              <MenuItem onClick={handleClose}>Digital Marketing</MenuItem>
              <MenuItem onClick={handleClose}>Design & Editing</MenuItem>
            </Menu>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textTransform: 'capitalize',
                fontSize: '1rem',
                padding: '0 1rem',
              }}
            >
              Projects
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textTransform: 'capitalize',
                fontSize: '1rem',
                padding: '0 1rem',
              }}
            >
              Blog
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textTransform: 'capitalize',
                fontSize: '1rem',
                padding: '0 1rem',
              }}
            >
              Career
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textTransform: 'capitalize',
                fontSize: '1rem',
                padding: '0 1rem',
              }}
            >
              About us
            </Button>
          </Box>
          <Button
            fontSize='1rem'
            variant='outlined'
            sx={{ textTransform: 'capitalize', padding: '0.5rem' }}
          >
            Contact us
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
