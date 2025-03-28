import React from 'react'

const OrdersAvailable = () => {
  return (
    <div>
      <form>
        <div style={{}}>
          <label htmlFor="name" style={{marginRight: '40px'}}>
            Name
          </label>
          <input type="text" placeholder='Enter client name' id='name'/>
        </div>
        <div>
          <label htmlFor="truck" style={{marginRight: '40px'}}>
            Truck Type
          </label>
          <input type="text" placeholder='Enter Truck type' id='truck'/>
        </div>
        <div>
           <label htmlFor="freight" style={{marginRight: '40px'}}>
              Freight
            </label>
          <input type="text" placeholder='Enter freight type' id='freight'/>
        </div>
        <div>
          <label htmlFor="start" style={{marginRight: '40px'}}>
            Start Location
          </label>
          <input type="text" placeholder='Enter start location' id='start'/>
        </div>
        <div>
          <label htmlFor="end" style={{marginRight: '40px'}}>
            Destination
          </label>
          <input type="text" placeholder='Enter destination' id='end'/>
        </div>      
        <div>
          <label htmlFor="price" style={{marginRight: '40px'}}>
            price
          </label>
          <input type="text" placeholder='Enter price' id='end'/>
        </div>      
        <div>
          <label htmlFor="description" style={{marginRight: '40px'}}>
            Description
          </label>
          <textarea type="text" placeholder='' id='description'/>
        </div>      
        

      </form>
    </div>
  )
}

export default OrdersAvailable