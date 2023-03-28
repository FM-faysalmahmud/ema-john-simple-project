import React, { useEffect } from "react";
import { useState } from "react";
import "./Shop.css";
const SHop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container">
        <h2>products coming here: {products.length}</h2>
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default SHop;
