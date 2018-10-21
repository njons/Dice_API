// const fs = require("fs");
// const express = require("express");

// tell express to use the routes in the index.js file
// const router = express.Router();

// hello.get = (req, res) => {
//   res.send("Hello World!");
// };

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

exports.get = (req, res) => {
  console.log("req:", req);
  console.log("res:", res);
  res.send("Hello World!");
};

// module.exports = hello;
