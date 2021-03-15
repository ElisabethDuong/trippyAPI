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
    await restaurantModel.create({
        name: request.body.name,
        address: request.body.address,
        city: request.body.city,
        country: request.body.country,
        stars: request.body.stars,
        cuisine: request.body.cuisine,
        priceCategory: request.body.priceCategory
    });
    response.send("Restaurant ajouté")
});

app.put("/restaurants/:id", async (request, response) => {
    // console.log(request.query);
    const newName = request.query.newName;
    await restaurantModel
        .updateOne(
            {
                _id: request.params.id,
            },
            {
                name: newName
            },
        )
        .exec();
    response.send("Nom mis à jour")
});

app.delete("/restaurants/:id", async (request, response) => {
    await restaurantModel
        .deleteOne(
            {
                _id: request.params.id
            }),
        response.send("Restaurant supprimé")
});