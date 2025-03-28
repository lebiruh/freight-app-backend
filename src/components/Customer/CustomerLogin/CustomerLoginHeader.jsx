import "./customerLoginHeader.css"

const CustomerLoginHeader = ({addClass}) => {

  return (
    <header className={`login_header ${addClass}`}>
      <div className="login_header_logo">
        <span className="family">Freight</span><span className="share">App</span>
      </div>      
    </header>
  )
}

export default CustomerLoginHeader