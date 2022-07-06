import { Container, Box, Grid, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Container
      maxWidth
      sx={{
        minHeight: { md: '100vh', xs: '100%' },
        background: 'linear-gradient(rgb(2, 13, 31) 16%, black 35%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Grid
        py={{ md: 0, xl: 4, xs: 1 }}
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
          mt={{ xs: 6, md: 1, xl: 6 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', xl: 'none', lg: 'block', md: 'block' },
              marginTop: { xs: '-20px', md: '0', xl: '2rem' },
            }}
          >
            <img
              src='/kingba.png'
              alt='banner'
              height='500'
              width='700'
              style={{
                objectFit: 'fill',
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: 'none', xl: 'block', md: 'none', lg: 'none' },
              marginTop: { xs: '-20px', md: '0', xl: '2rem' },
            }}
          >
            <img
              src='/kingba.png'
              alt='banner'
              height='500'
              width='700'
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: 'block', xl: 'none', md: 'none', lg: 'none' },
              marginTop: { xs: '-20px', md: '0', xl: '2rem' },
            }}
          >
            <img
              src='/kingba.png'
              alt='banner'
              height='300'
              width='400'
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box
            my={{ xs: 'none', xl: '1rem' }}
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
              fontSize={{ xs: '1.5rem', md: '2rem', xl: '2.8rem' }}
              fontWeight='500'
              color='#f5f5f7'
              marginBottom={{ xs: '1.5rem', md: '1rem', xl: '1.5rem' }}
              lineHeight={{ xs: '2rem', xl: '3.5rem' }}
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
              href='/projects/'
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
