import React from "react";
import "./Product.css";
const Product = (props) => {
  const { id, category, name, price, seller, stock, ratings, img } =
    props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="products-name">{name}</h6>
        <p>Price:$ {price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
          </div>
          <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
