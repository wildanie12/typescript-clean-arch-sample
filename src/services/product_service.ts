import { ProductRepositoryInterface } from '../repositories/interfaces'
import { Product } from '../entities/product'

export default class ProductService {
  private productRepository: ProductRepositoryInterface

  constructor(productRepository: ProductRepositoryInterface) {
    this.productRepository = productRepository
  }

  list = (): Product[] => {
    const data = this.productRepository.findAll(10, 0)

    return data
  }
}
