import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import AuthService from '../../utils/auth'


const FinancialNews: React.FC = () => {
    interface Article {
        title: string;
        description: string;
        url: string;
    }

    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const token = AuthService.getToken()  // getting the token from the backend and attaching for all future request
                const response = await fetch("/api/stocks/financeNews",
                {headers: {Authorization: `Bearer ${token}`}}
                );
                
                console.log(response);
                const data = await response.json();
               
                setNews(data.articles);
                setLoading(false);
            } catch (err) {
                setError((err as any).message);
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

    return (
        <div className="news-container">
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
