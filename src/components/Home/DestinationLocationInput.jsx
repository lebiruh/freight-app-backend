
import { SiSourcetree } from "react-icons/si";
import Select from 'react-select'

import {useTranslation} from "react-i18next"
const DestinationLocationInput = ({options, handleDestinationChange}) => {

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
      <SiSourcetree />
      <Select options={options} id="destination" placeholder={t("orderFreight.dropoffLocation")} onChange={handleDestinationChange} styles={customStyles} className='w-full'/>
      
    </div>
  )
}

export default DestinationLocationInput