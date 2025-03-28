import { RiOpenSourceFill } from "react-icons/ri";
import { SiSourcetree } from "react-icons/si";
import { IoPersonCircleSharp } from "react-icons/io5";
// import { FaPhone } from "react-icons/fa6";
// import { PiTruckTrailerFill } from "react-icons/pi";
import { MdOutlineAttachMoney } from "react-icons/md";

import {useTranslation} from "react-i18next"

const InputItem = ({type, name, value, handleChange}) => {

  const {t} = useTranslation();


  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      {type == 'source' ? <RiOpenSourceFill /> : type == 'name' ? <IoPersonCircleSharp /> : type == 'price' ? <MdOutlineAttachMoney /> : <SiSourcetree />}
      <input type="text" placeholder={type == 'source' ? t("orderFreight.pickupLocation") : type == 'name' ? t("orderFreight.fullName") : type == 'truck' ? t("orderFreight.truck") : type == 'price' ? t("orderFreight.price") : t("orderFreight.dropoffLocation")} name={name} value={value} onChange={handleChange} className='bg-transparent w-full outline-none' />
    </div>
  )
}

export default InputItem