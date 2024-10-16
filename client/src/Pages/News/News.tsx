import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import AuthService from '../../utils/auth'
import '../../assets/stylesheets/News.css';


const FinancialNews: React.FC = () => {
    interface Article {
        title: string;
        summary: string;
        url: string;
        banner_image: string;
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
        <div>
            <h1 className='title'>Financial News</h1>
            <div className="news-container">
                {news.map((item, index) => (
                    <div key={index} className="news-box">
                        <h2>{item.title}</h2>
                        <img src={item.banner_image} alt="news" className='image' />
                        <p>{item.summary}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className='read'>
                            Read more
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinancialNews;

