const express = require('express');
const Buffet = require('../models/Buffet');
const Restaurant = require('../models/Restaurant');
const router = new express.Router();

router.get('/buffet', async (req, res) => {
  try {
    var restaurant = await Restaurant.findOne({
      name: req.body.name
    });
    if (!restaurant) {
      throw new Error();
    }
    var id = restaurant._id;
    var buffet = await Buffet.findOne({
      restaurant_id: id
    });
    res.send(buffet);
  } catch (error) {
    res.send({
      error: "Cannot GET"
    });
  }
});
router.patch('/buffet', async (req, res) => {
  try {
    var restaurant = await Restaurant.findOne({
      name: req.body.name
    });
    if (!restaurant) {
      throw new Error();
    }
    var id = restaurant._id;
    var buffet = await Buffet.findOne({
      restaurant_id: id
    });
    //Enter Your Code Here!
  } catch (e) {
    res.status(500).send({
      error: "Some problem with updates"
    });
  }
});