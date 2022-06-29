import { Container, Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import banner from '../assets/kingba.png';

const Hero = () => {
  return (
    <Container
      maxWidth
      sx={{
        minHeight: '100vh',
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
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column-reverse', md: 'column' },
          }}
        >
          <Box sx={{ margin: '2rem 0 3rem' }}>
            <Image
              src={banner}
              height={500}
              width={700}
              layout='intrinsic'
              alt='hero_banner'
            ></Image>
          </Box>
          <Box
            mb={{ xs: '1.5rem' }}
            mt={{ xs: '6rem', md: 'none' }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h2'
              fontFamily='DM Sans, sans serif;'
              fontSize={{ xs: '2rem', md: '2.8rem' }}
              fontWeight='500'
              color='#f5f5f7'
              marginBottom='2rem'
              sx={{ alignSelf: 'flex-start' }}
            >
              Stay ahead of the curve with strategic, creative solutions
            </Typography>
            <Typography
              fontFamily='DM Sans, sans serif;'
              variant='body2'
              fontSize={{ xs: '1.2', md: '1.5rem' }}
              fontWeight='300'
              lineHeight='2.5rem'
              color='#f5f5f7'
              marginBottom='1rem'
              sx={{ alignSelf: 'flex-start' }}
            >
              We’re an award-winning digital marketing agency, collaborating
              with brands all over the world.
            </Typography>
            <Typography
              variant='h6'
              fontSize='1.3rem'
              fontWeight='500'
              color='#2997FF '
              marginTop='2rem'
              component='a'
              sx={{
                fontFamily: 'DM Sans, sans-serif;',
                cursor: 'pointer',
                alignSelf: 'flex-start',
              }}
            >
              See our projects
              <hr
                height='5px'
                width='180px'
                padding='20px 0px'
                color='#2997FF '
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
