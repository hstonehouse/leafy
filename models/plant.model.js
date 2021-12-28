const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    plant_id: Number,
    title: String,
    aliases: Array,
    image: String,
    water: String,
    light: String,
    pet_safe: String
});
schema.index({ title: 'text', description: 'text', tags: 'text' });

const Plant = mongoose.model(
    "Plant", // capitalised, singular version of the collection name
    schema
);

Plant.createIndexes();

module.exports = Plant