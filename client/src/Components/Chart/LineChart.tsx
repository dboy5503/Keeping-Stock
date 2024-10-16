// create a chart that will render the stock data
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale, // x-axis
  LinearScale, // y-axis
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { StockDetails } from "../../API/ApiInterface.js";
import "./LineChartStyle.css";
import AuthService from '../../utils/auth'



ChartJS.register(
  LineElement,
  PointElement, //
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const [chartData, setChartData] = useState([]);

  const FetchChartData = async () => {
    try {
      const token = AuthService.getToken()
      const response = await fetch("/api/stocks/ticker/AAPL",
      {headers: {Authorization: `Bearer ${token}`}}
    );
      
      const data = await response.json();
      setChartData(data.results);
      localStorage.setItem("AaplChartData", JSON.stringify(data.results));
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    // Check if there's any data in localStorage
    const storedData = localStorage.getItem("AaplChartData");
    if (storedData) {
      setChartData(JSON.parse(storedData));
    } else {
      // If there's no data in localStorage, fetch data from the API
      FetchChartData();
    }
  }, []);

  //labels for the x-axis to show the date
  // datasets for the y-axis to show the stock price

  const lineChartData = {
    labels: chartData.map((stock: StockDetails) => {
      const date = new Date(stock.t);
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",

        // the labels for the x-axis will show the date
        //convert timestamp to readable date
      });
    }),

    datasets: [
      {
        label: "AAPL 2024 CLOSING PRICE DATA ", // the label for the y-axis will show the stock price
        data: chartData.map((stock: StockDetails) => stock.c), //the datasets for the y-axis will show the stock price
        fill: false, //this will fill the area under the line chart with color
        borderColor: "blue",
        borderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "blue",
        pointHoverBorderColor: "blue",
        pointHoverBorderWidth: 2,
        pointBackgroundColor: "blue",
      },
    ],
  };
  const options: ChartOptions <'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        padding: 10,
      },
    },

    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
        },
      },
    },
  };
  return (
    <div className="aapl">
      <Line data={lineChartData} options={options} />
    </div>
  );
}

export function LineChart2() {
  const [chartData, setChartData] = useState([]);

  const FetchChartData = async () => {
    try {
      const token = AuthService.getToken()
      const response = await fetch("/api/stocks/ticker/META",
      {headers: {Authorization: `Bearer ${token}`}}
    );
      
      const data = await response.json();
      console.log(data);
      setChartData(data.results);

      localStorage.setItem("MetaChartData", JSON.stringify(data.results));
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("MetaChartData");
    if (storedData) {
      setChartData(JSON.parse(storedData));
    } else {
      // If there's no data in localStorage, fetch data from the API
      FetchChartData();
    }
    
  }, []);

  //labels for the x-axis to show the date
  // datasets for the y-axis to show the stock price

  const lineChartData = {
    labels: chartData.map((stock: StockDetails) => {
      const date = new Date(stock.t);
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",

        // the labels for the x-axis will show the date
        //convert timestamp to readable date
      });
    }),
    datasets: [
      {
        label: "META 2024 CLOSING PRICE DATA", // the label for the y-axis will show the stock price
        data: chartData.map((stock: StockDetails) => stock.c), //the datasets for the y-axis will show the stock price
        fill: false,
        borderColor: "blue",
        borderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "blue",
        pointHoverBorderColor: "blue",
        pointHoverBorderWidth: 2,
        pointBackgroundColor: "blue",
      },
    ],
  };
  const options: ChartOptions <'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        padding: 10,
      },
    },

    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
        },
      },
    },
  };

  return (
    <div className="Meta">
      <Line data={lineChartData} options={options}/>
    </div>
  );
}

export function LineChart3() {
  const [chartData, setChartData] = useState([]);

  const FetchChartData = async () => {
    try {
      const token = AuthService.getToken() 
      const response = await fetch("/api/stocks/ticker/NVDA",
      {headers: {Authorization: `Bearer ${token}`}}
    );
      
      const data = await response.json();
      console.log(data);
      setChartData(data.results);
      localStorage.setItem("NVDAChartData", JSON.stringify(data.results));
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    const storedData = localStorage.getItem("NVDAChartData");
    if (storedData) {
      setChartData(JSON.parse(storedData));
    } else {
      // If there's no data in localStorage, fetch data from the API
      FetchChartData();
    }
   
  }, []);

  const lineChartData = {
    labels: chartData.map((stock: StockDetails) => {
      const date = new Date(stock.t);
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",

        // the labels for the x-axis will show the date
        //convert timestamp to readable date
      });
    }),
    datasets: [
      {
        label: "NVDA 2024 CLOSING PRICE DATA",
        data: chartData.map((stock: StockDetails) => stock.c),
        fill: false,
        borderColor: "blue",
        borderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "blue",
        pointHoverBorderColor: "blue",
        pointHoverBorderWidth: 2,
        pointBackgroundColor: "blue",
      },
    ],
  };
  const options: ChartOptions <'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        padding: 10,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
        },
      },
    },
  };

  return (
    <div className="NVDA">
      <Line data={lineChartData} options={options} />
    </div>
  );
}
