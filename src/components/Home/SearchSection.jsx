import { useEffect, useState } from "react"
import InputItem from "./InputItem"
// import PhoneInput from "./PhoneInput"
import TruckTypeSelect from "./TruckTypeSelect"
import WeightInput from "./WeightInput"
import PriceInput from "./PriceInput"
// import SourceLocationInput from "./SourceLocationInput"
// import DestinationLocationInput from "./DestinationLocationInput"
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { addOrder } from "../../helpers/Orders"

import { CgDanger } from "react-icons/cg";
import CustomerFreightRequestModal from "../Customer/CustomerFreightRequestModal"
import CustomSourceLocationInput from "./CustomSourceLocationInput"
import CustomDestinationLocationInput from "./CustomeDestinationLocationInput"



const SearchSection = ({setStart, setEnd}) => {

  const [open, setOpen] = useState(false)
  // const [start, setStart] = useState(null);
  // const [end, setEnd] = useState(null);

  const [order, setOrder] = useState({
    userId:'', 
    // name: '', 
    // phone: '', 
    truck: '', 
    weight: '', 
    weightUnit:'',
    status: 'pending', 
    source: '', 
    destination: '', 
    price: '', 
    priceUnit: '',
    sourceLat: '',
    sourceLon: '',
    destinationLat: '',
    destinationLon: ''
  })

  // const [cities, setCities] = useState([]);

  // const [nameInputError, setNameInputError] = useState(false);
  // const [phoneInputError, setPhoneInputError] = useState(false);
  const [truckInputError, setTruckInputError] = useState(false);
  const [weightInputError, setWeightInputError] = useState(false);
  const [weightUnitInputError, setWeightUnitInputError] = useState(false);
  const [sourceInputError, setSourceInputError] = useState(false);
  const [destinationInputError, setDestinationInputError] = useState(false);
  const [priceInputError, setPriceInputError] = useState(false);
  const [priceUnitInputError, setPriceUnitInputError] = useState(false);
  const [serverError, setServerError] = useState(false);

  const CustomerData = JSON.parse(localStorage.getItem('customerData'))

  // console.log("Customer Data is", CustomerData);
  // const stateCityAPI = import.meta.env.VITE_COUNTRY_STATE_CITY_API_KEY
  // const stateCityURL = import.meta.env.VITE_STATE_CITY_URL

  useEffect(() => {
    if(CustomerData) {
      setOrder((prevState) => ({ ...prevState, userId: CustomerData?.userId }));
    }
  }, [])

  // useEffect(() => {
  //   // var requestOptions = {
  //   //   method: 'GET',
  //   //   headers: {"X-CSCAPI-KEY": country_State_City_API_KEY},
  //   //   redirect: 'follow'
  //   // };

  //   const fetchCities = async () => {
  //     try {
  //       const response = await fetch(
  //         stateCityURL,
  //         {
  //           method: 'GET',
  //           headers: {
  //             'X-CSCAPI-KEY': stateCityAPI,
  //           },
  //           redirect: 'follow',
  //         }
  //       );

  //     const result = await response.json(); // Parse the JSON here   

  //     let cityNames = [];
  //     if (Array.isArray(result)) {
  //       // console.log("result is: ", result.length);
  //       for (let i = 0; i < result.length; i++) {
  //         if (result[i]?.name) {
  //           cityNames.push({ label: result[i].name, value: result[i].name });
  //         }
  //       }
  //       setCities(cityNames);
  //       // console.log(cityNames);
  //     } else {
  //       console.warn('API response is not an array:', result);
  //     }
  //     } catch (error) {
  //       console.error('Fetch Error:', error);
  //     }
  //   };
  //   fetchCities();
  // }, [])

  const queryClient = useQueryClient()

  const handleChange = (e) => {
    setOrder(prevState => ({...prevState, [e.target.name]:e.target.value}));
  }

  const clearOrder = () => {
    setOrder({
      userId: CustomerData?.userId, 
      // name: '', 
      // phone: '', 
      truck: '', 
      weight: '', 
      weightUnit:'', 
      status: 'pending', 
      source: '', 
      destination: '', 
      price: '', 
      priceUnit: '',
      sourceLat: '',
      sourceLon: '',
      destinationLat: '',
      destinationLon: ''
    })
  }

  const handleSourceChange = (selectedOption) => {
    setOrder((prevState) => ({ ...prevState, source: selectedOption?.value }));
  };

  const handleDestinationChange = (selectedOption) => {
    setOrder((prevState) => ({ ...prevState, destination: selectedOption?.value }));
  };

  const handleTruckChange = (selectedOption) => {
    setOrder((prevState) => ({ ...prevState, truck: selectedOption?.value }));
  };

  const handleWeightUnitChange = (selectedOption) => {
    setOrder((prevState) => ({ ...prevState, weightUnit: selectedOption?.value }));
  };

  const handlePriceUnitChange = (selectedOption) => {
    setOrder((prevState) => ({ ...prevState, priceUnit: selectedOption?.value }));
  };


  const addOrderMutation = useMutation({
      mutationFn: (order) => addOrder(order),

      onSuccess: () => {
        alert('Order successfully submited!')
        queryClient.invalidateQueries({queryKey: ['pending']})
      },

      onError: (error) => {
        
      setServerError(true);
      // setNameInputError(false);
      // setPhoneInputError(false);
      setTruckInputError(false);
      setWeightInputError(false);
      setWeightUnitInputError(false);
      setSourceInputError(false);
      setDestinationInputError(false);
      setPriceInputError(false);
      setPriceUnitInputError(false);
    }
    })


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Order submitted is: ", order);

    if (order.name === "") {
      // setNameInputError(true);
      // setPhoneInputError(false);
      setTruckInputError(false);
      setWeightInputError(false);
      setWeightUnitInputError(false);
      setSourceInputError(false);
      setDestinationInputError(false);
      setPriceInputError(false);
      setPriceUnitInputError(false);
      return;
    }
    if (order.phone === "") {
      // setNameInputError(false);
      // setPhoneInputError(true);
      setTruckInputError(false);
      setWeightInputError(false);
      setWeightUnitInputError(false);
      setSourceInputError(false);
      setDestinationInputError(false);
      setPriceInputError(false);
      setPriceUnitInputError(false);
      return;
    }    
    if (order.weight === "") {
      // setNameInputError(false);
      // setPhoneInputError(false);
      setTruckInputError(false);
      setWeightInputError(true);
      setWeightUnitInputError(false);
      setSourceInputError(false);
      setDestinationInputError(false);
      setPriceInputError(false);
      setPriceUnitInputError(false);
      return;
    }
    if (order.weightUnit === "") {
      // setNameInputError(false);
      // setPhoneInputError(false);
      setTruckInputError(false);
      setWeightInputError(false);
      setWeightUnitInputError(true);
      setSourceInputError(false);
      setDestinationInputError(false);
      setPriceInputError(false);
      setPriceUnitInputError(false);
      return;
    }
    if (order.truck === "") {
      // setNameInputError(false);
      // setPhoneInputError(false);
      setTruckInputError(true);
      setWeightInputError(false);
      setWeightUnitInputError(false);
      setSourceInputError(false);
      setDestinationInputError(false);
      setPriceInputError(false);
      setPriceUnitInputError(false);
      return;
    }
    if (order.source === "") {
      // setNameInputError(false);
      // setPhoneInputError(false);
      setTruckInputError(false);
      setWeightInputError(false);
      setWeightUnitInputError(false);
      setSourceInputError(true);
      setDestinationInputError(false);
      setPriceInputError(false);
      setPriceUnitInputError(false);
      return;
    }
    if (order.destination === "") {
      // setNameInputError(false);
      // setPhoneInputError(false);
      setTruckInputError(false);
      setWeightInputError(false);
      setWeightUnitInputError(false);
      setSourceInputError(false);
      setDestinationInputError(true);
      setPriceInputError(false);
      setPriceUnitInputError(false);
      return;
    }
    if (order.price === "") {
      // setNameInputError(false);
      // setPhoneInputError(false);
      setTruckInputError(false);
      setWeightInputError(false);
      setWeightUnitInputError(false);
      setSourceInputError(false);
      setDestinationInputError(false);
      setPriceInputError(true);
      setPriceUnitInputError(false);
      return;
    }
    if (order.priceUnit === "") {
      // setNameInputError(false);
      // setPhoneInputError(false);
      setTruckInputError(false);
      setWeightInputError(false);
      setWeightUnitInputError(false);
      setSourceInputError(false);
      setDestinationInputError(false);
      setPriceInputError(false);
      setPriceUnitInputError(true);
      return;
    }
   
    // if(order.name == '' || order.phone == '' || order.truck == '' || order.weight == '' || order.wightUnit == '' || order.source == '' || order.destination == '' || order.price == '' || order.priceUnit == '') {
    //   alert("Please fill in all the required fields!");
    //   return
    // }
    
    // addOrderMutation.mutate(order);
    // clearOrder();
    // console.log("order is: ", order);
    setOpen(true);

  }


  return (
    <div className="p-2 md:p-5 border-[2px] rounded-xl border-gray-200">
      <CustomerFreightRequestModal open={open} setOpen={setOpen} order={order} addOrderMutation={addOrderMutation} clearOrder={clearOrder} setStart={setStart} setEnd={setEnd}/>
      <p className="text-[20px] font-bold">Submit Order</p>

      <form action="">
        {serverError && <div style={{color: "red", fontSize: "14px", fontWeight:"400", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> {addOrderMutation.error?.message} </div>}

        {/* <InputItem type='name' name='name' value={order.name} handleChange={handleChange}/>
        {nameInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter your name. </div>} */}
        {/* <PhoneInput name='phone' value={order.phone} handleChange={handleChange}/>
        {phoneInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter your phone number. </div>}
        <InputItem type='truck'/> */}

        <WeightInput type='weight' name='weight' value={order.weight} handleChange={handleChange} handleWeightUnitChange={handleWeightUnitChange}/>
        {weightInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter the weight of the freight. </div>}
        {weightUnitInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please select the measurement unit. </div>}

        <TruckTypeSelect handleTruckChange={handleTruckChange} />
        {truckInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please select the type of truck. </div>}

        {/* <SourceLocationInput options={cities} handleSourceChange={handleSourceChange}/> */}
        <CustomSourceLocationInput placeholder="Start location" onSelect={setStart} setOrder={setOrder} handleSourceChange={handleSourceChange} order={order}/>
        {sourceInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter source of freight. </div>}

        {/* <InputItem type='source' name='source' value={order.source} handleChange={handleChange}/>
        {sourceInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter source of freight. </div>} */}

        {/* <DestinationLocationInput options={cities} handleDestinationChange={handleDestinationChange}/> */}
        <CustomDestinationLocationInput placeholder="Dropoff location" onSelect={setEnd} setOrder={setOrder} handleDestinationChange={handleDestinationChange}/>
        {destinationInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter destination of freight. </div>}


        {/* <InputItem type='destination' name='destination' value={order.destination} handleChange={handleChange}/>
        {destinationInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter destination of freight. </div>} */}

        {/* <InputItem type='price' name='price' value={order.price} handleChange={handleChange}/> */}
        <PriceInput type='price' name='price' value={order.price} handleChange={handleChange} handlePriceUnitChange={handlePriceUnitChange}/>
        {priceInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please enter the price of freight. </div>}
        {priceUnitInputError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Please select unit price. </div>}

        <button className="bg-black w-full text-white rounded-lg mt-5 p-3 cursor-pointer" onClick={handleSubmit}>Submit</button>
      </form>
      
    </div>
  )
}

export default SearchSection