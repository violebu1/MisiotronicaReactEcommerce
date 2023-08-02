import React from 'react';
import "./ProductCard.css";

  const ProductCard = ({ product, onAddToCart }) => {
    return (
      <div className="card">
        <img src={product.imageUrl} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price}</p>
          <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
