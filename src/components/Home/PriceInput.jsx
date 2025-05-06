import { MdOutlineAttachMoney } from "react-icons/md";
import Select from 'react-select'

import {useTranslation} from "react-i18next"

const PriceInput = ({name, value, handleChange, handlePriceUnitChange}) => {

  const {t} = useTranslation();

  const options = [
    // { value: 'kg', label: 'per kg' },
    { value: 'qtl', label: 'per qtl' },
    { value: 'trip', label: 'per trip' },
  ]

  const customStyles = {
    control: (provided) => ({
      ...provided,
      // width: "100%",
      outline: "none",
      border: 'none',
      margin: '0px',
      padding: '0px',
      // backgroundColor: "transparent",
      fontSize: "14px"
    }),
    option: (provided) => ({...provided})
  }



  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <MdOutlineAttachMoney /> 
      <input type="number" name={name} value={value} onChange={handleChange} placeholder={t("orderFreight.price")} className='bg-transparent w-2/3 outline-none' />
      <Select options={options} onChange={handlePriceUnitChange} styles={customStyles} className='w-1/3'/>
    </div>
  )
}

export default PriceInput