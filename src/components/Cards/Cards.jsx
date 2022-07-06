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
    slug: 'lapcart-bd',
    img: 'https://i.imgur.com/o6UgHPZ.jpg',
    title: 'LapCart',
    description:
      'LapCart is an e-commerce initiative where people can purchase original used laptop at affordable price.',
    project: '/projects/lapcart',
  },
  {
    slug: 'ted-web',
    img: 'https://i.imgur.com/iFK2GQo.jpg',
    title: 'Ted BD',
    description:
      'Ted BD is an e-commerce platform in Bangladesh that aims to provide pure food and fashion items to its consumers.',
    project: '/projects/ted_bd',
  },
  {
    slug: 'mng-hub',
    img: 'https://i.imgur.com/5XrTy4w.jpg',
    title: 'Management Hub',
    description:
      'ManagementHub is a professional association for organizational scholars to publish empirical research that tests, extends, or builds management theory and contributes to management practice.',
    project: '/projects/management_hub',
  },
  {
    slug: 'coming_soon',
    img: 'https://i.imgur.com/sYMrhr2.jpg',
    title: 'Coming Soon',
    description:
      'Under construction :) Please hold on, we will be available real soon.',
    project: '/projects/coming_soon',
  },
];
const digitalcontent = [
  {
    slug: 'chapai_aam',
    img: 'https://i.imgur.com/cJ2iE5u.jpg',
    title: 'চাপাই আম বাগান',
    description:
      'চাপাই আম বাগান is a fresh and hygienic Mango supplier all over Bangladesh.',
    project: '/projects/chapai_aam',
  },
  {
    slug: 'organic_foods',
    img: 'https://i.imgur.com/0yhjdiV.jpg',
    title: 'Organic Foods BD',
    description:
      'Organic Foods BD is a fresh and hygienic food supplier all over Bangladesh.',
    project: '/projects/organic_foods',
  },
  {
    slug: 'outfitter_boutiques',
    img: 'https://i.imgur.com/6tk5b5I.jpg',
    title: 'Outfitter Boutiques',
    description:
      'Outfitter Boutiques is a Bangladeshi clothing brand that sells custom-made ladies dresses such as sarees, kurtis, pajamas, couple sets, and western styles.',
    project: '/projects/outfitter_digital',
  },
  {
    slug: 'ted_digital',
    img: 'https://i.imgur.com/iFK2GQo.jpg',
    title: 'Ted BD',
    description:
      'Ted BD is an e-commerce platform in Bangladesh that aims to provide pure food and fashion items to its consumers.',
    project: '/projects/ted_digital',
  },
];
const designcontent = [
  {
    slug: 'magnocart_rajshahi',
    img: 'https://i.imgur.com/j9sgIZ0.jpg',
    title: 'MangoCart Rajshahi',
    description:
      'MangoCart Rajshahi is a startup for safe and pure foods in Bangladesh.',
    project: '/projects/magnocart_rajshahi',
  },
  {
    slug: 'ted_design',
    img: 'https://i.imgur.com/iFK2GQo.jpg',
    title: 'Ted BD',
    description:
      'Ted BD is an e-commerce platform in Bangladesh that aims to provide pure food and fashion items to its consumers.',
    project: '/projects/ted_design',
  },
  {
    slug: 'outfitter_design',
    img: 'https://i.imgur.com/6tk5b5I.jpg',
    title: 'Outfitter Boutiques',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
    project: '/projects/outfitter_boutiques',
  },
  {
    slug: 'lapcart_design',
    img: 'https://i.imgur.com/o6UgHPZ.jpg',
    title: 'LapCart',
    description:
      'LapCart is an e-commerce initiative where people can purchase original used laptop at affordable price.',
    project: '/projects/lapcart_design',
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
              maxHeight: 660,
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
              <Link href={web.project}>
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
              maxHeight: 660,
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
              <Link href={content.project}>
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
              maxHeight: 660,
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
              <Link href={design.project}>
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
