const express = require('express');
const Booking = require('../models/Bookings');
const Room = require('../models/Room');
const User = require('../models/Users');
const router = new express.Router();
const firebase = require('../middlewares/firebase');
//Gets all the bookings made by an user and returns an array.
router.get('/booking', firebase.verifyToken, async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.uid
    });
    var booking = await Booking.find({
      user_id: user._id,
    });
    res.send(booking);
  } catch (e) {
    res.send(e);
  }
});

//Creates a new booking
//Make it according to an array
router.post('/booking', firebase.verifyToken, async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.uid
    });
    var price = 0;
    var booking = new Booking(req.body);
    booking[user_id] = user._id;
    var isvalid = true;
    var i = 0;
    for (i = 0; i < req.body.room.size(); i++) {
      var x = req.body.room[i];
      var y = await Room.findOne({
        number: x
      });
      if (!y[vacant]) {
        isvalid = false;
        break;
      }
    }
    if (!isvalid) {
      throw new Error('Invalid Room!');
    } else {
      for (i = 0; i < req.body.room.size(); i++) {
        var x = req.body.room[i];
        var y = Room.findOne({
          number: x
        });
        price += y[price] * (req.body.check_out - req.body.checkin_date) / (1000 * 60 * 60 * 24);
        y[vacant] = false;
        await y.save();
      }
    }
    booking[total_bill] += price;
    await booking.save();
    res.send(booking);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;