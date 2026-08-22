import React from 'react';

const CATEGORIES = ['All', 'Stocks', 'Crypto', 'Bonds', 'Commodities'];
const CURRENCIES = ['USD', 'EUR', 'INR'];

export default function FilterBar({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  currency,
  setCurrency,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-item search-box">
        <label htmlFor="search-input">Search Asset:</label>
        <input
          id="search-input"
          type="text"
          placeholder="Filter by name (e.g. Apple, Bitcoin)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-item">
        <label htmlFor="category-select">Asset Class:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="currency-select">Display Currency:</label>
        <select
          id="currency-select"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {CURRENCIES.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
