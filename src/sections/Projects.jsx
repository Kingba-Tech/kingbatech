import React from 'react';
import { Container, Grid, Typography, AppBar, Tabs, Tab } from '@mui/material';

import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { DesignCards, DigitalCards, WebCards } from '../components/Cards/Cards';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role='tabpanel' hidden={value !== index}>
      {value === index && (
        <Grid>
          <Grid spacing={{ xs: 2 }}>{children}</Grid>
        </Grid>
      )}
    </div>
  );
}

const Projects = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container
      maxWidth
      sx={{
        backgroundColor: '#FFFFFF',
        minHeight: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Grid sx={{ width: '100%', maxWidth: 1080 }} py={2} mt={{ xs: 3, md: 6 }}>
        <Typography
          pt={{ xs: 2, md: 4 }}
          variant='h2'
          fontWeight={{ xs: '400', md: '500' }}
          color='#181818'
          textAlign='center'
          fontSize={{ xs: '1.8rem', md: '2.5rem' }}
        >
          Some of our hand-picked work
        </Typography>

        <Grid
          mt={{ xs: 3, md: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Grid mt={2}>
            <AppBar
              position='static'
              sx={{
                boxShadow: 'none',
              }}
            >
              <Tabs
                sx={{
                  backgroundColor: '#F3F3F4',
                  opacity: '1',
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#004581',
                  },
                }}
                value={value}
                onChange={handleChange}
                textColor='primary'
                variant='fullWidth'
                aria-label='full width tabs example'
              >
                <Tab
                  sx={{
                    fontSize: { xs: '.9rem', md: '1.2rem' },
                    lineHeight: { xs: 1.4, md: 1 },
                    fontWeight: { xs: 400, md: '600' },
                    color: '#000000',
                    '&:active, &:focus': {
                      color: '#004581',
                    },
                    opacity: '1',
                  }}
                  label='Web Development'
                />
                <Tab
                  sx={{
                    fontSize: { xs: '.9rem', md: '1.2rem' },
                    lineHeight: { xs: 1.4, md: 1 },
                    fontWeight: { xs: 400, md: '600' },
                    color: '#000000',
                    opacity: '1',
                    '&:active, &:focus': {
                      color: '#004581',
                    },
                  }}
                  label='Digital Marketing'
                />
                <Tab
                  sx={{
                    fontSize: { xs: '.9rem', md: '1.2rem' },
                    lineHeight: { xs: 1.4, md: 1 },
                    fontWeight: { xs: 400, md: '600' },
                    color: '#000000',
                    opacity: '1',
                    '&:active, &:focus': {
                      color: '#004581',
                    },
                  }}
                  label='Design & Editing'
                />
              </Tabs>
            </AppBar>
            <Grid mt={3}>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <Grid item>
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <WebCards />
                  </TabPanel>
                </Grid>
                <Grid item>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    <DigitalCards />
                  </TabPanel>
                </Grid>
                <Grid item>
                  <TabPanel value={value} index={2} dir={theme.direction}>
                    <DesignCards />
                  </TabPanel>
                </Grid>
              </SwipeableViews>
            </Grid>
          </Grid>
          <Typography
            component='a'
            variant='h6'
            fontSize={{ xs: '1.2rem', md: '1.4rem' }}
            fontWeight={{ xs: 400, md: 500 }}
            textAlign='center'
            color='primary'
            sx={{
              border: '2px solid #004581',
              padding: '.6rem 3.5rem',
              marginTop: { xs: '1.5rem', md: '4rem' },
              borderRadius: '.3rem',
              '&:hover': {
                color: '#F5F5F7',
                backgroundColor: '#004581',
              },
            }}
          >
            See more work
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
