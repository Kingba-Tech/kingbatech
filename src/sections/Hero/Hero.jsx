import { Container, Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import banner from '../../assets/hero_banner.png';

const Hero = () => {
  return (
    <Container
      maxWidth
      sx={{
        minHeight: 'calc(100vh - 64px)',
        background: 'linear-gradient(rgb(2, 13, 31) 16%, black 35%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        py={{ md: '4', xs: '1' }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box my={4}>
          <Image
            src={banner}
            height={725}
            width={944}
            layout='intrinsic'
            alt='hero_banner'
          ></Image>
        </Box>
        <Typography
          variant='h2'
          fontSize={{ xs: '2rem', md: '2.5rem' }}
          fontWeight={{ sx: '300', md: '500' }}
          color='#f5f5f7'
          marginBottom='1rem'
          textAlign='center'
        >
          We are best because we are different!
        </Typography>
      </Grid>
    </Container>
  );
};

export default Hero;
