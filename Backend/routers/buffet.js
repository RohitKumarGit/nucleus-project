const express = require('express');
const Buffet = require('../models/Buffet');
const Slot = require('../models/BuffetSlot');
const Billing = require('../models/Billing');
const Order = require('../models/Order')
const Restaurant = require('../models/Restaurant');
const User = require('../models/Users');
const router = express.Router();
const firebase = require('../middlewares/firebase');
const TableR = require('../models/Table_reserve')
router.get('/allbookings', async function (req, res) {
  console.log("user", req.query.uid)
  const user = await User.findOne({
    uid: req.query.uid
  })
  console.log(user._id)
  try {
    const buffets = await Buffet.find({
      user_id: user._id
    }).populate('restaurant_id');
    const tables = await TableR.find({
      'user_id': {
        $in: [user._id]
      }
    }).populate('restaurant_id')
    const orders = await Order.find({
      "user_id": {
        $in: [user._id]
      }
    }).populate("restaurant_id", "name")
    res.send({
      buffets,
      tables,
      orders
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
    var slots = await Slot.find({
      restaurant_id: restaurant._id
    });
    res.send(slots);
  } catch (error) {
    res.send(error);
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
    var slot = await Slot.findOne({
      restaurant_id: restaurant._id,
      slotType: req.body.slotType,
      time: req.body.slotTime
    });
    var people = req.body.number;
    slot.currentCapacity += people;
    var buffet = new Buffet({
      user_id: user._id,
      restaurant_id: restaurant._id,
      slot_id: slot._id,
      people: req.body.number
    });
    var billing = new Billing({
      user_id: user._id,
      buffet_id: buffet._id,
      totalBill: Number(req.body.number) * 500
    });
    await billing.save();
    await buffet.save();
    await slot.save();
    res.send(buffet);
  } catch (error) {
    res.send(error);
  }
});

router.post('/buffetcancel', firebase.verifyToken, async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.body.uid
    });
    var buffetid = req.body.bid;
    var buffet = await Buffet.findOne({
      _id: buffetid
    });
    var people = buffet.people;
    var slotid = buffet.slot_id;
    var slot = await Slot.findOne({
      _id: slotid
    });
    slot.currentCapacity -= people;
    var billing = await Billing.findOne({
      user_id: user._id,
      buffet_id: buffetid,
    });
    await billing.remove();
    await slot.save();
    await buffet.remove();
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;