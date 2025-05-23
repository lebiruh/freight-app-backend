// import React, { useState } from 'react';
import {
    Typography,
    Paper,
    // Grid,
    Button,
    Divider,
} from '@mui/material';
import { useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';

// Assuming you have a function to fetch a single job by ID
import { useQuery } from '@tanstack/react-query';
import { getPendingOrdersById } from '../../../helpers/Orders'; 
import Grid from '@mui/material/Grid';



import {useTranslation} from "react-i18next"
import AvailableTrucksForDispatch from './AvailableTrucksForDispatch';
import { getTrucksByTruckType } from '../../../helpers/Trucks';
import { CgDanger } from "react-icons/cg";

const Dispatch = () => {

  // const [serverError, setServerError] = useState(false); 

  const { freightId } = useParams();
  // const navigate = useNavigate();

  const {t} = useTranslation();

  
  const jobById = useQuery({
      queryKey: ['pending', freightId], // Include jobId in the query key for unique fetching
      queryFn: () => getPendingOrdersById(freightId),
      enabled: !!freightId, // Only run the query if jobId is available
  });
  

  const { data: job, isLoading, isError, error } = jobById;

  const truckType = !isLoading && job && job[0]?.type

  const jobId = freightId

  const clientId = !isLoading && job && job[0]?.clientId

  const totalWeight = !isLoading && job && job[0]?.weight

  // console.log("total weight is: ", totalWeight);

  const truckByType = useQuery({
      queryKey: ['available', jobId], // Include truckType in the query key for unique fetching
      // queryFn: () => getTrucksByTruckType(truckType), // Get trucks by truck type
      queryFn: () => getTrucksByTruckType(totalWeight), // Get trucks by carrying capacity and Total requested weight
      enabled: !!truckType,
      onError: (error) => {
        console.error("Error fetching trucks:", error);
        // setServerError(true);
      } // Only run the query if truckType is available
    });  
  

  if (isLoading) {
      return <div className="p-6">Loading job details...</div>;
  }

  if (isError) {
      return <div className="p-6 text-red-500">Error loading job details: {error?.message}</div>;
  }

  if (!job) {
      return <div className="p-6">Job not found.</div>;
  }

  



  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '85vh', borderBottom: '1px solid #eee'}}>
      <div>Dashboard / DispatchPanel</div>
      {/* <h1 style={{fontSize: '34px', marginBottom: '10px'}}>DispatchPanel</h1> */}
      <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
        <Paper className="p-6 rounded-md shadow-md">
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold'}}>
              Freight Details
          </Typography>
          <Divider className="mb-4" />
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                    {t("details.startLocation")}:
                </Typography>
                <Typography>{job[0]?.start_location}</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                    {t("details.dropoffLocation")}:
                </Typography>
                <Typography>{job[0]?.end_location}</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                    {t("details.loadAmount")}:
                </Typography>
                <Typography>{`${job[0]?.weight} ${job[0]?.weight_unit}`}</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                    {t("details.truckType")}:
                </Typography>
                <Typography>{job[0]?.type}</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                    {t("details.price")}:
                </Typography>
                <Typography>{`${job[0]?.price} ETB/${job[0]?.price_unit}`}</Typography>
            </Grid>
            {/* Add more details here based on the properties of your job object */}
            <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                    {t("details.additionaldetails")}:
                </Typography>
                <Typography>
                    {/* You can add more specific details here based on your job object */}
                    {job?.notes ? job?.notes : 'No additional details provided.'}
                </Typography>
            </Grid>
            {/* <Grid item xs={12} className="mt-4"> */}
              {/* <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                    Contact Agent:
                </Typography> */}
                {/* <Button className="ml-2">
                    Contact Agent:
                </Button>
                <Button className="ml-2">0911234567 / 0911*******</Button>
            </Grid> */}
          </Grid>
        </Paper>
      </div>
      <div>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold'}}>
          Available Truck owners / Drivers
        </Typography>
        <Divider className="mb-4" />          
      </div>          
      <div
        style={{
          flexGrow: 1, // Allows this div to take up remaining vertical space
          overflowY: 'auto', // Enables vertical scrolling when content overflows
          padding: '16px',
        }}
      >
        {
          truckByType.isLoading && <div style={{color: "blue", fontSize: "14px", fontWeight:"400", display: "flex", alignItems: "center", gap: "4px"}}><CircularProgress size={16}/> Fetching Trucks...</div>
        }        
        {truckByType.isError && <div style={{color: "red", fontSize: "14px", fontWeight:"400", display: "flex", alignItems: "center", gap: "4px"}}><CgDanger /> {truckByType?.error?.message}</div>}
        {
          truckByType?.data?.map((data, idx) => <AvailableTrucksForDispatch truckByType={data} freightId={jobId} clientId={clientId} key={idx}/>)
        }
        
      </div>
    </div>
  )
}

export default Dispatch