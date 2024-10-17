import { Router, Request, Response } from "express";
import { stockApi } from "../api/stockApi.js";

// Full pathname = /api/stocks/ticker/META

const router = Router()

router.get('/ticker/:ticker_value', async (req: Request, res: Response) => {

    const results = await stockApi.getAggregateDataByTicker(req.params.ticker_value)
    res.json(results)


})
router.get('/stockInfo/:ticker_value', async (req: Request, res: Response) => {

    const results = await stockApi.getStockInfo(req.params.ticker_value)
    res.json(results)
})

router.get('/news/:title_value', async (req: Request, res: Response) => {

    const results = await stockApi.getStockNews(req.params.title_value)
    res.json(results)
})

router.get('/topGainAndLoss', async (_req: Request, res: Response) => {

    const results = await stockApi.getTopStockGainAndLosses()
    res.json(results)
})
router.get('/financeNews', async (_req: Request, res: Response) => {
    const results = await stockApi.getFinanceNews()
    res.json(results)
})
router.get('/search', async (req: Request, res: Response) => {
    try {
        console.log(req.query.search)
        const results = await stockApi.stockSearch(req.query.search || '')
        res.json(results)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})





export default router

