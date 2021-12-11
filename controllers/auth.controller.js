const User = require("../models/user.model")

const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/api/register", (req, res) => {
    const user = new User ({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        plants: []
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
          } else {
            res.send({ message: "User was registered successfully!" });
          }
    });
})

router.post("/api/login", (req, res) => {
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
    
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
            message: "Invalid Password!"
            });
        }

        req.session.email = user.email;

        res.status(200).send({
            id: user._id,
            email: user.email,
            plants: user.plants
        });
    })
})

module.exports = router;