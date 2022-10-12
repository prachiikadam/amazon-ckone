import React, { useContext } from 'react'
import './Product.css'
import BasketContext from './BasketContext'
function Product(props) {
    const basketCtx=useContext(BasketContext)
    const addItemToBasketHandler=()=>{
        basketCtx.addItem({
            id:props.id,
            productName:props.productName,
            price:props.price,
            rating:props.productRatings,
            image:props.image
        })
    }
    
  return (
    <div className='product'>
          <div className='product__info'>
              <p>{props.productName}</p>
              <p className='product__price'>
                  <strong>${props.price}</strong>
              </p>
              <div className='product__rating'>
                  {Array(props.productRatings).fill().map((p, i) => (<p  key={i}>
                      ⭐️
                  </p>))}
              </div>
              <img src={props.image}
                  alt='' className='product__image' />
              <button onClick={addItemToBasketHandler}>Add to basket</button>
          </div>

      </div>
  )
}

export default Product