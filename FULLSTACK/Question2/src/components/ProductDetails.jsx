import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../productsData';

export default function ProductDetails() {
  const { productId } = useParams();

  const product = PRODUCTS.find((p) => String(p.id) === String(productId));

  if (!product) {
    return (
      <div className="details-container not-found-container">
        <h2>Product not found!</h2>
        <p>No product matches ID: {productId}</p>
        <Link to="/products" className="btn-back">
          Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-badge">{product.category}</div>
        <h2 className="details-title">{product.name}</h2>
        <div className="details-info">
          <div className="info-row">
            <span className="info-label">Product ID</span>
            <span className="info-value">#{product.id}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Category</span>
            <span className="info-value capitalize">{product.category}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Price</span>
            <span className="info-value price-highlight">${product.price.toFixed(2)}</span>
          </div>
        </div>
        <div className="details-actions">
          <Link to="/products" className="btn-back">
            Back to Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
