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
import Dispatch from "./components/AdminPanel/Dispatch/Dispatch";
import CustomerFreightRequestPage from "./components/Customer/CustomerFreighRequestPage";
import OrdersDelivered from "./components/AdminPanel/OrdersDelivered";
import CustomerLoginPage from "./pages/CustomerLoginPage/CustomerLoginPage";
import CustomerProtectedRoute from "./components/ProtectedRoutes/CustomerProtectedRoute";
import CustomerJobDetailsPage from "./components/Customer/CustomerJobDetailsPage";
import CustomerRegisterClient from "./components/AdminPanel/CustomerRegisterClient";
import CustomerRegisterTruck from "./components/AdminPanel/CustomerRegisterTruck";
import CustomerRegisterTruckOwner from "./components/AdminPanel/CustomerRegisterTruckOwner";
import CustomerTrucks from "./components/AdminPanel/CustomerTrucks";
import EditorLoginPage from "./pages/EditorLoginPage/EditorLoginPage";
import AdminEditorProtectedRoute from "./components/ProtectedRoutes/AdminEditorProtectedRoute";
import CustomerSignout from "./pages/CustomerSignOutPage/CustomerSignout";
import AdminSignoutPage from "./pages/AdminSignoutPage/AdminSignoutPage";


const Routing = () => {
  return (
    <Routes>

      <Route path="/user/login" element={<CustomerLoginPage />} />
      <Route path="/editor/login" element={<EditorLoginPage />} />      

      <Route path="/" element={<CustomerPage/>}>
        <Route path="" element={<CustomerHomePage/>} />
        <Route path="/job-details/:jobId" element={<CustomerJobDetailsPage/>} />
        <Route path="/about" element={<CustomerAboutPage/>}/>
        <Route path="/contact" element={<CustomerContactPage/>}/>
      </Route>
      <Route element={<AdminEditorProtectedRoute/>}>      
        <Route path="/admin" element={<AdminPanelMain/>}>
            <Route path="" element={<DashboardContent/>} />
            <Route path="orders/pending"element={<OrdersPending/>} />
            <Route path="orders/active"element={<OrdersActive/>} />
            <Route path="orders/delivered"element={<OrdersDelivered/>} />
            <Route path="orders/cancelled"element={<OrdersCancelled/>} />
            <Route path="customers/clients"element={<CustomersClients/>} />
            <Route path="customer/register/client"element={<CustomerRegisterClient/>} />
            <Route path="customers/team"element={<CustomersDrivers/>} />
            <Route path="customers/team/trucks"element={<CustomerTrucks/>} />
            <Route path="customer/register/truck"element={<CustomerRegisterTruck/>} />
            <Route path="customer/register/truck-owner"element={<CustomerRegisterTruckOwner/>} />
            <Route path="reports/sales"element={<Sales/>} />
            <Route path="dispatch"element={<Dispatch/>} />
            <Route path="dispatch/:freightId"element={<Dispatch/>} />
            <Route path="settings/profile"element={<Sales/>} />
            <Route path="settings/signout" element={<AdminSignoutPage />} />
        </Route>
      </Route>

      <Route element={<CustomerProtectedRoute/>}>
        <Route path="/user" element={<CustomerPage/>}>
          <Route path="order-freight" element={<CustomerFreightRequestPage/>} />
          <Route path="signout" element={<CustomerSignout />} />
        </Route>
      </Route>

    </Routes>
  )
}

export default Routing