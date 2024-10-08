

 export interface StockInfo  {

name: string;
description: string;
market_cap: number;
ticker:string;

}




export interface StockDetails{
    // getting stock historical price 
t:number;
c:number;
o:number;
h:number;
l:number;
v:number;
vw:number; 




    
}



export interface StockNews{

    name: string;
    title:string;
    author:string;
    published: string | number;
    article_url: string |number;
    ticker: string
    id: number 

    
}