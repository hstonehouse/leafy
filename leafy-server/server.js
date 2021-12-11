const express = require("express");
const mongoose = require('mongoose');

const config = require("./config");

const app = express();

// Link front-end to back-end
app.use(express.static("./leafy-client/build"));

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mongoose.connect(config.dbConnectionString,connectionParams)
    .then( () => {
        console.log("Connected to database ");
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })