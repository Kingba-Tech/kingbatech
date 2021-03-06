import React from 'react';
import { Container, Grid, Avatar, Stack, Typography, Box } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


const teams = [
  {
    name: 'Kawsar Alam',
    title: 'Developer',
    img: 'https://i.imgur.com/VQ7Icmx.jpg',
    fb: 'https://facebook.com/alienkawsar',
    twitter: 'https://twitter.com/alienkawsar',
    email: 'k.alam13548@gmail.com',
    github: 'https://github.com/alienkawsar',
  },
  {
    name: 'Al-Amin',
    title: 'Manager',
    img: 'https://i.imgur.com/VQ7Icmx.jpg',
    fb: 'https://facebook.com/alienkawsar',
    twitter: 'https://twitter.com/alienkawsar',
    email: 'k.alam13548@gmail.com',
    github: 'https://github.com/alienkawsar',
  },
  {
    name: 'Hasan Mahmud',
    title: 'Designer',
    img: 'https://i.imgur.com/VQ7Icmx.jpg',
    fb: 'https://facebook.com/alienkawsar',
    twitter: 'https://twitter.com/alienkawsar',
    email: 'k.alam13548@gmail.com',
    github: 'https://github.com/alienkawsar',
  },
  {
    name: 'Kawsar Alam',
    title: 'Developer',
    img: 'https://i.imgur.com/VQ7Icmx.jpg',
    fb: 'https://facebook.com/alienkawsar',
    twitter: 'https://twitter.com/alienkawsar',
    email: 'k.alam13548@gmail.com',
    github: 'https://github.com/alienkawsar',
  },
  {
    name: 'Kawsar Alam',
    title: 'Developer',
    img: 'https://i.imgur.com/VQ7Icmx.jpg',
    fb: 'https://facebook.com/alienkawsar',
    twitter: 'https://twitter.com/alienkawsar',
    email: 'k.alam13548@gmail.com',
    github: 'https://github.com/alienkawsar',
  },
  {
    name: 'Kawsar Alam',
    title: 'Developer',
    img: 'https://i.imgur.com/VQ7Icmx.jpg',
    fb: 'https://facebook.com/alienkawsar',
    twitter: 'https://twitter.com/alienkawsar',
    email: 'k.alam13548@gmail.com',
    github: 'https://github.com/alienkawsar',
  },
  {
    name: 'Kawsar Alam',
    title: 'Developer',
    img: 'https://i.imgur.com/VQ7Icmx.jpg',
    fb: 'https://facebook.com/alienkawsar',
    twitter: 'https://twitter.com/alienkawsar',
    email: 'k.alam13548@gmail.com',
    github: 'https://github.com/alienkawsar',
  },
];

const OurStory = () => {
  return (
    <Container maxWidth sx={{ backgroundColor: '#F2F2F2', minHeight: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width:'100%', maxWidth: 1080}} py={2}>
        <Typography
          pt={4}
          variant='h2'
          fontWeight={{ xs: '400', md: '500' }}
          color='#181818'
          opacity='0.9'
          textAlign='center'
          fontSize={{ xs: '1.8rem', md: '2.5rem' }}
        >
          Who we are?
        </Typography>
        <hr
          height='5px'
          width='240px'
          textAlign='center'
          padding='20px 0px'
          color='#181818'
        />
        <Grid
          mt={3}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '2rem',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-start'
            }}
          >
            <Typography
              color='#181818'
              variant='h2'
              fontWeight='500'
              fontSize={{ xs: '1.5rem', md: '2rem' }}
              mb={2}
            >
              Our Story
            </Typography>
            <Typography
              textAlign='center'
              color='#141414'
              variant='h6'
              fontWeight={{ xs: '300', md: '400' }}
              fontSize='1.1rem'
              mb={{xs: 2, sm:'none'}}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              aliquid, quibusdam nulla laboriosam obcaecati architecto possimus
              molestiae voluptate laudantium non eveniet libero vel optio
              voluptatem, harum illo accusantium nihil totam?
            </Typography>
          </Grid>
          <Grid>
            <Typography
              color='#181818'
              variant='h2'
              fontWeight='500'
              fontSize={{ xs: '1.5rem', md: '2rem' }}
              textAlign='center'
            >
              Our Creative Team
            </Typography>
            <Grid
              my={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2',
                flexWrap: 'wrap',
                gap: '2em',
              }}
            >
              {teams.map((team, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    background: '#DEDEDE',
                    '&:hover': {
                      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                      transition: '.4s all ease-in-out',
                    },
                  }}
                  height={360}
                  width={300}
                >
                  <Avatar src={team.img} sx={{ height: 100, width: 100 }} />
                  <Typography
                    color='#141414'
                    variant='h2'
                    fontWeight={{ xs: '500', md: '700' }}
                    fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                  >
                    {team.name}
                  </Typography>
                  <Typography
                    color='#141414'
                    variant='h6'
                    fontWeight={{ xs: '300', md: '400' }}
                    fontSize='1.1rem'
                  >
                    {team.title}
                  </Typography>
                  <Stack
                    direction='row'
                    spacing
                    sx={{ justifySelf: 'flex-end' }}
                  >
                    <Avatar
                      sx={{
                        backgroundColor: '#6F7378',
                        '&:hover': {
                          backgroundColor: '#43464b',
                          transition: '0.3s ease-out',
                        },
                      }}
                    >
                      <FacebookRoundedIcon
                        style={{
                          fill: '#f5f5f7',
                          '&:hover': { fill: '#ffffff', cursor: 'pointer' },
                        }}
                      />
                    </Avatar>
                    <Avatar
                      sx={{
                        backgroundColor: '#6F7378',
                        '&:hover': {
                          backgroundColor: '#43464b',
                          transition: '0.3s ease-out',
                        },
                      }}
                    >
                      <TwitterIcon
                        style={{
                          fill: '#f5f5f7',
                          '&:hover': { fill: '#ffffff', cursor: 'pointer' },
                        }}
                      />
                    </Avatar>
                    <Avatar
                      sx={{
                        backgroundColor: '#6F7378',
                        '&:hover': {
                          backgroundColor: '#43464b',
                          transition: '0.3s ease-out',
                        },
                      }}
                    >
                      <LinkedInIcon
                        style={{
                          fill: '#f5f5f7',
                          '&:hover': { fill: '#ffffff', cursor: 'pointer' },
                        }}
                      />
                    </Avatar>
                    <Avatar
                      sx={{
                        backgroundColor: '#6F7378',
                        '&:hover': {
                          backgroundColor: '#43464b',
                          transition: '0.3s ease-out',
                        },
                      }}
                    >
                      <EmailIcon
                        style={{
                          fill: '#f5f5f7',
                          '&:hover': { fill: '#ffffff', cursor: 'pointer' },
                        }}
                      />
                    </Avatar>
                  </Stack>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurStory;
