const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017' + 'MERN-location-app'
app.use(express.urlencoded({ extended: false }))
app.listen(PORT, () => {
    'listening on port' + PORT
})