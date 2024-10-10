import React, { useState, useEffect } from 'react';
import './SavedStocks.css';

interface Stock {
    symbol: string;
    name: string;
}

const StockList: React.FC = () => {
    const [stocks, setStocks] = useState<Stock[]>([
        { symbol: 'AAPL', name: 'Apple' },
        { symbol: 'GOOGL', name: 'Google' },
        { symbol: 'AMZN', name: 'Amazon' },
        { symbol: 'TSLA', name: 'Tesla' },
    ]);

    const [savedStocks, setSavedStocks] = useState<Stock[]>([]);

    /* // Load saved stocks from local storage on component mount
    useEffect(() => {
        const saved = localStorage.getItem('savedStocks');
        if (saved) {
            setSavedStocks(JSON.parse(saved));
        }
    }, []); */

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

    return (
        <div className="container">
            <h2>Available Stocks</h2>
            <ul>
                {stocks.map((stock) => (
                    <li key={stock.symbol}>
                        {stock.name} ({stock.symbol})
                        {isStockSaved(stock.symbol) ? (
                            <button onClick={() => removeStock(stock.symbol)}>Remove</button>
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
                <ul>
                    {savedStocks.map((stock) => (
                        <li key={stock.symbol}>
                            {stock.name} ({stock.symbol})
                            <button onClick={() => removeStock(stock.symbol)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StockList;