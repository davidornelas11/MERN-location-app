const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const app = express()
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017' + 'MERN-location-app'
app.use(express.urlencoded({ extended: false }))


//middleware
app.use(express.json())

// Database Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + 'is Mongod not running?'))
mongoose.connection.on('disconnected', () =>
console.log('mongo disconnected'))

// Database Connection Successful
mongoose.connect('mongodb://localhost:27017/mencrud', { userNewUrlParser: true})
mongoose.connection.once('open', ()=> {
    console.log('connected to mongoose!')
})

//Controllers and Routes
const locationsController = require('./controllers/locations.js')
app.use('/locations', locationsController)


app.listen(PORT, () => {
    console.log('listening on port' + PORT)
})