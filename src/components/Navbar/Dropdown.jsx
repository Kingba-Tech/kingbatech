import * as React from 'react';
import Popover from '@mui/material/Popover';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Container, Grid, Typography, Avatar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

import CampaignIcon from '@mui/icons-material/Campaign';
import BrushIcon from '@mui/icons-material/Brush';

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        sx={{
          textTransform: 'capitalize',
          fontWeight: '300',
          color: '#f5f5f7',
          fontSize: '.9rem',
          padding: '0 1rem',

          fontFamily: 'DM Sans, sans-serif;',
          '&:hover': {
            color: '#2297FF',
          },
          '&:hover': {
            color: '#2297FF',
          },
          '&:active,&:focus': {
            color: '#2297FF',
          },
        }}
        aria-describedby={id}
        onClick={handleClick}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        Services
      </Button>
      <Popover
        sx={{ top: '10px', left: '-410px' }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Container
          sx={{
            width: 950,
            height: 450,
            background: 'linear-gradient(rgb(2, 13, 31) 16%, black 35%)',
          }}
        >
          <Grid
            width='100%'
            spacing={1}
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignContent: 'space-evenly',
              padding: '3.5rem 0',
            }}
          >
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  mr
                  variant='rounded'
                  sx={{
                    backgroundColor: '#2297ff',
                    height: '32px',
                    width: '32px',
                    borderRadius: '.5rem',
                  }}
                >
                  <CodeIcon />
                </Avatar>
                <Typography
                  ml={3}
                  color='#F5F5F7'
                  variant='h2'
                  fontWeight={{ xs: '400', md: '500' }}
                  fontSize={{ xs: '1rem', md: '1.3rem' }}
                >
                  Development
                </Typography>
              </Grid>
              <Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '1rem',
                    marginLeft: '3.5rem',
                  }}
                >
                  <Typography
                    color='#F5F5F7'
                    variant='h6'
                    fontWeight={{
                      xs: '300',
                      md: '400',
                      lineHeight: '2rem',
                      padding: '.3rem 0',
                      cursor: 'pointer',
                      '&:hover': { color: '#2297ff' },
                    }}
                    fontSize='1rem'
                    component='a'
                  >
                    Web Development
                  </Typography>
                  <Typography
                    color='#F5F5F7'
                    variant='h6'
                    fontWeight={{
                      xs: '300',
                      md: '400',
                      padding: '.3rem 0',
                      cursor: 'pointer',
                      '&:hover': { color: '#2297ff' },
                    }}
                    fontSize='1rem'
                    component='a'
                    href='https://kawsaralam.netlify.app'
                  >
                    E-Commerce
                  </Typography>
                  <Typography
                    color='#F5F5F7'
                    variant='h6'
                    fontWeight={{
                      xs: '300',
                      md: '400',
                      padding: '.3rem 0',
                      cursor: 'pointer',
                      '&:hover': { color: '#2297ff' },
                    }}
                    fontSize='1rem'
                    component='a'
                  >
                    App Development
                  </Typography>
                  <Typography
                    color='#F5F5F7'
                    variant='h6'
                    fontWeight={{
                      xs: '300',
                      md: '400',
                      padding: '.3rem 0',
                      cursor: 'pointer',
                      '&:hover': { color: '#2297ff' },
                      lineHeight: '2.4rem',
                    }}
                    fontSize='1rem'
                    component='a'
                  >
                    React / Node / React Native <br />/ Laravel / Wordpress
                  </Typography>
                  <Typography
                    color='#F5F5F7'
                    variant='h6'
                    fontWeight={{
                      xs: '300',
                      md: '400',
                      padding: '.3rem 0',
                      cursor: 'pointer',
                      '&:hover': { color: '#2297ff' },
                    }}
                    fontSize='1rem'
                    component='a'
                  ></Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  variant='rounded'
                  sx={{
                    backgroundColor: '#2297ff',
                    height: '32px',
                    width: '32px',
                    borderRadius: '.5rem',
                  }}
                >
                  <CampaignIcon />
                </Avatar>
                <Typography
                  ml={3}
                  color='#F5F5F7'
                  variant='h2'
                  fontWeight={{ xs: '400', md: '500' }}
                  fontSize={{ xs: '1rem', md: '1.3rem' }}
                >
                  Marketing
                </Typography>
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '1rem',
                  marginLeft: '3.5rem',
                }}
              >
                <Typography
                  color='#F5F5F7'
                  variant='h6'
                  fontWeight={{
                    xs: '300',
                    md: '400',
                    padding: '.3rem 0',
                    cursor: 'pointer',
                    '&:hover': { color: '#2297ff' },
                  }}
                  fontSize='1rem'
                  component='a'
                >
                  SEO
                </Typography>
                <Typography
                  color='#F5F5F7'
                  variant='h6'
                  fontWeight={{
                    xs: '300',
                    md: '400',
                    padding: '.3rem 0',
                    cursor: 'pointer',
                    '&:hover': { color: '#2297ff' },
                  }}
                  fontSize='1rem'
                  component='a'
                >
                  Social Media Marketing
                </Typography>
              </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  variant='rounded'
                  sx={{
                    backgroundColor: '#2297ff',
                    height: '32px',
                    width: '32px',
                    borderRadius: '.5rem',
                  }}
                >
                  <BrushIcon />
                </Avatar>
                <Typography
                  ml={3}
                  color='#F5F5F7'
                  variant='h2'
                  fontWeight={{ xs: '400', md: '500' }}
                  fontSize={{ xs: '1rem', md: '1.3rem' }}
                >
                  Design & Editing
                </Typography>
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '1rem',
                  marginLeft: '3.5rem',
                }}
              >
                <Typography
                  color='#F5F5F7'
                  variant='h6'
                  fontWeight={{
                    xs: '300',
                    md: '400',
                    padding: '.3rem 0',
                    cursor: 'pointer',
                    '&:hover': { color: '#2297ff' },
                  }}
                  fontSize='1rem'
                  component='a'
                >
                  UI/UX
                </Typography>
                <Typography
                  color='#F5F5F7'
                  variant='h6'
                  fontWeight={{
                    xs: '300',
                    md: '400',
                    padding: '.3rem 0',
                    cursor: 'pointer',
                    '&:hover': { color: '#2297ff' },
                  }}
                  fontSize='1rem'
                  component='a'
                >
                  Graphics Design
                </Typography>
                <Typography
                  color='#F5F5F7'
                  variant='h6'
                  fontWeight={{
                    xs: '300',
                    md: '400',
                    padding: '.3rem 0',
                    cursor: 'pointer',
                    '&:hover': { color: '#2297ff' },
                  }}
                  fontSize='1rem'
                  component='a'
                >
                  Video Editing
                </Typography>
                <Typography
                  color='#F5F5F7'
                  variant='h6'
                  fontWeight={{
                    xs: '300',
                    md: '400',
                    padding: '.3rem 0',
                    cursor: 'pointer',
                    '&:hover': { color: '#2297ff' },
                  }}
                  fontSize='1rem'
                  component='a'
                >
                  Content Creation
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Popover>
    </div>
  );
};
export default Dropdown;
