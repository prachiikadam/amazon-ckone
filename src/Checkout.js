import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import ShoppingBasket from './ShoppingBasket'
function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout_ad'
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1.
            _C8423492668_jpg'
            alt=''/>
            <div className='checkout__title'>
                <h2>
                    <ShoppingBasket/>
                </h2>
            </div>
        </div>
        <div className='checkout__right'>
        <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout