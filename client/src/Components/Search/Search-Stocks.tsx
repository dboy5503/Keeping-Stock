import React, { useState } from 'react';
import AuthService from '../../utils/auth'


interface Stock {
    ticker: string;
    name: string;
    market: string;
    change: number;
}

const SearchResults: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [results, setResults] = useState<Stock[]>([]);
    const [error, setError] = useState<string | null>(null);

    

        // Function to handle search action
        const handleSearch = async () => {
            fetchStocks();
    
    
    
        }
   
        const fetchStocks = async () => {

            try {
                const token = AuthService.getToken() // getting the token from the backend and attaching for all future request
                const response = await fetch(`api/stocks/search?search=${searchInput}`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                // Replace with your API
                const data = await response.json();
                console.log('data', data);
                if (data && data.results.length > 0) {
                    setResults(data.results); // Set the results based on API response
                    console.log('search stocks', data.results);
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
                                    {results.map((results) => (
                                        <li key={results.ticker}>
                                            <h1>{results.ticker}</h1>
                                            <h3>{results.name} ({results.market})</h3>
                                         
                                        
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No results found.</p>
                            )} // Add closing parenthesis here
                     </main>
                    </div>
                );
};

export default SearchResults;
