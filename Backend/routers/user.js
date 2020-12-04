const express = require('express');
const User = require('../models/Users');
const Room = require('../models/Room');
const Booking = require('../models/Bookings');
const Order = require('../models/Order');
const Billing = require('../models/Billing');
const router = new express.Router();
router.post('/signup/setup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const billing = new Billing({
      user_id: user._id
    });
    await billing.save();
    res.status(201).send({
      user
    });
  } catch (e) {
    res.status(400).send(e);
  }
});




module.exports = router;