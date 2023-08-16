import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOrderedProductDetail } from '../../../Redux/actions/adminActions'
import Loader from '../../loader/loader';
import Product from './Product';
import './od.scss'
import { Button } from '@mui/material';
import axios from 'axios';
import OrderDetailsPDF from '../../pdf/PDF';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const OrderDetails = () => {
  const [order, setOrder]=useState(null);
  const [loading, setLoading]=useState(true)
  const navigate=useNavigate()

  const {id}=useParams()
  useEffect(()=>{
    const fetch=async()=>{
      
      const res=await getOrderedProductDetail(id)
      
    setOrder(res)
    setLoading(false)
    }
    fetch()
    
  },[])

  const deliveryStatus=async()=>{
    try {
      const res=await axios.put(`http://localhost:3001/orders/${id}/deliver`);
      navigate('/order')
      
    } catch (error) {
      console.log(error)
    }
    
  }

  const generatePDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const element = document.getElementById('order-details');

    html2canvas(element, { scale: 10, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 250);
      pdf.save('order-details.pdf');
    });
  };


  return (
    <>
      {
        loading? <Loader/>
        :
        <>
          <div id="order-details" className='container'>
            <div className='Top'><span className='heading'>OrderId:</span> {order._id} </div>
            <div><span className='heading'>Items:</span> {order.items.length} </div>
            <div><span className='heading'>TotalBill:</span> {order.totalAmount} </div>
            <div><span className='heading'>Address:</span> {order.address} </div>
            <div className='product'>
              {/* Map over order.items and render each Product component */}
              {order.items.map((item, index) => (
                <Product key={index} product={item} />
              ))}
            </div>
            <div className='bottom'><span className='heading'>OrderTime:</span> {order.createdAt} </div>

          </div>

          <div className='buttonContainer'>
            {
              order.status==='pending'?
              <Button onClick={deliveryStatus} className='button'>Deliver</Button>
              :
              ''
            }
            
            {/* <OrderDetailsPDF order={order}/> */}
            <Button className='pdf-button' onClick={generatePDF}>
              Generate PDF
            </Button>
          </div>

        </>

      }
    </>
    
  )
}

export default OrderDetails