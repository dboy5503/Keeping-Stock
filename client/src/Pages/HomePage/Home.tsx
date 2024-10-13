import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Home.css';
import LineChart, { LineChart2, LineChart3 } from '../../Components/Chart/LineChart';







    
export default function Home() {

// call the function for each stock 








   
            return (
              <div>
            
              <CardGroup className='container'>
                <Card className='box-card'>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title className='title'>SPY</Card.Title>
                    <Card.Text>
                      Description
                    </Card.Text>
                   
                  </Card.Body>
                  <Card.Footer>
                  <small className="text-muted">Stock data on Chart </small>
                  </Card.Footer>
                  <LineChart/>
                  
                </Card>
                
                <Card className='box-card'>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title className='title'>QQQ</Card.Title>
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
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title className='title'>DIA</Card.Title>
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
          
       
    







  
      
          
          
   