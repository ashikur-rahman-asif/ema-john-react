import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  // const cart= props.cart
  // console.log(cart)
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
    // console.log(product.price)
  }
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: {totalShipping} </p>
      <p>Tax: {}</p>
      <h6>Grand Total: {}</h6>
    </div>
  );
};

export default Cart;
