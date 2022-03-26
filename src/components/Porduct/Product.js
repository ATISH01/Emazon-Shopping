import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart }) => {
    
    const {name,img, price,seller,ratings} =product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className="name">{name}</p>
            <p>Price:{price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>ratings:{ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='cart-button'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;