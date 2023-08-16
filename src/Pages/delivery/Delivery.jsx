import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DeliveryTable from '../../components/deliverytable/DeliveryTable'

const Delivery = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div style={{padding:20}}>
            <DeliveryTable/>
        </div>
        
        </div>
    </div>
  )
}

export default Delivery