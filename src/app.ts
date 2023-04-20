import express from 'express'
import dotenv from 'dotenv'
import { productRouter } from './routes'
dotenv.config()

const app = express()
const port = parseInt(process.env.PORT || '5000')

app.use('/products', productRouter)
console.log('server starting...')
app.listen(port, () => console.log(`listening at port: ${port}`))
