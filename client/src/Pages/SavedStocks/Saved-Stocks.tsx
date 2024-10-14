import React, { useState, useEffect } from 'react';
import '../../assets/stylesheets/SavedStocks.css';
import EditableTitle from './Edit-Title.tsx';

interface Stock {
    symbol: string;
    name: string;
}

// this should allow the stocks array to be populated with the data from the API
// to do this, we uncommented the fetch stocks code and the stocks state should be set to the data from the API
// the stocks can then be displayed in the list
// and then the stocks can be saved to the savedStocks array
const StockList: React.FC = () => {
    const [stocks, setStocks] = useState<Stock[]>([
        { symbol: '', name: '' },
        { symbol: '', name: '' },
        { symbol: '', name: '' },
        { symbol: '', name: '' },
    ]);

    const [savedStocks, setSavedStocks] = useState<Stock[]>([]);

    // Load saved stocks from local storage on component mount
    useEffect(() => {
        const saved = localStorage.getItem('savedStocks');
        if (saved) {
            setSavedStocks(JSON.parse(saved));
        }
    }, []);

    // Fetch stocks from an API on component mount
     useEffect(() => {
         const fetchStocks = async () => {
         try {
                const response = await fetch('https://api.example.com/stocks');
                const data = await response.json();
                setStocks(data);
            } catch (error) {
                console.error('Error fetching stocks:', error);
            }
        };

       fetchStocks();
    }, []); 

    // Save stocks to local storage whenever the savedStocks state changes
    useEffect(() => {
        localStorage.setItem('savedStocks', JSON.stringify(savedStocks));
    }, [savedStocks]);

    // Add stock to saved list
    const saveStock = (stock: Stock) => {
        if (!savedStocks.some((s) => s.symbol === stock.symbol)) {
            setSavedStocks([...savedStocks, stock]);
        }
    };

    // Remove stock from saved list
    const removeStock = (symbol: string) => {
        const updatedStocks = savedStocks.filter((stock) => stock.symbol !== symbol);
        setSavedStocks(updatedStocks);
    };

    // Check if the stock is already saved
    const isStockSaved = (symbol: string) => {
        return savedStocks.some((stock) => stock.symbol === symbol);
    };

    // Edit the title of the stock list
    const [title, setTitle] = useState<string>('My Stock List');

    const handleSave = (newTitle: string) => {
        setTitle(newTitle);
    };

    return (
        <div className="container">
            <div>
                <EditableTitle initialTitle={title} onSave={handleSave} />
            </div>
            <ul id="itemList">
                {stocks.map((stock) => (
                    <li key={stock.symbol}>
                        {stock.name} ({stock.symbol})
                        {isStockSaved(stock.symbol) ? (
                            <button className="remove-stock" onClick={() => removeStock(stock.symbol)}>Remove</button>
                        ) : (
                            <button onClick={() => saveStock(stock)}>Save</button>
                        )}
                    </li>
                ))}
            </ul>

            <h2>Saved Stocks</h2>
            {savedStocks.length === 0 ? (
                <p>No stocks saved.</p>
            ) : (
                <ul id="stocksList">
                    {savedStocks.map((stock) => (
                        <li key={stock.symbol}>
                            {stock.name} ({stock.symbol})
                            <button className="remove-stock" onClick={() => removeStock(stock.symbol)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StockList;