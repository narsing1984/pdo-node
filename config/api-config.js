const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

//Routes
const settingsRouter = require("../app/routes/Territories/settings.route");


app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//Static Folder
app.use(express.static(path.join(__dirname, "public")));

//API Routes
app.use("/settings", settingsRouter);

var ApiConfig = {
  app: app
};

module.exports = ApiConfig;