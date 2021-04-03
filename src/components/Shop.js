import React from 'react';
import BluePill from '../images/products/blue_pill.png'

function Shop() {
  return (
    <div className="Shop">
      <h1>Shop</h1>
      <div className="productsContainer">
        <div className="productCard">
          <img className="productImage" src={BluePill} alt="product"/>
          <div className="productCardBottom">
            <h3>Blue Clover</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;