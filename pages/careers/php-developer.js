import { Grid, Container, Typography, Box, Button } from '@mui/material';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const requirements = [
  'Ability to customize and develop wordpress themes and plugins',
  'Experience with eCommerce systems',
  'Experience with Vue.js and Laravel framework',
  'Strong Understanding on PHP',
  'Skills Required: HTML, CSS, Bootstrap/Tailwind, JavaScript, jQuery, Vue.js, PHP, Laravel, MySQL, AJAX, JSON, API integration',
  'You should be able to work with design tools like Figma / Adobe XD',
  'Proven work experience with wordpress and Laravel projects - a portfolio especially an e-commerce site is required.',
];

const PHPDev = () => {
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
        fontSize={{ xs: '2.5rem', md: '4rem' }}
        fontFamily='DM Sans, sans serif;'
        mb={1}
      >
        PHP Developer
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
        Full time
        <hr width='100px' className={styles.projectshr} color='#2297FF' />
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
            mt={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              fontFamily='DM Sans, sans serif;'
              variant='p'
              fontSize={{ xs: '1.3rem', md: '1.6rem' }}
              fontWeight='400'
              lineHeight='3rem'
              color='#141414'
            >
              Kingba Tech is looking for a PHP Developer in the web development
              department. Creative design should be their forte and they should
              have the habit of coming up with catchy & effective progress. The
              candidate must possess excellent WordPress skill, have a strong
              grip over Laravel and especially in the WordPress Development with
              a clear understanding.
            </Typography>
            <Box sx={{ mt: 5, mb: 2 }}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    fontFamily='DM Sans, sans serif;'
                    fontSize={{ xs: '2rem', md: '2.5rem' }}
                    variant='h5'
                    component='div'
                    fontWeight='600'
                    color='#141414'
                  >
                    Job Responsibilities
                  </Typography>

                  <ul style={{ marginLeft: '1.5rem' }}>
                    {requirements.map((requirement, index) => (
                      <li
                        key={index}
                        style={{
                          fontSize: '1.8rem',
                          color: '#004581',
                          padding: '1rem 0',
                        }}
                      >
                        <Typography
                          sx={{
                            color: '#141414',
                            fontSize: { xs: '1.3rem', md: '1.6rem' },
                          }}
                        >
                          {requirement}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  <Typography
                    fontFamily='DM Sans, sans serif;'
                    fontSize={{ xs: '2rem', md: '2.5rem' }}
                    variant='h5'
                    component='div'
                    fontWeight='600'
                    color='#141414'
                  >
                    Application Deadline
                  </Typography>
                  <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li
                      style={{
                        fontSize: '1.8rem',
                        color: '#004581',
                        padding: '1rem 0',
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#141414',
                          fontSize: { xs: '1.3rem', md: '1.6rem' },
                        }}
                      >
                        Deadline: Aug 30, 2022
                      </Typography>
                    </li>
                  </ul>
                  <Typography
                    fontFamily='DM Sans, sans serif;'
                    variant='p'
                    fontWeight='400'
                    sx={{
                      color: '#141414',
                      fontSize: { xs: '1.3rem', md: '1.6rem' },
                    }}
                  >
                    If you are interested, please mail us at
                    <Link href='mailto:hello@kingbatech.com'>
                      <span
                        style={{
                          color: '#004581',
                          borderBottom: '2px solid',
                          cursor: 'pointer',
                          marginLeft: '.3rem'
                        }}
                      >
                        hello@kingbatech.com
                      </span>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PHPDev;
