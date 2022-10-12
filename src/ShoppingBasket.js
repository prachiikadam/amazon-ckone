import React,{useContext} from 'react'
import BasketContext from './BasketContext'
import CheckoutProduct from './CheckoutProduct';
function ShoppingBasket() {
    const basketCtx=useContext(BasketContext)
    const basketItems=basketCtx.items;
    const ShoppingBasketItems=basketItems.map((basketItem)=>{
        return(
            <CheckoutProduct 
            title={basketItem.productName}
            image={basketItem.image}
            price={basketItem.price}
            rating={basketItem.rating}
            id={basketItem.id}/>
        )
    })

  return (
    <div>
      {ShoppingBasketItems}  
    </div>
  )
}

export default ShoppingBasket