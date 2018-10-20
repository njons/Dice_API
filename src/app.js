// require express
const express = require("express");
const bodyParser = require("body-parser");
// const router = require("./handlers/index");
const path = require("path");

// set up server
const app = express();

// tell express to use the routes in the index.js file
const router = express.Router();
// app.use(router);
// activate
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "public")));

module.exports = app;
