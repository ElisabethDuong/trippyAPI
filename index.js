const mongoose = require("mongoose");
const express = require("express");
const hotelModel = require("./models/hotels");
const restaurantModel = require("./models/restaurants");
const bodyParser = require('body-parser');


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

app.use(bodyParser.json());

app.get("/hotels", async (request, response) => {
  const hotels = await hotelModel.find().lean().exec();
  response.json(hotels);
});

app.get("/hotels/:id", async (request, response) => {
  const hotels = await hotelModel
    .findOne({
      _id: request.params.id,
    })
    .lean()
    .exec();
  response.json(hotels);
});

app.post('/hotels', async (request, response) =>{
 await hotelModel.create({name:request.body.name});
 response.send("hotêl ajouté");
});

app.put('/hotels/:id', (request, response) => {
 const hotels = await hotelModel
    .updateOne({
     _id: request.params.id
    })
  hotels
  response.send("hotêl mis à jour");
});

app.delete('/hotels/:id', (request, response) =>{
});
