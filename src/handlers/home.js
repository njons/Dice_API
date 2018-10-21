// home.get = (req, res) => {
//   res.send("this is homepage");
// };

exports.get = (req, res) => {
  console.log("req:", req);
  console.log("res:", res);
  res.send("this is hello!");
};
