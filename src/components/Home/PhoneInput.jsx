import { FaPhone } from "react-icons/fa6";
import {useTranslation} from "react-i18next"

const PhoneInput = ({name, value, handleChange}) => {

  const {t} = useTranslation();

  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <FaPhone /> 
      <input type="number" name={name} value={value} onChange={handleChange} placeholder={t("orderFreight.phone")} className='bg-transparent w-full outline-none' />
    </div>
  )
}

export default PhoneInput