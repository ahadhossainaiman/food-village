import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './product.css';

export default function Product(props) {
    const {strMeal,strMealThumb,strCategory,strIngredient1,strIngredient2,strIngredient3
,strIngredient4,strIngredient5}=props.product;
  return (
    <div className='product'>
        <img src={strMealThumb} />
        <div className='product_info'>
            <h5 className='product_name'>{strMeal}</h5>
            <h6 className=''>{strCategory}</h6>
           <ul className='list_item'>
            <li>{strIngredient1}</li>
            <li>{strIngredient2}</li>
            <li>{strIngredient3}</li>
            <li>{strIngredient4}</li>
            <li>{strIngredient5}</li>
           </ul>   
       </div>
       <button onClick={()=>props.addToCart(props.product)} className='btn_cart'>
        <p>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></p>
       </button>
    </div>
  )
}
