import React from 'react';

const RATES = { USD: 1, EUR: 0.92, INR: 83.5 };
const SYMBOLS = { USD: '$', EUR: '€', INR: '₹' };

function formatPrice(value, currency) {
  const rate = RATES[currency] || 1;
  const symbol = SYMBOLS[currency] || '$';
  const converted = value * rate;
  return `${symbol}${converted.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function AssetTable({ assets, currency }) {
  if (assets.length === 0) {
    return (
      <div className="empty-table">
        <p>No investment assets match your filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="asset-table">
        <thead>
          <tr>
            <th>Asset Name</th>
            <th>Symbol</th>
            <th>Asset Class</th>
            <th className="text-right">Quantity</th>
            <th className="text-right">Current Price ({currency})</th>
            <th className="text-right">Total Holding Value ({currency})</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => {
            const holdingValue = asset.quantity * asset.currentPrice;
            return (
              <tr key={asset.id}>
                <td className="font-semibold">{asset.name}</td>
                <td>
                  <span className="symbol-badge">{asset.symbol}</span>
                </td>
                <td>
                  <span className={`class-badge badge-${asset.assetClass.toLowerCase()}`}>
                    {asset.assetClass}
                  </span>
                </td>
                <td className="text-right">{asset.quantity}</td>
                <td className="text-right">{formatPrice(asset.currentPrice, currency)}</td>
                <td className="text-right font-bold text-success">
                  {formatPrice(holdingValue, currency)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
