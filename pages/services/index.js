import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import DevicesIcon from '@mui/icons-material/Devices';
import CampaignIcon from '@mui/icons-material/Campaign';
import BrushIcon from '@mui/icons-material/Brush';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Index = () => {
  return (
    <Container
      maxWidth
      sx={{
        backgroundColor: '#FFFFFF',
        minHeight: '700',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        mt={{ xs: 3, md: 6 }}
        pt={{ xs: 2, md: 4 }}
        variant='h2'
        fontWeight={{ xs: '400', md: '500' }}
        color='#181818'
        opacity='0.9'
        textAlign='center'
        fontSize={{ xs: '1.8rem', md: '2.5rem' }}
      >
        Solutions we provide
      </Typography>

      <Grid
        mb={{ xs: 8, md: 12 }}
        mt={{ xs: 3, md: 6 }}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: 1080,
          alignItems: 'center',
          gap: '.2rem',
        }}
      >
        <Grid
          width='100%'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: { xs: '1.5rem', md: '.2rem' },
          }}
        >
          <Link href='/services/development'>
            <Grid
              sx={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.5rem',
                border: '1px solid #ccb7b7',
                padding: '1.8rem',
                maxWidth: '330px',
                maxHeight: '360px',
                borderRadius: '.8rem',
                '&:hover': {
                  backgroundColor: '#004581',
                  transition: 'all .2s',
                },
                '&:hover .MuiSvgIcon-root': {
                  color: '#f5f5f7',
                },
                '&:hover .MuiTypography-h2': {
                  color: '#f5f5f7',
                },
                '&:hover .MuiTypography-h6': {
                  color: '#f5f5f7',
                },
              }}
            >
              <DevicesIcon
                sx={{
                  fontSize: '2.5rem',
                  color: '#004581',
                  alignSelf: { xs: 'center', md: 'flex-start' },
                }}
              />
              <Typography
                color='#181818'
                variant='h2'
                fontWeight='500'
                fontSize={{ xs: '1.3rem', md: '1.4rem' }}
                mb={1}
                sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}
                fontFamily='DM Sans, sans serif;'
              >
                Web & App Development
              </Typography>
              <Typography
                color='#181818'
                variant='h6'
                fontWeight={{ xs: '300', md: '400' }}
                fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                sx={{
                  marginTop: '-1rem',
                  alignSelf: { xs: 'center', md: 'flex-start' },
                }}
                fontFamily='DM Sans, sans serif;'
              >
                Custom design and development solutions for crafting the perfect
                website or app for your business.
              </Typography>
              <ChevronRightIcon
                sx={{
                  fontSize: '2.5rem',
                  color: '#004581',
                  alignSelf: 'flex-end',
                }}
              />
            </Grid>
          </Link>
          <Link href='/services/marketing'>
            <Grid
              sx={{
                display: 'flex',
                cursor: 'pointer',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.5rem',
                border: '1px solid #ccb7b7',
                padding: '1.8rem',
                maxWidth: '330px',
                maxHeight: '360px',
                borderRadius: '.8rem',
                '&:hover': {
                  backgroundColor: '#004581',
                  transition: 'all .2s',
                },
                '&:hover .MuiSvgIcon-root': {
                  color: '#f5f5f7',
                },
                '&:hover .MuiTypography-h2': {
                  color: '#f5f5f7',
                },
                '&:hover .MuiTypography-h6': {
                  color: '#f5f5f7',
                },
              }}
            >
              <CampaignIcon
                sx={{
                  fontSize: '2.5rem',
                  color: '#004581',
                  alignSelf: { xs: 'center', md: 'flex-start' },
                }}
              />
              <Typography
                color='#181818'
                variant='h2'
                fontWeight='500'
                fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                mb={1}
                sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}
                fontFamily='DM Sans, sans serif;'
              >
                Digital Marketing
              </Typography>
              <Typography
                color='#181818'
                variant='h6'
                fontWeight={{ xs: '300', md: '400' }}
                fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                sx={{
                  marginTop: '-1rem',
                  alignSelf: { xs: 'center', md: 'flex-start' },
                }}
                fontFamily='DM Sans, sans serif;'
              >
                Custom design and development solutions for crafting the perfect
                website or app for your business.
              </Typography>
              <ChevronRightIcon
                sx={{
                  fontSize: '2.5rem',
                  color: '#004581',
                  alignSelf: 'flex-end',
                }}
              />
            </Grid>
          </Link>
          <Link href='/services/design-editing'>
            <Grid
              sx={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.5rem',
                border: '1px solid #ccb7b7',
                padding: '1.8rem',
                maxWidth: '330px',
                maxHeight: '360px',
                borderRadius: '.8rem',
                '&:hover': {
                  backgroundColor: '#004581',
                  transition: 'all .2s',
                },
                '&:hover .MuiSvgIcon-root': {
                  color: '#f5f5f7',
                },
                '&:hover .MuiTypography-h2': {
                  color: '#f5f5f7',
                },
                '&:hover .MuiTypography-h6': {
                  color: '#f5f5f7',
                },
              }}
            >
              <BrushIcon
                sx={{
                  fontSize: '2.5rem',
                  color: '#004581',
                  alignSelf: { xs: 'center', md: 'flex-start' },
                }}
              />
              <Typography
                color='#181818'
                variant='h2'
                fontWeight='500'
                fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                mb={1}
                sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}
                fontFamily='DM Sans, sans serif;'
              >
                Design & Editing
              </Typography>
              <Typography
                color='#181818'
                variant='h6'
                fontWeight={{ xs: '300', md: '400' }}
                fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                sx={{
                  marginTop: '-1rem',
                  alignSelf: { xs: 'center', md: 'flex-start' },
                }}
                fontFamily='DM Sans, sans serif;'
              >
                Custom design and development solutions for crafting the perfect
                website or app for your business.
              </Typography>
              <ChevronRightIcon
                sx={{
                  fontSize: '2.5rem',
                  color: '#004581',
                  alignSelf: 'flex-end',
                }}
              />
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
