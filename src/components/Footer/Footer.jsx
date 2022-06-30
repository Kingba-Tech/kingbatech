import {
  Container,
  Stack,
  Grid,
  Typography,
  Divider,
  Menu,
  MenuItem,
} from '@mui/material';

import Image from 'next/image';
import logo from '../../assets/kingba_small.png';

const Footer = () => {
  return (
    <Container
      maxWidth
      sx={{
        minHeight: '400px',
        background: '#000000',
        padding: '1.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        sx={{
          width: '100%',
          maxWidth: 1080,
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '2.8rem', md: '5rem' },
          }}
        >
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'space-between',
            }}
          >
            <Grid item xs={12} md={6} mb={{ xs: '1.5rem', md: 'none' }}>
              <Image
                src={logo}
                alt='logo'
                layout='intrinsic'
                width={160}
                height={32}
              />
              <Typography
                mt={3}
                color='#f5f5f7'
                variant='h2'
                fontWeight={{ xs: '300' }}
                fontSize='1.1rem'
                fontFamily='DM Sans, sans serif;'
                display={{ xs: 'none', md: 'block' }}
              >
                Where strategy meets creativity
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: '2.5rem', md: 'none' },
                padding: { xs: '0 2.5rem', md: '0' },
                marginLeft: { xs: '-2.8rem', md: '0' },
              }}
            >
              <Typography
                mx
                color='#f5f5f7'
                variant='h2'
                fontWeight={{ xs: '300', md: '400' }}
                fontSize={{ xs: '1rem', md: '1.1rem' }}
                fontFamily='DM Sans, sans serif;'
                component='a'
                sx={{
                  '&:hover': {
                    color: '#2997ff',
                  },
                  cursor: 'pointer',
                }}
              >
                Facebook
              </Typography>
              <Typography
                mx
                color='#f5f5f7'
                variant='h2'
                fontWeight={{ xs: '300', md: '400' }}
                fontSize={{ xs: '1rem', md: '1.1rem' }}
                fontFamily='DM Sans, sans serif;'
                component='a'
                sx={{
                  '&:hover': {
                    color: '#2997ff',
                  },
                  cursor: 'pointer',
                }}
              >
                Behance
              </Typography>
              <Typography
                mx
                color='#f5f5f7'
                variant='h2'
                fontWeight={{ xs: '300', md: '400' }}
                fontSize={{ xs: '1rem', md: '1.1rem' }}
                fontFamily='DM Sans, sans serif;'
                component='a'
                sx={{
                  '&:hover': {
                    color: '#2997ff',
                  },
                  cursor: 'pointer',
                }}
              >
                LinkedIn
              </Typography>
              <Typography
                mx
                color='#f5f5f7'
                variant='h2'
                fontWeight={{ xs: '300', md: '400' }}
                fontSize={{ xs: '1rem', md: '1.1rem' }}
                fontFamily='DM Sans, sans serif;'
                component='a'
                sx={{
                  '&:hover': {
                    color: '#2997ff',
                  },
                  cursor: 'pointer',
                  marginLeft: { xs: '1.2rem', md: '0' },
                }}
              >
                Twitter
              </Typography>
              <Typography
                mx
                color='#f5f5f7'
                variant='h2'
                fontWeight={{ xs: '300', md: '400' }}
                fontSize={{ xs: '1rem', md: '1.1rem' }}
                fontFamily='DM Sans, sans serif;'
                component='a'
                sx={{
                  '&:hover': {
                    color: '#2997ff',
                  },
                  cursor: 'pointer',
                }}
              >
                Instagram
              </Typography>
              <Typography
                mx
                color='#f5f5f7'
                variant='h2'
                fontWeight={{ xs: '300', md: '400' }}
                fontSize={{ xs: '1rem', md: '1.1rem' }}
                fontFamily='DM Sans, sans serif;'
                component='a'
                sx={{
                  '&:hover': {
                    color: '#2997ff',
                  },
                  cursor: 'pointer',
                }}
              >
                YouTube
              </Typography>
              <Typography
                mx
                color='#f5f5f7'
                variant='h2'
                fontWeight={{ xs: '300', md: '400' }}
                fontSize={{ xs: '1rem', md: '1.1rem' }}
                fontFamily='DM Sans, sans serif;'
                component='a'
                sx={{
                  '&:hover': {
                    color: '#2997ff',
                  },
                  cursor: 'pointer',
                }}
              >
                Dribbble
              </Typography>
            </Grid>
          </Grid>
          <Divider
            sx={{
              backgroundColor: '#565656',
              marginTop: '2rem',
              width: '100%',
            }}
          />
          <Grid
            mb={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Grid alignSelf={{ xs: 'flex-start' }}>
              <Typography
                fontSize={{ xs: '1rem', md: '1.1rem' }}
                py={2}
                variant='h6'
                fontWeight='300'
                color='#f5f5f7'
                fontFamily='DM Sans, sans serif;'
                justifySelf='flex-start'
              >
                &copy; Kingba Tech
              </Typography>
            </Grid>
            <Stack direction='row' spacing={4} alignSelf={{ xs: 'flex-start' }}>
              <Typography
                sx={{
                  fontWeight: '400',
                  color: '#f5f5f7',
                  fontSize: { xs: '1rem', md: '1.1rem' },

                  fontFamily: 'DM Sans, sans-serif;',
                }}
              >
                Terms of use
              </Typography>
              <Typography
                sx={{
                  fontWeight: '400',
                  color: '#f5f5f7',
                  fontSize: '1.1rem',

                  fontFamily: 'DM Sans, sans-serif;',
                }}
              >
                Privacy Policy
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
