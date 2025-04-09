import {Link} from "react-router";
import "../styles/registrationForm.css"
import { useState } from "react";
import PhoneInput from "../../Home/PhoneInput";
// import { useMutation } from "@tanstack/react-query";
// import {signUp} from "../../helpers/signUp";
// import {AuthProvider} from "../../Context/AuthContext/AuthContext";
// import { useAuth } from "../../helpers/useAuth";

const TruckOwnerRegistrationForm = () => {

  const [signUpFormData, setSignUpFormData] = useState({firstName: "", lastName: "", phone: "", email: ""})

  const [errorText, setErrorText] = useState("");

  const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  const [serverError, setServerError] = useState(false);

  // const navigate = useNavigate();

  // const mutation = useMutation({

  //   mutationFn: signUp,

  //   onSuccess: (data) => {

  //     setServerError(false);
  //     setEmailError(false);
  //     setPasswordError(false);

  //     if (data?.response?.status === 409) {
  //       setErrorText(data.response.data);
  //     } else {
  //       setSignUpData(signUpFormData);
  //       setSignUpCode(data.passCode);

  //       navigate("/confirm-email")
  //     }

      

  //   },
  //   onError: (err) => {
  //     setEmailError(false);
  //     setPasswordError(false);

  //   }
  // })

  const handleChange = (e) => {    
    setSignUpFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }


  const handleSignUp = async (e) => {
    e.preventDefault();

    if (signUpFormData.email === "") {
      setEmailError(true);
      // setPasswordError(false);
      setServerError(false);
      return;
    }

    // if ( signUpFormData.password !== signUpFormData.confirmPassword ) {
    //   setPasswordError(true);
    //   setEmailError(false);
    //   setServerError(false);
    //   return;
    // }

    // mutation.mutate(signUpFormData);

  }


  return (
     <section className="signup_form_container">
      <form action="" className="signupForm_container" onSubmit={handleSignUp}>
        {serverError && <div style={{color: "red", fontSize: "14px", fontWeight:"400"}}> Something went wrong. Please try again later. </div>}
        {errorText && <div style={{color: "red", fontSize: "18px", fontWeight:"400"}}> User with this email address already exists! </div>}
        <div className="firstname_input">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required value={signUpFormData.firstName} onChange={handleChange}/>
        </div>
        <div className="lastname_input">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastname" name="lastName" required value={signUpFormData.lastName} onChange={handleChange}/>
        </div>
        <div className="phone_input">
          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" name="phone" required value={signUpFormData.phone} onChange={handleChange}/>
        </div>
        {/* <PhoneInput name='phone' value={signUpFormData.phone} handleChange={handleChange}/> */}
        <div className="signup_email_input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required value={signUpFormData.email} onChange={handleChange}/>
          {emailError && <div style={{color: "red", fontSize: "14px", fontWeight:"500"}}> Please enter an email address. </div>}
        </div>
        <div className="signup_btn_container">
          <button className="signup_btn">Register</button>
        </div>
      </form>
    </section>
  )
}

export default TruckOwnerRegistrationForm