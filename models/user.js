const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  favorites: { type: Array }
});

module.exports = mongoose.model("User", userSchema);
