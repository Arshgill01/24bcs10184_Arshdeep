import React, { useState, useEffect, useMemo } from 'react';
import FilterBar from './components/FilterBar';
import PortfolioMetrics from './components/PortfolioMetrics';
import AssetTable from './components/AssetTable';

const MOCK_ASSETS = [
  {
    id: 1,
    name: "Apple Inc.",
    symbol: "AAPL",
    assetClass: "Stocks",
    quantity: 10,
    currentPrice: 195.5,
  },
  {
    id: 2,
    name: "Microsoft Corp.",
    symbol: "MSFT",
    assetClass: "Stocks",
    quantity: 8,
    currentPrice: 420.25,
  },
  {
    id: 3,
    name: "Bitcoin",
    symbol: "BTC",
    assetClass: "Crypto",
    quantity: 0.5,
    currentPrice: 65000,
  },
  {
    id: 4,
    name: "Ethereum",
    symbol: "ETH",
    assetClass: "Crypto",
    quantity: 2,
    currentPrice: 3500,
  },
  {
    id: 5,
    name: "US Treasury Bond",
    symbol: "UST",
    assetClass: "Bonds",
    quantity: 20,
    currentPrice: 102.5,
  },
  {
    id: 6,
    name: "Gold ETF",
    symbol: "GLD",
    assetClass: "Commodities",
    quantity: 15,
    currentPrice: 220.75,
  },
];

const CURRENCY_SYMBOLS = { USD: '$', EUR: '€', INR: '₹' };
const CURRENCY_RATES = { USD: 1, EUR: 0.92, INR: 83.5 };

export default function App() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAssets(MOCK_ASSETS);
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const { filteredAssets, totalValue } = useMemo(() => {
    window.analyticsMemoCount = (window.analyticsMemoCount || 0) + 1;

    const filtered = assets.filter((asset) => {
      const matchesSearch = asset.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || asset.assetClass === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    const total = filtered.reduce(
      (sum, asset) => sum + asset.quantity * asset.currentPrice,
      0
    );

    return {
      filteredAssets: filtered,
      totalValue: total,
    };
  }, [assets, searchTerm, selectedCategory]);

  useEffect(() => {
    const rate = CURRENCY_RATES[currency] || 1;
    const symbol = CURRENCY_SYMBOLS[currency] || '$';
    const convertedTotal = totalValue * rate;
    const formattedTotal = `${symbol}${convertedTotal.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    document.title = `Portfolio - Total: ${formattedTotal}`;
  }, [totalValue, currency]);

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-container">
          <div className="brand">
            <div>
              <h1>Nova Financial</h1>
              <p className="brand-subtitle">Investment Analytics Dashboard</p>
            </div>
          </div>
        </div>
      </header>

      <main className="main-dashboard">
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          currency={currency}
          setCurrency={setCurrency}
        />

        <PortfolioMetrics
          totalValue={totalValue}
          currency={currency}
          assetCount={filteredAssets.length}
        />

        <section className="table-section">
          <div className="section-header">
            <h2>Holdings Breakdown</h2>
            <span className="count-tag">{filteredAssets.length} Assets Listed</span>
          </div>

          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Fetching portfolio data...</p>
            </div>
          ) : (
            <AssetTable assets={filteredAssets} currency={currency} />
          )}
        </section>
      </main>
    </div>
  );
}
