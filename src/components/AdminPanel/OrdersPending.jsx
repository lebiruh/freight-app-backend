import {
  useQuery
} from '@tanstack/react-query';

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import {getPendingOrders} from '../../helpers/Orders'



const OrdersPending = () => {

  const query = useQuery({ queryKey: ['pending'], queryFn: () => getPendingOrders() })

  const data = query?.data
  
  console.log("Pending orders for admin are: ", data);

  const rows = data?.map((value,idx) => { 
                  let id = idx + 1;
                  return {...value,id};
                })

  console.log("Rows Pending orders for admin are: ", rows);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'clientId', headerName: 'Client ID', width: 90 },
    { field: 'freightId', headerName: 'Freight ID', width: 90 },
    {
      field: 'start_location',
      headerName: 'Pickup Location',
      // description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
      field: 'end_location',
      headerName: 'Dropoff Location',
      // type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'type',
      headerName: 'Truck Type',
      width: 150,
      editable: true,
    },
    {
      field: 'weight',
      headerName: 'Total Weight',
      width: 150,
      editable: true,
    },
    {
      field: 'weight_unit',
      headerName: 'Unit',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Unit Price',
      width: 150,
      editable: true,
    },
    {
      field: 'price_unit',
      headerName: 'unit',
      width: 150,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Submitted Date',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
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
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default OrdersPending