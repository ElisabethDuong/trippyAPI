const mongoose = require("mongoose");
const express = require("express");
const hotelModel = require("./models/hotels");
const restaurantModel = require("./models/restaurants");
const { request } = require("express");
const bodyParser = require("body-parser");

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

app.get("/restaurants", async (request, response) => {
    const restaurants = await restaurantModel.find().lean().exec();
    response.json(restaurants);
});

app.get("/restaurants/:id", async (request, response) => {
    const restaurants = await restaurantModel
        .findOne({
            _id: request.params.id
        })
        .lean()
        .exec()
    response.json(restaurants);
});

app.post("/restaurants", async (request, response) => {
    await restaurantModel.create({ name: request.body.name });
    response.send("Restaurant ajouté")
});

