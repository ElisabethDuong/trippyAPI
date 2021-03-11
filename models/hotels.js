const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  country: String,
  stars: Number, //entre 1 et 5
  hasSpa: Boolean,
  hasPool: Boolean,
  priceCategory: Number, // entre 1 et 3
});
const hotelModel = mongoose.model("hotels", hotelSchema);
module.exports = hotelModel;
