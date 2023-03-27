import React from "react";
import "./Header.css";
import logo from "../extra/images/Logo.svg";
const Header = () => {
  return (
    <div className="header">
          <img src={logo} alt="" />
          <a href="/order">Order</a>
          <a href="/order-review">Order Review</a>
          <a href="/manage-inventory">Manage-Inventory</a>
          <a href="/login">Login</a>
    </div>
  );
};

export default Header;
