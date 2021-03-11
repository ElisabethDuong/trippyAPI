const mongoose = require('mongoose');
const hotelSchema= new mongoose.Schema({
    name:String,
    addreess:String,
    city:String,
    country:String,
    stars:Number,
    hasSpa:Boolean,
    hasPool:Boolean,
    priceCategory:Number,
});
const hotelModel= mongoose.model("hotels",hotelSchema);
module.exports = hotelModel;