import CustomersClients from "./components/AdminPanel/CustomersClients";
import CustomersDrivers from "./components/AdminPanel/CustomersDrivers";
import DashboardContent from "./components/AdminPanel/DashBoardContent";
import OrdersActive from "./components/AdminPanel/OrdersActive";
import OrdersCancelled from "./components/AdminPanel/OrdersCancelled";
import OrdersPending from "./components/AdminPanel/OrdersPending";
import Sales from "./components/AdminPanel/Sales";
import AdminPanelMain from "./pages/AdminPanelMain";
import CustomerHomePage from "./components/Customer/CustomerHomePage";
import CustomerAboutPage from "./components/Customer/CustomerAboutPage";
import CustomerContactPage from "./components/Customer/CustomerContactPage";
import { Routes, Route } from "react-router";
import CustomerPage from "./pages/CustomerPage";
import Dispatch from "./components/AdminPanel/Dispatch";
import CustomerFreightRequestPage from "./components/Customer/CustomerFreighRequestPage";
import OrdersAvailable from "./components/AdminPanel/OrdersAvailable";
import CustomerLoginPage from "./pages/CustomerLoginPage/CustomerLoginPage";
import CustomerProtectedRoute from "./components/ProtectedRoutes/CustomerProtectedRoute";
import CustomerJobDetailsPage from "./components/Customer/CustomerJobDetailsPage";


const Routing = () => {
  return (
    <Routes>

      <Route path="/user/login" element={<CustomerLoginPage />} />

      <Route path="/" element={<CustomerPage/>}>
        <Route path="" element={<CustomerHomePage/>} />
        <Route path="/job-details/:jobId" element={<CustomerJobDetailsPage/>} />
        <Route path="/about" element={<CustomerAboutPage/>}/>
        <Route path="/contact" element={<CustomerContactPage/>}/>
      </Route>      
      <Route path="/admin" element={<AdminPanelMain/>}>
          <Route path="" element={<DashboardContent/>} />
          <Route path="orders/available"element={<OrdersAvailable/>} />
          <Route path="orders/pending"element={<OrdersPending/>} />
          <Route path="orders/active"element={<OrdersActive/>} />
          <Route path="orders/cancelled"element={<OrdersCancelled/>} />
          <Route path="customers/clients"element={<CustomersClients/>} />
          <Route path="customers/team"element={<CustomersDrivers/>} />
          <Route path="reports/sales"element={<Sales/>} />
          <Route path="dispatch"element={<Dispatch/>} />
          <Route path="settings/profile"element={<Sales/>} />
      </Route>

      <Route element={<CustomerProtectedRoute/>}>
        <Route path="/user" element={<CustomerPage/>}>
          <Route path="order-freight" element={<CustomerFreightRequestPage/>} />
        </Route>
      </Route>


    </Routes>
  )
}

export default Routing