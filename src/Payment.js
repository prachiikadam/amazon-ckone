import React from 'react'
import BasketContext from './BasketContext'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
function Payment() {
    const ctx=React.useContext(BasketContext)
  return (
    <div className='payment'>
        <div className='payment__container'>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h2>Delivery address</h2>
                </div>
                <div className='payment__address'> 
                    <p>{ctx.user.User.email}</p>
                    <p>React lane 123</p>
                    <p>Los Angeles,USA</p>
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h2>Review items and delivery</h2>
                </div>
                <div className='payment__items'>
                    {
                        ctx.items.map(
                            (item)=>{
                                return(<CheckoutProduct 
                                    title={item.productName}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    id={item.id}/> )
                            } )
                    }
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h2>Payment Method</h2>
                </div>
                <div className='payment__details'>
 
                </div>
            </div>            


        </div>
    </div>
  )
}

export default Payment