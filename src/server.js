const app = require("./app.js");

const port = process.env.PORT || 3000;

app.listen(app.get("port"), () => {
  console.log(`Server is up an drunning on port ${port}`);
});
