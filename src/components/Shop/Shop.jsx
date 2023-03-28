import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../extra/utilities/fakedb";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart=[]
    // console.log(storedCart);
    // step: 1
    for (const id in storedCart) {
      // console.log(id)
      // step: 2
      // get the product by using id
      const addedProduct = products.find((product) => product.id == id);
      if (addedProduct) {
        // step :3 add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
      }
      // step: 3 
    }
    // setp:5 set the cart 
    setCart(savedCart)
  }, [products]);
  const handleAddToCart = (product) => {
    // console.log(product)
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
