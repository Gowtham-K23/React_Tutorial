import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Mobile" },
        { id: 3, name: "Tablet" }
    ];
  return (
    <div>
        {products.map(product => (
            <p key = {product.id}>{product.name}</p>
        ))}
    </div>
  )
}

export default ProductList