import React, {useReducer} from "react";
import BasketContext from "./BasketContext";
const defaultBasketState={
    items:[],
    totalAmount:0,
    user:null
}
const basketReducer=(state,action)=>{
    if(action.type==='ADD'){
        console.log('In add item basket handler>>',state.items,action.item)
        let existingItemIndex=state.items.findIndex((item)=>
            item.id===action.item.id
        )
        let updatedItems
        if(existingItemIndex!==-1){
            
            let existingItem=state.items[existingItemIndex]
            let updatedItem={
                ...existingItem,
                totalPrice:existingItem.totalPrice+action.item.price
            }
            updatedItems=[...state.items];
            updatedItems[existingItemIndex]=updatedItem
        }
        else{
            let updatedItem={
                ...action.item,
                totalPrice:action.item.price
            }
            updatedItems=state.items.concat(updatedItem)
        }
        return {
            items:updatedItems,
            totalAmount:state.totalAmount+1
        }
            
    }
    if(action.type==='REMOVE'){
        let updatedItems=state.items.filter((item)=>
            item.id!==action.id
        )
       
        return{
            items:updatedItems,
            totalAmount:state.totalAmount-1
        }
        
        
    }
    if(action.type==='SET_USER'){
       
        return{
            ...state,
            user:action.user
        }
    }
    return defaultBasketState
}
const CartBasketProvider=(props)=>{
    const[basketState,dispatchCartAction]=useReducer(basketReducer,defaultBasketState)
    const addItemCartHandler=(item)=>{
        dispatchCartAction({type:'ADD',item:item})
    }
    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({type:'REMOVE',id:id})
    }
    const setUserHandler=(user)=>{
        console.log('there you go')
        dispatchCartAction({type:'SET_USER',user:user})
    }
    const basketContext={
        items:basketState.items,
        totalAmount:basketState.totalAmount,
        user:basketState.user,
        setUser:setUserHandler,
        addItem:addItemCartHandler,
        removeItem:removeItemFromCartHandler
    }
    return <BasketContext.Provider value={basketContext}>
        {props.children}
    </BasketContext.Provider>
}
 export default CartBasketProvider
// export const useStateValue=()=>useContext(StateContext)