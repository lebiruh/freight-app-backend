import React, { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { useNavigate } from "react-router";
// import GoogleMapSection from "../Home/GoogleMapSection"
// import SearchSection from "../Home/SearchSection"
// import CustomerNavbar from "../Navbar/CustomerNavbar"
import {
  useQuery
} from '@tanstack/react-query';
import { IoMdSearch } from "react-icons/io";

import {getOrders} from '../../helpers/Orders'


import AllAvailableJobs from './AvailableJobs/AllAvailableJobs';

import './styles/customerHomePage.css'
import AvailabeJobsBySearch from './AvailableJobs/AvailabeJobsBySearch';



const CustomerHomePage = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');


  // Available Freight Job Queries
  const allJobs = useQuery({ queryKey: ['pending'], queryFn: () => getOrders('pending') })

  // console.log("Pending orders are: ", allJobs?.data);

  // const searchResults = useQuery({queryKey:['searchResults', debouncedQuery], 
  //   queryFn: (debouncedQuery) => getPendingOrdersBySearch(debouncedQuery), 
  //   enabled: !!debouncedQuery,
  //   staleTime: 1000 * 60 * 5
  // })

  // const searchResults = useQuery({queryKey:['searchResults', searchQuery], 
  //   queryFn: ({queryKey}) => {
  //     const actualSearchQuery = queryKey[1];
  //     getPendingOrdersBySearch(actualSearchQuery)}, 
  //   enabled: !!searchQuery,
  //   // staleTime: 1000 * 60 * 5,
  //   onError: (error) => {
  //   console.error("Error fetching search results:", error);
  //   }
  // })


  const navigate = useNavigate();

  const handleOnSearchInputChange = (e) => {
    e.stopPropagation();
    // setIsDisplayOpen(false);
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);

    return () => clearTimeout(handler)
    }, 300)
  },[searchQuery])

  // console.log("allJobs on home page is: ", searchQuery);
  // console.log("debouncedQuery on home page is: ", debouncedQuery);


  const handleJobClick = (jobId) => {
    navigate(`/job-details/${jobId}`);
  };

  if (allJobs?.isLoading) {
        return (
          <div className="container-xxl h- bg-white p-0">
            <div className="w-full h-[90vh] bg-white p-0">
              Loading available jobs...
            </div>
          </div>
        )        
    }



  return (
    <div className="container-xxl bg-white p-0">
        <div className="w-full bg-white p-0">
          <div className="input">
            <IoMdSearch color='#3B3D3E' style={{ width: '25px', height: '25px' }}/>
            <input type="text" placeholder="Search" value={searchQuery} onChange={handleOnSearchInputChange}/>
          </div>
          <div className="input_small_screen">
            <IoMdSearch color='#3B3D3E' style={{ width: '25px', height: '25px' }}/>
            <input type="text" placeholder="Search" value={searchQuery} onChange={handleOnSearchInputChange}/>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center gap-0">
            <div className="md:w-1/2 p-5 lg:mt-5 text-center">
              <h1 className="text-2xl font-bold mb-4">Available Freight Jobs</h1>
            </div>
          </div>          
        </div>
        <div>
          {/* <AvailabeJobsBySearch searchQuery={searchQuery} handleJobClick={handleJobClick}/> */}
          {
            searchQuery ? <AvailabeJobsBySearch debouncedQuery={debouncedQuery} handleJobClick={handleJobClick}/> : <AllAvailableJobs allJobs={allJobs} handleJobClick={handleJobClick}/>
          }          

          {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="job listings table">
              <TableHead>
                <TableRow>
                  <TableCell>Start Location</TableCell>
                  <TableCell align="left">Destination</TableCell>
                  <TableCell align="left">Load Amount</TableCell>
                  <TableCell align="left">Truck Type</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow
                    key={job.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {job.startLocation}
                    </TableCell>
                    <TableCell align="left">{job.destination}</TableCell>
                    <TableCell align="left">{job.loadAmount}</TableCell>
                    <TableCell align="left">{job.truckType}</TableCell>
                    <TableCell align="left">${job.price}</TableCell>
                    <TableCell align="left">
                      <IconButton onClick={() => handleJobClick(job.id)}>
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
        </div>
      </div>
  )
}

export default CustomerHomePage