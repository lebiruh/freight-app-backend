import { PiTruckTrailerFill } from "react-icons/pi";
import Select from 'react-select'

const TruckTypeSelect = ({handleTruckChange}) => {


  const options = [
    { value: 'TRAILER', label: 'TRAILER' },
    { value: 'SINO', label: 'SINO' },
    { value: 'ISUZU', label: 'ISUZU' },
    { value: 'HIGHBED', label: 'HIGHBED' },
    { value: 'LOWBED', label: 'LOWBED' },
    
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

  // const options = [
  //   'SINO',
  //   'ISUZU',
  //   'HIGHBED',
  //   'LOWBED'
  // ]




  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <PiTruckTrailerFill /> 
      <Select options={options} id="truck" onChange={handleTruckChange} styles={customStyles} className='w-full'/>
      {/* <select id="truck" name={name} value={value} onChange={handleChange} className='bg-transparent w-full outline-none'>
        {
          options.map((item, i) => {
            return <option key={i} value={item}>{item}</option>
          })
        }
      </select> */}
      {/* <input type="tel" placeholder='Phone No' className='bg-transparent w-full outline-none' /> */}
    </div>
  )
}

export default TruckTypeSelect