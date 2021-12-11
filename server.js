const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");

const config = require("./config");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Link front-end to back-end
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

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Leafy." });
    });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});