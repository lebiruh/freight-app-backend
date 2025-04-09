import React, {useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const CustomerRegisterTruck = () => {

  const [rowData, setRowData] = useState(
    {plate_no: '', truck_type: '', truck_model: '', chassis_number: '', engine_number: '', load_amount: ''}
  )

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'plate_no',
      headerName: 'Plate No',
      sortable: false,
      width: 125,
      editable: true,
    },
    {
      field: 'truck_type',
      headerName: 'Truck Type',
      width: 160,
      editable: true,
    },
    {
      field: 'truck_model',
      headerName: 'Truck Model',
      width: 160,
      editable: true,
    },
    {
      field: 'chassis_number',
      headerName: 'Chassis No',
      width: 160,
      editable: true,
    },
    {
      field: 'engine_number',
      headerName: 'Engine No',
      width: 169,
      editable: true,
    },
    {
      field: 'load_amount',
      headerName: 'Load Amount',
      width: 150,
      editable: true,
    },    
  ];

  const rows = [
    {id: 1, plate_no: rowData.plate_no , truck_type: rowData.truck_type, truck_model: rowData.truck_model, chassis_number: rowData.chassis_number, engine_number: rowData.engine_number, load_amount: rowData.load_amount}
  ]




  return (
    <>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          onCellEditCommit={(params) => {
            const updatedRows = rows.map((row) => 
              row.id === params.id ? {...row, [params.field]: params.value} : row
            );
            setRowData(updatedRows)
          }}
          onRowClick={(params) => {
            setRowData(params.row);
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 1,
                page: 0
              },
            },
          }}
          // checkboxSelection
          pageSizeOptions={[1]}
        />
      </Box>
      <div className="signup_btn_container" style={{width: '200px'}}>
        <button className="signup_btn" onClick={() => {console.log("row data is: ", rowData);}}>Register Truck</button>
      </div>
    </>
  )
}

export default CustomerRegisterTruck