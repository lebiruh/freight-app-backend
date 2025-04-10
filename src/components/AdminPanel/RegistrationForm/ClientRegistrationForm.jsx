import {Link} from "react-router";
import "../styles/registrationForm.css"
import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerClient } from "../../../helpers/users";

import { CgDanger } from "react-icons/cg";
// import {signUp} from "../../helpers/signUp";
// import {AuthProvider} from "../../Context/AuthContext/AuthContext";
// import { useAuth } from "../../helpers/useAuth";

const ClientRegistrationForm = () => {

  const [signUpFormData, setSignUpFormData] = useState({firstName: "", lastName: "", phone: "", email: "", password: "", confirmPassword: "", userType: 'client'})

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordInputError, setPasswordInputError] = useState(false);  
  const [confirmPasswordInputError, setConfirmPasswordInputError] = useState(false);  
  const [passwordError, setPasswordError] = useState(false);
  const [serverError, setServerError] = useState(false);

  // const navigate = useNavigate();
  const queryClient = useQueryClient()

  const registerClientMutation = useMutation({
      mutationFn: (signUpFormData) => registerClient(signUpFormData),

      onSuccess: () => {
        alert('Client successfully registered!')
        queryClient.invalidateQueries({queryKey: ['clients']})
      },

      onError: (error) => {
      setServerError(true);
      setPasswordError(false);
      setPasswordInputError(false);
      setConfirmPasswordInputError(false);
      setFirstNameError(false);
      setLastNameError(false);
      setPhoneError(false);
    }
    })

  const handleChange = (e) => {    
    setSignUpFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }


  const handleClientRegistration = async (e) => {

    e.preventDefault();

    if (signUpFormData.firstName === "") {
      setPasswordError(false);
      setPasswordInputError(false);
      setConfirmPasswordInputError(false);
      setFirstNameError(true);
      setLastNameError(false);
      setPhoneError(false);
      setServerError(false);
      return;
    }

    if (signUpFormData.lastName === "") {
      setPasswordError(false);
      setPasswordInputError(false);
      setConfirmPasswordInputError(false);
      setFirstNameError(false);
      setLastNameError(true);
      setPhoneError(false);
      setServerError(false);
      return;
    }

    if (signUpFormData.phone === "") {
      setPasswordError(false);
      setPasswordInputError(false);
      setConfirmPasswordInputError(false);
      setFirstNameError(false);
      setLastNameError(false);
      setPhoneError(true);
      setServerError(false);
      return;
    }

    if (signUpFormData.password === "") {
      setPasswordError(false);
      setPasswordInputError(true);
      setConfirmPasswordInputError(false);
      setFirstNameError(false);
      setLastNameError(false);
      setPhoneError(false);
      setServerError(false);
      return;
    }

    if (signUpFormData.confirmPassword === "") {
      setPasswordError(false);
      setPasswordInputError(false);
      setConfirmPasswordInputError(true);
      setFirstNameError(false);
      setLastNameError(false);
      setPhoneError(false);
      setServerError(false);
      return;
    }

    if ( signUpFormData.password !== signUpFormData.confirmPassword ) {
      setPasswordError(true);
      setPasswordInputError(false);
      setConfirmPasswordInputError(false);
      setFirstNameError(false);
      setLastNameError(false);
      setPhoneError(false);
      setServerError(false);
      return;
    }

    registerClientMutation.mutate(signUpFormData);

  }


  return (
     <section className="signup_form_container">
      <form action="" className="signupForm_container" onSubmit={handleClientRegistration}>
        {serverError && <div style={{color: "red", fontSize: "14px", fontWeight:"400", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> {registerClientMutation.error?.message} </div>}
        {/* {errorText && <div style={{color: "red", fontSize: "18px", fontWeight:"400"}}> User with this email address already exists! </div>} */}
        <div className="firstname_input">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={signUpFormData.firstName} onChange={handleChange}/>
        </div>
        {firstNameError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter first name. </div>}
        <div className="lastname_input">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastname" name="lastName" value={signUpFormData.lastName} onChange={handleChange}/>
        </div>
        {lastNameError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter last name. </div>}
        <div className="phone_input">
          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" name="phone" value={signUpFormData.phone} onChange={handleChange}/>
        </div>
        {phoneError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter phone number. </div>}
        <div className="signup_email_input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={signUpFormData.email} onChange={handleChange}/>
          {/* {emailError && <div style={{color: "red", fontSize: "14px", fontWeight:"500"}}> Please enter an email address. </div>} */}
        </div>
        <div className="signup_password_input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={signUpFormData.password} onChange={handleChange}/>
        </div>
        <div className="signup_password_input">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={signUpFormData.confirmPassword} onChange={handleChange}/>
          {passwordInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter a password. </div>}
          {confirmPasswordInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please re-enter your password. </div>}
          {passwordError && <div style={{color: "red", fontSize: "14px", fontWeight:"500"}}> <CgDanger /> Your passwords did not match. </div>}
        </div>
        <div className="signup_btn_container">
          <button className="signup_btn" type="submit">Register</button>
        </div>
      </form>
    </section>
  )
}

export default ClientRegistrationForm