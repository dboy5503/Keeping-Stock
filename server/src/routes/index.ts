
import { Router } from 'express';
import stockRoutes from './stockRoutes.js'

import { authenticateToken } from '../middleware/auth.js'
import authRoutes from './auth-routes.js'
import { userRoutes } from './user-routes.js'



const router = Router()
router.use('/users', userRoutes)
router.use('/api/stocks', authenticateToken, stockRoutes)
router.use('/auth', authRoutes)

export default router

