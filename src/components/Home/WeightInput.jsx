import { GiWeight } from "react-icons/gi";
import Select from 'react-select'
import {useTranslation} from "react-i18next"

const WeightInput = ({name, value, handleChange, handleWeightUnitChange}) => {

  const {t} = useTranslation();

  const options = [
    // { value: 'qtl', label: 'qtl' },
    { value: 'qtl', label: 'qtl' }
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
      <GiWeight /> 
      <input type="number" name={name} value={value} onChange={handleChange} placeholder={t("orderFreight.weight")} className='bg-transparent w-2/3 outline-none' />
      <Select options={options} onChange={handleWeightUnitChange} styles={customStyles} className='w-1/3'/>
    </div>
  )
}

export default WeightInput