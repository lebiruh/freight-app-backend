import React, { useEffect, useState } from 'react'
import axios from 'axios'

// import { RiOpenSourceFill } from "react-icons/ri";

import { SiSourcetree } from "react-icons/si";

const CustomDestinationLocationInput = ({placeholder, onSelect, setOrder}) => {

  const [input, setInput] = useState('')
  const [suggestions, setSuggestions] = useState([])


  useEffect(() => {

    const fetchSuggestions = async () => {

      if(input.length < 3) {
        setSuggestions([])
        return;
      }

      const res = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${input}`);

      setSuggestions(res.data)
    }

    const timeout = setTimeout(fetchSuggestions, 300); // debounce

    return () => clearTimeout(timeout)

  }, [input])

  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4' style={{position: 'relative'}} >

      <SiSourcetree />
      
      <input 
        placeholder={placeholder}
        value={input}
        // value={order.source}
        onChange={(e) => setInput(e.target.value)}
        // onChange={handleSourceChange}
        style={{width: "300px", padding: "6px"}}
      />

      {
        suggestions.length > 0 && (
          <ul
            style={{
              position: 'absolute',
              top: "100%",
              left: 0,
              right: 0,
              maxHeight: "150px",
              overflowY: "auto",
              backgroundColor: "#fff",
              listStyle: "none",
              margin: 0,
              padding: 0,
              border: "1px solid #ccc",
              zIndex: 10000
            }}
          >

            {
              suggestions.map((place) => (
                <li
                  key={place.place_id}
                  onClick={() => {
                    // console.log("place is: ", place);
                    onSelect([parseFloat(place.lat), parseFloat(place.lon)]);
                    setInput(place.display_name);
                    setOrder((prevState) => ({ ...prevState, destination: place.display_name }));
                    setOrder((prevState) => ({ ...prevState, destinationLat: parseFloat(place.lat) }));
                    setOrder((prevState) => ({ ...prevState, destinationLon: parseFloat(place.lon) }));
                    setSuggestions([])
                  }}
                  style={{
                    padding: "6px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee"
                  }}
                >
                  {place.display_name}
                </li>
              ))
            }

          </ul>
        )
      }

    </div>
  )
}

export default CustomDestinationLocationInput