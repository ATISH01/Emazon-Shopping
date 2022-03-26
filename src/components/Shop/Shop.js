import React, { useEffect, useState } from 'react';
import { addToDb, getCartData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Porduct/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct]=useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    useEffect(()=>{
        const cartData = getCartData();
        console.log(cartData)
        const savedCart = [];
        for(const i in cartData){
            const addedProduct = products.find(product=> product.id === i );
            if(addedProduct){
                const quantity = cartData[i];
                console.log(quantity);
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }
            console.log(addedProduct);
        };
        setCart(savedCart)
    },[products])

    const handleAddToCart = (selectedProduct) =>{
        let newCart =[];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
               
               {
                   products.map(product=> <Product product={product}
                    handleAddToCart={handleAddToCart}></Product>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;