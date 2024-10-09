
import { Router, Request, Response} from "express";
import stockRoutes from './stockRoutes.js'

const router = Router()
router.use('/api/stocks', stockRoutes)

export default router