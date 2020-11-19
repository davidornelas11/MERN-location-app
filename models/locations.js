const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String}
})

module.exports = mongoose.model('Location', locationSchema)