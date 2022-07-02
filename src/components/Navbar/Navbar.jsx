import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Box,
  Divider,
  Grid,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Button,
  Typography,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/kingba_small.png';

import Dropdown from './Dropdown';

const drawerWidth = '100%';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        background: '#000000',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography mt={2} component='a' variant='h6' sx={{ my: 2 }}>
        <Image src={logo} alt='Site Logo' layout='intrinsic' />
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton
            sx={{
              textAlign: 'center',
              color: '#F5F5F7',
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'DM Sans, sans serif;',
            }}
          >
            <Link href='/'>
              <Typography
                color='#f5f5f7'
                variant='h6'
                fontWeight='400'
                fontSize='1.1rem'
                fontFamily='DM Sans, sans serif;'
                component='a'
                sx={{
                  '&:hover': {
                    color: '#2997ff',
                  },
                  cursor: 'pointer',
                }}
              >
                Home
              </Typography>
            </Link>
            <Link href='/projects/'>
              <Typography
                color='#f5f5f7'
                variant='h6'
                fontWeight='400'
                fontSize='1.1rem'
                fontFamily='DM Sans, sans serif;'
                component='a'
                sx={{
                  '&:hover': {
                    color: '#2997ff',
                  },
                  cursor: 'pointer',
                }}
              >
                Projects
              </Typography>
            </Link>
            <Typography
              mt={2}
              color='#f5f5f7'
              variant='h6'
              fontWeight='400'
              fontSize='1.1rem'
              fontFamily='DM Sans, sans serif;'
              component='a'
              sx={{
                '&:hover': {
                  color: '#2997ff',
                },
                cursor: 'pointer',
              }}
              href='/src/sections/Solutions.jsx'
            >
              Services
            </Typography>
            <Typography
              mt={2}
              color='#f5f5f7'
              variant='h6'
              fontWeight='400'
              fontSize='1.1rem'
              fontFamily='DM Sans, sans serif;'
              component='a'
              sx={{
                '&:hover': {
                  color: '#2997ff',
                },
                cursor: 'pointer',
              }}
            >
              Career
            </Typography>
            <Typography
              mt={2}
              color='#f5f5f7'
              variant='h6'
              fontWeight='400'
              fontSize='1.1rem'
              fontFamily='DM Sans, sans serif;'
              component='a'
              sx={{
                '&:hover': {
                  color: '#2997ff',
                },
                cursor: 'pointer',
              }}
            >
              Blog
            </Typography>
            <Typography
              mt={2}
              color='#f5f5f7'
              variant='h6'
              fontWeight='400'
              fontSize='1.1rem'
              fontFamily='DM Sans, sans serif;'
              component='a'
              sx={{
                '&:hover': {
                  color: '#2997ff',
                },
                cursor: 'pointer',
              }}
            >
              About Us
            </Typography>
            <Typography
              mt={2}
              color='#f5f5f7'
              variant='h6'
              fontWeight='400'
              fontSize='1.1rem'
              fontFamily='DM Sans, sans serif;'
              component='a'
              sx={{
                '&:hover': {
                  color: '#2997ff',
                },
                cursor: 'pointer',
              }}
            >
              Contact Us
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Container maxWidth>
      <Grid
        position='sticky'
        sx={{ display: 'flex', width: '100%', maxWidth: '1080px' }}
        zIndex={10}
      >
        <AppBar
          width='100%'
          component='nav'
          sx={{ background: '#000000', opacity: '0.9', maxHeight: '44px' }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              flexWrap: 'wrap',
            }}
          >
            <IconButton
              color='secondary'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, marginTop: '-.8rem' }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              textAlign='center'
              variant='h6'
              sx={{
                flex: '2',
                display: { sm: 'block', md: 'none' },
                marginLeft: '-9px',
              }}
            >
              <Link href='/'>
                <Image
                  height={25}
                  width={120}
                  src={logo}
                  alt='Site Logo'
                  layout='intrinsic'
                />
              </Link>
            </Typography>

            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                mr={2}
                variant='h6'
                component='a'
                href='/'
                sx={{
                  display: { xs: 'none', md: 'block' },
                  cursor: 'pointer',
                  marginTop: '-.8rem ',
                  padding: { md: '0 .5rem', xl: '0 1.5rem' },
                }}
              >
                <Link href='/'>
                  <Image
                    height={25}
                    width={120}
                    src={logo}
                    alt='Site Logo'
                    layout='intrinsic'
                  />
                </Link>
              </Typography>
              <Box
                sx={{
                  display: { xs: 'none', md: 'block', marginTop: '-1.3rem' },
                }}
              >
                <Link href='/'>
                  <Button
                    sx={{
                      fontWeight: '300',
                      color: '#f5f5f7',
                      fontSize: '.9rem',
                      textTransform: 'capitalize',
                      padding: { md: '0 1rem', xl: '0 2.5rem' },
                      fontFamily: 'DM Sans, sans-serif;',
                      '&:hover': {
                        color: '#2297FF',
                      },
                    }}
                  >
                    Home
                  </Button>
                </Link>
                <Link href='/projects/'>
                  <Button
                    sx={{
                      fontWeight: '300',
                      color: '#f5f5f7',
                      fontSize: '.9rem',

                      textTransform: 'capitalize',
                      padding: { md: '0 1rem', xl: '0 2.5rem' },
                      fontFamily: 'DM Sans, sans-serif;',
                      '&:hover': {
                        color: '#2297FF',
                      },
                    }}
                    href='/src/sections/Hero.jsx'
                  >
                    Projects
                  </Button>
                </Link>
                <Button
                  component='div'
                  sx={{
                    fontWeight: '300',
                    color: '#f5f5f7',
                    fontSize: '.9rem',

                    textTransform: 'capitalize',
                    padding: { md: '0 .5rem', xl: '0 1.5rem' },
                    fontFamily: 'DM Sans, sans-serif;',
                  }}
                >
                  <Dropdown />
                </Button>

                <Button
                  sx={{
                    fontWeight: '300',
                    color: '#f5f5f7',
                    fontSize: '.9rem',

                    textTransform: 'capitalize',
                    padding: { md: '0 1rem', xl: '0 2.5rem' },
                    fontFamily: 'DM Sans, sans-serif;',
                    '&:hover': {
                      color: '#2297FF',
                    },
                  }}
                >
                  Career
                </Button>
                <Button
                  sx={{
                    fontWeight: '300',
                    color: '#f5f5f7',
                    fontSize: '.9rem',

                    textTransform: 'capitalize',
                    padding: { md: '0 1rem', xl: '0 2.5rem' },
                    fontFamily: 'DM Sans, sans-serif;',
                    '&:hover': {
                      color: '#2297FF',
                    },
                  }}
                >
                  Blog
                </Button>
                <Button
                  sx={{
                    fontWeight: '300',
                    color: '#f5f5f7',
                    fontSize: '.9rem',
                    textTransform: 'capitalize',
                    padding: { md: '0 1rem', xl: '0 2.5rem' },
                    fontFamily: 'DM Sans, sans-serif;',
                    '&:hover': {
                      color: '#2297FF',
                    },
                  }}
                >
                  About Us
                </Button>
                <Button
                  sx={{
                    fontWeight: '500',
                    color: 'secondary',
                    fontSize: '.9rem',
                    textTransform: 'capitalize',
                    marginLeft: '1.8rem',
                    padding: { md: '0 1rem', xl: '0 2.5rem' },
                    fontFamily: 'DM Sans, sans-serif;',
                    border: '1px solid #2997FF',
                    color: '#2997FF',
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            anchor='bottom'
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { dm: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Grid>
    </Container>
  );
};

export default Navbar;
