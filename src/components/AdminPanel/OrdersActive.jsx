import {
  useMutation,
  useQuery,
  useQueryClient
} from '@tanstack/react-query';

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import {getOrders, upDateOrderByStatus} from '../../helpers/Orders'
import {actions} from "../Actions/actions"

import { upDateTruckAvailability } from '../../helpers/Trucks';

const OrdersActive = () => {

  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ['in_transit'], queryFn: () => getOrders('in_transit') })

  const activeOrders = query?.data
  
  console.log("Active orders for admin are: ", activeOrders);

  const completed = actions.completed

  // const freightId = activeOrders?.freightId

  // const dataForbackEnd = { completed: completed, freightId: freightId}

  const updateTruckandOrderAvailability = useMutation({
    mutationFn: (data) => {
      // await upDateTruckAvailability(data.truckId)
      upDateOrderByStatus({action: data.completed, id: data.freightId})
    },

    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['in_transit']})
      queryClient.invalidateQueries({queryKey: ['completed']})
      alert('Freight successfully marked as delivered!')
      // navigate(`/admin/orders/pending`);
    },
  })

  const handleButtonClick = (freightId) => {
    updateTruckandOrderAvailability.mutate({ completed: completed, freightId: freightId});
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
      headerName: 'Action',
      width: 150,
      // height: 50,
      renderCell: (params) => {
        return (
          <button 
            style={{width: '100%', height: '70%', cursor: 'pointer', marginTop:'10px', marginBottom: 'auto',  backgroundColor: 'skyblue', textAlign: 'center', borderRadius: '5px', paddingTop: '0', color: 'white'}
              } 
            onClick={() => handleButtonClick(params.row.freightId)}
          >
            Mark as Delivered 
          </button>
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
      />
    </Box>
  )
}

export default OrdersActive