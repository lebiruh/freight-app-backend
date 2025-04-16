

import EditorLoginForm from "../../components/AdminPanel/EditorLoginForm/EditorLoginForm"
import EditorLoginHeader from "../../components/AdminPanel/EditorLoginForm/EditorLoginHeader"

const EditorLoginPage = () => {
  return (
    <>
      <EditorLoginHeader addClass="bg_white"/>    
      <div className="login_container">    
        <EditorLoginForm />
        <div className="join">
          {/* New to Freight App?<span><Link to="/">Join now</Link></span> */}
        </div>
        <div className="login_position_setter"></div>
      </div>
      {/* <LoginFooter /> */}
    </>
  )
}

export default EditorLoginPage