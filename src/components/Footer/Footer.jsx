import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import "./Footer.css"

import {useTranslation} from "react-i18next"

const Footer = () => {

  const {t} = useTranslation();


  return (
    <div className="w-full footer-bg-custom-primary text-gray-400 pt-12 mt-12">
      <div className="w-full py-6 px-5">
        <div className="w-full flex flex-wrap gap-5 justify-center items-center">
          <div className="w-full md:w-1/3 place-items-center">
            <h5 className="text-white mb-4 font-bold text-3xl">{t("footer.getInTouch")}</h5>
            <p className="flex items-center mb-2 gap-2"><FaLocationDot />Lamberet, Addis Ababa, Ethiopia</p>
            <p className="flex items-center mb-2 gap-2"><FaPhoneAlt />+251 345 67890</p>
            <p className="flex items-center mb-2 gap-2"><FaEnvelope />info@freightapp.com</p>
            <div className="flex pt-2 gap-2">
                <a className="flex items-center justify-center border border-white text-white hover:bg-white hover:text-gray-900 font-medium p-2 rounded-full" href=""><FaTwitter /></a>
                <a className="flex items-center justify-center border border-white text-white hover:bg-white hover:text-gray-900 font-medium p-2 rounded-full" href=""><FaFacebook /></a>
                <a className="flex items-center justify-center border border-white text-white hover:bg-white hover:text-gray-900 font-medium p-2 rounded-full" href=""><FaYoutube /></a>
                <a className="flex items-center justify-center border border-white text-white hover:bg-white hover:text-gray-900 font-medium p-2 rounded-full" href=""><FaLinkedin/></a>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex-col place-items-center">
            <h5 className="text-white mb-2 font-bold text-3xl">{t("footer.quickLinks")}</h5>
            <a className="block text-gray-400 p-2 hover:underline" href="/about">{t("footer.about")}</a>
            <a className="block text-gray-400 p-2 hover:underline" href="/contact">{t("footer.contactUs")}</a>
            <a className="block text-gray-400 p-2 hover:underline" href="">Privacy Policy</a>
            <a className="block text-gray-400 p-2 hover:underline" href="">Terms & Conditions</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer;