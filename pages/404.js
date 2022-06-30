import { Container, Grid, Box, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <Container maxWidth>
      <Grid
        sx={{
          width: '100%',
          maxWidth: '1080',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid sx={{ width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              color='#141414'
              variant='h2'
              fontSize={{ xs: '1.2rem', md: '1.5rem' }}
              fontWeight='300'
              lineHeight='2rem'
              fontFamily='DM Sans, sans-serif;'
              letterSpacing='-.03em'
              textAlign='center'
            >
              Page not found!
            </Typography>
            <Link href='/'>Please go back to home.</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageNotFound;
