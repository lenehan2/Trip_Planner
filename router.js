var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var models = require('./models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;

module.exports = router;

router.get("/", function(req, res){
  var myObj = {};

  Hotel.find().exec().then(function(hotels){
    myObj.hotels = hotels;
    
  }).then(function(){
    return Restaurant.find(); //exec??
  }).then(function(restaurants){
    myObj.restaurants = restaurants;
    
  }).then(function(){
    return Activity.find();
  }).then(function(activities){
    myObj.activities = activities;
    
  }).then(function(){
    return Place.find();
  }).then(function(places){
    myObj.places = places;
    
  }).then(function(){
    res.render("index", myObj);
  });
});