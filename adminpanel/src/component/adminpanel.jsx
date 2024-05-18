
import { Helmet } from 'react-helmet-async';
import { subDays, subHours, subMinutes } from 'date-fns';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import ShoppingCartIcon from '@heroicons/react/24/solid/ShoppingCartIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import {
  Avatar,
  Box,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
// import { default as InputLabel } from '@mui/material/InputLabel';
// import InputLabel from '@mui/material/InputLabel';
import InputLabel from '@mui/material/InputLabel/InputLabel';

import OverviewKpi  from '../sections/overview/overview-kpi';
// import { OverviewLatestCustomers } from 'src/sections/overview/overview-latest-customers';
import  OverviewSummary  from '../sections/overview/overview-summary';
// import { ThemeContext } from '@mui/system';
// import Layout from '../dashboard/layout';


const now = new Date();

const Page = () => (
  <>
 
    <Helmet>
      <title>
        Overview | Carpatin Free
      </title>
    </Helmet>
    <Box
      sx={{
        flexGrow: 1,
        py: 8,
        
      }}
    >
     <Container maxWidth="xl" className='mx-5' >
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Reports
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={4}
              >
                <OverviewSummary
                  icon={
                    <Avatar
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        height: 56,
                        width: 56
                      }}
                    >
                      <SvgIcon>
                        <ShoppingBagIcon />
                      </SvgIcon>
                    </Avatar>
                  }
                  label='Orders'
                  value='5610'
                />
              </Grid>
              <Grid
                xs={12}
                md={4}
              >
                <OverviewSummary
                  icon={
                    <Avatar
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        height: 56,
                        width: 56
                      }}
                    >
                      <SvgIcon>
                        <ShoppingCartIcon />
                      </SvgIcon>
                    </Avatar>
                  }
                  label='Products'
                  value='23'
                />
              </Grid>
              <Grid
                xs={12}
                md={4}
              >
                <OverviewSummary
                  icon={
                    <Avatar
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        height: 56,
                        width: 56
                      }}
                    >
                      <SvgIcon>
                        <CurrencyDollarIcon />
                      </SvgIcon>
                    </Avatar>
                  }
                  label='Transactions'
                  value='1942'
                />
              </Grid>
              <Grid xs={12}>
                <OverviewKpi
                  chartSeries={[
                    {
                      data: [0, 20, 40, 30, 30, 44, 90],
                      name: 'Revenue'
                    }
                  ]}
                  stats={[
                    {
                      label: 'Revenue',
                      value: '$4,800.00'
                    },
                    {
                      label: 'NET',
                      value: '$4,900,24'
                    },
                    {
                      label: 'Pending orders',
                      value: '$1,600.50'
                    },
                    {
                      label: 'Due',
                      value: '$6,900.10'
                    },
                    {
                      label: 'Overdue',
                      value: '$6,500.80'
                    }
                  ]}
                />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

export default Page;
