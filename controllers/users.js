const express = require("express");
const users = express.Router();
const User = require("../models/user.js");
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")

//Create Route
users.post("/", async (req, res) => {
  const {username, password} = req.body;

  if(!username || !password) {
    return res.status(400).json({ msg: 'Please complete all fields' });
  }

  User.findOne({username})
  .then(user => {
    if(user) return res.status(400).json({ msg: 'User exists'});

    const newUser = new User({
      username,
      password
    });

    bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save()
      .then(user => {
        jwt.sign(
          {id: user.id},
          config.get('jwtSecret'),
          (err, token) => {
            if(err) throw err;
            res.json({
              token,
                user: {
                id: user.id,
                username: user.username
              }
            });
          }
        )
      });
    });
  });
});
})



module.exports = users;
