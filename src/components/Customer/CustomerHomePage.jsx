import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
} from '@mui/material';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router";
// import GoogleMapSection from "../Home/GoogleMapSection"
// import SearchSection from "../Home/SearchSection"
// import CustomerNavbar from "../Navbar/CustomerNavbar"
import {
  useQuery
} from '@tanstack/react-query';

import {getPendingOrders} from '../../helpers/Orders'

import {useTranslation} from "react-i18next"



const CustomerHomePage = () => {


  // Available Freight Job Queries
  const query = useQuery({ queryKey: ['pending'], queryFn: () => getPendingOrders() })

  console.log("Pending orders are: ", query?.data);

  const {t} = useTranslation();

  // const jobs = [
  //   {
  //     id: 1,
  //     startLocation: 'Los Angeles, CA',
  //     destination: 'Chicago, IL',
  //     loadAmount: '40,000 lbs',
  //     truckType: 'Reefer',
  //     price: 3500,
  //   },
  //   {
  //     id: 2,
  //     startLocation: 'Dallas, TX',
  //     destination: 'Miami, FL',
  //     loadAmount: '35,000 lbs',
  //     truckType: 'Flatbed',
  //     price: 2800,
  //   },
  //   {
  //     id: 3,
  //     startLocation: 'Seattle, WA',
  //     destination: 'Denver, CO',
  //     loadAmount: '45,000 lbs',
  //     truckType: 'Dry Van',
  //     price: 3200,
  //   },
  //     {
  //     id: 4,
  //     startLocation: 'New York, NY',
  //     destination: 'Atlanta, GA',
  //     loadAmount: '38,000 lbs',
  //     truckType: 'Reefer',
  //     price: 3000,
  //   },
  // ];

  const navigate = useNavigate();


  const handleJobClick = (jobId) => {
    navigate(`/job-details/${jobId}`);
  };



  return (
    <div className="container-xxl bg-white p-0">
        <div className="w-full bg-white p-0">
          <div className="flex flex-col-reverse md:flex-row items-center gap-0">
            <div className="md:w-1/2 p-5 lg:mt-5 text-center">
              <h1 className="text-2xl font-bold mb-4">Available Freight Jobs</h1>
            </div>
          </div>
        </div>
        <div>
          <List>
            {query?.data?.map((job) => (
              <React.Fragment key={job.freightId}>
                <ListItem
                  // button
                  onClick={() => handleJobClick(job.freightId)}
                  sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }} // Optional hover effect
                >
                  <ListItemText
                    primary={`${job.start_location} to ${job.end_location}`}
                    secondary={`${t("home.load")}: ${job.weight} ${job?.weight_unit}, ${t("home.truck")}: ${job.type}, ${t("home.price")}: ${job.price} ETB/${job?.price_unit}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="details" onClick={() => handleJobClick(job.freightId)}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>

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