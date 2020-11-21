const express = require('express');
const User = require('../models/Users');
const Room = require('../models/Room');
const Booking = require('../models/Bookings');
const router = new express.Router();
router.post('/signup/setup', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({
      user
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/user', async (req, res) => {
  const user = await User.findOne({
    uid: req.uid
  });
  res.send(user);
});

router.delete('/checkout', async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.uid
    });
    await user.remove();
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
})
module.exports = router;