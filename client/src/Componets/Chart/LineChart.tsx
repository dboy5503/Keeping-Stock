// create a chart that will render the stock data
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { StockDetails } from "../../API/ApiInterface";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip
);

export default function LineChart() {
  const [chartData, setChartData] = useState([]);

  const FetchChartData = async () => {
    try {
      const response = await fetch("/api/stocks/ticker/AAPL");
      const data = await response.json();
      console.log(data);
      setChartData(data.results);
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    FetchChartData();
  }, []);

  //labels for the x-axis to show the date
  // datasets for the y-axis to show the stock price

  const lineChartData = {
    labels: chartData.map((stock: StockDetails) => stock.t), // the labels for the x-axis will show the date
    datasets: [
      {
        label: "Close Price", // the label for the y-axis will show the stock price
        data: chartData.map((stock: StockDetails) => stock.c), //the datasets for the y-axis will show the stock price
        fill: false,
        borderColor: "rgba(75, 192, 192, 1) solid 50",
      },
    ],
  };
  return (
    <div className="Aapl">
      <Line data={lineChartData} width={500} height={100} />
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
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    FetchChartData();
  }, []);

  //labels for the x-axis to show the date
  // datasets for the y-axis to show the stock price

  const lineChartData = {
    labels: chartData.map((stock: StockDetails) => stock.t), // the labels for the x-axis will show the date
    datasets: [
      {
        label: "Close Price", // the label for the y-axis will show the stock price
        data: chartData.map((stock: StockDetails) => stock.c), //the datasets for the y-axis will show the stock price
        fill: false,
        borderColor: "rgba(75, 192, 192, 1) solid 50",
      },
    ],
  };

  return (
    <div className="Meta">
      <Line data={lineChartData} width={500} height={100} />
    </div>
  );
}

export function LineChart3() {
  const [chartData, setChartData] = useState([]);

  const FetchChartData = async () => {
    try {
      const response = await fetch("/api/stocks/ticker/TSLA");
      const data = await response.json();
      console.log(data);
      setChartData(data.results);
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    FetchChartData();
  }, []);

  const lineChartData = {
    labels: chartData.map((stock: StockDetails) => stock.t),
    datasets: [
      {
        label: "Close Price",
        data: chartData.map((stock: StockDetails) => stock.c),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1) solid 50",
      },
    ],
  };

  return (
    <div className="TSLA">
      <Line data={lineChartData} width={500} height={100} />
    </div>
  );
}

