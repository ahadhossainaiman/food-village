import React from 'react';
import './Cart.css';

export default function Cart(props) {
    // console.log(props.cart);
    
  return (
    <div className='cart'>
        <h3>Order Name</h3>
        <hr/>
        {
          props.cart.map((food)=><ul><li>{food}</li></ul>)
        }
        
    </div>
  )
}
