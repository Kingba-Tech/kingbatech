import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Grid,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Typography,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
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
        opacity: '0.9',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography component='a' variant='h6' sx={{ my: 2 }}>
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
              textTransform: 'capitalize',
            }}
          >
            <ListItemText sx={{ padding: '8px 0' }} primary='Home' />
            <ListItemText sx={{ padding: '8px 0' }} primary='Services' />
            <ListItemText sx={{ padding: '8px 0' }} primary='Projects' />
            <ListItemText sx={{ padding: '8px 0' }} primary='Career' />
            <ListItemText sx={{ padding: '8px 0' }} primary='Blog' />
            <ListItemText sx={{ padding: '8px 0' }} primary='About Us' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box position='sticky' sx={{ display: 'flex' }} zIndex={10}>
      <AppBar component='nav' sx={{ background: '#000000', opacity: '0.9' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            color='secondary'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            textAlign='center'
            variant='h6'
            component='a'
            sx={{
              flex: '2',
              display: { xs: 'block', sm: 'none' },
              marginLeft: '-9px',
            }}
          >
            <Image src={logo} alt='Site Logo' layout='intrinsic' />
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
              sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
            >
              <Image src={logo} alt='Site Logo' layout='intrinsic' />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button
                sx={{
                  fontWeight: '400',
                  color: 'secondary',
                  fontSize: '1rem',
                  padding: '0 1rem',
                }}
              >
                Home
              </Button>
              <Button
                component='div'
                sx={{
                  fontWeight: '400',
                  color: 'secondary',
                  fontSize: '1rem',
                  padding: '0 1rem',
                }}
              >
                <Dropdown />
              </Button>
              <Button
                sx={{
                  fontWeight: '400',
                  color: 'secondary',
                  fontSize: '1rem',
                  padding: '0 1rem',
                }}
              >
                Projects
              </Button>
              <Button
                sx={{
                  fontWeight: '400',
                  color: 'secondary',
                  fontSize: '1rem',
                  padding: '0 1rem',
                }}
              >
                Career
              </Button>
              <Button
                sx={{
                  fontWeight: '400',
                  color: 'secondary',
                  fontSize: '1rem',
                  padding: '0 1rem',
                }}
              >
                Blog
              </Button>
              <Button
                sx={{
                  fontWeight: '400',
                  color: 'secondary',
                  fontSize: '1rem',
                  padding: '0 1rem',
                }}
              >
                About Us
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
