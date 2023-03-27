import React from "react";
import "./Header.css";
import logo from "../extra/images/Logo.svg";
const Header = () => {
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="ahref">
      <a href="/order">Order</a>
      <a href="/order-review">Order-Review</a>
      <a href="/manage-inventory">Manage-Inventory</a>
      <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
