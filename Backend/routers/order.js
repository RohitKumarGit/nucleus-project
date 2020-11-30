const express = require('express');
const Room = require('../models/Room');
const User = require('../models/Users');
const Order = require('../models/Order');
const Restaurant = require('../models/Restaurant');
const router = new express.Router();
const firebase = require('../middlewares/firebase');

router.get('/roomservice', firebase.verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({
      uid: req.query.uid
    });
    const restaurant = await Restaurant.findOne({
      name: req.query.restaurant_name
    });
    const room = await Room.findOne({
      number: req.query.roomnumber
    });
    const orders = await Order.find({
      user_id: user._id,
      restaurant_id: restaurant._id,
      room_no: room._id,
      order_type: 'Room Service'
    });
    res.send(orders);
  } catch (error) {
    res.send(error);
  }
});

router.get('/selfservice', firebase.verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({
      uid: req.query.uid
    });
    const restaurant = await Restaurant.findOne({
      name: req.query.restaurant_name
    });
    const orders = await Order.find({
      user_id: user._id,
      restaurant_id: restaurant._id,
      order_type: 'Restaurant Table Self Help'
    });
    res.send(orders);
  } catch (error) {
    res.send(error);
  }
});

router.post('/roomservice', firebase.verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({
      uid: req.body.uid
    });
    const restaurant = await Restaurant.findOne({
      name: req.body.restaurant_name
    });
    console.log(user._id);
    console.log(restaurant._id);
    var x = new Object({
      user_id: user._id,
      restaurant_id: restaurant._id,
      items: req.body.items,
      order_type: 'Room Service',
      order_detail: {
        is_preorder: req.body.preorder,
        date_time: req.body.date,
        special_note: req.body.note
      },
      total_bill: 0
    });
    console.log(x);
    var totalbill = 0;
    for (var i = 0; i < x.items.length; i++) {
      var name = x.items[i].name;
      console.log(name);
      var count = x.items[i].count;
      console.log(count);
      for (var j = 0; j < restaurant.menu_items.length; j++) {
        if (restaurant.menu_items[j].name == name) {
          totalbill = totalbill + Number((count * restaurant.menu_items[j].price));
          console.log("TB", totalbill);
        }
      }
    }
    console.log(totalbill);
    x.total_bill = totalbill;
    console.log(x);
    var order = await new Order(x);
    var id = order._id;
    user.forDashboard.order.push(id);
    await user.save();
    await order.save();
    res.send(order);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post('/selfservice', firebase.verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({
      uid: req.body.uid
    });
    const restaurant = await Restaurant.findOne({
      name: req.body.restaurant_name
    });
    console.log(user._id);
    console.log(restaurant._id);
    var x = new Object({
      user_id: user._id,
      restaurant_id: restaurant._id,
      items: req.body.items,
      order_type: 'Restaurant Table Self Help',
      order_detail: {
        is_preorder: req.body.preorder,
        date_time: req.body.date
      },
      total_bill: 0
    });
    console.log(x);
    var totalbill = 0;
    for (var i = 0; i < x.items.length; i++) {
      var name = x.items[i].name;
      console.log(name);
      var count = x.items[i].count;
      console.log(count);
      for (var j = 0; j < restaurant.menu_items.length; j++) {
        if (restaurant.menu_items[j].name == name) {
          totalbill = totalbill + Number((count * restaurant.menu_items[j].price));
          console.log("TB", totalbill);
        }
      }
    }
    console.log(totalbill);
    x.total_bill = totalbill;
    console.log(x);
    var order = await new Order(x);
    var id = order._id;
    user.forDashboard.order.push(id);
    await user.save();
    await order.save();
    res.send(order);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete('/orders', firebase.verifyToken, async (req, res) => {
  try {
    var user = await User.findOne({
      uid: req.body.uid
    });
    var order = await Order.findOne({
      user_id: user._id
    });
    var o_id = order._id;
    order.remove();
    var idx = user.forDashboard.order.indexOf(o_id);
    if (idx > -1) {
      user.splice(idx, 1);
    }
    await user.save();
    res.send(order);
  } catch (e) {
    res.send(e);
  }
});
module.exports = router;