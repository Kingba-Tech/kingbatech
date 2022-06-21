import React from 'react';
import {
  Container,
  Grid,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import {
  DesignCards,
  DigitalCards,
  WebCards,
} from '../../components/Cards/Cards';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Grid spacing={{ xs: 2 }}>{children}</Grid>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
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
    <Container maxWidth sx={{ backgroundColor: '#F2F2F2', minHeight: '500px' }}>
      <Grid py={2}>
        <Typography
          pt={4}
          variant='h2'
          fontWeight={{ xs: '400', md: '500' }}
          color='#181818'
          opacity='0.9'
          textAlign='center'
          fontSize={{ xs: '1.8rem', md: '2.5rem' }}
        >
          Projects
        </Typography>
        <hr
          height='5px'
          width='160px'
          textAlign='center'
          padding='20px 0px'
          color='#181818'
        />

        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <Grid width={1200}>
            <AppBar position='static'>
              <Tabs
                sx={{
                  backgroundColor: '#000000',
                  opacity: '0.9',
                  color: '#F5F5F7',
                }}
                value={value}
                onChange={handleChange}
                indicatorColor='secondary'
                textColor='inherit'
                variant='fullWidth'
                aria-label='full width tabs example'
              >
                <Tab
                  sx={{
                    fontSize: { xs: 'small', md: 'medium' },
                    lineHeight: '1.2rem',
                  }}
                  label='Web Development'
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    fontSize: { xs: 'small', md: 'medium' },
                    lineHeight: '1.2rem',
                  }}
                  label='Digital Marketing'
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    fontSize: { xs: 'small', md: 'medium' },
                    lineHeight: '1.2rem',
                  }}
                  label='Design & Editing'
                  {...a11yProps(2)}
                />
              </Tabs>
            </AppBar>
            <Grid>
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
  );
};

export default Projects;
