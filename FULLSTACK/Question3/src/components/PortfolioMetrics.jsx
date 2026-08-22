import React from 'react';

const RATES = { USD: 1, EUR: 0.92, INR: 83.5 };
const SYMBOLS = { USD: '$', EUR: '€', INR: '₹' };

function formatValue(value, currency) {
  const rate = RATES[currency] || 1;
  const symbol = SYMBOLS[currency] || '$';
  const converted = value * rate;
  return `${symbol}${converted.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function PortfolioMetrics({ totalValue, currency, assetCount }) {
  return (
    <div className="metrics-grid">
      <div className="metric-card primary-metric">
        <span className="metric-label">Total Portfolio Value</span>
        <h3 className="metric-value">{formatValue(totalValue, currency)}</h3>
        <span className="metric-subtext">Currency Base: {currency}</span>
      </div>

      <div className="metric-card">
        <span className="metric-label">Active Holdings</span>
        <h3 className="metric-value">{assetCount}</h3>
        <span className="metric-subtext">Filtered Assets</span>
      </div>

      <div className="metric-card">
        <span className="metric-label">Selected Currency</span>
        <h3 className="metric-value">{currency}</h3>
        <span className="metric-subtext">Active Display Unit</span>
      </div>
    </div>
  );
}
