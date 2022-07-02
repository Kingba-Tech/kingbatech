import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@mui/material';

import Link from 'next/link';

const webcontent = [
  {
    id: 1,
    img: 'https://i.imgur.com/o6UgHPZ.jpg',
    title: 'LapCart',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    id: 2,
    img: 'https://i.imgur.com/clDL4C4.png',
    title: 'TED BD',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    id: 3,
    img: 'https://i.imgur.com/wV1kaUW.png',
    title: 'Management Hub',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    id: 4,
    img: 'https://i.imgur.com/ZX2WvdT.png',
    title: 'MangoCart',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
];
const digitalcontent = [
  {
    id: 5,
    img: 'https://i.imgur.com/AeKImO4.png',
    title: 'LapCart',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    id: 6,
    img: 'https://i.imgur.com/6uz4niQ.jpg',
    title: 'TED BD',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    id: 7,
    img: 'https://i.imgur.com/h4vKkDS.jpg',
    title: 'Management Hub',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    id: 8,
    img: 'https://i.imgur.com/10aMHVS.jpg',
    title: 'MangoCart',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
];
const designcontent = [
  {
    id: 9,
    img: 'https://i.imgur.com/6jl9R8k.jpg',
    title: 'LapCart',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    id: 10,
    img: 'https://i.imgur.com/4E4QBii.png',
    title: 'TED BD',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    id: 11,
    img: 'https://i.imgur.com/C2v26JL.png',
    title: 'Management Hub',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    id: 12,
    img: 'https://i.imgur.com/OSa49QI.png',
    title: 'MangoCart',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
];

export const WebCards = () => {
  return (
    <Grid maxWidth spacing>
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
        {webcontent.map((web, index) => (
          <Card
            md={6}
            xs={12}
            key={index}
            item
            sx={{
              maxWidth: 510,
              maxHeight: 560,
              margin: '1rem 0',
              borderRadius: '.5rem',
            }}
          >
            <CardMedia
              component='img'
              image={web.img}
              alt='LapCart_BD'
              sx={{
                borderRadius: '.8rem',
                transform: 'scale(.98)',
                '&:hover': {
                  transform: 'scale(1)',
                  transition: 'all .5s',
                  borderRadius: '.8rem',
                },
                height: { xs: 250, md: 360 },
              }}
            />
            <CardContent>
              <Typography
                fontFamily='DM Sans, sans serif;'
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                gutterBottom
                variant='h5'
                component='div'
                fontWeight={{ xs: '500', md: '600' }}
              >
                {web.title}
              </Typography>
              <Typography
                fontFamily='DM Sans, sans serif;'
                variant='h6'
                fontSize='1.1rem'
                color='#000000'
                fontWeight={{ xs: '400', md: '500' }}
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                {web.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={'/projects/' + web.id}>
                <Button
                  variant='outlined'
                  color='btnColor'
                  sx={{
                    fontSize: { xs: '.9rem', md: '1rem' },
                    fontWeight: 500,
                    marginTop: { xs: '-.8rem', md: 'none' },
                    marginBottom: { xs: '.5rem' },
                    marginLeft: { xs: '.5rem' },
                  }}
                  size='small'
                >
                  Read More
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};
export const DigitalCards = () => {
  return (
    <Grid maxWidth spacing>
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
        {digitalcontent.map((content, index) => (
          <Card
            md={6}
            xs={12}
            key={index}
            item
            sx={{
              maxWidth: 510,
              maxHeight: 560,
              margin: '1rem 0',
              borderRadius: '.5rem',
            }}
          >
            <CardMedia
              component='img'
              image={content.img}
              alt='LapCart_BD'
              sx={{
                borderRadius: '.8rem',
                transform: 'scale(.98)',
                '&:hover': {
                  transform: 'scale(1)',
                  transition: 'all .5s',
                  borderRadius: '.8rem',
                },
                height: { xs: 250, md: 360 },
              }}
            />
            <CardContent>
              <Typography
                fontFamily='DM Sans, sans serif;'
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                gutterBottom
                variant='h5'
                component='div'
                fontWeight={{ xs: '500', md: '600' }}
              >
                {content.title}
              </Typography>
              <Typography
                fontFamily='DM Sans, sans serif;'
                variant='h6'
                fontSize='1.1rem'
                color='#000000'
                fontWeight={{ xs: '400', md: '500' }}
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                {content.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant='outlined'
                color='btnColor'
                sx={{
                  fontSize: { xs: '.9rem', md: '1rem' },
                  fontWeight: 500,
                  marginTop: { xs: '-.8rem', md: 'none' },
                  marginBottom: { xs: '.5rem' },
                  marginLeft: { xs: '.5rem' },
                }}
                size='small'
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};
export const DesignCards = () => {
  return (
    <Grid maxWidth spacing>
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
        {designcontent.map((design, index) => (
          <Card
            md={6}
            xs={12}
            key={index}
            item
            sx={{
              maxWidth: 510,
              maxHeight: 560,
              margin: '1rem 0',
              borderRadius: '.8rem',
            }}
          >
            <CardMedia
              component='img'
              image={design.img}
              alt='LapCart_BD'
              sx={{
                borderRadius: '.8rem',
                transform: 'scale(.98)',
                '&:hover': {
                  transform: 'scale(1)',
                  transition: 'all .5s',
                  borderRadius: '.8rem',
                },
                height: { xs: 250, md: 360 },
              }}
            />
            <CardContent>
              <Typography
                fontFamily='DM Sans, sans serif;'
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                gutterBottom
                variant='h5'
                component='div'
                fontWeight={{ xs: '500', md: '600' }}
              >
                {design.title}
              </Typography>
              <Typography
                fontFamily='DM Sans, sans serif;'
                variant='h6'
                fontSize='1.1rem'
                color='#000000'
                fontWeight={{ xs: '400', md: '500' }}
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                {design.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant='outlined'
                color='btnColor'
                sx={{
                  fontSize: { xs: '.9rem', md: '1rem' },
                  fontWeight: 500,
                  marginTop: { xs: '-.8rem', md: 'none' },
                  marginBottom: { xs: '.5rem' },
                  marginLeft: { xs: '.5rem' },
                }}
                size='small'
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};
