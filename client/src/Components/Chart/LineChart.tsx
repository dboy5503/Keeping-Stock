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
import { StockDetails } from "../../API/ApiInterface";
import "./LineChartStyle.css";

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
      const response = await fetch("/api/stocks/ticker/AAPL");
      const data = await response.json();
      console.log(data);
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
      const response = await fetch("/api/stocks/ticker/META");
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
    // FetchChartData every 10 minutes
    // const timer = setInterval(() => {
    //   FetchChartData();
    // }, 10 * 60 * 1000); // 10 minutes in milliseconds

    // // Clear the timer when the component unmounts
    // return () => clearInterval(timer);
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
  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: true,
  //   },

  //   scales: {
  //     x: {
  //       title: {
  //         display: true,
  //         text: "Date",
  //       },
  //     },
  //     y: {
  //       title: {
  //         display: true,
  //         text: "Price",
  //       },
  //     },
  //   },
  // };

  return (
    <div className="Meta">
      <Line data={lineChartData} />
    </div>
  );
}

export function LineChart3() {
  const [chartData, setChartData] = useState([]);

  const FetchChartData = async () => {
    try {
      const response = await fetch("/api/stocks/ticker/NVDA");
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
    // FetchChartData every 10 minutes
    // const timer = setInterval(() => {
    //   FetchChartData();
    // }, 10 * 60 * 1000); // 10 minutes in milliseconds

    // // Clear the timer when the component unmounts
    // return () => clearInterval(timer);
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
  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: true,
  //   },

  //   scales: {
  //     x: {
  //       title: {
  //         display: true,
  //         text: "Date",
  //       },
  //     },
  //     y: {
  //       title: {
  //         display: true,
  //         text: "Price",
  //       },
  //     },
  //   },
  // };

  return (
    <div className="NVDA">
      <Line data={lineChartData} />
    </div>
  );
}
