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
import Navbar from '../../src/components/Navbar/Navbar';
import Footer from '../../src/components/Footer/Footer';

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
        }}
      >
        <Grid
          sx={{
            width: '100%',
            maxWidth: 1080,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography>This is the project homepage.</Typography>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default ProjectsHome;
