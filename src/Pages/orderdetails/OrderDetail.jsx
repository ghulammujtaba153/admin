import React from 'react'
import OrderDetails from '../../components/orderTable/orderdetail/OrderDetails'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './orderdetail.scss'
const OrderDetail = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer" >
        <Navbar/>
        <div>
        <OrderDetails/>
    </div>
        
    </div>
    
    </div>
  )
}

export default OrderDetail