import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Home.css';
import LineChart, { LineChart2, LineChart3 } from '../../Components/Chart/LineChart';







    
export default function Home() {
  

  
  





   
            return (
              <div>
            
              <CardGroup className='container'>
                
                <Card className='box-card'>
                  
                  
                  <Card.Body>
                    <Card.Title className='title'>AAPL </Card.Title>
                    <Card.Text>
                      Description 
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
          
       
    







  
      
          
          
   