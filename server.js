const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: './config/config.env' });

// parse requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const mongoose = require('mongoose');
const api = require("./routes/route"); 
const connectDB = require('./config/database');


app.use("/api", api);


// DB connection
connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is listening on port 3000");
});