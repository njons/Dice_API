// require express
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const handlers = require("./handlers/index");
// set up new instance of express
const app = express();

// serve static files from the public folder at the root
app.use(express.static(path.join(__dirname, "..", "public")));

// activate bodyParser to enable transfer of json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(handlers);

module.exports = app;
