
import Head from 'next/head'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Grid, Container, Box, Typography } from '@mui/material';
import styles from '../styles/Home.module.css';
import { CtaDesktop } from '../src/components/Cta';
import Slider from '../src/components/Slider/Slider'

const About = () => {
  return (
    <>
      <Head>
        <title>Kingba Tech - About</title>
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
          About us
          <hr width='100px' className={styles.projectshr} color='#2297FF' />
        </Typography>
        <Typography
          fontFamily='DM Sans, sans serif;'
          variant='p'
          fontSize={{ xs: '1.3rem', md: '1.75rem' }}
          fontWeight='500'
          lineHeight='3rem'
          color='#141414'
          marginTop='.5rem'
          textAlign={{ xs: 'center' }}
        >
          We are a digitally-led, full-service creative agency. We combine{' '}
          <br />
          strategy, marketing, design and technology to help you stay ahead of{' '}
          <br />
          your competition
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
                src='https://i.imgur.com/q7TNS7r.jpg'
                alt='programmer'
                width='100%'
                style={{
                  maxHeight: '450px',
                  height: '100%',
                  width: '100%',
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
                fontSize={{ xs: '1.3rem', md: '1.75rem' }}
                fontWeight='500'
                lineHeight='3rem'
                color='#141414'
              >
                Based primarily in Dhaka, Bangladesh, we harness the strength of
                our multi-disciplinary teams to craft the perfect solutions for
                your business, be it online or offline.
              </Typography>
              <Typography
                fontFamily='DM Sans, sans serif;'
                variant='p'
                fontSize={{ xs: '1.3rem', md: '1.6rem' }}
                fontWeight='400'
                lineHeight='3rem'
                color='#141414'
              >
                With over a decade of experience, we’ve established ourselves as
                one of the pioneering agencies in the region.
              </Typography>
              <Typography
                fontFamily='DM Sans, sans serif;'
                variant='p'
                fontSize={{ xs: '1.3rem', md: '1.6rem' }}
                fontWeight='400'
                lineHeight='3rem'
                color='#141414'
              >
                Our small, flexible, agile and design-led structures and
                processes allow us to be highly responsive and innovative.
              </Typography>
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
                Our People
              </Typography>
              <Typography
                fontFamily='DM Sans, sans serif;'
                variant='p'
                fontSize={{ xs: '1.3rem', md: '1.75rem' }}
                fontWeight='500'
                lineHeight='3rem'
                color='#141414'
              >
                We’re made of passionate leaders, strategists, managers,
                developers, animators and designers who work together under one
                umbrella.
              </Typography>
              <Grid width='100%' height='100%' maxHeight='600px' mt={3}>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  freeMode={true}
                  loop={true}
                  modules={[Pagination, FreeMode]}
                  className='aboutSwiper'
                  breakpoints={{
                    359: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    640: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide>
                    <img
                      src='https://i.imgur.com/q7TNS7r.jpg'
                      alt='programmer'
                      width='100%'
                      style={{
                        maxHeight: '400px',
                        height: '100%',
                        width: '100%',
                        borderRadius: '.5em',
                        objectFit: 'cover',
                      }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src='https://i.imgur.com/q7TNS7r.jpg'
                      alt='programmer'
                      width='100%'
                      style={{
                        maxHeight: '400px',
                        height: '100%',
                        width: '100%',
                        borderRadius: '.5em',
                        objectFit: 'cover',
                      }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src='https://i.imgur.com/q7TNS7r.jpg'
                      alt='programmer'
                      width='100%'
                      style={{
                        maxHeight: '400px',
                        height: '100%',
                        width: '100%',
                        borderRadius: '.5em',
                        objectFit: 'cover',
                      }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src='https://i.imgur.com/q7TNS7r.jpg'
                      alt='programmer'
                      width='100%'
                      style={{
                        maxHeight: '400px',
                        height: '100%',
                        width: '100%',
                        borderRadius: '.5em',
                        objectFit: 'cover',
                      }}
                    />
                  </SwiperSlide>
                </Swiper>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            mt={4}
            mb={{ xs: 3, md: 0 }}
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
      <CtaDesktop />
    </>
  );
};

export default About;
