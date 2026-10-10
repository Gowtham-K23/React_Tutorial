import React from 'react'

const ProductCard = ({ title, price, image}) => {
  return (
    <div style = {{
        border: "1px solid #ccc",
        padding: "10px",
        width: "200px",
        borderRadius: "10px"
    }}>
        <img src = {image} alt = {title} width = "100%" />
        <h3>{title}</h3>
        <p>Rs.{price}</p>
        <button>Buy Now</button>
    </div>
  );
};

export default ProductCard;