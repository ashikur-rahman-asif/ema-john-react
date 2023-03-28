import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart= props.cart
    return (
        <div>
            <h4>Order summary</h4>
              <p>Selected Items: {cart}</p>
        </div>
    );
};

export default Cart;