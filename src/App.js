
import './App.css'
import { useState } from 'react';
import Cart from "./Component/Cart/Cart"
import Card from './Component/Card/card'
const {getData} =  require('./Db/db');


const food = getData();

function App() {

const [cartItems,setCartItems] = useState([]);

const onAdd=(food)=>{
  const exist = cartItems.find((x)=> x.id === food.id)
  if(exist){
    setCartItems(
      cartItems.map((x) =>
        x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
      )
    );

  }
  else{
    setCartItems(
      [...cartItems,{...food,quantity:1}]
    );
  }
};

const onRemove=(food)=>{
  const exist = cartItems.find((x)=> x.id === food.id);
  if(exist.quantity === 1){
    setCartItems(cartItems.filter((x)=>x.id!==food.id))
  }else{
    setCartItems(cartItems.map(
      x=> x.id === food.id ? {...exist,quantity:exist.quantity-1}:x
    ))
  }

}




  return (
    
    <>
    <h1 className='hadding'>Order Food</h1>
    <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
   <div className='cards'>{ 
    food.map((food)=>{
      return <Card food={food} key={food.id}/>;
    })
   }</div>
   
 
    </>

  );
}

export default App;
