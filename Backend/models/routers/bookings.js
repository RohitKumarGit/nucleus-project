const express = require('express');
const Booking = require('../Bookings');
const Room = require('../Room');
const router = new express.Router();

//Gets all the bookings made by an user and returns an array.
router.get('/booking', async (req, res) => {
  try {
    var booking = await Booking.find({
      user_id: req.user._id,
    });
    res.send(booking);
  } catch (e) {
    res.send(e);
  }
});

//Creates a new booking
router.post('/booking', async (req, res) => {
  try {
    var price = 0;
    var booking = new Booking(req.body);
    booking[user_id] = req.user._id;
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

router.patch('/booking', async (req, res) => {

});

router.delete('/booking', async (req, res) => {

});

module.exports = router;