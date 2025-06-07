const mongoose = require('mongoose')
require('dotenv').config()
const mongo_url = process.env.MONGO_CONN

const db = mongoose.connect(mongo_url)
.then(()=>{
    console.log('MongoDB Connected...')
})
.catch((err)=>{
    console.log('MongoDB connection Error: ', err)

})

module.exports = db
