import { Outlet, Navigate } from "react-router";

const CustomerProtectedRoute = () => {

  const CustomerData = JSON.parse(localStorage.getItem('customerData'))

  // const navigate = useNavigate()

  return (    
    CustomerData && CustomerData?.user_type == "client" || CustomerData && CustomerData?.user_type == "truck_owner" ? < Outlet/> : <Navigate to='/user/login' replace />  
  )
}

export default CustomerProtectedRoute