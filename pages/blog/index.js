import {
  Grid,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@mui/material';
import styles from '../../styles/Home.module.css';
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
        fontWeight='500'
        color='#181818'
        fontSize={{ xs: '1.5rem', md: '2.8rem' }}
        textAlign='center'
        fontFamily='DM Sans, sans serif;'
      >
        Blog
        <hr width='50px' className={styles.projectshr} color='#2297FF' />
      </Typography>
      <Grid sx={{ width: '100%', maxWidth: 1080, mt: 4 }}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: '.5rem', md: '2rem' },
            flexWrap: 'wrap',
          }}
        >
          <Grid>
            <Card
              sx={{
                maxWidth: 510,
                width: '100%',
                maxHeight: 560,
                height: '100%',
                margin: '1rem 0',
                borderRadius: '.5rem',
              }}
            >
              <Link href='/blog/branding'>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image='https://i.imgur.com/6eSpwCQ.jpg'
                    alt='Website_image'
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
                      Branding: Do I really need to hire an agency?
                    </Typography>
                    <Typography
                      fontFamily='DM Sans, sans serif;'
                      variant='h6'
                      fontSize='1rem'
                      color='#000000'
                      fontWeight='400'
                      sx={{ marginTop: '1rem' }}
                    >
                      Digital Marketing
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
          <Grid>
            <Card
              sx={{
                maxWidth: 510,
                width: '100%',
                maxHeight: 560,
                height: '100%',
                margin: '1rem 0',
                borderRadius: '.5rem',
              }}
            >
              <Link href='/blog/ui_ux'>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image='https://i.imgur.com/CdmMDPS.jpg'
                    alt='ui-ux_design'
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
                      Importance of website design to give your business its
                      unique voice
                    </Typography>
                    <Typography
                      fontFamily='DM Sans, sans serif;'
                      variant='h6'
                      fontSize='1rem'
                      color='#000000'
                      fontWeight='400'
                      sx={{ marginTop: '1rem' }}
                    >
                      UI/UX design
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
