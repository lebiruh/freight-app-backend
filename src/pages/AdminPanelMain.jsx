import * as React from 'react';
// import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
// import Grid from '@mui/material/Grid2';
// import DashboardContent from '../components/AdminPanel/DashBoardContent';
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';


const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'admin',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'admin/orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
    children: [      
      {
        segment: 'pending',
        title: 'Pending',
        icon: <AddShoppingCartIcon />,
      },
      {
        segment: 'active',
        title: 'Active',
        icon: <ShoppingCartIcon />,
      },
      {
        segment: 'delivered',
        title: 'Delivered',
        icon: <AddShoppingCartIcon />,
      },
      {
        segment: 'cancelled',
        title: 'Cancelled',
        icon: <RemoveShoppingCartOutlinedIcon />,
      },
    ],
  },  
  {
    segment: 'admin/customers',
    title: 'Customers',
    icon: <ContactPageIcon />,
    children: [
      {
        segment: 'clients',
        title: 'Clients',
        icon: <AccountBoxIcon />,
      },
      {
        segment: 'client/register',
        title: 'Register Client',
        icon: <AccountBoxOutlinedIcon />,
      },
      {
        segment: 'team',
        title: 'Drivers/Truck Owners',
        icon: <AccountBoxOutlinedIcon />,
      },
      {
        segment: 'truck/register',
        title: 'Register Truck',
        icon: <AccountBoxOutlinedIcon />,
      },
    ],
  },  
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'admin/reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <AttachMoneyIcon />,
      },
      // {
      //   segment: 'traffic',
      //   title: 'Traffic',
      //   icon: <DescriptionIcon />,
      // },
    ],
  },
  // {
  //   segment: 'admin/integrations',
  //   title: 'Integrations',
  //   icon: <LayersIcon />,
  // },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Dispatch',
  },
  {
    segment: 'admin/dispatch',
    title: 'DispatchPanel',
    icon: <LayersIcon />
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'SETTINGS',
  },
  {
    segment: 'admin/settings',
    title: 'Settings',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'profile',
        title: 'Profile',
        icon: <DescriptionIcon />,
      }, 
      {
        // segment: 'signout',
        title: 'Sign out',
        icon: <DescriptionIcon />,
      }, 
    ],
  },
];



function AdminPanelMain() {

  return (
    <ReactRouterAppProvider
      navigation={NAVIGATION}
      // router={router}
      // theme={demoTheme}
      // window={demoWindow}
      branding={{
        title: "Freight App"
      }}
    >
      <DashboardLayout >
        <PageContainer>         
          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </ReactRouterAppProvider>
  );
}

export default AdminPanelMain;