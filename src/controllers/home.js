const fs = require("fs");

const home = (request, response, url) => {
  fs.readFile(
    path.join(__dirname, "..", "public", "index.html"),
    (error, file) => {
      if (error) {
        response.writeHead(500, { "Content-type": "text/html" });
        response.end("<h1>Oops, something went wrong with the server</h1>");
      } else {
        response.writeHead(200, { "Content-type": "text/html" });
        response.end(file);
      }
    }
  );
};

module.exports = home;
