const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    map: {type: Array}
})

module.exports = mongoose.model('Location', locationSchema)