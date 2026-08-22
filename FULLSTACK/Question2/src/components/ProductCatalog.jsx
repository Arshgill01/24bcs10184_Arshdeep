import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../productsData';

export default function ProductCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get('category') || '';
  const activeMaxPrice = searchParams.get('maxPrice') || '';

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory
      ? product.category.toLowerCase() === activeCategory.toLowerCase()
      : true;
    const matchesPrice = activeMaxPrice
      ? product.price <= Number(activeMaxPrice)
      : true;
    return matchesCategory && matchesPrice;
  });

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set('category', value);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set('maxPrice', value);
    } else {
      newParams.delete('maxPrice');
    }
    setSearchParams(newParams);
  };

  const handleClearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="catalog-container">
      <header className="catalog-header">
        <h2>Product Catalog</h2>
        <p>Browse and filter tech accessories.</p>
      </header>

      <section className="filter-controls">
        <div className="filter-group">
          <label htmlFor="category-select">Category</label>
          <select
            id="category-select"
            value={activeCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="audio">audio</option>
            <option value="peripherals">peripherals</option>
            <option value="display">display</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="price-input">Max Price ($)</label>
          <input
            id="price-input"
            type="number"
            placeholder="e.g. 100"
            min="0"
            value={activeMaxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>

        <button className="btn-clear" onClick={handleClearFilters}>
          Clear Filters
        </button>
      </section>

      <div className="catalog-stats">
        Showing {filteredProducts.length} of {PRODUCTS.length} products
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <span className="product-badge">{product.category}</span>
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`} className="btn-details">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <div className="no-products">
            <p>No products match your filter criteria.</p>
            <button className="btn-clear" onClick={handleClearFilters}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
