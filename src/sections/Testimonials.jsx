import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Slider from '../components/Slider/Slider';

const Testimonials = () => {
  return (
    <Container
      maxWidth
      sx={{
        backgroundColor: '#F0F6FF',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: 1080,
        }}
        py={2}
      >
        <Grid
          width='100%'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Slider />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
