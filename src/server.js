const http = require("http");
const router = require("./routes");
const server = http.createServer(router);
const port = 3000;

server.listen(port, () => {
  console.log(`server is up and runnig on ${port}`);
});
