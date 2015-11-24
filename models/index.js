var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placeSchema = new Schema({
	address: String,
	city: String,
	state: String,
	phone: String,
	location: [Number]
})

var hotelSchema = new Schema({
	name: String,
	place: [placeSchema],
	num_stars: {type: String, enum: [1,2,3,4,5]},//Meh?
	amenities: String //Meh? Comma delimited what now?
})

var activitySchema = new Schema({
	name: String,
	place: [placeSchema],
	age_range: String
})

var restaurantSchema = new Schema({
	name: String,
	place: [placeSchema],
	cuisine: String, //Meh? Comma delimited what now?
	price: {type: String, enum: [1,2,3,4,5]} //Meh?
})



