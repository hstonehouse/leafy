const mongoose = require("mongoose");

const Plant = mongoose.model(
    "Plant", // capitalised, singular version of the collection name
    new mongoose.Schema({
        plant_id: Number,
        title: String,
        aliases: Array,
        image: String,
        water: String,
        light: String,
        pet_safe: String
    })
)

module.exports = Plant