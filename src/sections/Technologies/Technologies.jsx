import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import BrushIcon from '@mui/icons-material/Brush';
import CampaignIcon from '@mui/icons-material/Campaign';

const Technologies = () => {
  return (
    <Container maxWidth sx={{ backgroundColor: '#FBFBFD', minHeight: '300px' }}>
      <Typography
        mt={2}
        variant='h2'
        fontWeight={{ xs: '400', md: '500' }}
        color='#181818'
        opacity='0.9'
        textAlign='center'
        fontSize={{ xs: '1.8rem', md: '2.5rem' }}
      >
        Technologies
      </Typography>
      <hr
        height='5px'
        width='250px'
        textAlign='center'
        padding='20px 0px'
        color='#181818'
      />
      <Grid
        mt={4}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems='center'
        sx={{
          display: 'flex',
          width: '1200',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <Grid textAlign='center' mx={2} item xs={12} sm={6} md={4} mb={2}>
          <WebIcon sx={{ fontSize: 50 }} />
          <Typography
            color='#181818'
            variant='h2'
            fontWeight={{ xs: '400', md: '500' }}
            fontSize={{ xs: '1.3rem', md: '1.5rem' }}
            mb={1}
          >
            Web Development
          </Typography>
          <Typography
            color='#181818'
            variant='h6'
            fontWeight={{ xs: '300', md: '400' }}
            fontSize='1.1rem'
          >
            React.Js, Next.Js, Node.Js
          </Typography>
        </Grid>
        <Grid mx={2} item xs={12} sm={6} md={4} my={2} textAlign='center'>
          <CampaignIcon sx={{ fontSize: 50 }} />
          <Typography
            color='#181818'
            variant='h2'
            fontWeight={{ xs: '400', md: '500' }}
            fontSize={{ xs: '1.3rem', md: '1.5rem' }}
            mb={1}
          >
            Digital Marketing
          </Typography>
          <Typography
            color='#181818'
            variant='h6'
            fontWeight={{ xs: '300', md: '400' }}
            fontSize='1.1rem'
          >
            Facebook, Email, Instagram
          </Typography>
        </Grid>
        <Grid mx={2} item xs={12} sm={6} md={4} my={2} textAlign='center'>
          <BrushIcon sx={{ fontSize: 50 }} />
          <Typography
            color='#181818'
            variant='h2'
            fontWeight={{ xs: '400', md: '500' }}
            fontSize={{ xs: '1.3rem', md: '1.5rem' }}
            mb={1}
          >
            Design & Editing
          </Typography>
          <Typography
            color='#181818'
            variant='h6'
            fontWeight={{ xs: '300', md: '400' }}
            fontSize='1.1rem'
          >
            Photoshop, Illustrator, Figma
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Technologies;
