import { Container, Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import banner from '../assets/kingba.png';
import styles from './Home.module.css';

const Hero = () => {
  return (
    <Container
      maxWidth
      sx={{
        minHeight: { md: '100vh' },
        background: 'linear-gradient(rgb(2, 13, 31) 16%, black 35%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Grid
        py={{ md: 4, xs: 1 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          maxWidth: 1080,
          width: '100%',
        }}
      >
        <Grid
          width='100%'
          mt={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ marginTop: { xs: '-20px', md: '2rem' } }}>
            <Image
              src={banner}
              height={500}
              width={700}
              layout='intrinsic'
              alt='hero_banner'
            ></Image>
          </Box>
          <Box
            my={{ xs: 'none', md: '1rem' }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '.6rem',
            }}
          >
            <Typography
              variant='h2'
              fontFamily='DM Sans, sans serif;'
              fontSize={{ xs: '1.5rem', md: '2.8rem' }}
              fontWeight='500'
              color='#f5f5f7'
              marginBottom='1.5rem'
              lineHeight={{ xs: '2rem', md: '3.5rem' }}
              sx={{ alignSelf: 'flex-start' }}
            >
              Stay ahead of the curve with strategic, creative solutions
            </Typography>
            <Typography
              fontFamily='DM Sans, sans serif;'
              variant='p'
              fontSize={{ xs: '1rem', md: '1.5rem' }}
              fontWeight='300'
              lineHeight='2rem'
              color='#f5f5f7'
              marginBottom='1rem'
              sx={{ alignSelf: 'flex-start' }}
            >
              We’re an award-winning digital marketing agency, collaborating
              with brands all over the world.
            </Typography>
            <Typography
              variant='h6'
              fontSize={{ xs: '1rem', md: '1.5rem' }}
              fontWeight='500'
              color='#2997FF '
              component='a'
              sx={{
                fontFamily: 'DM Sans, sans-serif;',
                cursor: 'pointer',
                alignSelf: 'flex-start',
              }}
            >
              See our projects
              <hr color='#2297FF' />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
