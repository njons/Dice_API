const express = require("express");
const path = require("path");
const router = express.Router();

// Import handlers
const home = require("./home");
const hello = require("./hello");

// Main routes
router.get("/", home.get);
router.get("/hello", hello.get);

module.exports = router;
