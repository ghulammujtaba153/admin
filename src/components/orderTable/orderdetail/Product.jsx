import React from 'react'
import './od.scss'

const Product = ({product}) => {
    const item=product.product;
  return (
    <div className='productConatiner'>
        <div >
            <img  src={item.url} alt='/'/>
        </div>
        <div className='stats'>
        <p>{item.title.shortTitle}</p>
        <p>RS. {item.price.cost}</p>
        <p>Quantity: {item.quantity}</p>
        </div>
        
    </div>
  )
}

export default Product