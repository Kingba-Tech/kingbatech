import React from 'react';
import styles from '../../../styles/Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography, Grid, Avatar, Stack } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    caption:
      'Kingba Tech was a great partner as we rebuilt our website. They understood our vision, provided useful counsel, and executed our needs quickly and professionally. We are thrilled with the result and look forward to working with the team on future projects.”',
    img: 'https://i.imgur.com/kMkvLNC.png',
    name: 'Steve Jobs',
    designation: 'Co-founder',
    company: 'Apple',
  },
  {
    caption:
      '“Kingba Tech was a great partner as we rebuilt our website. They understood our vision, provided useful counsel, and executed our needs quickly and professionally. We are thrilled with the result and look forward to working with the team on future projects.”',
    img: 'https://i.imgur.com/2GVbF8D.jpg',
    name: 'Vladimir Putin',
    designation: 'President',
    company: 'Russia',
  },
  {
    caption:
      '“Kingba Tech was a great partner as we rebuilt our website. They understood our vision, provided useful counsel, and executed our needs quickly and professionally. We are thrilled with the result and look forward to working with the team on future projects.”',
    img: 'https://i.imgur.com/8w0MAC9.jpg',
    name: 'Elon Musk',
    designation: 'CEO',
    company: 'Tesla',
  },
  {
    caption:
      '“Kingba Tech was a great partner as we rebuilt our website. They understood our vision, provided useful counsel, and executed our needs quickly and professionally. We are thrilled with the result and look forward to working with the team on future projects.”',
    img: 'https://i.imgur.com/9cJImhp.jpg',
    name: 'Bill Gates',
    designation: 'Founder & CEO',
    company: 'Microsoft',
  },
  {
    caption:
      '“Kingba Tech was a great partner as we rebuilt our website. They understood our vision, provided useful counsel, and executed our needs quickly and professionally. We are thrilled with the result and look forward to working with the team on future projects.”',
    img: 'https://i.imgur.com/XvA6rQB.jpg',
    name: 'Jeff Bezos',
    designation: 'CEO',
    company: 'Amazon',
  },
];

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper';

const Slider = () => {
  return (
    <Grid sx={{ width: '100%', maxWidth: '1080px' }}>
      <Swiper
        centeredSlides={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        className={styles.mySwiper}
        breakpoints={{
          // when window width is >= 640px
          359: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1440: {
            slidesPerView: 1,
          },
          2160: {
            slidesPerView: 1,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className='styles.slider'>
            <Grid
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: '.5rem', md: '2rem' },
                padding: { xs: '0 1rem', md: '0 2rem' },
                
              }}
            >
              <FormatQuoteIcon
                sx={{
                  width: { xs: 100, md: 120 },
                  height: { xs: 110, md: 130 },
                  color: '#004581',
                }}
              />
              <Typography
                color='#141414'
                variant='h2'
                fontSize={{ xs: '1.2rem', md: '1.5rem' }}
                fontWeight='300'
                lineHeight='2rem'
                fontFamily='DM Sans, sans-serif;'
                letterSpacing='-.03em'
                textAlign='center'
                mt={{xs: 'none', md: 3}}
              >
                {testimonial.caption}
              </Typography>
              <Grid
                mb={5}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1.5rem',
                }}
              >
                <Avatar src={testimonial.img} sx={{ width: 80, height: 80 }} />
                <Stack direction='column' >
                  <Typography
                    color='#141414'
                    variant='h2'
                    fontWeight='500'
                    fontSize={{ xs: '1.2rem', md: '1.5rem' }}
                    fontFamily='DM Sans, sans-serif;'
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: '400',
                      color: '#141414',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      textTransform: 'capitalize',
                      fontFamily: 'DM Sans, sans-serif;',
                    }}
                  >
                    {testimonial.designation}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: '400',
                      color: '#141414',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      textTransform: 'capitalize',
                      fontFamily: 'DM Sans, sans-serif;',
                    }}
                  >
                    {testimonial.company}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

export default Slider;
