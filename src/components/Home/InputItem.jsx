import { RiOpenSourceFill } from "react-icons/ri";
import { SiSourcetree } from "react-icons/si";

const InputItem = ({type}) => {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      {type == 'source' ? <RiOpenSourceFill /> : <SiSourcetree />}
      <input type="text" placeholder={type == 'source' ? 'Pickup Location' : 'Dropoff Location'} className='bg-transparent w-full outline-none' />
    </div>
  )
}

export default InputItem