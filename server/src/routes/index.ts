
import { Router, Request, Response} from 'express';
import stockRoutes from './stockRoutes.js'
import { userRoutes } from './api/user-routes.js'
import { authenticateToken } from '../middleware/auth.js'

const router = Router()
router.use('/users', userRoutes)
router.use('/api/stocks',authenticateToken, stockRoutes)

export default router