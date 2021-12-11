const mongoose = require("mongoose");

const User = mongoose.model(
  "User", // capitalised, singular version of the collection name
  new mongoose.Schema({
    email: String,
    password: String,
    plants: Array
  })
);

module.exports = User;