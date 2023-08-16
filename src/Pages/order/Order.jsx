import React from 'react'
import OrderTable from './../../components/orderTable/OrderTable';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Order = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div style={{padding:20}}>
        <OrderTable/>
        </div>
        </div>
    </div>
  )
}

export default Order