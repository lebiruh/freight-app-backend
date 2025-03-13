import React from 'react'
import About from '../About/About'
// import Footer from '../Footer/Footer'
import AboutPageHeaderImage from "../../assets/aboutPageImage/aboutPageHeaderImage.jpg"
// import CustomerNavbar from "../Navbar/CustomerNavbar"


const CustomerAboutPage = () => {
  return (
  
      <div className="container-xxl bg-white p-0">
        <div className="w-full bg-white p-0">
          <div className="flex flex-col-reverse md:flex-row items-center gap-0">
            <div className="md:w-1/2 p-5 lg:mt-5 text-center">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="list-none p-0 inline-flex space-x-2 text-sm uppercase">
                  <li>
                    <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
                  </li>
                  <li>
                    <span className="text-gray-300">/</span>
                  </li>
                  <li>
                    <span className="text-gray-700 font-medium" aria-current="page">About</span>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="md:w-1/2 p-5 lg:mt-5">
              <img className="max-w-full h-auto" src={AboutPageHeaderImage} alt=""/>
            </div>
          </div>
        </div>
        <About />
        {/* <Footer /> */}
      </div>

  )
}

export default CustomerAboutPage