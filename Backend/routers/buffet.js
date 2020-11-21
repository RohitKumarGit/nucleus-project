const express = require('express');
const Buffet = require('../models/Buffet');
const Restaurant = require('../models/Restaurant');
const User = require('../models/Users');
const router = express.Router();
const firebase = require('../middlewares/firebase');
router.get('/buffet', firebase.verifyToken, async (req, res) => {
  try {

    var restaurant = await Restaurant.findOne({
      name: req.query.name
    });

    if (!restaurant) {
      throw new Error();
    }
    var id = restaurant._id;
    console.log(id)
    var buffet = await Buffet.findOne({
      restaurant_id: id
    });
    console.log(buffet)
    res.send(buffet);
  } catch (error) {
    console.log(error)
    res.send({
      error: "Cannot GET"
    });
  }
});

router.post('/buffet', firebase.verifyToken, async (req, res) => {
  try {

    var user = await User.findOne({
      uid: req.body.uid
    });
    var restaurant = await Restaurant.findOne({
      name: req.body.name
    });
    if (!restaurant) {
      throw new Error();
    }
    var id = restaurant._id;
    var buffet = await Buffet.findOne({
      restaurant_id: id
    });
    //0 for 1st slot 1 for 2nd and 2 for 3rd --> slotTime
    var buffetType = buffet.slots[req.body.slotType].slot_details[req.body.slotTime];

    if (buffetType.isAvailable) {
      var x = req.body.number;
      var y = buffetType.totalPeople;
      if (Number(y) + Number(x) <= Number(buffetType.Limit)) {

        buffetType.bookedBy.push({
          user_id: user._id,
          number: req.body.number
        });
        if (Number(y) + Number(x) === Number(buffetType.Limit)) {
          buffetType.isAvailable = false;
        }
        buffetType.totalPeople += Number(x);
        await buffet.save();
      }
      res.send(buffet);
    } else {
      throw new Error('Slot Full');
    }

  } catch (e) {
    console.log(e);;
  }
});


//Slot type
//Slot Time
router.patch('/buffet/reset', firebase.verifyToken, async (req, res) => {
  try {
    var buffets = await Buffet.find({});
    buffets.foreach(async (buffet) => {
      var buffetType = buffet.slots[req.body.slotType].slot_details[req.body.slotTime];
      buffetType.totalPeople = 0;
      buffetType.bookedBy = [];
      await buffet.save();
    });
    res.status().send()
  } catch (e) {
    res.status(500).send();
  }
});


//User Id
//Buffet Id
//Slot Type
//Slot Time
router.patch('/buffet/cancel', firebase.verifyToken, async (req, res) => {
  try {
    var buffet = Buffet.findById({
      _id: req.body.bid
    });
    var buffetType = buffet.slots[req.body.slotType].slot_details[req.body.slotTime];
    var x = buffetType.totalPeople;
    var y = buffetType.bookedBy.findIndex((z) => {
      return z.user_id === req.body.uid;
    });
    var z = buffetType.bookedBy[y];
    x -= z.number;
    buffetType.totalPeople = x;
    await buffet.save();
    res.send(buffet);
  } catch (e) {
    res.status(500).send();
  }
});
module.exports = router;