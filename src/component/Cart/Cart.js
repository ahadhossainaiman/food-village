import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Cart.css';

export default function Cart(props) {
  // console.log(props.cart);
  const [finalItem,setFinalItem] = useState([]);

  useEffect(()=>{
    setFinalItem(props.cart)

  },[props.cart]);
  
  
  const removeItem = (foodName) =>{
//  console.log(foodName);
  //  const filteredFood = props.cart.indexOf(foodName);
   ;
  //  const finalArray = [...props.cart];
  
   setFinalItem(finalItem.filter((food)=>food !== foodName));
   
  }
  
    
    
  return (
    <div className='cart'>
        <h3>Order Name</h3>
        <hr/>
        {

          (finalItem.length)? (finalItem?.map((food)=><ul><li>{food} <button onClick={()=>{removeItem(food)}}><FontAwesomeIcon icon={faRemove} /></button></li></ul>)):<p>no item found.</p>

        }

        <button className='choose_cart' onClick={props.addChooseOne}>Choose 1 For Me
        </button>
       
    </div>
  )
}
