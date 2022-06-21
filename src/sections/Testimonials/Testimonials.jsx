import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import { SingleCard, WebCards } from '../../components/Cards/Cards';
import Slider from '../../components/Slider/Slider';

const Testimonials = () => {
  return (
    <Container
      maxWidth
      sx={{
        backgroundColor: '#F2F2F2',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Grid py={2}>
        <Typography
          pt={4}
          variant='h2'
          fontWeight={{ xs: '400', md: '500' }}
          color='#181818'
          opacity='0.9'
          textAlign='center'
          fontSize={{ xs: '1.8rem', md: '2.5rem' }}
        >
          Testimonials
        </Typography>
        <hr
          height='5px'
          width='250px'
          textAlign='center'
          padding='20px 0px'
          color='#181818'
        />
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <Grid width='100vw'>
            <Slider />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
