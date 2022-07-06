import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Head from 'next/head'
import {
  Grid,
  Box,
  TextField,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import Slider from '../src/components/Slider/Slider';

import styles from '../styles/Home.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState(undefined);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault;

    emailjs
      .sendForm('kingbatech', 'kingbatech', form.current, 'Zng3r2XXkIatVP6bL')
      .then(() => {
        setStatus({ type: 'success' });
      })
      .catch((error) => {
        setStatus({ type: 'error', error });
        console.log(error);
      });

    setName('');
    setMessage('');
    setEmail('');
    setCompany('');
  };
  return (
    <>
      <Head>
        <title>Kingba Tech - Contact</title>
       
      </Head>
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
                  ref={form}
                  onSubmit={handleSubmit(sendEmail)}
                >
                  <TextField
                    name='name'
                    {...register('name', { required: true })}
                    id='name'
                    label='Name'
                    type='text'
                    variant='outlined'
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    sx={{
                      width: { xs: '100%', md: 'calc(100% - 100px)' },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '.5em',
                      },
                      marginTop: { xs: '1.5rem', md: '3rem' },
                    }}
                  />
                  {errors?.name && (
                    <span style={{ color: 'red' }}>Name is required</span>
                  )}
                  <TextField
                    name='email'
                    {...register('email', {
                      required: true,
                    })}
                    id='email'
                    label='Email'
                    type='email'
                    variant='outlined'
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    sx={{
                      width: { xs: '100%', md: 'calc(100% - 100px)' },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '.5em',
                      },
                      marginTop: { xs: '2rem', md: '3rem' },
                    }}
                  />
                  {errors?.email && (
                    <span style={{ color: 'red' }}>Email is required</span>
                  )}

                  <TextField
                    type='text'
                    name='company'
                    id='company'
                    label='Company (Optional)'
                    variant='outlined'
                    onChange={(event) => setCompany(event.target.value)}
                    value={company}
                    sx={{
                      width: { xs: '100%', md: 'calc(100% - 100px)' },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '.5em',
                      },
                      marginTop: { xs: '2rem', md: '3rem' },
                    }}
                  />
                  <TextField
                    type='text'
                    name='message'
                    {...register('message', { required: true })}
                    id='message'
                    label='Message'
                    variant='outlined'
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                    multiline
                    rows={6}
                    sx={{
                      width: { xs: '100%', md: 'calc(100% - 100px)' },

                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '.5em',
                      },
                      marginTop: { xs: '2rem', md: '3rem' },
                    }}
                  />
                  {errors?.message && (
                    <span style={{ color: 'red' }}>Message is required</span>
                  )}
                  {status?.type === 'success' && (
                    <Typography
                      mb={2}
                      color='green'
                      variant='h6'
                      fontWeight={{ xs: '300', md: '400' }}
                      fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                      sx={{
                        alignSelf: { xs: 'center', md: 'flex-start' },
                      }}
                    >
                      Your message has been sent. Thanks for contacting with us!
                    </Typography>
                  )}
                  {status?.type === 'error' && (
                    <Typography
                      mb={2}
                      color='red'
                      variant='h6'
                      fontWeight={{ xs: '300', md: '400' }}
                      fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                      sx={{
                        alignSelf: { xs: 'center', md: 'flex-start' },
                      }}
                    >
                      Sorry there is an error while sending the message.
                    </Typography>
                  )}
                  <Button
                    type='submit'
                    variant='contained'
                    value='Send'
                    sx={{
                      padding: '.8rem 2rem',
                      alignSelf: { xs: 'center', md: 'flex-start' },
                      marginTop: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
              <Grid
                mt={{ xs: 5, md: 0 }}
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
                    gap: '2rem',
                  }}
                >
                  <Stack direction='column'>
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
                      color='#004581'
                      variant='h6'
                      fontWeight={{ xs: '300', md: '400' }}
                      fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                      sx={{
                        alignSelf: { xs: 'center', md: 'flex-start' },
                      }}
                    >
                      hello@kingbatech.com
                    </Typography>
                  </Stack>
                  <Stack direction='column'>
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
                      href='tel:+8801790441196'
                      color='#141414'
                      variant='h6'
                      fontWeight={{ xs: '300', md: '400' }}
                      fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                      sx={{
                        alignSelf: { xs: 'center', md: 'flex-start' },
                      }}
                    >
                      Bangladesh:
                      <span style={{ color: '#004581' }}>+8801790441196</span>
                    </Typography>
                    <Typography
                      component='a'
                      href='tel:+1(236)777-5365'
                      color='#181818'
                      variant='h6'
                      fontWeight={{ xs: '300', md: '400' }}
                      fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                      sx={{
                        alignSelf: { xs: 'center', md: 'flex-start' },
                      }}
                    >
                      Canada:
                      <span style={{ color: '#004581' }}>+1(236)777-5365</span>
                    </Typography>
                  </Stack>
                  <Stack direction='column'>
                    <Typography
                      color='#181818'
                      variant='h2'
                      fontWeight='500'
                      fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                      mb={1}
                      sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}
                    >
                      Bangladesh (Mailing Address)
                    </Typography>

                    <Typography
                      color='#181818'
                      variant='h6'
                      fontWeight={{ xs: '300', md: '400' }}
                      fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                      sx={{
                        alignSelf: { xs: 'center', md: 'flex-start' },
                      }}
                      textAlign={{ xs: 'center', md: 'start' }}
                    >
                      524/Kazihata, Rajshahi-6000, Bangladesh
                    </Typography>
                    <Typography
                      mt='.5rem'
                      component='a'
                      href='https://www.google.com/maps/dir/24.3605,88.6049/kingba+tech/@24.3664866,88.5746575,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39fbef0cbdc9c525:0xfc345c04b4c97f96!2m2!1d88.5792459!2d24.3714658'
                      color='#004581'
                      variant='h2'
                      fontWeight='500'
                      fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                      mb={1}
                      sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}
                    >
                      View in Google Maps
                    </Typography>
                  </Stack>
                  <Stack direction='column'>
                    <Typography
                      color='#181818'
                      variant='h2'
                      fontWeight='500'
                      fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                      mb={1}
                      sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}
                    >
                      Canada (Mailing Address)
                    </Typography>
                    <Typography
                      color='#181818'
                      variant='h6'
                      fontWeight={{ xs: '300', md: '400' }}
                      fontSize={{ xs: '1.2rem', md: '1.4rem' }}
                      sx={{
                        alignSelf: { xs: 'center', md: 'flex-start' },
                      }}
                      textAlign={{ xs: 'center', md: 'start' }}
                    >
                      18097 57A Ave, Surrey, Canada
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            mt={6}
            width='100%'
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Slider />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
