import React from 'react';
import './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { SingleCard } from '../Cards/Cards';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Avatar, CardHeader, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const img =
  'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination, Autoplay, FreeMode } from 'swiper';

const Slider = () => {
  return (
    <Grid marginLeft={{ xs: '1rem', sm: '2.5rem', md: 'none' }}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className='mySwiper'
        breakpoints={{
          // when window width is >= 640px
          359: {
            width: 359,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide className='slider'>
          <Card sx={{ maxWidth: 340, borderRadius: '.5em' }}>
            <CardHeader
              avatar={<Avatar src={img} />}
              title='Shrimp and Chorizo Paella'
              subheader='September 14, 2016'
            />
            <CardMedia
              component='img'
              width='320'
              objectFit='cover'
              height='150'
              image={img}
              alt='Page_View'
            />
            <CardContent>
              <Typography variant='body' color='#141414'>
                This impressive paella is a perfect party dish and a fun meal to
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ color: '#141414' }} outlined>
                Visit Site
              </Button>
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='slider'>
          <Card sx={{ maxWidth: 340, borderRadius: '.5em' }}>
            <CardHeader
              avatar={<Avatar src={img} />}
              title='Shrimp and Chorizo Paella'
              subheader='September 14, 2016'
            />
            <CardMedia
              component='img'
              width='320'
              objectFit='cover'
              height='150'
              image={img}
              alt='Page_View'
            />
            <CardContent>
              <Typography variant='body' color='#141414'>
                This impressive paella is a perfect party dish and a fun meal to
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ color: '#141414' }} outlined>
                Visit Site
              </Button>
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='slider'>
          <Card sx={{ maxWidth: 340, borderRadius: '.5em' }}>
            <CardHeader
              avatar={<Avatar src={img} />}
              title='Shrimp and Chorizo Paella'
              subheader='September 14, 2016'
            />
            <CardMedia
              component='img'
              width='320'
              objectFit='cover'
              height='150'
              image={img}
              alt='Page_View'
            />
            <CardContent>
              <Typography variant='body' color='#141414'>
                This impressive paella is a perfect party dish and a fun meal to
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ color: '#141414' }} outlined>
                Visit Site
              </Button>
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='slider'>
          <Card sx={{ maxWidth: 340, borderRadius: '.5em' }}>
            <CardHeader
              avatar={<Avatar src={img} />}
              title='Shrimp and Chorizo Paella'
              subheader='September 14, 2016'
            />
            <CardMedia
              component='img'
              width='320'
              objectFit='cover'
              height='150'
              image={img}
              alt='Page_View'
            />
            <CardContent>
              <Typography variant='body' color='#141414'>
                This impressive paella is a perfect party dish and a fun meal to
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ color: '#141414' }} outlined>
                Visit Site
              </Button>
            </CardActions>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Grid>
  );
};

export default Slider;
