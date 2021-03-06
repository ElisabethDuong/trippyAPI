const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    people: Number, 
    price: Number, 
    hasBathroom: Boolean
});

const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel;