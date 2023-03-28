import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  // const cart= props.cart
  //   console.log(cart)
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity=1
     }
    totalPrice = totalPrice + product.price*product.quantity;
      totalShipping = totalShipping + product.shipping;
      quantity= quantity+product.quantity
    // console.log(product.price)
  }
  const tax = parseFloat((totalPrice * 0.75) / 100);
  const grandTotal = totalPrice + tax + totalShipping;
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: {totalShipping} </p>
      <p>Tax: ${tax}</p>
      <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
