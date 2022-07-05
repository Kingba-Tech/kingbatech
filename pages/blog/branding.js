import {
  Grid,
  Container,
  Typography,
  Stack,
  Avatar,
  Box,
  Button,
} from '@mui/material';

const buttons = [];

import Link from 'next/link';

const Branding = () => {
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
        lineHeight='4.5rem'
      >
        Branding: Do I really need to <br /> hire an agency?
      </Typography>
      <Stack
        direction='column'
        spacing={2}
        mt={5}
        justifyContent='center'
        alignItems='center'
      >
        <Avatar
          src='https://i.imgur.com/8w0MAC9.jpg'
          sx={{ height: 80, width: 80 }}
        />
        <Typography
          color='#141414'
          variant='h2'
          fontWeight='500'
          fontSize={{ xs: '1.2rem', md: '1.4rem' }}
          fontFamily='DM Sans, sans-serif;'
        >
          By <span style={{ color: '#004581' }}>Elon Musk</span>
        </Typography>

        <Typography
          fontFamily='DM Sans, sans serif;'
          variant='p'
          fontSize='1.1rem'
          fontWeight='400'
          color='#141414'
        >
          Aug 30 2021 . 8 min read
        </Typography>
      </Stack>
      <Grid sx={{ width: '100%', maxWidth: 1080, mt: 4 }}>
        <Box sx={{ width: '100%' }}>
          <img
            src='https://i.imgur.com/q7TNS7r.jpg'
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
          sx={{}}
        >
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            When it comes to branding, it’s natural to feel lost or overwhelmed
            by the sheer number of things that need to be done. Without a proper
            strategy, planning, and vision, it becomes harder to execute the
            steps of branding successfully. Let’s not get all serious over here.
            The best part about branding and marketing is: if you’re not having
            fun doing it, you’re not doing it right.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Even though you’re having fun, you also need to know what you’re
            doing. That’s where professionals come into play. Now, what is the
            role of a creative agency or a branding professional? Let’s take a
            look at what is a branding agency and what they do.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            A branding agency helps you build a vivid picture of what you want
            your brand to be as well as what your brand demands to be. It guides
            you to identify the personality of your brand, maintains the
            consistency of the brand, assists you to develop strategies for the
            marketing campaigns for your brand. Most importantly, a branding
            agency can help you discover and establish the potential of your
            brand. You might have an idea about the branding of your company,
            but an agency helps make that idea into reality. They have real-time
            information about brands, trends, insights into customer behavior,
            recent technologies, and most importantly, they have experience. The
            prior experience and practical knowledge help them map out the
            essentials of branding for you.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Today, we will show you how hiring an agency really helps you out in
            the 8 major parts of branding.
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
            mt={3}
          >
            Naming
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            It is not an easy feat to choose the name that’s effective and
            impactful for your brand. Names are quite powerful and finding the
            perfect one requires meeting a lot of terms and conditions. You may
            use the founder’s name like Guccio Gucci (Gucci), a completely
            out-of-context word (Apple/Razorfish), or even create a new word
            (Google from Googol or Kodak). But, there are crucial things that
            need to be considered like:
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
            mt={3}
          >
            Pronounceability
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Using a word like pronounceability, which almost breaks half of your
            teeth, is mostly not a good idea while naming your brand. If your
            customers cannot pronounce your name, how will they remember you or
            talk about how great you are?
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
            mt={3}
          >
            Using common/ overused words
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            A common name doesn’t stand out in a crowd. Branding is all about
            standing out and that is why being unique is absolutely essential.
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
            mt={3}
          >
            Using confusing acronyms or spellings
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            It might seem a bit cool to use ‘u’ instead of ‘you,’ or ‘4’ instead
            of ‘for’ but it confuses people. You do not want them to be typing
            in the wrong name in the search engine which may result in not
            finding you at all, or even worse, finding your competitor instead
            of you!
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Besides, there are things to research and consider like securing a
            unique domain name (because almost everything seems to be taken!)
            which require a lot of time and resources. This is where an agency
            can help you out. They are here to test out all the criteria for
            your brand name, as well as do the market analysis and even help you
            find the perfect name for your brand. The key is to explain to them
            all the crucial details and together you can figure out the name
            that best suits your brand!
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
            mt={3}
          >
            Logo
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Designing a logo is no walk in the park. A logo has to be simple,
            scalable, memorable and impactful, versatile, relevant, and
            timeless. Agencies use professional designers to design logos for
            them. Designers professionally study and understand the concept of
            colors, shapes, and designs. Not just design, a lot of scaling and
            measurements are considered which requires some level of technical
            knowledge. A logo will be used in all shapes and sizes in all kinds
            of media, so it has to be designed considering all of these factors.
            A lot of steps are required to design a logo. Starting from
            understanding the brand, the perceptions of its customers, research
            about trends, brainstorming, conceptualizing, coming up with rough
            drafts, incorporating feedback, deciding the colors, shapes, and
            structure; all these and more are an integral part of logo
            designing.
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
            mt={3}
          >
            Typography
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Typography gives another identity to your brand. It is a crucial
            part of the brand design, unfortunately, it is generally not well
            thought out. Did you know something as simple as the font type of
            your brand can bring out a certain emotional response from your
            customers? Think about this, you are a very trendy teenage lifestyle
            brand but you are using a very serious-looking Serif font. Your
            brand will be unlikely to catch your target group’s attention or
            your target market will not be able to relate to it. When you are
            designing a brand identity, a consistent set of fonts—each with a
            specific purpose must be used. Typography lets you create a certain
            personality. You can choose to be modern, vintage, romantic, sleek,
            shy, or bold just by your choice of typeface and its arrangement.
            Select your type so that you can express your own unique identity.
            Of course, it’s definitely recommended that you take the help of an
            expert. They can help you to identify the appropriate fonts from the
            thousands of fonts available for every imaginable purpose, for all
            your visual elements. designing.
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
            mt={3}
          >
            Color palette
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Color is the visual component people remember most about a brand.
            Brands and color are inseparably linked because of the instant
            effect color offers for conveying a message without using words.
            Colors evoke emotions within consumers from expressing a calm
            demeanor to a color palette that induces excitement or gives off a
            vibe that the brand is premium. Being able to recognize brands just
            through their colors is very common. Like the Facebook blue, or the
            Coca-cola red, and the use of red, green, yellow, and blue for
            Google, there is a lot that goes into deciding on a color palette
            for a brand. An interesting fact is that Microsoft and Google use
            the same four colors for their brand logo yet manages to be
            distinguishable. An agency can help you to identify the most
            effective color palette which will represent what your brand is- to
            what your customers might feel when they see your brand’s colors.
            Fun fact, researchers found that up to 90% of snap judgments made
            about products can be based on color alone (depending on the
            product).
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
            mt={3}
          >
            Iconography
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            People retain images and shapes in their minds more than words. The
            proper use of icons and symbols can help make your brand truly
            iconic (pun intended). Logos can function as a symbol, but most
            logos are not designed to fit that purpose. Iconography is not just
            designing the right symbols and icons for your brand, it also
            includes the brand guidelines, where to use the icons, how to use
            them, the color schemes, and all relevant directions. Without these,
            there will be no consistency in your brand.
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
            mt={3}
          >
            Brand strategy
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Brand strategy is the long-term development plan for a brand to
            sustain after reaching its short-term goals. A well-defined and
            executed brand strategy considers all aspects of the business and is
            directly connected to consumer needs, emotions, and competitive
            environments. Considering all current and potential competitors, and
            designing a plan on how to stay on top of all the possible
            challenges, everything is a part of brand strategy.
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
            mt={3}
          >
            Brand identifiers
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Brand identifiers are logos, visual elements, stylized texts, or
            features that help to distinguish one brand from the other. A great
            example of an identifier is the swoosh logo of Nike, which is easily
            identifiable amongst all other brands. Brands use identifiers to
            ensure there is no confusion about the identity of the brand when it
            is in front of the customers. Coming up with unique identifiers that
            are memorable enough to leave an imprint but not too complicated so
            that people overlook it, is a real challenge.
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
            mt={3}
          >
            Slogan/Tagline
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            Slogans and brand taglines can be of many kinds. There may be one
            constant slogan for your overall brand along with multiple taglines
            of individual campaigns. The main goal here is to come up with
            something catchy so that it catches people’s attention and leaves a
            mark.
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
          >
            A professional agency works around all the branding elements
            constantly. Taking the opinion of experts would yield better results
            as they will be able to identify your requirements and happily guide
            you through the branding process. If you ultimately decide to hire
            an agency, all the branding decisions can be taken after a
            collaborative and elaborate discussion on what you want the outcome
            of your branding to be, along with expert opinions. Keep in mind,
            you should have a clear idea about their work before hiring an
            agency. Check out their portfolio and get a perception of the nature
            of their work. If you like their work, contact them and they’d be
            happy to help!
          </Typography>
          <Typography
            fontFamily='DM Sans, sans serif;'
            variant='p'
            fontSize={{ xs: '1.3rem', md: '1.6rem' }}
            fontWeight='400'
            lineHeight='3rem'
            color='#141414'
            mt={2}
          >
            Get more insights on branding and a thorough walk-through of the
            branding process from our other blog posts.
          </Typography>
        </Box>
        <Box
          width='100%'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
      mb={{xs: 2, md: 10}}
          padding={{ xs: '1rem 1.3rem', md: '1rem 3rem' }}
        >
          <hr width='100%' style={{ color: '#f3f3f3', margin: '3rem 0' }} />
          <Stack
            sx={{ width: '100%' }}
            direction='row'
            justifyContent={{ xs: 'flex-start', md: 'space-between' }}
            flexWrap='wrap'
            gap='1rem'
          >
            <Button variant='contained'>Agency</Button>
            <Button variant='contained'>Branding</Button>
            <Button variant='contained'>Marketing</Button>
            <Button variant='contained'>Digital Marketing</Button>
            <Button variant='contained'>Digital </Button>
            <Button variant='contained'>Bangladesh</Button>
          </Stack>
        </Box>
      </Grid>
    </Container>
  );
};

export default Branding;
