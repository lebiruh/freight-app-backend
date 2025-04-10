import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import {
  useQuery
} from '@tanstack/react-query';

import { getUsersByRole } from '../../helpers/users';




const CustomersDrivers = () => {

  // const truckOwnersQuery = useQuery({ queryKey: ['clients'], queryFn: () => getUsersByRole("client") })
  const query = useQuery({ queryKey: ['truckOwners'], queryFn: () => getUsersByRole("truck_owner") })

  const data = query?.data
  
  // console.log("Truck owners are: ", data);

  const rows = data?.map((value,idx) => { 
                let id = idx + 1;
                return {...value,id};
              })

  // console.log("Rows Pending orders for admin are: ", rows);
  
  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 50 },
  //   {
  //     field: `owner_full_name`,
  //     headerName: `Owner's Name`,
  //     sortable: false,
  //     width: 150,
  //     // editable: true,
  //   },
  //   {
  //     field: `owner_phone_no`,
  //     headerName: `Owner's Phone No`,
  //     sortable: false,
  //     width: 150,
  //     // editable: true,
  //   },
  //   {
  //     field: `driver_name`,
  //     headerName: `Driver's Name`,
  //     sortable: false,
  //     width: 150,
  //     // editable: true,
  //   },
  //   {
  //     field: 'driver_phone_no',
  //     headerName: `Driver's Phone No`,
  //     sortable: false,
  //     width: 160,
  //     // editable: true,
  //   },
  //   {
  //     field: 'plate_no',
  //     headerName: 'Plate No',
  //     sortable: false,
  //     width: 125,
  //     // editable: true,
  //   },
  //   {
  //     field: 'truck_type',
  //     headerName: 'Truck Type',
  //     width: 160,
  //     // editable: true,
  //   },
  //   {
  //     field: 'truck_model',
  //     headerName: 'Truck Model',
  //     width: 160,
  //     // editable: true,
  //   },
  //   {
  //     field: 'chassis_number',
  //     headerName: 'Chassis No',
  //     width: 160,
  //     // editable: true,
  //   },
  //   {
  //     field: 'engine_number',
  //     headerName: 'Engine No',
  //     width: 169,
  //     // editable: true,
  //   },
  //   {
  //     field: 'load_amount',
  //     headerName: 'Load Amount',
  //     width: 150,
  //     // editable: true,
  //   },    
  //   {
  //     field: 'region',
  //     headerName: 'Region',
  //     width: 150,
  //     // editable: true,
  //   },    
  // ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'userId', headerName: 'Owner ID', width: 90 },
    { field: 'name', headerName: 'First Name', width: 125 },
    { field: 'last_name', headerName: 'Last Name', width: 125 },
    {
      field: 'phone',
      headerName: 'Phone no',
      // type: 'number',
      width: 110,
      // editable: true,
    },
    {
      field: 'email',
      headerName: 'Email Address',
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      width: 160,
      // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
      field: 'createdAt',
      headerName: 'Member since',
      width: 150,
      // editable: true,
    }
  ]

  // const rows = [
  //   { id: 1, owner_full_name: 'Abebe Belew', owner_phone_no: '09876543', driver_name: 'Abebe ', driver_phone_no: '09876543', plate_no: '3-AA56789', truck_type: 'SINO', truck_model: 14, chassis_number: 14, engine_number: 1234, load_amount: 14, region: 'Gojam' },
  //   { id: 2, owner_full_name: 'Abebe Belew', owner_phone_no: '09876543', driver_name: 'Abebe ', driver_phone_no: '09876543', plate_no: '3-AA56789', truck_type: 'SINO', truck_model: 14, chassis_number: 14, engine_number: 1234, load_amount: 14, region: 'Gojam' },
  //   { id: 3, owner_full_name: 'Abebe Belew', owner_phone_no: '09876543', driver_name: 'Abebe ', driver_phone_no: '09876543', plate_no: '3-AA56789', truck_type: 'SINO', truck_model: 14, chassis_number: 14, engine_number: 1234, load_amount: 14, region: 'Gojam' },
  //   { id: 4, owner_full_name: 'Abebe Belew', owner_phone_no: '09876543', driver_name: 'Abebe ', driver_phone_no: '09876543', plate_no: '3-AA56789', truck_type: 'SINO', truck_model: 14, chassis_number: 14, engine_number: 1234, load_amount: 14, region: 'Gojam' },
  //   { id: 5, owner_full_name: 'Abebe Belew', owner_phone_no: '09876543', driver_name: 'Abebe ', driver_phone_no: '09876543', plate_no: '3-AA56789', truck_type: 'SINO', truck_model: 14, chassis_number: 14, engine_number: 1234, load_amount: 14, region: 'Gojam' },
  //   { id: 6, owner_full_name: 'Abebe Belew', owner_phone_no: '09876543', driver_name: 'Abebe ', driver_phone_no: '09876543', plate_no: '3-AA56789', truck_type: 'SINO', truck_model: 14, chassis_number: 14, engine_number: 1234, load_amount: 14, region: 'Gojam' },
  //   { id: 7, owner_full_name: 'Abebe Belew', owner_phone_no: '09876543', driver_name: 'Abebe ', driver_phone_no: '09876543', plate_no: '3-AA56789', truck_type: 'SINO', truck_model: 14, chassis_number: 14, engine_number: 1234, load_amount: 14, region: 'Gojam' },
  //   { id: 8, owner_full_name: 'Abebe Belew', owner_phone_no: '09876543', driver_name: 'Abebe ', driver_phone_no: '09876543', plate_no: '3-AA56789', truck_type: 'SINO', truck_model: 14, chassis_number: 14, engine_number: 1234, load_amount: 14, region: 'Gojam' },
  //   { id: 9, owner_full_name: 'Abebe Belew', owner_phone_no: '09876543', driver_name: 'Abebe ', driver_phone_no: '09876543', plate_no: '3-AA56789', truck_type: 'SINO', truck_model: 14, chassis_number: 14, engine_number: 1234, load_amount: 14, region: 'Gojam' },
  //   { id: 10, owner_full_name: 'Abebe Belew', owner_phone_no: '09876543', driver_name: 'Abebe ', driver_phone_no: '09876543', plate_no: '3-AA56789', truck_type: 'SINO', truck_model: 14, chassis_number: 14, engine_number: 1234, load_amount: 14, region: 'Gojam'},
    
  // ];





  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default CustomersDrivers