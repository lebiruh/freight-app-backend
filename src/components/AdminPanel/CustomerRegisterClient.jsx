import React from 'react'
import './styles/customerRegister.css'
import ClientRegistrationForm from './RegistrationForm/ClientRegistrationForm'

const CustomerRegisterClient = () => {
  return ( 
      <div className="signup_container">    
        <ClientRegistrationForm />
      </div>
  )
}

export default CustomerRegisterClient