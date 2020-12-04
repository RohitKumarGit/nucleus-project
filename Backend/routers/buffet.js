const express = require('express');
const Buffet = require('../models/Buffet');
const Billing = require('../models/Billing');
const Restaurant = require('../models/Restaurant');
const User = require('../models/Users');
const router = express.Router();
const firebase = require('../middlewares/firebase');
const TableR = require('../models/Table_reserve')
router.get('/allbookings', firebase.verifyToken, async function (req, res) {
  console.log("user", req.query.uid)
  const user = await User.findOne({
    uid: req.query.uid
  })
  try {
    const buffets = await Buffet.find({
      'slots.slot_details.bookedBy.user_id': {
        $in: [user._id]
      }
    }, "restaurant_id slots.slot_type slots.slot_details.time createdAt").populate('restaurant_id')

    const tables = await TableR.find({
      'user_id': {
        $in: [user._id]
      }
    }).populate('restaurant_id')
    res.send({
      buffets,
      tables,
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
        // user.forDashboard.buffet.push(buffet._id);
        // await user.save();
      }
      var billing = new Billing({
        user_id: user._id,
        buffet_id: buffet._id,
        totalBill: Number(req.body.number) * 500
      });
      await billing.save();
      res.send(buffet);
    } else {
      throw new Error('Slot Full');
    }
  } catch (e) {
    console.log(e);;
  }
});

router.delete('/buffet', firebase.verifyToken, async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.body.uid
    });
    var user_id = user._id
    console.log(user_id);
    var buffet = await Buffet.findOne({
      _id: req.body.bid
    });
    var buffetSlot = buffet.slots[req.body.slotType]; //Index 0-> MorningMania 1->Lunch 2->Dinner
    var flag = false;
    for (var i = 0; i < buffetSlot.slot_details.length; i++) {
      var details = buffetSlot.slot_details[i];
      if (details.time === req.body.time) {
        var userIdx = -1;
        for (var j = 0; j < details.bookedBy.length; j++) {
          console.log(details.bookedBy[j].user_id);
          if (String(user_id) == String(details.bookedBy[j].user_id)) {
            userIdx = j;
            break;
          }
        }
        console.log(userIdx);
        if (Number(userIdx) !== -1) {
          var userNumber = details.bookedBy[userIdx].number;
          console.log(userNumber);
          details.totalPeople -= userNumber;
          details.bookedBy.splice(userIdx, 1);
          console.log(details.bookedBy);
          flag = true;
        }
      }
      if (flag) {
        break;
      }
    }
    // var index = user.forDashboard.buffet.indexOf(req.body.bid);
    // if (index != -1) {
    // user.forDashboard.buffet.splice(index, 1);
    // }
    var billing = await Billing.findOne({
      user_id: user._id,
      buffet_id: req.body.bid
    });
    await billing.remove();
    // await user.save();
    await buffet.save();
    res.send(buffet);
  } catch (e) {
    res.send(e);
  }
});
module.exports = router;