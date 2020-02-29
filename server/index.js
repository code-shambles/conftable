const express = require("express");
const app = express();

var mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1:27017/conftable?gssapiServiceName=mongodb";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8789, () => {
  console.log("Example app listening on port 8789!");
});
