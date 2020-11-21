//user
//restaurant
//people-bifurcate
//time
//duration
const express = require('express');
const router = new express.Router();
const Table = require('../models/Table_reserve');
const User = require('../models/Users');
const Restaurant = require('../models/Restaurant');

router.get('/tablereserve', async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.query.uid
    });
    var reserve = await Table.findOne({
      user_id: user._id
    });
    if (!reserve) {
      throw new Error("No tables reserved yet")
    }
    return res.send(reserve);
  } catch (e) {
    res.send({
      e
    });
  }
});

router.post('/tablereserve', async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.body.uid
    });
    var restaurant = await Restaurant.findOne({
      name: req.body.restaurant_name
    });
    console.log("User_ID", user._id);
    var x = new Object({
      Adults: req.body.Adults,
      Time: req.body.Time,
      restaurant_id: restaurant._id,
      Duration: req.body.Duration,
      user_id: user._id
    });
    var reserve = await new Table(x);
    await reserve.save();
    res.send(reserve);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete('/tablereserve', async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.body.uid
    });
    var reserve = Table.findOneAndDelete({
      user_id: user._id
    });
    res.send(reserve);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;