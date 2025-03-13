import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';




const CustomersDrivers = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'fullname',
      headerName: 'Owner name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
      field: 'phonenumber',
      headerName: 'Phone No',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'platenumber',
      headerName: 'Plate No',
      width: 150,
      editable: true,
    },
    {
      field: 'trucktype',
      headerName: 'Truck type',
      width: 150,
      editable: true,
    },
    {
      field: 'truckmodel',
      headerName: 'Truck model',
      width: 150,
      editable: true,
    },
    {
      field: 'chassis',
      headerName: 'Chassis No',
      width: 150,
      editable: true,
    },
    {
      field: 'enginenumber',
      headerName: 'Engine No',
      width: 150,
      editable: true,
    },
    {
      field: 'loadamount',
      headerName: 'Load Amount',
      width: 150,
      editable: true,
    },
    
  ];

  const rows = [
    { id: 1, fullname: 'Abebe Belew', phonenumber: '09876543', platenumber: '3-AA56789', trucktype: 'SINO', truckmodel: 14, chassis: 14, enginenumber: 1234, loadamount: 14 },
    { id: 2, fullname: 'Challa Chube', phonenumber: '09876543', platenumber: '3-AA56789', trucktype: 'ISUZU', truckmodel: 14, chassis: 14, enginenumber: 1234, loadamount: 14 },
    { id: 3, fullname: 'Belete Gude', phonenumber: '09876543', platenumber: '3-AA56789', trucktype: 'ISUZU', truckmodel: 14, chassis: 14, enginenumber: 1234, loadamount: 14 },
    { id: 4, fullname: 'Kebede Eko', phonenumber: '09876543', platenumber: '3-AA56789', trucktype: 'SINO', truckmodel: 14, chassis: 14, enginenumber: 1234, loadamount: 14 },
    { id: 5, fullname: 'Ere Belew', phonenumber: '09876543', platenumber: '3-AA56789', trucktype: 'LOW BED', truckmodel: 14, chassis: 14, enginenumber: 1234, loadamount: 14 },
    { id: 6, fullname: 'Aselchi New', phonenumber: '09876543', platenumber: '3-AA56789', trucktype: 'LONG TRUCK', truckmodel: 14, chassis: 14, enginenumber: 1234, loadamount: 14 },
    { id: 7, fullname: 'Minew Jal', phonenumber: '09876543', platenumber: '3-AA56789', trucktype: 'SINO', truckmodel: 14, chassis: 14, enginenumber: 1234, loadamount: 14 },
    { id: 8, fullname: 'Ere Tew', phonenumber: '09876543', platenumber: '3-AA56789', trucktype: 'SINO', truckmodel: 14, chassis: 14, enginenumber: 1234, loadamount: 14 },
    { id: 9, fullname: 'Minew Jal', phonenumber: '09876543', platenumber: '3-AA56789', trucktype: 'ISUZU', truckmodel: 14, chassis: 14, enginenumber: 1234, loadamount: 14 },
    { id: 10, fullname: 'Deg Sew', phonenumber: '09876543', platenumber: '3-AA56789', trucktype: 'HIGH BED', truckmodel: 14, chassis: 14, enginenumber: 1234, loadamount: 14 },
    
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

export default CustomersDrivers