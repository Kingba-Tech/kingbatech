import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
} from '@mui/material';
import { projects } from '../api/projects';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar/Navbar';
import Footer from '../../src/components/Footer/Footer';

import styles from '../../styles/Home.module.css';

const ProjectsHome = () => {
  return (
    <>
      <Navbar />
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
          fontWeight='500'
          color='#181818'
          fontSize={{ xs: '1.5rem', md: '2.8rem' }}
          textAlign='center'
          fontFamily='DM Sans, sans serif;'
        >
          Some of our hand-picked work
          <hr className={styles.projectshr} color='#2297FF' />
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
            {projects.map((project, index) => (
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
                  image={project.img}
                  alt={project.slug}
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
                    {project.title}
                  </Typography>
                  <Typography
                    fontFamily='DM Sans, sans serif;'
                    variant='h6'
                    fontSize='1.1rem'
                    color='#000000'
                    fontWeight={{ xs: '400', md: '500' }}
                    sx={{ display: { xs: 'none', md: 'block' } }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={'/projects/' + project.slug}>
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
      </Container>

      <Footer />
    </>
  );
};

export default ProjectsHome;
