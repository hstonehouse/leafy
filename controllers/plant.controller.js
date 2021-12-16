const Plant = require("../models/plant.model");
const User = require("../models/user.model");
const { ObjectId } = require('mongodb');

const express = require("express");
const router = express.Router();

// search for a plant
router.get("/api/plantsearch", async (req, res) => {
    if (!req.session._id) {
        return res.status(401).send();
    }
    const searchResult = await Plant.find({aliases: req.query.plant}).exec();
    if (searchResult.length === 0) {
        return res.status(404).send();
    } else {
        res.send(searchResult);
    }
})

// retrieve information about that plant
router.get("/api/plantsearch/:id", async (req, res) => {
    if (!req.session._id) {
        return res.status(401).send();
    }
    const plantData = await Plant.find({plant_id: req.params.id}).exec();
    console.log(req.session._id)
    res.send(plantData);
})

// add plant to user's list of plants
router.post("/api/plantsearch/:id", async (req, res) => {
    if (!req.session._id) {
        return res.status(401).send();
    }
    User.findOneAndUpdate({_id: ObjectId(req.session._id)}, {$push: {plants: req.params.id}}).exec((err) => {
        if (err) {
            res.status(500).send({ message: err });
        } else {
            res.status(200).send({ message: "Success!"});
        }
    })
})

module.exports = router;