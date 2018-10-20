const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const router = require("./controllers/routes");
// set up server
const app = express();
const port = process.env.PORT || 3000;

app.set("port", port);
app.set("views", path.join(__dirname, "index.html"));

//routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(router);

module.exports = app;
