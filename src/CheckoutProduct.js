import React,{useContext}from 'react'
import './CheckoutProduct.css'
import BasketContext from './BasketContext'
function CheckoutProduct(props) {
  const ctx=useContext(BasketContext)
  const removeItemHandler=()=>{
    ctx.removeItem(props.id)
  }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct-image' src={props.image}alt=''></img>
        <div className='checkoutProduct-info'>
            <p className='checkoutProduct-title'>{props.title}</p>
            <p className='checkoutProduct-price'>{props.price}</p>
            <div className='checkoutProduct-rating'>
            {
                Array(props.rating).fill().map((_)=><p>⭐️</p>)
            }
            </div>
            <button className='checkoutProduct-button' onClick={removeItemHandler}>Remove from Basket</button>
        </div>

    </div>
  )
}

export default CheckoutProduct