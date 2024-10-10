import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';

const FinancialNews: React.FC = () => {
    interface Article {
        title: string;
        description: string;
        url: string;
    }
    
    const [news, setNews] = useState<Article[]>([]);
    const [query, setQuery] = useState('finance'); // Default search query
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchNews = async () => {
        setLoading(true); // Show loading state for each search
        try {
            const response = await axios.get('https://newsapi.org/v2/everything', {
                params: {
                    q: query,
                    apiKey: 'YOUR_API_KEY',
                },
            });
            setNews(response.data.articles);
            setLoading(false);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
            setLoading(false);
        }
    };

    // Call the fetch function when the component mounts
    useEffect(() => {
        fetchNews();
    }, []);

    // Handle search form submission
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        fetchNews();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="news-container">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for financial news"
                />
                <button type="submit">Search</button>
            </form>

            {news.map((article, index) => (
                <div key={index} className="news-item">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read more
                    </a>
                </div>
            ))}
        </div>
    );
};

export default FinancialNews;
