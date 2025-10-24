import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <h2>Green Haven</h2>
      <nav>
        <Link to="/products">Shop</Link>
        <Link to="/cart">🛒 {totalQuantity}</Link>
      </nav>
    </header>
  );
};

export default Header;
