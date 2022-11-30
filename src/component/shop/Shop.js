import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './shop.css';

export default function Shop() {
    const [products, setProduct] = useState({});
     const [cart,setCart] = useState([]);
     const [choose,setCoose] = useState('');

    
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then((res)=>res.json())
        .then((data)=>setProduct(data))
    },[])
// console.log(products.meals);
// const newCart = [];

   const addToCart =(selectProduct) =>{
    // console.log(selectProduct.strMeal);
        let newCart = [];
        
        if(cart.includes(selectProduct.strMeal)){
          newCart = [...cart];
        }else{
          newCart = [...cart,selectProduct.strMeal];
        }
        // console.log(cart.includes(selectProduct.strMeal));
        // newCart = [...cart,selectProduct.strMeal];
        
        setCart(newCart);
   }

  //  console.log(cart[Math.floor(Math.random()*cart.length)]);
   
    const addChooseOne = ()=>{
        setCoose(cart[Math.floor(Math.random()*cart.length)]);
    }
   



  return (
    <div className='shop_container'>
        <div className='product_container'>
            {
                products.meals?.map((product)=>(
                    <Product key={product.idMeal} product={product} addToCart={addToCart}/>
                ))
            }
        </div>
        <div className="cart_container">
        <div className="cart_content">
          <Cart cart={cart} addChooseOne={addChooseOne} choose={choose} ></Cart>
        </div>
        <h3 className='choose_food'>Your Choosen Food:</h3>   
        <h4 className='choose_name'>{choose}</h4>
      </div>

    </div>
  )
}
