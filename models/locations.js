const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  favorites: { type: Boolean },
});

module.exports = mongoose.model("Location", locationSchema);
