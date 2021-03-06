const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models');
const Recipe = mongoose.model('Recipe');
const config = require('../config')
const fieldsFilter = {'__v' : 0};
var unirest = require('unirest');

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id +"/information?includeNutrition=false")
  .header("X-Mashape-Key", "gAlLXPZyJsmshAGu1ZMh0jlusuoVp1e9WKZjsnUUFxeSibN4A9")
  .header("Accept", "application/json")
  .end(function (result) {
    res.send(result.body);
  });
});

module.exports = router;
