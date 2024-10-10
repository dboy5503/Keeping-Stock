import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Home.css';
// import LineChart from '../../Componets/Chart/LineChart';






    
export default function Home() {

// call the function for each stock 








   
            return (
              <div>
            
              <CardGroup className='container'>
                <Card className='box-card'>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Apple</Card.Title>
                    <Card.Text>
                      Description
                    </Card.Text>
                   
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"></small>
                    
                 
                  </Card.Footer>
                  
                </Card>
                
                <Card className='box-card'>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Meta</Card.Title>
                    <Card.Text>
                      Description 
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Stock data on Chart </small>
                  </Card.Footer>
                </Card>
                <Card className='box-card'>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Tesla</Card.Title>
                    <Card.Text>
                      Description 
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Stock data on Chart</small>
                  </Card.Footer>
                </Card>
              </CardGroup>
              </div>

            );
          }
          
       
    







  
      
          
          
   