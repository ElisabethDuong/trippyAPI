const mongoose = require("mongoose");
const express = require("express");
const hotelModel = require("./models/hotels");
const restaurantModel = require("./models/restaurants");

mongoose.connect(
  "mongodb://localhost:27017/trippy-API",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database Connected");
  }
);

const port = 8000;
const app = express();

app.listen(port, () => {
  console.log("serveur works");
});
