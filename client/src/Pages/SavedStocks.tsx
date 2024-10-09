import React, { useState, useEffect } from 'react';

interface StockData {
    [key: string]: string[];
}

const StockTracker: React.FC = () => {
    const [stockData, setStockData] = useState<StockData>({});
    const [itemInput, setItemInput] = useState<string>('');
    const [stockInput, setStockInput] = useState<string>('');
    const [selectedList, setSelectedList] = useState<string | null>(null);

    // Load stock data from local storage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem('stockData');
        if (storedData) {
            setStockData(JSON.parse(storedData));
        }
    }, []);

    // Save stock data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('stockData', JSON.stringify(stockData));
    }, [stockData]);

    // Add a new stock list
    const addList = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (itemInput && !stockData[itemInput]) {
            setStockData(prevData => ({ ...prevData, [itemInput]: [] }));
            setItemInput('');
        }
    };

    // Add a stock to the selected list
    const addStock = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedList && stockInput) {
            setStockData(prevData => ({
                ...prevData,
                [selectedList]: [...prevData[selectedList], stockInput],
            }));
            setStockInput('');
        }
    };

    // Remove a stock from the selected list
    const removeStock = (stock: string) => {
        if (selectedList) {
            setStockData(prevData => ({
                ...prevData,
                [selectedList]: prevData[selectedList].filter(s => s !== stock),
            }));
        }
    };

    return (
        <div className="container">
            <h2>My Stock Lists</h2>

            {/* Input form for adding stock lists */}
            <form onSubmit={addList}>
                <input
                    type="text"
                    value={itemInput}
                    onChange={(e) => setItemInput(e.target.value)}
                    placeholder="Add a new stock list"
                    required
                />
                <button type="submit">Add List</button>
            </form>

            {/* The list of stock categories (lists) */}
            <ul>
                {Object.keys(stockData).map((listName) => (
                    <li key={listName} onClick={() => setSelectedList(listName)}>
                        {listName}
                    </li>
                ))}
            </ul>

            {/* Section to display associated stocks and manage them */}
            {selectedList && (
                <div id="stockDetails">
                    <h3>{selectedList}</h3>
                    <ul>
                        {stockData[selectedList].map((stock) => (
                            <li key={stock}>
                                {stock}
                                <button onClick={() => removeStock(stock)}>Remove</button>
                            </li>
                        ))}
                    </ul>

                    {/* Input form to add new stocks to the selected list */}
                    <form onSubmit={addStock}>
                        <input
                            type="text"
                            value={stockInput}
                            onChange={(e) => setStockInput(e.target.value)}
                            placeholder="Add a new stock"
                            required
                        />
                        <button type="submit">Add Stock</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default StockTracker;
