import React, {useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CgDanger } from "react-icons/cg";
import { registerTruck } from '../../helpers/Trucks';


const CustomerRegisterTruck = () => {

  const [rowData, setRowData] = useState(
    {owner_phone_no: '', driver_name: '', driver_phone_no: '', plate_no: '', truck_type: '', truck_model: '', chassis_number: '', engine_number: '', load_amount: '', region: ''}
  )

  const [ownerPhoneNoError, setOwnerPhoneNoError] = useState(false);
  const [driverNameError, setDriverNameError] = useState(false);
  const [driverPhoneNoError, setDriverPhoneNoError] = useState(false);
  const [plateError, setPlateError] = useState(false);
  const [truckTypeError, setTruckTypeError] = useState(false);  
  const [truckModelError, setTruckModelError] = useState(false);  
  const [chassisError, setChassisError] = useState(false);  
  const [engineError, setEngineError] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [serverError, setServerError] = useState(false);



  
  const queryClient = useQueryClient()

  const registerTruckMutation = useMutation({
      mutationFn: (rowData) => registerTruck(rowData),

      onSuccess: () => {
        setServerError(false);
        alert('Truck successfully registered!')
        queryClient.invalidateQueries({queryKey: ['trucks']})
      },

      onError: (error) => {
      setServerError(true);
      setOwnerPhoneNoError(false);
      setDriverNameError(false);
      setDriverPhoneNoError(false);
      setPlateError(false);
      setTruckTypeError(false);
      setTruckModelError(false);
      setChassisError(false);
      setEngineError(false);
      setLoadError(false);
    }
    })

    const handleTruckRegistration = async (e) => {

    e.preventDefault();

    if (rowData.owner_phone_no === "") {
      setServerError(false);
      setDriverNameError(false);
      setDriverPhoneNoError(false);
      setPlateError(false);
      setTruckTypeError(false);
      setTruckModelError(false);
      setChassisError(false);
      setEngineError(false);
      setLoadError(false);
      setOwnerPhoneNoError(true);
      return;
    }
    if (rowData.driver_name === "") {
      setServerError(false);
      setDriverPhoneNoError(false);
      setPlateError(false);
      setTruckTypeError(false);
      setTruckModelError(false);
      setChassisError(false);
      setEngineError(false);
      setLoadError(false);
      setOwnerPhoneNoError(false);
      setDriverNameError(true);
      return;
    }
    if (rowData.driver_phone_no === "") {
      setServerError(false);
      setDriverNameError(false);
      setPlateError(false);
      setTruckTypeError(false);
      setTruckModelError(false);
      setChassisError(false);
      setEngineError(false);
      setLoadError(false);
      setOwnerPhoneNoError(false);
      setDriverPhoneNoError(true);
      return;
    }
    if (rowData.plate_no === "") {
      setServerError(false);
      setDriverNameError(false);
      setDriverPhoneNoError(false);
      setTruckTypeError(false);
      setTruckModelError(false);
      setChassisError(false);
      setEngineError(false);
      setLoadError(false);
      setOwnerPhoneNoError(false);
      setPlateError(true);
      return;
    }
    if (rowData.truck_type === "") {
      setServerError(false);
      setDriverNameError(false);
      setDriverPhoneNoError(false);
      setPlateError(false);
      setTruckModelError(false);
      setChassisError(false);
      setEngineError(false);
      setLoadError(false);
      setOwnerPhoneNoError(false);
      setTruckTypeError(true);
      return;
    }
    if (rowData.truck_model === "") {
      setServerError(false);
      setDriverNameError(false);
      setDriverPhoneNoError(false);
      setPlateError(false);
      setTruckTypeError(false);
      setChassisError(false);
      setEngineError(false);
      setLoadError(false);
      setOwnerPhoneNoError(false);
      setTruckModelError(true);
      return;
    }
    if (rowData.chassis_number === "") {
      setServerError(false);
      setDriverNameError(false);
      setDriverPhoneNoError(false);
      setPlateError(false);
      setTruckTypeError(false);
      setTruckModelError(false);
      setEngineError(false);
      setLoadError(false);
      setOwnerPhoneNoError(false);
      setChassisError(true);
      return;
    }
    if (rowData.engine_number === "") {
      setServerError(false);
      setDriverNameError(false);
      setDriverPhoneNoError(false);
      setPlateError(false);
      setTruckTypeError(false);
      setTruckModelError(false);
      setChassisError(false);
      setLoadError(false);
      setOwnerPhoneNoError(false);
      setEngineError(true);
      return;
    }
    if (rowData.load_amount === "") {
      setServerError(false);
      setDriverNameError(false);
      setDriverPhoneNoError(false);
      setPlateError(false);
      setTruckTypeError(false);
      setTruckModelError(false);
      setChassisError(false);
      setEngineError(false);
      setOwnerPhoneNoError(false);
      setLoadError(true);
      return;
    }

    console.log("row data is: ", rowData);

    registerTruckMutation.mutate(rowData);
  }






  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: `owner_phone_no`,
      headerName: `Owner's Phone No`,
      sortable: false,
      width: 150,
      editable: true,
    },
    {
      field: `driver_name`,
      headerName: `Driver's Name`,
      sortable: false,
      width: 150,
      editable: true,
    },
    {
      field: 'driver_phone_no',
      headerName: `Driver's Phone No`,
      sortable: false,
      width: 160,
      editable: true,
    },
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
    {
      field: 'region',
      headerName: 'Region',
      width: 150,
      editable: true,
    },    
  ];

  const rows = [
    {id: 1, owner_phone_no: rowData.owner_phone_no, driver_name: rowData.driver_name, driver_phone_no: rowData.driver_phone_no, plate_no: rowData.plate_no , truck_type: rowData.truck_type, truck_model: rowData.truck_model, chassis_number: rowData.chassis_number, engine_number: rowData.engine_number, load_amount: rowData.load_amount, region: rowData.region}
  ]




  return (
    <>
      <form styles={{ height: 200, width: '100%' }} onSubmit={handleTruckRegistration}>
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
        {ownerPhoneNoError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> OPhone. All fields are required. Please fill in all the fields. </div>}
        {driverNameError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Driver Name. All fields are required. Please fill in all the fields. </div>}
        {driverPhoneNoError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> DPhone. All fields are required. Please fill in all the fields. </div>}
        {plateError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Plate. All fields are required. Please fill in all the fields. </div>}
        {truckTypeError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Type. All fields are required. Please fill in all the fields. </div>}
        {truckModelError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Model. All fields are required. Please fill in all the fields. </div>}
        {chassisError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Chassis. All fields are required. Please fill in all the fields. </div>}
        {engineError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Engine. All fields are required. Please fill in all the fields. </div>}
        {loadError && <div style={{color: "red", fontSize: "14px", fontWeight:"500", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> Load. All fields are required. Please fill in all the fields. </div>}
        <div className="signup_btn_container" style={{width: '200px'}}>
        {serverError && <div style={{color: "red", fontSize: "14px", fontWeight:"400", display: "flex", alignItems: "center", gap: "4px"}}> <CgDanger /> {registerTruckMutation.error?.message} </div>}
          <button className="signup_btn" type='submit'>Register Truck</button>
      </div>
      </form>      
    </>
  )
}

export default CustomerRegisterTruck