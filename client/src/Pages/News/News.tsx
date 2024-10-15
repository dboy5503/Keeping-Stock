import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import AuthService from '../../utils/auth'


const FinancialNews: React.FC = () => {
    interface Article {
        title: string;
        summary: string;
        url: string;
    }

    const [news, setNews] = useState<Article[]>([]);
   
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const token = AuthService.getToken()  // getting the token from the backend and attaching for all future request
                const response = await fetch("/api/stocks/financeNews",
                {headers: {Authorization: `Bearer ${token}`}}
                );
                
                // console.log(response);
                const data = await response.json();
                // store in local storage
                console.log(data);
                setNews(data.feed);
                localStorage.setItem('news', data)
               
               } catch {
               console.log("error");
              
            }

            
        };

        fetchNews();
    }, []);

  
    return (
        <div className="news-container">
            {news.map((item, index) => (
                <div key={index} className="news-box">
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                        Read more
                    </a>
                </div>
            ))}
        </div>
    );
};

export default FinancialNews;
