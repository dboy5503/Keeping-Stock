import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Home.css';
import LineChart, { LineChart2, LineChart3 } from '../../Components/Chart/LineChart';

export default function Home() {
  return (
    <div>
      <CardGroup className='container'>
        <Card className='box-card'>
          <Card.Title className='title'>AAPL</Card.Title>
          <LineChart />
        </Card>
        <Card className='box-card'>
          <Card.Title className='title'>META</Card.Title>
          <LineChart2 />
        </Card>
        <Card className='box-card'>
          <Card.Title className='title'>NVDA</Card.Title>
          <LineChart3 />
        </Card>
      </CardGroup>
    </div>
  );
}
          
       
    







  
      
          
          
   