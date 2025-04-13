import {
  useQuery
} from '@tanstack/react-query';

import { Link } from "react-router";

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import {getOrders} from '../../helpers/Orders'



const OrdersPending = () => {

  // const jobStatus = {status: 'pending'}

  const query = useQuery({ queryKey: ['pending'], queryFn: () => getOrders('pending') })

  const data = query?.data
  
  console.log("Pending orders for admin are: ", data);

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
      editable: true,
    },
    {
      field: 'type',
      headerName: 'Truck Type',
      width: 125,
      editable: true,
    },
    {
      field: 'weight',
      headerName: 'Total Weight',
      width: 125,
      editable: true,
    },
    {
      field: 'weight_unit',
      headerName: 'Unit',
      width: 70,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Unit Price',
      width: 125,
      editable: true,
    },
    {
      field: 'price_unit',
      headerName: 'unit',
      width: 70,
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
      width: 100,
      editable: true,
    },
    {
      field: 'assign',
      headerName: 'Action',
      width: 100,
      renderCell: (params) => {
        return (
          <>            
            <Link to={`/admin/dispatch/${params.row?.freightId}`} style={{border: 'none', borderRadius:'5px', padding: '2px', backgroundColor: '#3bb077', width: '180px', height: '80px', color: 'white'}}>
              <button style={{width: '90%', height: '90%', cursor: 'pointer'}}>Assign</button>
            </Link>            
          </>
        );
      },
    },
    
  ];

//   .productListEdit {
//   border: none;
//   border-radius: 10px;
//   padding: 5px 10px;
//   background-color: #3bb077;
//   color: white;
//   cursor: pointer;
//   margin-right: 20px;
// }


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