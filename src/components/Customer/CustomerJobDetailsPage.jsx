import React from 'react';
import {
    Typography,
    Paper,
    // Grid,
    Button,
    Divider,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Assuming you have a function to fetch a single job by ID
import { useQuery } from '@tanstack/react-query';
import { getPendingOrdersById } from '../../helpers/Orders'; 
import Grid from '@mui/material/Grid';

const CustomerJobDetailsPage = () => {

    const { jobId } = useParams();
    const navigate = useNavigate();

   
    const query = useQuery({
        queryKey: ['pending', jobId], // Include jobId in the query key for unique fetching
        queryFn: () => getPendingOrdersById(jobId),
        enabled: !!jobId, // Only run the query if jobId is available
    });

    const { data: job, isLoading, isError, error } = query;

    // console.log("Job detail is: ", job);
    // console.log("Job id is: ", jobId);

    const handleGoBack = () => {
        navigate('/'); // Or navigate(-1) to go back to the previous page
    };

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
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <Button
                startIcon={<ArrowBackIcon />}
                onClick={handleGoBack}
                className="mb-4"
                // sx={{ color: '#0B344A'}}
            >
                Back to Home
            </Button>
            <Paper className="p-6 rounded-md shadow-md">
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold'}}>
                    Job Details
                </Typography>
                <Divider className="mb-4" />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                            Start Location:
                        </Typography>
                        <Typography>{job[0]?.start_location}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                            Destination:
                        </Typography>
                        <Typography>{job[0]?.end_location}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                            Load Amount:
                        </Typography>
                        <Typography>{`${job[0]?.weight} ${job[0]?.weight_unit}`}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                            Truck Type:
                        </Typography>
                        <Typography>{job[0]?.type}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                            Price:
                        </Typography>
                        <Typography>{`${job[0]?.price} ETB/${job[0]?.price_unit}`}</Typography>
                    </Grid>
                    {/* Add more details here based on the properties of your job object */}
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                            Additional Details:
                        </Typography>
                        <Typography>
                            {/* You can add more specific details here based on your job object */}
                            {job?.notes ? job?.notes : 'No additional details provided.'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="mt-4">
                      {/* <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                            Contact Agent:
                        </Typography> */}
                        <Button className="ml-2">
                            Contact Agent:
                        </Button>
                        <Button className="ml-2">0911234567 / 0911*******</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default CustomerJobDetailsPage;