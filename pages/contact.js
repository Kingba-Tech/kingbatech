import { useState } from 'react';
import {
  Grid,
  Box,
  TextField,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import styles from '../styles/Home.module.css';

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
        Contact us
        <hr width='100px' className={styles.projectshr} color='#2297FF' />
      </Typography>
      <Typography
        fontFamily='DM Sans, sans serif;'
        variant='p'
        fontSize={{ xs: '1.3rem', md: '1.75rem' }}
        fontWeight='500'
        lineHeight='2rem'
        color='#141414'
        marginTop='.5rem'
        textAlign={{ xs: 'center' }}
      >
        We would love to hear your requirements and work seamlessly together
      </Typography>

      <Grid
        sx={{
          width: '100%',
          maxWidth: 1080,
          mt: { xs: 5, md: 10 },
          minHeight: 700,
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: '.5rem', md: '2rem' },
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                fontFamily='DM Sans, sans serif;'
                fontSize={{ xs: '2rem', md: '2.5rem' }}
                gutterBottom
                variant='h5'
                component='div'
                fontWeight='600'
                color='#000000'
                textAlign={{ xs: 'center', md: 'start' }}
              >
                Send us a message
              </Typography>
              <Box
                component='form'
                noValidate
                autoComplete='off'
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                onSubmit={handleSubmit}
              >
                <TextField
                  required
                  id='name'
                  label='Name'
                  type='text'
                  variant='outlined'
                  value={contactData.name}
                  onChange={(e) =>
                    setContactData({ ...contactData, name: e.target.value })
                  }
                  sx={{
                    width: { xs: '100%', md: 'calc(100% - 100px)' },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '.5em',
                    },
                    marginTop: '3rem',
                  }}
                />
                <TextField
                  required
                  id='email'
                  label='Email'
                  type='email'
                  variant='outlined'
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                  sx={{
                    width: { xs: '100%', md: 'calc(100% - 100px)' },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '.5em',
                    },
                    marginTop: '3rem',
                  }}
                />
                <TextField
                  type='text'
                  id='company'
                  label='Company (Optional)'
                  variant='outlined'
                  value={contactData.company}
                  onChange={(e) =>
                    setContactData({ ...contactData, company: e.target.value })
                  }
                  sx={{
                    width: { xs: '100%', md: 'calc(100% - 100px)' },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '.5em',
                    },
                    marginTop: '3rem',
                  }}
                />
                <TextField
                  type='text'
                  required
                  id='message'
                  label='Message'
                  variant='outlined'
                  value={contactData.message}
                  onChange={(e) =>
                    setContactData({ ...contactData, message: e.target.value })
                  }
                  sx={{
                    width: { xs: '100%', md: 'calc(100% - 100px)' },
                    height: 205,

                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '.5em',
                      height: 200,
                    },
                    marginTop: '3rem',
                  }}
                />

                <Button
                  type='submit'
                  variant='contained'
                  sx={{
                    padding: '.8rem 2rem',
                    alignSelf: { xs: 'none', md: 'flex-start' },
                    marginTop: '2rem',
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
            <Grid
            mt={{xs: 5, md: 0}}
              item
              xs={12}
              md={6}
              sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}
            >
              <Typography
                fontFamily='DM Sans, sans serif;'
                fontSize={{ xs: '2rem', md: '2.5rem' }}
                gutterBottom
                variant='h5'
                component='div'
                fontWeight='600'
                color='#000000'
                textAlign={{ xs: 'center', md: 'start' }}
              >
                Reach us
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '3rem',
                }}
              >
                <Stack direction='column' spacing>
                  <Typography
                    color='#181818'
                    variant='h2'
                    fontWeight='500'
                    fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                    mb={1}
                    sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}
                  >
                    Email
                  </Typography>
                  <Typography
                    component='a'
                    href='mailto: hello@kingbatech.com '
                    color='#181818'
                    variant='h6'
                    fontWeight={{ xs: '300', md: '400' }}
                    fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                    sx={{
                      marginTop: '-1rem',
                      alignSelf: { xs: 'center', md: 'flex-start' },
                    }}
                  >
                    hello@kingbatech.com
                  </Typography>
                </Stack>
                <Stack direction='column' spacing>
                  <Typography
                    color='#181818'
                    variant='h2'
                    fontWeight='500'
                    fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                    mb={1}
                    sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    component='a'
                    href='tel: +8801771113548 '
                    color='#181818'
                    variant='h6'
                    fontWeight={{ xs: '300', md: '400' }}
                    fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                    sx={{
                      marginTop: '-1rem',
                      alignSelf: { xs: 'center', md: 'flex-start' },
                    }}
                  >
                    hello@kingbatech.com
                  </Typography>
                </Stack>
                <Stack direction='column' spacing>
                  <Typography
                    color='#181818'
                    variant='h2'
                    fontWeight='500'
                    fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                    mb={1}
                    sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}
                  >
                    Address
                  </Typography>
                  <Typography
                    color='#181818'
                    variant='h6'
                    fontWeight={{ xs: '300', md: '400' }}
                    fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                    sx={{
                      marginTop: '-1rem',
                      alignSelf: { xs: 'center', md: 'flex-start' },
                    }}
                  >
                    hello@kingbatech.com
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
