const express = require("express");
const locations = express.Router();

const Location = require("../models/locations.js");


const Location = require('../models/locations.js');
const User = require('../models/user.js')
//Routes

//Index Route
locations.get("/", (req, res) => {
  Location.find({}, (err, foundLocations) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundLocations);
  });
});

//Create Route
locations.post("/", async (req, res) => {
  Location.create(req.body, (error, createdLocation) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(createdLocation);
  });
});

//Update Route
locations.put("/:id", (req, res) => {
  Location.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedLocation) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedLocation);
    }
  );
});

//Delete Route

locations.delete("/:id", (req, res) => {
  Location.findByIdAndRemove(req.params.id, (err, deletedLocation) => {
    if (err) res.status(400).json({ error: err.message });
  });
  res.status(200).json(deletedLocation);
});

module.exports = locations;

locations.delete('/:id', (req, res) => {
      Location.findByIdAndRemove(req.params.id, (err, deletedLocation) => {
            if (err)
            res.status(400).json({error: err.message})
      })
      res.status(200).json(deletedLocation)
})


///////////////////////////
// create, post, delete and update user
//////////////////////////

//Create Route
locations.post('/users', async (req, res) => {
      User.create(req.body, (error, createdLocation) => {
            if (error) {
                  res.status(400).json({ error: error.message })
            }
            res.status(200).json(createdLocation)
      })
})

//Update Route
locations.put('/users/:id', (req, res) => {
      User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLocation) => {
            if (err) {
                  res.status(400).json({ error: err.message})
            }
            res.status(200).json(updatedLocation)
      })
})


//Delete Route
locations.delete('/users/:id', (req, res) => {
      User.findByIdAndRemove(req.params.id, (err, deletedLocation) => {
            if (err)
            res.status(400).json({error: err.message})
      })
      res.status(200).json(deletedLocation)
})


module.exports = locations

