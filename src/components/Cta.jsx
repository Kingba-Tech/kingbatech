import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';

const Cta = () => {
  return (
    <Container
     
      maxWidth
      sx={{
        minHeight: '250px',
        backgroundColor: '#004581',
        display: { sm: 'flex', md: 'none' },
        
      }}
    >
      <Grid
        sx={{
          width: '100%',
          maxWidth: 1080,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2.5rem 0',
          gap: '.5rem',
        }}
      >
        <Typography
          fontSize='1.8rem'
          color='#ffffff'
          fontWeight='700'
          fontFamily='DM Sans, sans serif;'
          lineHeight='42px'
        >
          Ready to partner?
        </Typography>
        <Typography
          fontSize='1.2rem'
          color='#ffffff'
          fontWeight='400'
          lineHeight='30px'
          fontFamily='DM Sans, sans serif;'
          textAlign='center'
        >
          We would love to to collaborate & create a magic together
        </Typography>
        <Button
          outlined
          sx={{
            color: '#ffffff',
            border: '2px solid #ffffff',
            borderRadius: '.35em',
            fontSize: '1rem',
            lineHeight: '23px',
            padding: '.5rem 1.5rem',
            marginTop: '.9rem',
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#004581',
              transition: 'all .2s',
            },
          }}
          fontFamily='DM Sans, sans serif;'
        >
          Contact us
        </Button>
      </Grid>
    </Container>
  );
};

export default Cta;
