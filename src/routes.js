const request = require("request");

const router = (request,
response => {
  console.log("this is the url:", request.url);
});

module.exports = router;
