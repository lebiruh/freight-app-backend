import {
  useQuery
} from '@tanstack/react-query';

import { DataGrid, gridClasses } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import {getOrders} from '../../helpers/Orders'
import { grey } from '@mui/material/colors';


const OrdersAvailable = () => {

  const query = useQuery({ queryKey: ['completed'], queryFn: () => getOrders('completed') })

  const data = query?.data
  
  console.log("Delivered orders for admin are: ", data);

  const rows = data?.map((value,idx) => { 
                  let id = idx + 1;
                  return {...value, id};
                })

  // console.log("Rows Pending orders for admin are: ", rows);

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
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
      // editable: true,
    },
    {
      field: 'type',
      headerName: 'Truck Type',
      width: 125,
      // editable: true,
    },
    {
      field: 'weight',
      headerName: 'Total Weight',
      width: 125,
      // editable: true,
    },
    {
      field: 'weight_unit',
      headerName: 'Unit',
      width: 70,
      // editable: true,
    },
    {
      field: 'price',
      headerName: 'Unit Price',
      width: 125,
      // editable: true,
    },
    {
      field: 'price_unit',
      headerName: 'unit',
      width: 70,
      // editable: true,
    },

    {
      field: 'Total Commission',
      headerName: 'Commission',
      width: 100,
      type: 'number',
      renderCell: (params) => {
        return (
          params.row.weight * params.row.price * 0.04
        );
      },
    },
    {
      field: 'createdAt',
      headerName: 'Submitted Date',
      width: 150,
      // editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      // editable: true,
    }    
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
        disableRowSelectionOnClick
        getRowSpacing={params => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5
        })}
        sx={{
          [`& .${gridClasses.row}`] : {
            bgcolor: theme => theme.palette.mode === 'light' ? grey[200] : grey[900]
          }
        }}
      />
    </Box>
  )
}

export default OrdersAvailable