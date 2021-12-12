const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const cors = require("cors");

const config = require("./config");
const authController = require("./controllers/auth.controller");

const app = express();
const expressSession = require("express-session"); // Express library to handle sessions

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
    expressSession({
      secret: process.env.EXPRESS_SESSION_SECRET_KEY, // Reads the secret key
    })
);

app.use(authController);

//Link front-end to back-end
app.use(express.static("./leafy-client/build"));
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, './leafy-client/build/')});
  });

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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});