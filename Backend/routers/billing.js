const express = require('express');
const Billing = require('../models/Billing');
const User = require('../models/Users');
const router = new express.Router();
const firebase = require('../middlewares/firebase');
router.get('/bills', firebase.verifyToken, async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.uid
    });
    var bill = await Billing.findOne({
      user_id: user._id
    });
    if (!bill) {
      throw new Error('No bills yet');
    } else {
      res.send(bill);
    }
  } catch (e) {
    res.send({
      e
    });
  }
});
module.exports = router;