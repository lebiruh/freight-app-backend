import {
  useQuery
} from '@tanstack/react-query';

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { getAllTrucks } from '../../helpers/Trucks';

const CustomerTrucks = () => {

  const query = useQuery({ queryKey: ['trucks'], queryFn: () => getAllTrucks("trucks") })
  
  const data = query?.data
  
  // console.log("Trucks for admin are: ", data);

  const rows = data?.map((value,idx) => { 
                let id = idx + 1;
                return {...value,id};
              })

  // console.log("Rows Pending orders for admin are: ", rows);

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: `ownerId`,
      headerName: `OwnerId`,
      sortable: false,
      width: 150,
      // editable: true,
    },
    {
      field: `driver_name`,
      headerName: `Driver's Name`,
      sortable: false,
      width: 150,
      // editable: true,
    },
    {
      field: 'driver_phone_no',
      headerName: `Driver's Phone No`,
      sortable: false,
      width: 160,
      // editable: true,
    },
    {
      field: 'license_plate',
      headerName: 'Plate No',
      sortable: false,
      width: 125,
      // editable: true,
    },
    {
      field: 'truck_type',
      headerName: 'Truck Type',
      width: 160,
      // editable: true,
    },
    {
      field: 'truck_model',
      headerName: 'Truck Model',
      width: 160,
      // editable: true,
    },
    {
      field: 'chassis_number',
      headerName: 'Chassis No',
      width: 160,
      // editable: true,
    },
    {
      field: 'engine_number',
      headerName: 'Engine No',
      width: 169,
      // editable: true,
    },
    {
      field: 'load_amount',
      headerName: 'Load Amount',
      width: 150,
      // editable: true,
    },    
    {
      field: 'region',
      headerName: 'Region',
      width: 150,
      // editable: true,
    },    
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box>
  )
}

export default CustomerTrucks