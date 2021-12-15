const Plant = require("../models/plant.model");
const User = require("../models/user.model");
const { ObjectId } = require('mongodb');

const express = require("express");
const router = express.Router();

router.get("/api/plantsearch", async (req, res) => {
    const searchResult = await Plant.find({aliases: req.query.plant}).exec();
    res.send(searchResult);
})

router.get("/api/plantsearch/:id", async (req, res) => {
    const plantData = await Plant.find({plant_id: req.params.id}).exec();
    console.log(req.session._id)
    res.send(plantData);
})

router.post("/api/plantsearch/:id", async (req, res) => {
    User.findOneAndUpdate({_id: ObjectId(req.session._id)}, {$push: {plants: req.params.id}}).exec((err) => {
        if (err) {
            res.status(500).send({ message: err });
        } else {
            res.status(200).send({ message: "Success!"});
        }
    })
})

module.exports = router;