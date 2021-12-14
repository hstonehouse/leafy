const Plant = require("../models/plant.model");

const express = require("express");
const router = express.Router();

router.get("/api/plantsearch", async (req, res) => {
    const searchResult = await Plant.find({aliases: req.query.plant}).exec()
    res.send(searchResult);
})

module.exports = router;