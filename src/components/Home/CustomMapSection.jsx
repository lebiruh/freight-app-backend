import 'leaflet/dist/leaflet.css'

import React, {useState, useEffect} from 'react';

import {MapContainer, TileLayer, Marker, Polyline, useMap} from 'react-leaflet'

import axios from 'axios'

import sourceLocation from "../../assets/sourceLocation.png"
import destinationLocation from "../../assets/destinationLocation.png"

import { Icon } from 'leaflet';

// import CustomMapAutocompleteInput from './CustomSourceLocationInput';


function ChangeView({center}) {
  const map = useMap();
  map.setView(center, 13);
  return null;
}

const CustomMapSection = ({start, end}) => {

  // const [start, setStart] = useState([9.03, 38.74]);
  // const [start, setStart] = useState(null);
  // const [end, setEnd] = useState([10.1666, 38.1352]);
  // const [end, setEnd] = useState(null);
  const [route, setRoute] = useState([]);

  const customSourceLocationIcon = new Icon({
    iconUrl: sourceLocation,
    iconSize: [28, 28]
  })

  const customDestinationLocationIcon = new Icon({
    iconUrl: destinationLocation,
    iconSize: [28, 28]
  })

  const getRoute = async () => {

    if(!start || !end) return;

    const apiKey = import.meta.env.VITE_OPENROUTESERVICE_API_KEY

    const res = await axios.post("https://api.openrouteservice.org/v2/directions/driving-car/geojson", {
          "coordinates": [[start[1], start[0]], [end[1], end[0]]]
          // coordinates: [[38.74, 9.03], [38.1352, 10.1666]]
        },
        {
          headers: {
            Authorization: apiKey,
            "Content-Type": "application/json"
          }
        }
      );

      const coords = res.data.features[0].geometry.coordinates.map((c) => {
        
        // console.log("c[0] is: ", c[0]);
        // console.log("c[1] is: ", c[1]);
        
        return [c[1], c[0]]
      });

      setRoute(coords)

  }


  useEffect(() => {
    getRoute();
    
  }, [start,end])



  return (
    <div>

      {/* <div style={{marginBottom: "10px"}}>

        <input 
          placeholder='Start location'
          onBlur={(e) => handleSearch(e.target.value, setStart)} 
        />
        <input 
          placeholder='End location'
          onBlur={(e) => handleSearch(e.target.value, setEnd)} 
        />
      </div> */}

      <div style={{display: "flex", gap: "1rem", marginBottom: "10px"}}>
        {/* <CustomMapAutocompleteInput placeholder="Start location" onSelect={setStart}/>
        <CustomMapAutocompleteInput placeholder="End location" onSelect={setEnd}/> */}
      </div>

      <MapContainer 
        center={[9.03, 38.74]} //addis ababa
        zoom={6}
        style={{height: '500px', width: "100%"}}
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {
          start && <Marker position={start} icon={customSourceLocationIcon}/>
        }
        {
          end && <Marker position={end} icon={customDestinationLocationIcon}/>
        }

        {
          start && <ChangeView center={start}/>
        }

        {
          route.length > 0 && <Polyline positions={route} color="black" />
        }

      </MapContainer>

    </div>
  )
}

export default CustomMapSection