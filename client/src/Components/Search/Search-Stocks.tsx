import React, { useState } from 'react';

import { useEffect } from 'react';

interface Stock {
    symbol: string;
    name: string;
    price: number;
    change: number;
}

const SearchResults: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [results, setResults] = useState<Stock[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Function to handle search action
    const handleSearch = async () => {

    }


    useEffect(()=>{
        const fetchStocks = async () => {

        try {
            const response = await fetch(`/api/stocks/`); // Replace with your API
            const data = await response.json();
            if (data && data.length > 0) {
                setResults(data); // Set the results based on API response
                setError(null); // Clear any previous error
            } else {
                setResults([]);
                setError('No results found.');
            }
        } catch (err) {
            setError('An error occurred while fetching results.');
            console.error(err);
        }
    }
    fetchStocks();
    

    }, [searchInput]);
       
    

    return (
        // add search bar styling from header.css 
        <div className="search-results">
            <header>
                <h1>Search for Stocks</h1>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search for a stock..."
                />
                <button onClick={handleSearch}>Search</button>
            </header>
            <main>
                <h2>Search Results</h2>
                {error && <p className="error">{error}</p>}
                {results.length > 0 ? (
                    <ul>
                        {results.map((stock) => (
                            <li key={stock.symbol}>
                                <h3>{stock.name} ({stock.symbol})</h3>
                                <p>Price: ${stock.price.toFixed(2)}</p>
                                <p>Change: {stock.change.toFixed(2)}%</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )}
            </main>
        </div>
    );
};

export default SearchResults;
