import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

const Process = () => {
  return (
    <Container
      maxWidth
      minHeight={800}
      sx={{
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        pt={4}
        variant='h2'
        fontWeight={{ xs: '400', md: '500' }}
        color='#181818'
        opacity='0.9'
        textAlign='center'
        fontSize={{ xs: '1.8rem', md: '2.5rem' }}
      >
        Process
      </Typography>
      <hr
        height='5px'
        width='160px'
        textAlign='center'
        padding='20px 0px'
        color='#181818'
      />
      <Grid
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          p={4}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              color='#181818'
              variant='h2'
              fontWeight={{ xs: '400', md: '500' }}
              fontSize={{ xs: '1.3rem', md: '1.5rem' }}
            >
              Web Development
            </Typography>
          </Grid>
          <Grid
            mb={2}
            item
            xs={12}
            md={6}
            sx={{ maxWidth: { xs: 300, md: '100%' } }}
          >
            <Typography
              textAlign={{ xs: 'center', md: 'start' }}
              variant='h6'
              fontWeight={{ xs: '300', md: '500' }}
              fontSize={{ xs: '1.1rem', md: '1.3rem' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              provident adipisci corporis quos doloremque iusto quisquam
              sapiente nesciunt molestiae illo?
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              color='#181818'
              variant='h2'
              fontWeight={{ xs: '400', md: '500' }}
              fontSize={{ xs: '1.3rem', md: '1.5rem' }}
            >
              Digital Marketing
            </Typography>
          </Grid>
          <Grid
            mb={2}
            sx={{ maxWidth: { xs: 300, md: '100%' } }}
            item
            xs={12}
            md={6}
          >
            <Typography
              textAlign={{ xs: 'center', md: 'start' }}
              variant='h6'
              fontWeight={{ xs: '300', md: '500' }}
              fontSize={{ xs: '1.1rem', md: '1.3rem' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              provident adipisci corporis quos doloremque iusto quisquam
              sapiente nesciunt molestiae illo?
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              color='#181818'
              variant='h2'
              fontWeight={{ xs: '400', md: '500' }}
              fontSize={{ xs: '1.3rem', md: '1.5rem' }}
              mb={1}
            >
              Design & Editing
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ maxWidth: { xs: 300, md: '100%' } }}>
            <Typography
              textAlign={{ xs: 'center', md: 'start' }}
              variant='h6'
              fontWeight={{ xs: '300', md: '500' }}
              fontSize={{ xs: '1.1rem', md: '1.3rem' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              provident adipisci corporis quos doloremque iusto quisquam
              sapiente nesciunt molestiae illo?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Process;
