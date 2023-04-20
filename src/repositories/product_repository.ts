import { Product } from '../entities/product'
import { ProductRepositoryInterface } from './interfaces'

export default class ProductRepository implements ProductRepositoryInterface {
  private products: Product[]

  constructor() {
    this.products = [
      {
        stock: 12,
        name: 'Mouse',
        category: 'computer hardware',
        description: 'a something to control ur pc',
        id: 1
      }
    ]
  }

  findAll = (limit: number, offset: number): Product[] => {
    return this.products
  }
}
