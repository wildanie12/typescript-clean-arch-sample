import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import ProductService from '../services/product_service'

export default class ProductController {
  constructor(private productService: ProductService) {}

  index: RequestHandler = (req, res) => {
    const { name, location } = req.query
    console.log(`hello ${name} from ${location}`)
    const data = this.productService.list()
    res.status(StatusCodes.OK).json(data)
  }
}
