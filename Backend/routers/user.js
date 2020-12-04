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

router.get('/user', async (req, res) => {
  const user = await User.findOne({
    uid: req.query.uid
  });
  res.send(user);
});

router.delete('/checkout', async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.body.uid
    });
    var orders = await Order.find({
      user_id: user._id
    });
    var totalbill = 0;
    for (var i = 0; i < orders.length; i++) {
      totalbill += orders[i].total_bill;
    }
    var bookings = await Booking.find({
      user_id: user._id
    });
    for (var i = 0; i < bookings.length; i++) {
      totalbill += bookings[i].total_bill;
    }
    await user.remove();
    res.send({
      total_bill: totalbill
    });
  } catch (e) {
    res.status(500).send();
  }
})
module.exports = router;