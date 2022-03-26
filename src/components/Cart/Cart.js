import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let total = 0;
    let shipping=0;
    let tax;
    let quantity = 0;
    let grandTotal = 0;
    for(const product of cart){
        quantity=quantity+product.quantity;
        total  = total+ product.price*product.quantity;
        shipping=shipping+product.shipping;
        tax= parseFloat((total * .10).toFixed(2));
        grandTotal = total + shipping + tax;
    }

    return (
        <div className='cart'>
            <h2>This is Cart</h2>
            <p>Selected Items :{quantity}</p>
            <p>Total Price:{total}</p>
            <p>Total Shipping:{shipping}</p>
            <p>Tax:{tax}</p>
            <h5>Grand Total:{grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;