const request = require("request");
// const home = require("./handlers/home");

const router = (request,
response => {
  const url = request.url;
  console.log("this is the url:", request.url);
  if (url === "/") {
    home();
  }
});

module.exports = router;
