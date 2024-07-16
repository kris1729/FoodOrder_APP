import Button from '../Button/button'
import './Cart.css'
import React from 'react'



function Cart(cartItems , onAdd , onRemove) {
    const totalPrice = cartItems.reduce((a,c)=>a+c.price*c.quantity,0)
  return (

    <div className="cart_container">

        {cartItems.length===0 ? "NO Item in Cart":""}
        <br/>
        <span>Ttatal Price: {totalPrice.toFixed(2)}-Rs</span>
        <Button title={`${cartItems.length===0? 'Order !':'Checkout'}`} type={'checkout'} 
        disable={`${cartItems.length===0? true:false}`}/>
    </div>
  )
}

export default Cart