const express = require("express");
// const router = require("./handlers/index");
// Import handlers
const home = require("./routes/home");

// Main routes
router.get("/", home.get);
module.exports = router;
