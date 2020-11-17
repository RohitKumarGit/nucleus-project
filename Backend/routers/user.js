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
      user,
      uid
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.comparePassword(req.body.email, req.body.password);
    res.send({
      user
    });
  } catch (e) {
    res.status(400).send();
  }
});

router.post('/logout', async (req, res) => {
  try {
    const user = User.findOne({
      uid: req.uid
    });
    user.uid = "";
    await user.save();
    res.status(200).send();
  } catch (e) {
    res.status(400).send();
  }
})

router.get('/user', async (req, res) => {
  res.send(req.user);
});

router.patch('/editprofile', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['password']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  if (!isValidOperation) {
    return res.status(400).send({
      error: 'Invalid updates!'
    })
  }
  try {
    var user = await User.findOne({
      uid: req.uid
    });
    updates.forEach((update) => user[update] = req.body[update])
    await user.save()
    res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
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