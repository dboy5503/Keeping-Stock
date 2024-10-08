

// create a chart that will render the stock data 
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { StockDetails } from '../../API/ApiInterface';

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
)

export default function LineChart() {

    const [chartData, setChartData] = useState([]);

   
        const FetchChartData = async () => {
            try {
            const response = await fetch('./api/stockRoutes');
            const data = await response.json();
            console.log(data);
            setChartData(data);
        } catch (err) {
            console.log('Error', err);

        }

    } 
        useEffect(() => {
        FetchChartData();
    }, []);



    //labels for the x-axis to show the date 
    // datasets for the y-axis to show the stock price

    const lineChartData = {
        labels: chartData.map((stock: StockDetails) => stock.t), // the labels for the x-axis will show the date
        datasets: [
            {
                label: 'Close Price', // the label for the y-axis will show the stock price
                data: chartData.map((stock: StockDetails) => stock.c), //the datasets for the y-axis will show the stock price
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1) solid 50',

            },
        ],
    };




    return (

        <div>
            <Line data={lineChartData}

                height={100}
            />
        </div>



    )
}