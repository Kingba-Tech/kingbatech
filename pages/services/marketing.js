import {
  Grid,
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const style = {
  width: '100%',
  color: '#181818',
  variant: 'h6',
  fontWeight: { xs: '300', md: '400' },
  fontSize: { xs: '1.1rem', md: '1.3rem' },
};

const Marketing = () => {
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
        fontSize={{ xs: '2.5rem', md: '4.2rem' }}
        fontFamily='DM Sans, sans serif;'
        textAlign='center'
      >
        Digital marketing
        <hr width='80px' className={styles.projectshr} color='#2297FF' />
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
        Strategic, performance-driven, and comprehensive digital marketing{' '}
        <br />
        solutions for your brand.
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
          <Box sx={{ width: '100%' }} mt={3}>
            <img
              src='https://i.imgur.com/q7TNS7r.jpg'
              alt='programmer'
              width='100%'
              style={{
                maxHeight: '450px',
                height: '100%',
                width: '100%',
                borderRadius: '.5em',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Grid
            display='flex'
            flexDirection='column'
            alignItems='center'
            padding={{ xs: '1rem 1.3rem', md: '1rem 3rem' }}
            gap='1.5rem'
          >
            <Typography
              fontFamily='DM Sans, sans serif;'
              variant='p'
              fontSize={{ xs: '1.3rem', md: '1.6rem' }}
              fontWeight='400'
              lineHeight='3rem'
              color='#141414'
            >
              With unique strategies resulting from out-of-the-box thinking, we
              create value for your brand by delivering exceptional experiences
              that work with your audience.
            </Typography>
            <Typography
              fontFamily='DM Sans, sans serif;'
              fontSize={{ xs: '2rem', md: '2.5rem' }}
              variant='h5'
              component='div'
              fontWeight='600'
              color='#141414'
              textAlign={{ xs: 'center', md: 'start' }}
              mt={3}
            >
              Our services include
            </Typography>
          </Grid>
          <Box
            width='100%'
            display='flex'
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent='space-around'
          >
            <Grid
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='flex-start'
            >
              <ul style={{ listStyle: 'none', width: '100%' }}>
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    Campaign management
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    Search engine marketing
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    Marketing strategy
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    Digital marketing
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    Audience research & segmentation
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    PPC online advertising
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    Community management
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
              </ul>
            </Grid>
            <Grid
              display='flex'
              flexDirection='column'
              alignItems='flex-start'
              mt={{ xs: '-1.5rem', md: 0 }}
            >
              <ul style={{ listStyle: 'none', width: '100%' }}>
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    Social media marketing
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    Social media strategy
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    Media strategy
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    Campaign strategy
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
                <li>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight='400'
                    fontSize={{ xs: '1.1rem', md: '1.2rem' }}
                    fontFamily='DM Sans, sans serif;'
                  >
                    SEO
                  </Typography>
                </li>
                <hr
                  width='100%'
                  style={{
                    height: '1px',
                    color: '#f3f3f3',
                    margin: '1rem 0',
                  }}
                />
              </ul>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Marketing;
