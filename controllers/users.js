const express = require('express');
const users = express.Router();
const User = require('../models/user.js')


//Create Route
users.post('/', async (req, res) => {
    User.create(req.body, (error, createdLocation) => {
          if (error) {
                res.status(400).json({ error: error.message })
          }
          res.status(200).json(createdLocation)
    })
})

//Update Route
users.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLocation) => {
          if (err) {
                res.status(400).json({ error: err.message})
          }
          res.status(200).json(updatedLocation)
    })
})


//Delete Route
users.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, deletedLocation) => {
          if (err)
          res.status(400).json({error: err.message})
    })
    res.status(200).json(deletedLocation)
})


module.exports = users