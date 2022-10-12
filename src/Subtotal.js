import React ,{useContext} from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import BasketContext from './BasketContext'
import { useNavigate } from 'react-router-dom'

function Subtotal() {
  const ctx=useContext(BasketContext)
  const navigate=useNavigate()
  const totalItems=ctx.items.length;
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({totalItems} items):<strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={ctx.items.reduce((prev,curr)=>{
          return prev+curr.totalPrice
        },0)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e)=>{navigate('/payment')}}> Proceed to checkout</button>
    </div>
  )
}

export default Subtotal