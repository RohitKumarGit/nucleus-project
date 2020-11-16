const express = require('express');
const Booking = require('../Bookings');
const Bookings = require('../Bookings');
const Room = require('../Room');
const router = new express.Router();

//Gets all the bookings made by an user and returns an array.
router.get('/booking', async (req, res) => {
  try {
    var booking = await Bookings.find({
      user_id: req.user._id,
    })
    res.send(booking);
  } catch (e) {
    res.send(e);
  }
});

//Get a particular booking after checking the User ID and room Number
router.get('/booking/roomnumber', async (req, res) => {
  try {
    var booking = await Bookings.find({
      user_id: req.user._id,
      room_number: req.body.room_number
    })
    res.send(booking);
  } catch (e) {
    res.send(e);
  }
});

//Creates a new booking
router.post('/booking', async (req, res) => {
  try {
    var booking = new Bookings(req.body);
    booking[user_id] = req.user._id;

  } catch (e) {
    res.status(400).send();
  }
});

router.patch('/booking', async (req, res) => {

});

router.delete('/booking', async (req, res) => {

});

module.exports = router;