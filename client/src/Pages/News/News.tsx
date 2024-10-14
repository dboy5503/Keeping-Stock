import React, { useState, useEffect } from 'react';
import './News.css';

const FinancialNews: React.FC = () => {
    interface Article {
        title: string;
        description: string;
        url: string;
    }

    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch("/api/stocks/financeNews");
                console.log(response);
                const data = await response.json();
               
                setNews(data.articles);
                setLoading(false);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    /* css files were fixed */
    return (
        <div className="news-container">
        <div className="news-section">
            <div className="news-box">
        {news.map((article, index) => (
            <div key={index} className="news-item">
                <h3 className="news-box h3">{article.title}</h3>
                <p className="news-box p">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read more
                </a>
            </div>
        ))}
    </div>
    </div>
    </div>
);
};

export default FinancialNews;
