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
	num_stars: {type: Number, min: 1, max: 5},//Meh?
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
	price: {type: Number, min: 1, max: 5} //Meh?
});


var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
};