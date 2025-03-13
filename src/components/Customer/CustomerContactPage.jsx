import React from 'react'
import About from '../About/About'
// import Footer from '../Footer/Footer'
// import CustomerNavbar from "../Navbar/CustomerNavbar"
import ContactPageHeaderImage from "../../assets/contactPageImage/contactPageHeaderImage.jpg"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const CustomerContactPage = () => {
  return (
      <div className="container-xxl bg-white p-0">
        <div className="w-full bg-white p-0">
          <div className="flex flex-col-reverse md:flex-row items-center gap-0">
            <div className="md:w-1/2 p-5 lg:mt-5 text-center">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="list-none p-0 inline-flex space-x-2 text-sm uppercase">
                  <li>
                    <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
                  </li>
                  <li>
                    <span className="text-gray-300">/</span>
                  </li>
                  <li>
                    <span className="text-gray-700 font-medium" aria-current="page">Contact</span>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="md:w-1/2 p-5 lg:mt-5">
              <img className="max-w-full h-auto" src={ContactPageHeaderImage} alt=""/>
            </div>
          </div>
        </div>
        <div className="text-center mx-auto mb-5 max-w-[600px] py-6">
          <h1 className="mb-3 text-4xl font-bold category-text-custom-primary">Contact Us</h1>
          <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        {/* Address and Email Section Start */}
        <div className="flex flex-wrap -mx-4">
            <div className="w-full">
                <div className="flex flex-wrap gap-y-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 wow fadeIn" data-wow-delay="0.1s">
                        <div className="bg-gray-100 rounded-lg p-3">
                            <div className="flex items-center bg-white rounded-lg p-3 border border-dashed border-emerald-300">
                                <div className="w-[40px] h-[40px] mr-3">
                                    <FaMapMarkerAlt />
                                </div>
                                <span>Lamberet, Addis Ababa, Ethiopia</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <div className="bg-gray-100 rounded-lg p-3">
                            <div className="flex items-center bg-white rounded-lg p-3 border border-dashed border-emerald-300">
                                <div className="w-[40px] h-[40px] mr-3">
                                    <FaEnvelopeOpen/>
                                </div>
                                <span>info@freightapp.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 wow fadeIn" data-wow-delay="0.5s">
                        <div className="bg-gray-100 rounded-lg p-3">
                            <div className="flex items-center bg-white rounded-lg p-3 border border-dashed border-emerald-300">
                                <div className="w-[40px] h-[40px] mr-3">
                                    <FaPhoneAlt/>
                                </div>
                                <span>+012 345 6789/ +251 123 456 789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 wow fadeInUp p-8" data-wow-delay="0.1s">
                <iframe className="relative rounded-lg w-full h-full min-h-[400px] border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                    frameBorder="0" allowFullscreen="" aria-hidden="false"
                    tabIndex="0"></iframe>
            </div>
            <div className="w-full md:w-1/2 p-8">
                <div className="wow fadeInUp" data-wow-delay="0.5s">
                    <p className="mb-4">The contact form is currently inactive.</p>
                    <form>
                        <div className="flex flex-wrap -mx-3 gap-6">
                            <div className="w-full flex justify-between p-0">
                              <div className="w-full md:w-1/2">
                                  <div className="form-floating">
                                      <input type="text" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="name" placeholder="Your Name"/>
                                      <label htmlFor="name" className="hidden">Your Name</label>
                                  </div>
                              </div>
                              <div className="w-full md:w-1/2">
                                  <div className="form-floating">
                                      <input type="email" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="email" placeholder="Your Email"/>
                                      <label htmlFor="email" className="hidden">Your Email</label>
                                  </div>
                              </div>
                            </div>                            
                            <div className="w-full">
                                <div className="form-floating">
                                    <input type="text" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="subject" placeholder="Subject"/>
                                    <label htmlFor="subject" className="hidden">Subject</label>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="form-floating">
                                    <textarea className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                    <label htmlFor="message" className="hidden">Message</label>
                                </div>
                            </div>
                            <div className="w-full">
                                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 text-center cursor-pointer" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* Address and Email Section end */} 
      </div>
  )
}

export default CustomerContactPage