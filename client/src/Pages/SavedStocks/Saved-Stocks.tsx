import React, { useState } from 'react';
import '../../assets/stylesheets/SavedStocks.css';

// Define a type for the stock
interface Stock {
  symbol: string;
  name: string;
}

// Define a type for the stock list
interface StockList {
  name: string;
  stocks: Stock[];
}

const SavedStocks: React.FC = () => {
  // State to manage lists of stocks
  const [stockLists, setStockLists] = useState<StockList[]>([]);
  const [selectedList, setSelectedList] = useState<StockList | null>(null);
  const [newListName, setNewListName] = useState('');
  const [newStockSymbol, setNewStockSymbol] = useState('');
  const [newStockName, setNewStockName] = useState('');

  // Handle adding a new stock list
  const addStockList = () => {
    if (newListName) {
      setStockLists([...stockLists, { name: newListName, stocks: [] }]);
      setNewListName('');
    }
  };

  // Handle selecting a stock list to view
  const viewStockList = (list: StockList) => {
    setSelectedList(list);
  };

  // Handle adding a stock to the currently selected list
  const addStockToList = () => {
    if (selectedList && newStockSymbol && newStockName) {
      const updatedList = {
        ...selectedList,
        stocks: [...selectedList.stocks, { symbol: newStockSymbol, name: newStockName }]
      };
      setStockLists(
        stockLists.map((list) =>
          list.name === selectedList.name ? updatedList : list
        )
      );
      setSelectedList(updatedList);
      setNewStockSymbol('');
      setNewStockName('');
    }
  };

  // Handle removing a stock from the selected list
  const removeStockFromList = (symbol: string) => {
    if (selectedList) {
      const updatedList = {
        ...selectedList,
        stocks: selectedList.stocks.filter((stock) => stock.symbol !== symbol)
      };
      setStockLists(
        stockLists.map((list) =>
          list.name === selectedList.name ? updatedList : list
        )
      );
      setSelectedList(updatedList);
    }
  };

  return (
    <div className="container">
      <h2>Manage Your Stock Lists</h2>

      {/* Input to create new stock list */}
      <input
        type="text"
        placeholder="Enter new list name"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
      />
      <button onClick={addStockList}>Create List</button>

      <h3>Your Stock Lists</h3>
      <ul>
        {stockLists.map((list) => (
          <li key={list.name} onClick={() => viewStockList(list)}>
            {list.name}
          </li>
        ))}
      </ul>

      {/* Display the selected stock list */}
      {selectedList && (
        <div>
          <h3>Stocks in {selectedList.name}</h3>
          <ul>
            {selectedList.stocks.map((stock) => (
              <li key={stock.symbol}>
                {stock.name} ({stock.symbol})
                <button className="remove-stock" onClick={() => removeStockFromList(stock.symbol)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Add new stock to the selected list */}
          <div>
            <input
              type="text"
              placeholder="Stock Abbr."
              value={newStockSymbol}
              onChange={(e) => setNewStockSymbol(e.target.value)}
            />
            <input
              type="text"
              placeholder="Stock Name"
              value={newStockName}
              onChange={(e) => setNewStockName(e.target.value)}
            />
            <button onClick={addStockToList}>Add Stock</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedStocks;