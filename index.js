const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);
