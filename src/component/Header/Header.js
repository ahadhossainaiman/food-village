import { faHeart, faMagnifyingGlass, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
export default function Header() {
  return (
    <nav className='header'>
       <img src="https://cdn.shopify.com/s/files/1/0559/4890/2573/files/logo.png?v=1618192211"  alt="logo" />
       <div className='menu'>
         <a href='/'>Home</a>
         <a href='/Shop'>Shop</a>
         <a href='/Featured'>Featured</a>
         <a href='/Pages'>Pages</a>
         <a href='/Blogs'>Blogs</a>
       </div>
       <div className='header_icon'>
       <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
       <FontAwesomeIcon icon={faUser} className="icon" />
       <FontAwesomeIcon icon={faHeart} className="icon" />
       <FontAwesomeIcon icon={faShoppingCart} className="icon" />
       </div>
    </nav>
  )
}
