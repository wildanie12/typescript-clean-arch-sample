import { Router } from 'express'
import { productController } from '../factory'

const router = Router()

// router product
router.get('/', productController.index)

export default router
