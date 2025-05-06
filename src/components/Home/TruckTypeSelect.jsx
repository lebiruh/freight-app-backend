import { PiTruckTrailerFill } from "react-icons/pi";
import Select from 'react-select'

const TruckTypeSelect = ({handleTruckChange}) => {


  const options = [
    { label: 'TRAILER', value: 'TRAILER' },
    { label: 'CASONI', value: 'CASONI' },
    { label: 'ISUZU', value: 'ISUZU' },
    { label: 'FSR', value: 'FSR' },
    { label: 'HIGHBED', value: 'HIGHBED' },
    { label: 'LOWBED', value: 'LOWBED' },    
  ]

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
      <PiTruckTrailerFill /> 
      <Select options={options} id="truck" onChange={handleTruckChange} styles={customStyles} className='w-full'/>
    </div>
  )
}

export default TruckTypeSelect