import { Grid, Container, Typography, Box, Button } from '@mui/material';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

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
        fontWeight='600'
        color='#181818'
        fontSize={{ xs: '2.5rem', md: '4.5rem' }}
        fontFamily='DM Sans, sans serif;'
      >
        Careers
        <hr width='100px' className={styles.projectshr} color='#2297FF' />
      </Typography>
      <Typography
        fontFamily='DM Sans, sans serif;'
        variant='p'
        fontSize={{ xs: '1.3rem', md: '1.75rem' }}
        fontWeight='500'
        lineHeight='3rem'
        color='#141414'
        marginTop='.5rem'
        textAlign={{ xs: 'center' }}
      >
        We believe in building a family of nurturing members, connected by{' '}
        <br /> the love for creativity and fun. Join our team today!
      </Typography>
      <Grid sx={{ width: '100%', maxWidth: 1080, mt: 4 }}>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: '.5rem', md: '2rem' },
          }}
        >
          <Box
            mt={4}
            sx={{
              width: 540,
              height: 405,
              backgroundColor: '#F3F3F3',
              borderRadius: '.7em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <Typography
              fontFamily='DM Sans, sans serif;'
              fontSize={{ xs: '2rem', md: '2.2rem' }}
              variant='h5'
              component='div'
              fontWeight='600'
              color='#141414'
            >
              PHP Developer
            </Typography>
            <Typography
              fontFamily='DM Sans, sans serif;'
              variant='p'
              fontSize='1.1rem'
              fontWeight='400'
              color='#141414'
            >
              Full time
            </Typography>
            <Typography
              fontFamily='DM Sans, sans serif;'
              variant='p'
              fontSize='1.1rem'
              fontWeight='400'
              color='#141414'
            >
              Deadline: Aug 30, 2022
            </Typography>
            <Link href='/careers/php-developer'>
              <Button
                variant='contained'
                sx={{
                  padding: '.8rem 2.5rem',
                  mt: 3,
                }}
              >
                Details
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
