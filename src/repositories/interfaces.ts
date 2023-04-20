import { Product } from '../entities/product'

interface ProductRepositoryInterface {
  findAll(limit: number, offset: number): Product[]
}

export { ProductRepositoryInterface }
