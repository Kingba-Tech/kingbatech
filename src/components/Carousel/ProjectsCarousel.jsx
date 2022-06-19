import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  Card,
  Grid,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Carousels = () => {
  return (
    <Carousel
      arrows={false}
      additionalTransfrom={0}
      autoPlay
      autoPlaySpeed={2500}
      centerMode={true}
      className=''
      containerClass='container-with-dots'
      dotListClass=''
      draggable
      ssr={true}
      focusOnSelect={true}
      infinite
      itemClass=''
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 465,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={true}
      sliderClass=''
      slidesToSlide={3}
      swipeable
    >
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Card item sx={{ maxWidth: 340 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='textColor' size='small'>
            Share
          </Button>
        </CardActions>
      </Card>
    </Carousel>
  );
};

export default Carousels;

// export const SimpleCard = () => {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label='settings'>
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title='Shrimp and Chorizo Paella'
//         subheader='September 14, 2016'
//       />
//       <CardMedia
//         component='img'
//         height='194'
//         image='/static/images/cards/paella.jpg'
//         alt='Paella dish'
//       />
//       <CardContent>
//         <Typography variant='body2' color='text.secondary'>
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the
//           mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button color='primary' outlined>
//           Visit Site
//         </Button>
//         <Button color='secondary' outlined>
//           Share
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };
