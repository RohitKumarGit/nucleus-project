const express = require('express');
const Buffet = require('../models/Buffet');
const Restaurant = require('../models/Restaurant');
const User = require('../models/Users');
const router = express.Router();
const firebase = require('../middlewares/firebase');
const TableR = require('../models/Table_reserve')
router.get('/allbookings', firebase.verifyToken, async function (req, res) {
  console.log(req.query.user_id)
  try {
    const buffets = await Buffet.find({
      'slots.slot_details.bookedBy.user_id': {
        $in: [req.query.user_id]
      }
    }, "restaurant_id slots.slot_type slots.slot_details.time createdAt")
    const t = await TableR.find({})
    const tables = await TableR.find({
      'user_id': {
        $in: [req.query.user_id]
      }
    })
    res.send({
      buffets,
      tables,
      t
    })
  } catch (error) {
    console.log(error)
    res.send({
      error
    })
  }
})
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
    z
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
        user.forDashboard.buffet.push(buffet._id);
        await user.save();
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
    var user = User.findOne({
      uid: req.body.uid
    });
    var buffet = Buffet.findById({
      _id: req.body.bid
    });
    var buffetType = buffet.slots[req.body.slotType].slot_details[req.body.slotTime];
    var x = buffetType.totalPeople;
    var y = buffetType.bookedBy.findIndex((z) => {
      return z.user_id === req.body.uid;
    });
    //y return the index at which we find the required userID
    var z = buffetType.bookedBy[y];
    x -= z.number;
    buffetType.totalPeople = x;

    var k = user.forDashboard.buffet.indexOf(req.body.bid);
    if (k > -1) {
      user.forDashboard.buffet.splice(k, 1);
    }
    buffetType.bookedBy.splice(y, 1);
    await user.save()
    await buffet.save();
    res.send(buffet);
  } catch (e) {
    res.status(500).send();
  }
});
module.exports = router;