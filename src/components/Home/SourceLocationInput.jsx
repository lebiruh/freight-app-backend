import { RiOpenSourceFill } from "react-icons/ri";
// import { SiSourcetree } from "react-icons/si";
import Select from 'react-select'

import {useTranslation} from "react-i18next"

const LocationInput = ({options, handleSourceChange}) => {

  const {t} = useTranslation();


  const customStyles = {
    control: (provided) => ({
      ...provided,
      // width: "100%",
      outline: "none",
      border: 'none',
      backgroundColor: "transparent"
    }),
    option: (provided) => ({...provided})
  }


  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>     
      <RiOpenSourceFill />
      <Select options={options} id="source" placeholder={t("orderFreight.pickupLocation")} onChange={handleSourceChange} styles={customStyles} className='w-full'/>
      
    </div>
  )
}

export default LocationInput