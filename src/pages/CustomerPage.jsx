import CustomerNavbar from "../components/Navbar/CustomerNavbar"
import Footer from '../components/Footer/Footer'
import { Outlet } from "react-router"


const CustomerPage = () => {
  return (
    <>
      <CustomerNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default CustomerPage