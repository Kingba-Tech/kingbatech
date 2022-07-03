import { Grid, Container, Typography, Stack } from '@mui/material';


const Contact = () => {
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
        fontWeight={{xs: '500', md: '600'}}
        color='#181818'
        fontSize={{ xs: '1.5rem', md: '2.8rem' }}
        fontFamily='DM Sans, sans serif;'
      >
        Get in touch!
      </Typography>
      <Typography
        fontFamily='DM Sans, sans serif;'
        variant='p'
        fontSize={{ xs: '1rem', md: '1.4rem' }}
        fontWeight='300'
        lineHeight='2rem'
        color='#141414'
        marginTop='.5rem'
      >
        Contact us for a quote, help out to join the team.
      </Typography>
      <Stack>
        <Stack direction='column'>

        </Stack>
      </Stack>
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

export default Contact;
