import {
  useMutation,
  useQuery,
  useQueryClient
} from '@tanstack/react-query';

import { DataGrid, gridClasses } from '@mui/x-data-grid';
import {Box, IconButton} from '@mui/material';

import {getOrders, upDateOrderByStatus} from '../../helpers/Orders'
import {actions} from "../Actions/actions"
import DoneAllIcon from '@mui/icons-material/DoneAll';

// import { upDateTruckAvailability } from '../../helpers/Trucks';
import { grey } from '@mui/material/colors';

const OrdersActive = () => {

  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ['in_transit'], queryFn: () => getOrders('in_transit') })

  const activeOrders = query?.data
  
  console.log("Active orders for admin are: ", activeOrders);

  const completed = actions.completed

  // const truckId = 

  // const freightId = activeOrders?.freightId

  // const dataForbackEnd = { completed: completed, freightId: freightId}

  const updateTruckandOrderAvailability = useMutation({
    mutationFn: (data) => {
      // await upDateTruckAvailability(data.truckId)
      upDateOrderByStatus({action: data.completed, id: data.freightId, truckId: data.truckId})
    },

    onSuccess: () => {
      alert('Freight successfully marked as delivered!')
      queryClient.invalidateQueries({queryKey: ['in_transit']})
      queryClient.invalidateQueries({queryKey: ['completed']})
      // navigate(`/admin/orders/pending`);
    },
  })

  const handleButtonClick = (freightId, truckId) => {
    updateTruckandOrderAvailability.mutate({ completed: completed, freightId: freightId, truckId: truckId});
  }

  const rows = activeOrders?.map((value,idx) => { 
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
    },
    {
      field: 'assign',
      headerName: 'Mark as Delivered',
      width: 150,
      type: 'actions',
      // height: 50,
      renderCell: (params) => {
        return (
          <IconButton sx={{m:1}} onClick={() => handleButtonClick(params.row.freightId, params.row.truckId)}>
            <DoneAllIcon color='primary'/>
          </IconButton>
        );
      },
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

export default OrdersActive