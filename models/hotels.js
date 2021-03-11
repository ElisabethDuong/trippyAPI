const mongoose = require('mongoose');
const hotelsSchema= new mongoose.Schema({
    name:String,
    addreess:String,
    city:String,
    country:String,
    stars:Number,
    hasSpa:Boolean,
    hasPool:Boolean,
    priceCategory:Number,
});
const hotelsModel= mongoose.model("hotels,hotelsSchema");
module.exports = hotelsModel;