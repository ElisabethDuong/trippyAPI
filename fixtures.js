const mongoose = require("mongoose");
const hotelModel = require("./models/hotels");
const restaurantModel = require("./models/restaurants");

const hotels = [
  {
    name: "Georges V",
    address: "5 avenue des Champs Elysées",
    city: "Paris",
    country: "France",
    stars: 5, //entre 1 et 5
    hasSpa: true,
    hasPool: false,
    priceCategory: 3, // entre 1 et 3
  },
  {
    name: "Sursum Corda",
    address: "Trasteverde 12",
    city: "Roma",
    country: "Italy",
    stars: 3, //entre 1 et 5
    hasSpa: false,
    hasPool: false,
    priceCategory: 1, // entre 1 et 3
  },

  {
    name: "Sirène",
    address: "34 promenade des Anglais",
    city: "Nice",
    country: "France",
    stars: 4, //entre 1 et 5
    hasSpa: true,
    hasPool: true,
    priceCategory: 2, // entre 1 et 3
  },
];

const restaurants = [
  {
    name: "Mazurka",
    address: "18 avenue de l'Opéra ",
    city: "Paris",
    country: "France",
    stars: 4, // entre 1 et 3
    cuisine: "spécialités franco-polonaises",
    priceCategory: 3, // entre 1 et 3
  },

  {
    name: "Dolce Vita",
    address: "3 bd Montparnase",
    city: "Paris",
    country: "France",
    stars: 3, // entre 1 et 3
    cuisine: "cuisine italienne",
    priceCategory: 2, // entre 1 et 3
  },
  {
    name: "Ichiran",
    address: "Palais de Tokyo",
    city: "Tokyo",
    country: "Japan",
    stars: 3, // entre 1 et 3
    cuisine: "saveurs japonaises",
    priceCategory: 2, // entre 1 et 3
  },
];

mongoose.connect("mongodb://localhost:27017/trippy-API", () => {
  console.log("Database Connected");
});

hotelModel.deleteMany({}).then(() => {
  hotelModel.create(hotels);
});

restaurantModel.deleteMany({}).then(() => {
  restaurantModel.create(restaurants);
});
