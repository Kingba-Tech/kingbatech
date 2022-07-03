import { Grid, Container, Typography } from '@mui/material';
import styles from '../styles/Home.module.css';

const About = () => {
  return (
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
        Welcome to us.
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
        ></Grid>
      </Grid>
    </Container>
  );
};

export default About;
