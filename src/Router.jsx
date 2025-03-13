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


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomerPage/>}>
        <Route path="" element={<CustomerHomePage/>} />
        <Route path="/about" element={<CustomerAboutPage/>}/>
        <Route path="/contact" element={<CustomerContactPage/>}/>
      </Route>      
      <Route path="/admin" element={<AdminPanelMain/>}>
          <Route path="" element={<DashboardContent/>} />
          <Route path="orders/pending"element={<OrdersPending/>} />
          <Route path="orders/active"element={<OrdersActive/>} />
          <Route path="orders/cancelled"element={<OrdersCancelled/>} />
          <Route path="customers/clients"element={<CustomersClients/>} />
          <Route path="customers/team"element={<CustomersDrivers/>} />
          <Route path="reports/sales"element={<Sales/>} />
          <Route path="dispatch"element={<Dispatch/>} />
          <Route path="settings/profile"element={<Sales/>} />

      </Route>

    </Routes>
  )
}

export default Routing