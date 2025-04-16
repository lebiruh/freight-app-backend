import { useState } from "react";
import { useNavigate } from "react-router";
import {useMutation} from "@tanstack/react-query"
// import { login } from "../../helpers/login";
// import {AuthProvider} from "../../Context/AuthContext/AuthContext"
import "./editorLoginForm.css"
// import { useAuth } from "../../helpers/useAuth";

import { CgDanger } from "react-icons/cg";
import { EditorLogin } from "../../../helpers/Login";
import "./editorLoginForm.css"

const EditorLoginForm = () => {

  const [loginData, setLoginData] = useState({phone: "", password: ""})
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [serverError, setServerError] = useState(false);

  // const {setAuthData} = useAuth(AuthProvider)

  const navigate = useNavigate();

  const mutation = useMutation({

    mutationFn: EditorLogin,

    onSuccess: (data) => {

      // setAuthData(data);
      localStorage.setItem('adminEditorData', JSON.stringify(data));

      setServerError(false);
      setPhoneError(false);
      setPasswordError(false);

      // setAuthData(JSON.parse(localStorage.getItem('customerData')));

      navigate("/admin")

    },
    onError: (error) => {
      setPhoneError(false);
      setPasswordError(false);
      setServerError(true);
    }
  })

  const handleChange = (e) => {    
    setLoginData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loginData.phone === "") {
      setPhoneError(true);
      setPasswordError(false);
      setServerError(false);
      return;
    }

    if (loginData.password === "") {
      setPasswordError(true);
      setPhoneError(false);
      setServerError(false);
      return;
    }

    mutation.mutate(loginData);

  }

  return (
    <section className="login_form_container">
      <div className="login_form_header_content">
        <h1>Sign in</h1>
        <p>Hello, Please sign in.</p>
      </div>
      <form onSubmit={handleLogin} className="loginForm_container">
        {serverError && <div style={{color: "red", fontSize: "14px", fontWeight:"400", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> {mutation.error?.message} </div>}
        <div className="email_input">
          <label htmlFor="phone">Phone</label>
          <input type="phone" id="phone" name="phone" placeholder="Phone" value={loginData.phone} onChange={handleChange}/>
          {phoneError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter your phone number. </div>}
        </div>
        <div className="password_input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange}/>
          {passwordError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter your password. </div>}
        </div>
        <div className="forgot_password">
          <a href="#">Forgot password?</a>
        </div>
        <div className="signin_container">
          <button type="submit" className="signin_btn">
            {mutation.isPending ? "Signing in..." : "Sign in" }
          </button>
        </div>
        {/* <div className="separator">
          By clicking Continue, you agree to FreightApp&apos;s <a href="#" >User Agreement</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookie Policy</a>
        </div> */}
      </form>
    </section>
  )
}

export default EditorLoginForm