import InputItem from "./InputItem"


const SearchSection = () => {
  return (
    <div className="p-2 md:p-5 border-[2px] rounded-xl border-gray-200">
      <p className="text-[20px] font-bold">Submit Order</p>
      <InputItem type='source'/>
      <InputItem type='destination'/>
      <button className="bg-black w-full text-white rounded-lg mt-5 p-3 cursor-pointer">Submit</button>
    </div>
  )
}

export default SearchSection