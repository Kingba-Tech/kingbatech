import {
  Grid,
  Container,
  Typography,
  Stack,
  Avatar,
  Box,
  Button,
} from '@mui/material';



import Link from 'next/link';

const UiUx = () => {
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
        fontSize={{ xs: '1.5rem', md: '3.2rem' }}
        textAlign='center'
        fontFamily='DM Sans, sans serif;'
        lineHeight={{ xs: '2.5rem', md: '4.5rem' }}
      >
        Importance of website <br /> design to give your business <br /> its
        unique voice
      </Typography>
      <Stack
        direction='column'
        spacing={2}
        mt={5}
        justifyContent='center'
        alignItems='center'
      >
        <Avatar
          src='https://i.imgur.com/kMkvLNC.png'
          sx={{ height: 80, width: 80 }}
        />
        <Typography
          color='#141414'
          variant='h2'
          fontWeight='500'
          fontSize={{ xs: '1.2rem', md: '1.4rem' }}
          fontFamily='DM Sans, sans-serif;'
        >
          By <span style={{ color: '#004581' }}>Steve Jobs</span>
        </Typography>

        <Typography
          fontFamily='DM Sans, sans serif;'
          variant='p'
          fontSize='1.1rem'
          fontWeight='400'
          color='#141414'
        >
          Aug 30 2021 . 4 min read
        </Typography>
      </Stack>
      <Grid sx={{ width: '100%', maxWidth: 1080, mt: 4 }}>
        <Box sx={{ width: '100%' }}>
          <img
            src='https://i.imgur.com/CdmMDPS.jpg'
            alt='programmer'
            width='100%'
            style={{
              height: '100%',
              width: '100%',
              borderRadius: '.5em',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box
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
            In the age of the internet, a good website design is nothing less
            than a good outfit. The well-dressed person in the room makes the
            first impression. Intellect matters too but intellect doesn’t speak
            when you need to.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
            alignSelf='flex-start'
          >
            Data says 75% of a website’s credibility is based on the design.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            You may own the greatest company in the world but if your website
            design is mundane, grotesque, and unusable, you’re going to shoo
            away a lot of potential leads.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Your website design can help create a dignifying voice for your
            business. In the following points, the essential of website design
            is discussed in detail.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            fontSize={{ xs: '2rem', md: '2.5rem' }}
            variant='h5'
            component='div'
            fontWeight='600'
            color='#141414'
            alignSelf='flex-start'
            mt={{ xs: 1, md: 3 }}
          >
            Just cannot afford trust-issues
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Everything matters when you want to attract a potential client to
            avail of services from you. The ambiance of your office, the way you
            communicate, your office culture, and similarly, your website design
            is no exception.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Having just contact details and the list of services you provide
            won’t do you any good. A good website design gives your visitor an
            idea of your company’s essence, builds credibility, makes any
            visitor comfortable to rely on you to avail of your services.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            fontSize={{ xs: '2rem', md: '2.5rem' }}
            variant='h5'
            component='div'
            fontWeight='600'
            color='#141414'
            alignSelf='flex-start'
            mt={{ xs: 1, md: 3 }}
          >
            That one shot at branding
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            If you have watched Christopher Nolan’s Batman Begins (2005), you’d
            remember the scene where Bruce Wayne says the bat symbol stands for
            fear. In case you don’t, let me give a brief overview. So, his
            butler Alfred says, “Why bats, Master Wayne?” and Bruce Wayne
            replies, “Bats frighten me. It’s time my enemies shared my dread.”
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Despite being macabre, there is an idea behind the bat symbol. Your
            company surely has an idea behind its formation. That notion needs
            to reflect on your website. Properly demonstrating your brand ethos
            and aesthetics through your well-designed website may make a visitor
            stick around too long to be another loyal client.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Basically, in the ocean of salmons, you need to stand out as a
            whale. 73% of companies invest in website designs to differentiate
            themselves from their competitors. After all, your website can give
            you that one shot to be unique as a brand.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            fontSize={{ xs: '2rem', md: '2.5rem' }}
            variant='h5'
            component='div'
            fontWeight='600'
            color='#141414'
            alignSelf='flex-start'
            mt={{ xs: 1, md: 3 }}
          >
            Make your visitors feel at home
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
            alignSelf='flex-start'
          >
            Home is where the heart is.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            We can do whatever we want because we know our way out. We know what
            to expect in each room. Quite similarly, good website design can
            make your visitors feel at home.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            If they find it easy to navigate, they’d be comfortable visiting
            back again. Inevitably, reducing the bounce rate of your website.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            fontSize={{ xs: '2rem', md: '2.5rem' }}
            variant='h5'
            component='div'
            fontWeight='600'
            color='#141414'
            alignSelf='flex-start'
            mt={{ xs: 1, md: 3 }}
          >
            All about your business in 4 seconds
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            An insight from Google states that millennials have average online
            attention of 8 seconds. On the other hand, Gen Zs have an
            astonishing 2.8 seconds. Kids these days are very restless, eh?
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Well, their restlessness needs to be taken into account. John Leo
            Weber from Projectmanager.com made a test to check whether a website
            is optimized to grab visitor’s attention in just 4 seconds. The test
            works this way – you open a website, click start on your timer, and
            close the website exactly after four seconds. If you aren’t able to
            answer what the website was about then the design requires
            improvement.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Although John made it “The Four-Second Test” there is another
            extended test called the “5 Second Test” that fulfills the same
            purpose but with just one additional second.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            fontSize={{ xs: '2rem', md: '2.5rem' }}
            variant='h5'
            component='div'
            fontWeight='600'
            color='#141414'
            textAlign={{ xs: 'center', md: 'start' }}
            alignSelf='flex-start'
            mt={{ xs: 1, md: 3 }}
          >
            Adapt to advance
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            The importance of website design is not just limited to your desktop
            screen. Who are you kidding? This isn’t the 90s anymore.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            A website design should be able to adapt to any device. As a matter
            of fact, 27% of web traffic is derived from mobile devices. This
            adaptability can happen through responsive web design, which enables
            the website to magically adjust its layout to fit a variety of
            devices.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Be it for aesthetics or usability, the need for brilliant website
            design is getting crucial day by day. As said before, a website can
            help your business have a unique voice. If there is a flaw in the
            website, you can imagine how croaky the voice might be.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            fontSize={{ xs: '1.5rem', md: '2rem' }}
            variant='h5'
            component='div'
            fontWeight='600'
            color='#141414'
            textAlign={{ xs: 'center', md: 'start' }}
            alignSelf='flex-start'
            mt={3}
          >
            Sources:
          </Typography>
          <ul style={{ marginLeft: '1.5rem', marginTop: '-1.5rem' }}>
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
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                }}
              >
                Expert Panel, Forbes Communications Council 2019, Seven Aspects
                Of Website Design Crucial For Drawing In Customers, viewed 10th
                September, 2020
              </Typography>
            </li>
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
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                }}
              >
                Kasey Kaplan 2020, Why Every Business Needs A Website,
              </Typography>
            </li>
          </ul>
        </Box>
        <Box
          width='100%'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          mb={{ xs: 2, md: 10 }}
          padding={{ xs: '1rem 1.3rem', md: '1rem 3rem' }}
        >
          <hr width='100%' style={{ color: '#f3f3f3', margin: '3rem 0' }} />
          <Stack
            sx={{ width: '100%' }}
            direction='row'
            justifyContent={{ xs: 'flex-start' }}
            flexWrap='wrap'
            gap='1rem'
          >
            <Button variant='contained'>Website</Button>
            <Button variant='contained'>Branding</Button>
            <Button variant='contained'>Marketing</Button>
          </Stack>
        </Box>
      </Grid>
    </Container>
  );
};

export default UiUx;
