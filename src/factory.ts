import { ProductController } from './controllers'
import { ProductRepository } from './repositories'
import ProductService from './services/product_service'

// repositories
export const productRepository = new ProductRepository()

// services
export const productService = new ProductService(productRepository)

// transports
export const productController = new ProductController(productService)
