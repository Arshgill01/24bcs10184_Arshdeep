import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/products">TechGear Store</Link>
      </div>
      <div className="nav-links">
        <Link to="/products" className="nav-link">All Products</Link>
        <Link to="/products?category=audio" className="nav-link">Audio Only</Link>
        <Link to="/products?maxPrice=100" className="nav-link">Under $100</Link>
      </div>
    </nav>
  );
}
