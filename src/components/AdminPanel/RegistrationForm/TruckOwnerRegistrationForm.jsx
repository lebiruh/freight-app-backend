import {Link} from "react-router";
import "../styles/registrationForm.css"
import { useState } from "react"; 

import { registerTruckOwner } from "../../../helpers/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CgDanger } from "react-icons/cg";
// import {signUp} from "../../helpers/signUp";
// import {AuthProvider} from "../../Context/AuthContext/AuthContext";
// import { useAuth } from "../../helpers/useAuth";

const TruckOwnerRegistrationForm = () => {

  const [signUpFormData, setSignUpFormData] = useState({firstName: "", lastName: "", phone: "", email: "", userType: 'truck_owner'})

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [serverError, setServerError] = useState(false);;

  // const navigate = useNavigate();
  const queryClient = useQueryClient()

  const registerTruckOnwerMutation = useMutation({
      mutationFn: (signUpFormData) => registerTruckOwner(signUpFormData),

      onSuccess: () => {
        alert('Client successfully registered!')
        // queryClient.invalidateQueries({queryKey: ['truckOwners']})
      },

      onError: (error) => {
        setFirstNameError(false);
        setLastNameError(false);
        setPhoneError(false);
        setServerError(true);
    }
    })

  

  const handleChange = (e) => {    
    setSignUpFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }


  const handleRegisterTruckOwner = async (e) => {
    e.preventDefault();

    if (signUpFormData.firstName === "") {
      setLastNameError(false);
      setPhoneError(false);
      setServerError(false);
      setFirstNameError(true);
      return;
    }

    if (signUpFormData.lastName === "") {
      setFirstNameError(false);
      setPhoneError(false);
      setServerError(false);
      setLastNameError(true);
      return;
    }

    if (signUpFormData.phone === "") {
      setFirstNameError(false);
      setLastNameError(false);
      setServerError(false);
      setPhoneError(true);
      return;
    }

    registerTruckOnwerMutation.mutate(signUpFormData);

  }


  return (
     <section className="signup_form_container">
      <form action="" className="signupForm_container" onSubmit={handleRegisterTruckOwner}>
        {serverError && <div style={{color: "red", fontSize: "14px", fontWeight:"400", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> {registerTruckOnwerMutation.error?.message} </div>}
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
        </div>
        <div className="signup_btn_container">
          <button className="signup_btn" type="submit">Register</button>
        </div>
      </form>
    </section>
  )
}

export default TruckOwnerRegistrationForm