var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/tripplanner");

var placeSchema = new Schema({
	address: String,
	city: String,
	state: String, //{type: String, uppercse: true, match: /[A-Z]{2}/},
	phone: String,
	location: [Number]
});

var hotelSchema = new Schema({
	name: {type: String, required: true},
	place: [placeSchema],
	num_stars: {type: String, enum: [1,2,3,4,5]},//Meh?
	amenities: String //Meh? Comma delimited what now?
});

var activitySchema = new Schema({
	name: String,
	place: [placeSchema],
	age_range: String
});

var restaurantSchema = new Schema({
	name: String,
	place: [placeSchema],
	cuisine: String, //Meh? Comma delimited what now?
	price: {type: String, enum: [1,2,3,4,5]} //Meh?
});


var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', placeSchema);
var Activity = mongoose.model('Activity', placeSchema);
var Restaurant = mongoose.model('Restaurant', placeSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
};