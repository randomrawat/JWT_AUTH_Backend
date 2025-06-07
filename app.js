const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const db = require('./Models/db')
const PORT = process.env.PORT || 4000

const AuthRouter = require('./Routes/AuthRouter')
const productRouter = require('./Routes/productRouter')

// 🔄 CORS config (should come before routes)
const corsOptions = {
  origin: 'https://jwt-auth-frontend.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}
app.use(cors(corsOptions))

// ✅ Respond to preflight OPTIONS requests
app.options('*', cors(corsOptions))

// Middleware
app.use(bodyParser.json())

// Routes
app.use('/auth', AuthRouter)
app.use('/products', productRouter)

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
