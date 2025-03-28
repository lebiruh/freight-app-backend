import {
  useQuery
} from '@tanstack/react-query';

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { getUsersByRole } from '../../helpers/users';

const CustomersClients = () => {

  const query = useQuery({ queryKey: ['clients'], queryFn: () => getUsersByRole("client") })
  
  const data = query?.data
  
  // console.log("Pending orders for admin are: ", data);

  const rows = data?.map((value,idx) => { 
                let id = idx + 1;
                return {...value,id};
              })

  // console.log("Rows Pending orders for admin are: ", rows);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'userId', headerName: 'Client ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 90 },
    {
      field: 'email',
      headerName: 'Email Address',
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      width: 160,
      // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
      field: 'phone',
      headerName: 'Phone no',
      // type: 'number',
      width: 110,
      // editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Member since',
      width: 150,
      // editable: true,
    }
  ]


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

export default CustomersClients