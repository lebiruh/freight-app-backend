import {Link} from "react-router";
import CustomerLoginHeader from '../../components/Customer/CustomerLogin/CustomerLoginHeader'
import CustomerLoginForm from '../../components/Customer/CustomerLogin/CustomerLoginForm'
import "./customerLoginPage.css"

const CustomerLoginPage = () => {
  return (
    <>
      <CustomerLoginHeader addClass="bg_white"/>    
      <div className="login_container">    
        <CustomerLoginForm />
        <div className="join">
          New to Freight App?<span><Link to="/">Join now</Link></span>
        </div>
        <div className="login_position_setter"></div>
      </div>
      {/* <LoginFooter /> */}
    </>
  )
}

export default CustomerLoginPage