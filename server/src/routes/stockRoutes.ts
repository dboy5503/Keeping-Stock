import { Router, Request, Response} from "express";
import { stockApi } from "../api/stockApi.js";

// Full pathname = /api/stocks/ticker/META

const router = Router()

router.get('/ticker/:ticker_value', async (req:Request, res:Response) => {

    const results = await stockApi.getAggregateDataByTicker(req.params.ticker_value)
    res.json(results)


})
router.get('/stockInfo/:ticker_value', async (req:Request, res:Response) => {

    const results = await stockApi.getStockInfo(req.params.ticker_value)
    res.json(results)
})

router.get('/news/:title_value', async (req:Request, res:Response) => {

    const results = await stockApi.getStockNews(req.params.title)
    res.json(results)
})

router.get('/topGainAndLoss', async (_req:Request, res:Response) => {

    const results = await stockApi.getTopStockGainAndLosses()
    res.json(results)
})



export default router 

