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

// HOTELS

app.get("/hotels", async (request, response) => {
  const hotels = await hotelModel
    .find()
    .lean()
    .exec();
  response.json(hotels);
});

app.get("/hotels/:id", async (request, response) => {
  const hotelById = await hotelModel
    .findOne({
      _id: request.params.id,
    })
    .lean()
    .exec();
  response.json(hotelById);
});

app.post("/hotels", async (request, response) => {
  const hotelAdded = await hotelModel.create(
    {
      name: request.body.name
    }
  );
  response.json(hotelAdded);
});

app.put("/hotels/:id", async (request, response) => {
  const newName = request.query.newName;
  const hotelUpdated = await hotelModel.updateOne(
    {
      _id: request.params.id
    },
    {
      name: newName
    }
  );
  hotel.name;
  response.json(hotelUpdated);
});

app.delete("/hotels/:id", async (request, response) => {
  const hotelDeleted = await hotelModel.deleteOne(
    {
      _id: request.params.id,
    }
  );
  response.json(hotelDeleted);
});

// RESTAURANTS

app.get("/restaurants", async (request, response) => {
  const restaurants = await restaurantModel
    .find()
    .lean()
    .exec();
  response.json(restaurants);
});

app.get("/restaurants/:id", async (request, response) => {
  const restaurantById = await restaurantModel
    .findOne({
      _id: request.params.id,
    })
    .lean()
    .exec();
  response.json(restaurantById);
});

app.post("/restaurants", async (request, response) => {
  const restaurantAdded = await restaurantModel.create(
    {
      name: request.body.name,
      address: request.body.address,
      city: request.body.city,
      country: request.body.country,
      stars: request.body.stars,
      cuisine: request.body.cuisine,
      priceCategory: request.body.priceCategory,
    }
  );
  response.json(restaurantAdded);
});

app.put("/restaurants/:id", async (request, response) => {
  // console.log(request.query);
  const newName = request.query.newName;
  const restaurantUpdated = await restaurantModel
    .updateOne(
      {
        _id: request.params.id,
      },
      {
        name: newName,
      }
    )
    .exec();
  response.json(restaurantUpdated);
});

app.delete("/restaurants/:id", async (request, response) => {
  const restaurantDeleted = await restaurantModel.deleteOne(
    {
      _id: request.params.id,
    }
  )
  response.json(restaurantDeleted);
});
