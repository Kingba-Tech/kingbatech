import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Avatar, CardHeader, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import img from '../../assets/1.jpg';

const webcontent = [
  {
    img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'LapCart BD',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'TED BD',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'MangoCart',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
];
const digitalcontent = [
  {
    img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'LapCart BD',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'TED BD',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'MangoCart',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
];
const designcontent = [
  {
    img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'LapCart BD',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'TED BD',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
  {
    img: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'MangoCart',
    description:
      'TED BD is a online based mango store in Bangladesh. Which provides seasonal and pure foods.',
  },
];

export const WebCards = () => {
  return (
    <Grid gap={2} maxWidth spacing={{ xs: 1, md: 3 }}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {webcontent.map((web, index) => (
          <Card key={index} item sx={{ maxWidth: 340, margin: '1rem 0' }}>
            <CardMedia
              component='img'
              height='140'
              image={web.img}
              alt='LapCart_BD'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {web.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {web.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='outlined' color='textColor' size='small'>
                Visit Site
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};
export const DigitalCards = () => {
  return (
    <Grid gap={2} maxWidth spacing={{ xs: 1, md: 3 }}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {digitalcontent.map((digital, index) => (
          <Card key={index} item sx={{ maxWidth: 340, margin: '1rem 0' }}>
            <CardMedia
              component='img'
              height='140'
              image={digital.img}
              alt='LapCart_BD'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {digital.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {digital.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='outlined' color='textColor' size='small'>
                Content
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
    <Grid gap={2} maxWidth spacing={{ xs: 1, md: 3 }}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {designcontent.map((design, index) => (
          <Card key={index} item sx={{ maxWidth: 340, margin: '1rem 0' }}>
            <CardMedia
              component='img'
              height='140'
              image={design.img}
              alt='LapCart_BD'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {design.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {design.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='outlined' color='textColor' size='small'>
                View Content
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export const SingleCard = () => {
  <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={<Avatar sx={{ backgroundColor: 'red' }}>Image</Avatar>}
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title='Shrimp and Chorizo Paella'
      subheader='September 14, 2016'
    />
    <CardMedia
      component='img'
      width='340'
      objectFit='cover'
      height='194'
      image={img}
      alt='Paella dish'
    />
    <CardContent>
      <Typography variant='h6' color='#141414'>
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions>
      <Button color='#141414' outlined>
        Visit Site
      </Button>
      <Button color='#141414' outlined>
        Share
      </Button>
    </CardActions>
  </Card>;
};
