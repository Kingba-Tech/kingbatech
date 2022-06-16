import { Container, Stack, Grid, Avatar, Typography, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/main_logo.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import theme from '../../theme/theme';

const Footer = () => {
  return (
    <Container
      maxWidth
      sx={{
        minHeight: '300px',
        backgroundColor: '#000000',
        opacity: '0.9',
        padding: '1.5rem 1rem'
      }}
    >
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        spacing={4}
        alignItems={{ xs: 'center', md: 'flex-start' }}
        justifyContent={{ md: 'space-between', xs: 'center' }}
        py='1.5rem'
      >
        <Grid
          direction='row'
          flex={1}
          sx={{
            display: {
              xs: 'flex',
              md: 'block',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }
          }}
        >
          <Link href='#'>
            <Image
              style={{ cursor: 'pointer' }}
              src={logo}
              alt='site  logo'
              height='45'
              width='210'
            />
          </Link>
          <Typography
            marginTop={{ xs: '1.5rem', md: '0.8rem' }}
            color='white'
            variant='h6'
            fontWeight='400'
            fontSize='1.2rem'
            textAlign={{ xs: 'center', sm: 'start' }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            repellendus eum perferendis reiciendis autem dolor placeat molestiae
            alias! Voluptatibus, quam?
          </Typography>
        </Grid>
        <Grid direction='row' flex={1} >
          <Typography
            color='#f5f5f7'
            variant='h2'
            fontWeight={{ xs: '500', md: '700' }}
            fontSize={{ xs: '1.3rem', md: '1.5rem' }}
          >
            About us
          </Typography>
          <Stack
            sx={{ marginTop: '10px', '&:hover': { cursor: 'pointer' } }}
            direction='column'
            spacing={1}
          >
            <Typography
              color='#f5f5f7'
              
              variant='h6'
              fontWeight={{ xs: '300', md: '400' }}
              fontSize='1.1rem'
              component='a'
            >
              Our Story
            </Typography>
            <Typography
              color='#f5f5f7'
              
              fontWeight={{ xs: '300', md: '400' }}
              variant='h6'
              fontSize='1.1rem'
              component='a'
            >
              The Team
            </Typography>
            <Typography
              color='#f5f5f7'
              
              variant='h6'
              fontWeight={{ xs: '300', md: '400' }}
              fontSize='1.1rem'
              component='a'
            >
              Our Difference
            </Typography>
            <Typography
              color='#f5f5f7'
            
              variant='h6'
              fontWeight={{ xs: '300', md: '400' }}
              fontSize='1.1rem'
              component='a'
            >
              Careers
            </Typography>
            <Typography
              color='#f5f5f7'
              
              variant='h6'
              fontWeight={{ xs: '300', md: '400' }}
              fontSize='1.1rem'
              component='a'
            >
              Privacy Policy
            </Typography>
          </Stack>
        </Grid>
        <Grid direction='row' flex={1}>
          <Typography
            color='#f5f5f7'
            variant='h2'
            fontWeight={{ xs: '500', md: '700' }}
            fontSize={{ xs: '1.3rem', md: '1.5rem' }}
            sx={{marginLeft:{xs: '18px'}}}
          >
            Follow us
          </Typography>
          <Stack
            sx={{ marginTop: '10px', '&:hover': { cursor: 'pointer' } }}
            direction='row'
            spacing={2}
          >
            <Avatar
              sx={{
                backgroundColor: '#6F7378',
                '&:hover': {
                  backgroundColor: '#43464b',
                  transition: '0.3s ease-in-out',
                },
              }}
            >
              <FacebookRoundedIcon
                style={{ fill: '#f5f5f7', '&:hover': { fill: '#ffffff' } }}
              />
            </Avatar>
            <Avatar
              sx={{
                backgroundColor: '#6F7378',
                '&:hover': {
                  backgroundColor: '#43464b',
                  transition: '0.3s ease-in-out',
                },
              }}
            >
              <TwitterIcon
                style={{ fill: '#f5f5f7', '&:hover': { fill: '#ffffff' } }}
              />
            </Avatar>
            <Avatar
              sx={{
                backgroundColor: '#6F7378',
                '&:hover': {
                  backgroundColor: '#43464b',
                  transition: '0.3s ease-in-out',
                },
              }}
            >
              <LinkedInIcon
                style={{ fill: '#f5f5f7', '&:hover': { fill: '#ffffff' } }}
              />
            </Avatar>
          </Stack>
        </Grid>
      </Stack>
      <Typography
        fontSize={{ md: '1.2', xs: '1.1rem' }}
        py={2}
        textAlign='center'
        variant='h6'
        fontWeight='300'
        color='#f5f5f7'
      >
        All right reserved by Kingba Tech &copy; 2022
      </Typography>
    </Container>
  );
};

export default Footer;
