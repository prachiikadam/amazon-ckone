import React from "react";

const BasketContext=React.createContext({
    items:[],
    totalAmount:0,
    user:null,
    setUser:(user)=>{},
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

export default BasketContext