
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
  icon_url:any;
}
export interface StockNews {
title:string;
summary:string;
url:any; //what else can we use for this? 
authors:string;
time_published:number;
banner_image:any;
}

export interface TopStockGain_Loses{
ticker:string;
price:number;
change_amount:number;
change_percentage:number;
volume:number 
}

class StockApi {
  private baseURL?: string;
  private apiKey?: string;
  private globalBaseURL?: string;
  private globalApiKey?: string;

  constructor() {
    this.baseURL = process.env.API_BASE_URL || "";
    this.apiKey = process.env.API_KEY || "";
    this.globalBaseURL = process.env.SERVICE_G_API_BASE_URL|| "";
    this.globalApiKey = process.env.SERVICE_G_API_KEY || "";
  }

  async getAggregateDataByTicker(ticker: string) {
    try {
      const response = await fetch( // this will provide the historical data of a stock
        `${this.baseURL}/aggs/ticker/${ticker}/range/1/day/2024-01-09/2024-10-10?adjusted=true&sort=asc&apiKey=${this.apiKey}` 
      );
      console.log(response);
      const stock = await response.json();
   
      return stock;
    } catch (err) {
      console.log("Error", err);
      throw err;
    }
  }
  async getStockInfo (ticker:string) { //this will provide more details on the company. Description, logo, market etc
  try {
    const response = await fetch(
      `${this.baseURL}reference/ticker/${ticker}?apiKey=${this.apiKey}`
    );
    console.log(response);
    const stock = await response.json();
    return stock;
    } catch (err){
    console.log('Error',err);
    throw err
    }
  }
 
  async getStockNews(title: string) { // this will provide the most up to date news on a stock 
      try {
        const response = await fetch( //alpha vantage api does not care if the stock is uppercase or lowercase!
          `${this.globalBaseURL}query?function=NEWS_SENTIMENT&tickers=${title}&apikey=${this.globalApiKey}`
        );
        // console.log(response);
        const stock = await response.json();
      
        return stock;
      } catch (err) {
        console.log("Error",err);
        throw err;
      }
    }

    async getFinanceNews() { // this will provide the most up to date news on a stock 
      try {
        const response = await fetch( //alpha vantage api does not care if the stock is uppercase or lowercase!
          `${this.globalBaseURL}query?function=NEWS_SENTIMENT&topics=finance&apikey=${this.globalApiKey}`,
          // {headers: {Authorization: `Bearer ${token}`}}
        );
        console.log(response);
        const stock = await response.json();
      
        return stock;
      } catch (err) {
        console.log("Error",err);
        throw err;
      }
    }
  
    async getTopStockGainAndLosses (){
      try{
        const response = await fetch(
          `${this.globalBaseURL}query?function=TOP_GAINERS_LOSERS&apikey=${this.globalApiKey}`
        );
        const stock = await response.json();
          // console.log(stock);
          // return stock;
        } catch (err) {
          console.log("Error",err);
          throw err;
        }
      }
  
    }

   
  
  



export const stockApi = new StockApi();
// stockApi.getAggregateDataByTicker('AAPL')