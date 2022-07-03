import React from 'react';
import { Container, Grid, Typography, AppBar, Tabs, Tab } from '@mui/material';

import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import {
  DesignCards,
  DigitalCards,
  WebCards,
} from '../../src/components/Cards/Cards';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';

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

const ProjectsHome = () => {
   const theme = useTheme();
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

   const handleChangeIndex = (index) => {
     setValue(index);
   };
  return (
    <>
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
          Our Work
          <hr width='100px' className={styles.projectshr} color='#2297FF' />
        </Typography>
        <Grid
          sx={{ width: '100%', maxWidth: 1080 }}
          py={2}
          
        >

          <Grid
            mt={{ xs: 2, md: 3 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <Grid>
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
                      fontSize: { xs: '.8rem', md: '1.2rem' },
                      lineHeight: { xs: 1.4, md: 1 },
                      fontWeight: { xs: 500, md: '600' },
                      fontFamily: 'DM Sans, sans serif;',
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
                      fontSize: { xs: '.8rem', md: '1.2rem' },
                      lineHeight: { xs: 1.4, md: 1 },
                      fontWeight: { xs: 500, md: 600 },
                      fontFamily: 'DM Sans, sans serif;',
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
                      fontSize: { xs: '.8rem', md: '1.2rem' },
                      lineHeight: { xs: 1.4, md: 1 },
                      fontWeight: { xs: 500, md: '600' },
                      fontFamily: 'DM Sans, sans serif;',
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
            
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectsHome;
