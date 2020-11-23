const express = require("express");
const locations = express.Router();
const Location = require("../models/locations.js");
const User = require("../models/user.js");
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

// Show unique location
locations.get("/:id", (req, res) => {
      Location.findById(req.params.id, (err, foundLocation) => {
        if (err) {
          res.status(400).json({ error: err.message });
        }
        res.status(200).json(foundLocation);
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
locations.delete('/:id', (req, res) => {
      Location.findByIdAndRemove(req.params.id, (err, deletedLocation) => {
            if (err) {
            res.status(400).json({error: err.message})
            }
      res.status(200).json(deletedLocation)
      })
      
})



module.exports = locations;
