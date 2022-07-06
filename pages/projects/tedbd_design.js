import Head from 'next/head';
import {
  Grid,
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
} from '@mui/material';
import styles from '../../styles/Home.module.css';

const TedbdDesign = () => {
  return (
    <>
      <Head>
        <title>Ted BD</title>
      </Head>
      <Container
        maxWidth
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          mt: 8,
          mb: 8,
        }}
      >
        <Typography
          pt={{ xs: 2, md: 4 }}
          variant='h2'
          fontWeight='600'
          color='#181818'
          fontSize={{ xs: '2.5rem', md: '4.5rem' }}
          fontFamily='DM Sans, sans serif;'
        >
          Ted BD
          <hr width='50px' className={styles.projectshr} color='#2297FF' />
        </Typography>

        <Grid sx={{ width: '100%', maxWidth: 1080, mt: 4 }}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: { xs: '.5rem', md: '2rem' },
            }}
          >
            <Box sx={{ width: '100%' }}>
              <img
                src='https://i.imgur.com/iFK2GQo.jpg'
                alt='Ted BD'
                style={{
                  maxHeight: '625px',
                  height: '100%',
                  width: '100%',
                  maxWidth: '700',
                  borderRadius: '.5em',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Grid
              display='flex'
              flexDirection='column'
              alignItems='center'
              padding={{ xs: '1rem 1.3rem', md: '1rem 3rem' }}
              gap='1.5rem'
            >
              <Typography
                fontFamily='DM Sans, sans serif;'
                variant='p'
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                fontWeight='500'
                lineHeight='3rem'
                color='#141414'
              >
                United Group, a conglomerate with over 30 companies, started its
                real estate journey in 1991. United Properties Solutions Ltd
                (UPSL), is one of United Group’s real-estate ventures in
                Bangladesh. Projects designed by the company have modern
                designs, safety, and high-tech facilities that suit businesses
                or residences.
              </Typography>
              <hr
                width='100%'
                style={{
                  height: '1px',
                  color: '#f3f3f3',
                  margin: '1rem 0',
                }}
              />
            </Grid>
            <Grid
              display='flex'
              flexDirection='column'
              justifyContent='center'
              padding={{ xs: '1rem 1.3rem', md: '1rem 3rem' }}
              gap='1.5rem'
              width='100%'
            >
              <Typography
                fontFamily='DM Sans, sans serif;'
                fontSize={{ xs: '2rem', md: '2.5rem' }}
                variant='h5'
                component='div'
                fontWeight='600'
                color='#141414'
              >
                The Problem
              </Typography>
              <Typography
                fontFamily='DM Sans, sans serif;'
                variant='p'
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                fontWeight='500'
                lineHeight='3rem'
                color='#141414'
              >
                We’re made of passionate leaders, strategists, managers,
                developers, animators and designers who work together under one
                umbrella.
              </Typography>
              <hr
                width='100%'
                style={{
                  height: '1px',
                  color: '#f3f3f3',
                  margin: '1rem 0',
                }}
              />
              <Typography
                fontFamily='DM Sans, sans serif;'
                fontSize={{ xs: '2rem', md: '2.5rem' }}
                variant='h5'
                component='div'
                fontWeight='600'
                color='#141414'
                mt={{ xs: 0, md: '2.5rem' }}
              >
                The Solution
              </Typography>
              <Typography
                fontFamily='DM Sans, sans serif;'
                variant='p'
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                fontWeight='500'
                lineHeight='3rem'
                color='#141414'
              >
                We’re made of passionate leaders, strategists, managers,
                developers, animators and designers who work together under one
                umbrella.
              </Typography>
              <hr
                width='100%'
                style={{
                  height: '1px',
                  color: '#f3f3f3',
                  margin: '1rem 0',
                }}
              />
              <Typography
                fontFamily='DM Sans, sans serif;'
                fontSize={{ xs: '2rem', md: '2.5rem' }}
                variant='h5'
                component='div'
                fontWeight='600'
                color='#141414'
                mt={{ xs: 0, md: '2.5rem' }}
              >
                Results
              </Typography>
              <Typography
                fontFamily='DM Sans, sans serif;'
                variant='p'
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                fontWeight='500'
                lineHeight='3rem'
                color='#141414'
              >
                We’re made of passionate leaders, strategists, managers,
                developers, animators and designers who work together under one
                umbrella.
              </Typography>
              <Card
                sx={{
                  width: '100%',
                  maxHeight: 450,
                  height: '100%',
                  boxShadow: 'none',
                  marginTop: '2rem',
                }}
              >
                <CardMedia
                  component='div'
                  sx={{ maxHeight: { xs: 350, md: 450 }, height: '100%' }}
                >
                  <iframe
                    width='100%'
                    height='450'
                    src='https://www.youtube.com/embed/es4x5R-rV9s?start=20'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TedbdDesign;
