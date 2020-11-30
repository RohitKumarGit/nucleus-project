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
const firebase = require('../middlewares/firebase');
router.get('/tablereserve', firebase.verifyToken, async (req, res) => {
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

router.post('/tablereserve', firebase.verifyToken, async (req, res) => {
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
    restaurant.time_details.forEach((y) => {
      if (y.time_now == req.body.Time) {
        y.vacancy -= Number(req.body.Adults);
      }
    })
    var reserve = await new Table(x);
    await reserve.save();
    await restaurant.save();
    user.forDashboard.tableReserve.push(reserve._id);
    await user.save();
    res.send(reserve);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete('/tablereserve', firebase.verifyToken, async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.body.uid
    });
    var reserve = Table.findOne({
      user_id: user._id
    });
    var r_id = reserve._id;
    reserve.remove();
    var idx = user.forDashboard.tableReserve.indexOf(r_id);
    if (idx > -1) {
      user.splice(idx, 1);
    }
    await user.save();
    res.send(reserve);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;