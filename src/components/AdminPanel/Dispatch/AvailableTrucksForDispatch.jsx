import {
    Typography,
    Divider,
} from '@mui/material';
import { Link } from "react-router";
import Grid from '@mui/material/Grid';

const AvailablerTrucksForDispatch = ({truckByType, handleButtonClick}) => {


  console.log("truckByType is: ", truckByType);

  if(truckByType?.isError) {
    return <div className="p-6">{truckByType.error?.message}</div>
  }

  return (
    <>
      <div style={{display: 'flex'}}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                  Owner Name:
              </Typography>
              <Typography>
                  {/* You can add more specific details here based on your job object */}
                  {`${truckByType.name} ${truckByType.last_name}`}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                  Phone No:
              </Typography>
              <Typography>
                  {/* You can add more specific details here based on your job object */}
                  {`${truckByType.phone}`}
              </Typography>
            </Grid>
            <Grid item xs={4} style={{display: "flex", alignItems: 'center'}}>
              <div to='#' style={{border: 'none', borderRadius:'5px', padding: '2px', backgroundColor: '#3bb077', width: '180px', height: '30px', color: 'white'}}>
                <button style={{width: '90%', height: '90%', cursor: 'pointer'}} onClick={handleButtonClick}>Assign job</button>
              </div>
            </Grid>
          </Grid>
        </div>
        <Divider className="mb-4" />
    </>
  )
}

export default AvailablerTrucksForDispatch