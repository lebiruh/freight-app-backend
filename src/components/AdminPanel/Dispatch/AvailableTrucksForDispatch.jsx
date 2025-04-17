import {
    Typography,
    Divider,
} from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';

import Grid from '@mui/material/Grid';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { upDateTruckAvailability } from '../../../helpers/Trucks';

import { useNavigate } from "react-router";
import {actions} from "../../Actions/actions"
import { upDateOrderByStatus } from '../../../helpers/Orders';

const AvailablerTrucksForDispatch = ({truckByType, freightId, clientId}) => {


  // console.log("truckByType is: ", truckByType);
  // console.log("clientId is: ", clientId);

  
  const active = actions.active

  const truckId = truckByType?.truckId

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const updateTruckandOrderAvailability = useMutation({
    mutationFn: async (data) => {
      await upDateTruckAvailability(data.truckId)
      await upDateOrderByStatus({action: data.active, id: data.freightId, truckId: data.truckId})
    },

    onSuccess: () => {
      alert('Truck successfully assigned to job!')
      queryClient.invalidateQueries({queryKey: ['pending']})
      queryClient.invalidateQueries({queryKey: ['in_transit']})
      navigate(`/admin/orders/pending`);
    },
  })

  const handleButtonClick = async () => {
    await updateTruckandOrderAvailability.mutateAsync({truckId: truckId, active: active, freightId: freightId});
  }

  if(truckByType?.isError) {
    return <div className="p-6">{truckByType.error?.message}</div>
  }  

  return (
    <>
      
      <div style={{display: 'flex'}}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                  Plate No:
              </Typography>
              <Typography>
                  {/* You can add more specific details here based on your job object */}
                  {`${truckByType.license_plate}`}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                  Owner Name:
              </Typography>
              <Typography>
                  {/* You can add more specific details here based on your job object */}
                  {`${truckByType.owner_name} ${truckByType.owner_lastname}`}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
                  Phone No:
              </Typography>
              <Typography>
                  {/* You can add more specific details here based on your job object */}
                  {`${truckByType.owner_phone}`}
              </Typography>
            </Grid>
            <Grid item xs={4} style={{display: "flex", alignItems: 'center', padding: '8px'}}>
              <div to='#' style={{border: 'none', borderRadius:'5px', padding: '2px', backgroundColor: '#3bb077', width: '180px', height: '30px', color: 'white'}}>
                <button style={{width: '90%', height: '90%', cursor: 'pointer'}} onClick={handleButtonClick}>
                  {
                    updateTruckandOrderAvailability.isLoading ? <CircularProgress size="16px"/> : "Assign job"
                  }
                </button>
              </div>
            </Grid>
          </Grid>
        </div>
        <Divider className="mb-4" />
    </>
  )
}

export default AvailablerTrucksForDispatch