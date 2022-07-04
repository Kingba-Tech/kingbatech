import {
  Grid,
  Container,
  Typography,
  Box,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import styles from '../../styles/Home.module.css';
import CircleIcon from '@mui/icons-material/Circle';

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
                  <List
                    sx={{marginLeft: '2rem'}}
                  >
                    {requirements.map((requirement, index) => (
                      <ListItem key={index} >
                        <ListItemIcon>
                          <CircleIcon
                            sx={{ fontSize: '.8rem', color: '#004581' }}
                          />
                        </ListItemIcon>
                        <Typography
                          sx={{
                            marginLeft: '-2rem',
                            fontFamily: 'DM Sans, sans serif;',
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                            fontWeight: '400',
                           lineHeight: '2.5rem',
                            color: '#141414',
                          }}
                        >
                          {requirement}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
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
