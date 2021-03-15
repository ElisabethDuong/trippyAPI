const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: Number, // entre 1 et 3
    cuisine: String,
    priceCategory: Number, // entre 1 et 3
    tables: { type: mongoose.Types.ObjectId, ref: "tables" }
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurantModel;