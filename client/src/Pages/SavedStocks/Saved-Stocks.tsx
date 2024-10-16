import React, { useState } from 'react';
import '../../assets/stylesheets/SavedStocks.css'; // Your existing CSS
// import { fetchStockData, fetchCompanyOverview } from '../../api/stockAPI';
import EditableTitle from './Edit-Title';

interface Stock {
  symbol: string;
  name: string;
  price?: string; // Add price field for stock data
  overview?: string;
}

const SavedStocks: React.FC = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [savedStocks, setSavedStocks] = useState<Stock[]>([]);
  const [stockDetails, setStockDetails] = useState<Stock[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showStockDetails, setShowStockDetails] = useState(false);
  const [title, setTitle] = useState('My Saved Stocks');

  const handleTitleSave = (newTitle: string) => {
    setTitle(newTitle);
  };

  // Add stock using Alpha Vantage API
  const addStock = async () => {
    if (stockSymbol) {
      try {
        const stockData = await fetchStockData(stockSymbol);
        const overviewData = await fetchCompanyOverview(stockSymbol);
        
        const stockPrice = stockData['Time Series (5min)']
          ? (Object.values(stockData['Time Series (5min)'])[0] as { '1. open': string })['1. open'] // Get the latest price
          : 'N/A';

        const newStock: Stock = {
          name: overviewData.Name || stockSymbol,
          symbol: stockSymbol,
          price: stockPrice,
          overview: overviewData.Description || 'No overview available',
        };

        setSavedStocks([...savedStocks, newStock]);
        setStockSymbol('');
      } catch (error) {
        console.error('Failed to add stock:', error);
      }
    }
  };

  // Remove stock from saved list
  const removeStock = (symbol: string) => {
    setSavedStocks(savedStocks.filter(stock => stock.symbol !== symbol));
  };

  // View stock details when searched
  const viewStockDetails = () => {
    const filteredStocks = savedStocks.filter(
      (stock) =>
        stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stock.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setStockDetails(filteredStocks);
    setShowStockDetails(true);
  };

  return (
    <div className="main">
      <div className="stock-container">
      <EditableTitle initialTitle={title} onSave={handleTitleSave} />
        <table>
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {savedStocks.map((stock) => (
              <tr key={stock.symbol}>
                <td>{stock.name}</td>
                <td>{stock.symbol}</td>
                <td>{stock.price ? `$${stock.price}` : 'N/A'}</td>
                <td>
                  <button className="remove-btn" onClick={() => removeStock(stock.symbol)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Add a Stock</h2>
        <div className="stock-form">
          <input
            className="input-field"
            type="text"
            placeholder="Stock Symbol"
            value={stockSymbol}
            onChange={(e) => setStockSymbol(e.target.value)}
          />
          <button className="add-btn" onClick={addStock}>Add Stock</button>
        </div>

        <h2>Search Stock Details</h2>
        <div className="stock-form">
          <input
            className="input-field"
            type="text"
            placeholder="Search by Name or Symbol"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="view-btn" onClick={viewStockDetails}>View Details</button>
        </div>

        {showStockDetails && (
          <div>
            <h2>Stock Details</h2>
            <table>
              <thead>
                <tr>
                  <th>Stock Name</th>
                  <th>Symbol</th>
                  <th>Overview</th>
                </tr>
              </thead>
              <tbody>
                {stockDetails.map((stock) => (
                  <tr key={stock.symbol}>
                    <td>{stock.name}</td>
                    <td>{stock.symbol}</td>
                    <td>{stock.overview}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedStocks;