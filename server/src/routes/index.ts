
import { Router} from 'express';
import stockRoutes from './stockRoutes.js'
import { userRoutes } from './api/user-routes.js'
import { authenticateToken } from '../middleware/auth.js'
import authRoutes from './auth-routes.js'

const router = Router()
router.use('/users', userRoutes)
router.use('/api/stocks',authenticateToken, stockRoutes)
router.use('/auth', authRoutes)

export default router