import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import StatCard from './StatCard';

// import HighlightedCard from '../components/HiglightedCard';
// import SessionsChart from '../components/SessionsChart';
// import PageViewsBarChart from '../components/PageViewsBarChart';
// import CustomTreeView from '../components/CustomTreeView';
// import ChartUserByCountry from '../components/ChartUserByCountry';

const data = [
  {
    title: 'Pending Orders',
    value: '14k',
    color: 'rgb(243, 213, 158)',
    icon: <AddShoppingCartIcon sx={{color: "orange", height: 40, width: 40}}/>,
  },
  {
    title: 'Active Orders',
    value: '325',
    color: 'rgb(244, 216, 244)',
    icon: <ShoppingCartIcon sx={{color: "purple", height: 40, width: 40}}/>,
  },
  {
    title: 'Delivered Orders',
    value: '200k',
    color: 'rgb(183, 247, 183)',
    icon: <CardGiftcardIcon sx={{color: "green", height: 40, width: 40}}/>,
  },
  {
    title: 'Cancelled Orders',
    value: '2',
    color: 'rgb(246, 178, 178)',
    icon: <RemoveShoppingCartOutlinedIcon sx={{color: "red", height: 40, width: 40}}/>,
  },
  {
    title: 'Clients',
    value: '200',
    color: '#D5E8FC',
    icon: <AccountBoxIcon sx={{color: "#0F7BE6", height: 40, width: 40}}/>,
  },
  {
    title: 'Drivers/Car Owners',
    value: '200',
    color: '#B0CAE6',
    icon: <AccountBoxOutlinedIcon sx={{color: "#0D5DAE", height: 40, width: 40}}/>,
  },
];

function DashboardContent() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: 'auto',
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            {/* cards */}
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
              Overview
            </Typography>
            <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }}>
              {data.map((card, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                  <StatCard {...card} />
                </Grid>
              ))}
              {/* <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <HighlightedCard />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <SessionsChart />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <PageViewsBarChart />
              </Grid> */}
            </Grid>
            {/* <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
              Details
            </Typography>
            <Grid container spacing={2} columns={12}>
              <Grid size={{ xs: 12, lg: 6 }}>
                <Stack gap={2} direction={{ xs: 'column', sm: 'row' }}>
                  <CustomTreeView />
                  <ChartUserByCountry />
                </Stack>
              </Grid>
            </Grid> */}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default DashboardContent;