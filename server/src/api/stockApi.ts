
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

export interface StockDetails {
  // getting stock historical price from Jan 02 2024 to Oct 04 2024
  t: number;
  c: number;
  o: number;
  h: number;
  l: number;
  v: number;
  vw: number;
}
export interface StockInfo {
  name: string;
  description: string;
  market_cap: number;
  ticker: string;
  market: string;
}
export interface StockNews {
  name: string;
  title: string;
  author: string;
  published: string | number;
  article_url: string | number;
  ticker: string;
  id: number;
}

class StockApi {
  private baseURL?: string;
  private apiKey?: string;

  constructor() {
    this.baseURL = process.env.API_BASE_URL || "";
    this.apiKey = process.env.API_KEY || "";
  }

  async getAggregateDataByTicker(ticker: string) {
    try {
      const response = await fetch(
        `${this.baseURL}/aggs/ticker/${ticker}/range/1/day/2024-01-09/2024-10-05?adjusted=true&sort=asc&limit=5000&apiKey=${this.apiKey}`
      );
      const stock = await response.json();
      console.log(stock);
      // return stock;
    } catch (err) {
      console.log("Error", err);
    }
  }
}

export const stockApi = new StockApi();
stockApi.getAggregateDataByTicker('AAPL')