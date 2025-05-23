import GoogleMapSection from "../Home/GoogleMapSection"
import SearchSection from "../Home/SearchSection"

import CustomMapSection from "../Home/CustomMapSection"
import { useState } from "react";

const CustomerFreightRequestPage = () => {

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  return (
    <>
      {/* <CustomerNavbar /> */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <SearchSection start={start} setStart={setStart} end={end} setEnd={setEnd}/>
        </div>
        <div className="col-span-2">
          {/* <GoogleMapSection /> */}
          <CustomMapSection start={start} setStart={setStart} end={end} setEnd={setEnd}/>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default CustomerFreightRequestPage