const express = require("express");
const authentication = express.Router();
const User = require("../models/user.js");
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")

//Create Route
authentication.post("/", async (req, res) => {
  const {username, password} = req.body;

  if(!username || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  User.findOne({username})
  .then(user => {
    if(!user) return res.status(400).json({ msg: 'nonexistent user'});

   bcrypt.compare(password, user.password)
   .then(doesMatch => {
       if(!doesMatch) return res.status(400).json({ msg: 'invalid password'})

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
   })
});
})



module.exports = authentication;