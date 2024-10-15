import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Home.css';
import LineChart, { LineChart2, LineChart3 } from '../../Components/Chart/LineChart';

import { useEffect, useState } from 'react';
import AuthService from '../../utils/auth'







    
export default function Home() {
  const [stockInfo, setStockInfo] = useState({ ticker: '', name: '', description: '', market_cap: '' });
  const fetchStockInfo = async () => {
    try {
      const token = AuthService.getToken()  // getting the token from the backend and attaching for all future request

      const response = await fetch("/api/stocks/stockInfo/AAPL",
      {headers: {Authorization: `Bearer ${token}`},}
      );
      const data = await response.json();
      const { ticker, name, description, market_cap } = data.results;
      localStorage.setItem("AaplStockInfo", JSON.stringify({ ticker, name, description, market_cap }));
      setStockInfo({ ticker, name, description, market_cap });
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("AaplStockInfo");
    if (storedData) {
      setStockInfo(JSON.parse(storedData));
    } else {
      fetchStockInfo();
    }
  }, []);

  
  





   
            return (
              <div>
            
              <CardGroup className='container'>
                
                <Card className='box-card'>
                  
                  
                  <Card.Body>
                    <Card.Title className='title'>AAPL {stockInfo.ticker}</Card.Title>
                    <Card.Text>
                      Description {stockInfo.description}
                    </Card.Text>
                   
                  </Card.Body>
                  <Card.Footer>
                  <small className="text-muted">Market Cap </small>
                  </Card.Footer>
                  <LineChart/>
                  
                </Card>
                
                <Card className='box-card'>
                 
                  <Card.Body>
                    <Card.Title className='title'>META</Card.Title>
                    <Card.Text>
                      Description 
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Stock data on Chart </small>
                  </Card.Footer>
                  <LineChart2/>
                </Card>
                <Card className='box-card'>
                  
                  <Card.Body>
                    <Card.Title className='title'>NVDA</Card.Title>
                    <Card.Text>
                      Description 
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <small className="text-muted">Stock data on Chart </small>
                  </Card.Footer>
                  <LineChart3/>
                </Card>
              </CardGroup>
              </div>

            );
          }
          
       
    







  
      
          
          
   