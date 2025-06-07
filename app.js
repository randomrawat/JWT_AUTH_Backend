const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const db = require('./Models/db')
const PORT = process.env.PORT
const AuthRouter = require('./Routes/AuthRouter')
const productRouter = require('./Routes/productRouter')

app.use(bodyParser.json())
app.use(cors({
  origin: 'https://jwt-auth-frontend.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
app.use('/auth', AuthRouter)
app.use('/products', productRouter)

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))