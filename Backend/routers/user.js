const express = require('express');
const User = require('../models/Users');
const Room = require('../models/Room');
const Booking = require('../models/Bookings');
const Order = require('../models/Order');
const router = new express.Router();
router.post('/signup/setup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({
      user
    });
  } catch (e) {
    console.log(e)
    res.status(400).send(e);
  }
});




module.exports = router;