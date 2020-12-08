const express = require('express');
const Room = require('../models/Room');
const User = require('../models/Users');
const Order = require('../models/Order');
const RestOrder = require('../models/RestOrder');
const Restaurant = require('../models/Restaurant');
const router = new express.Router();
const firebase = require('../middlewares/firebase');
const Billing = require('../models/Billing');

router.get('/allmenu', firebase.verifyToken, async (req, res) => {
  try {
    const itemArray = [];
    const restaurants = await Restaurant.find({});
    for (var i = 0; i < restaurants.length; i++) {
      var restaurant = restaurants[i];
      var x = new Object({
        name: restaurant.name,
        menu_items: restaurant.menu_items
      });
      itemArray.push(x);
    }
    res.send(itemArray);
  } catch (e) {
    res.send(e);
  }
});

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
    const orders = await RestOrder.find({
      user_id: user._id,
      restaurant_id: restaurant._id,
    });
    res.send(orders);
  } catch (error) {
    res.send(error);
  }
});

router.post('/roomservice', firebase.verifyToken, async (req, res) => {
  try {
    console.log(req.body.items);
    const user = await User.findOne({
      uid: req.body.uid
    });
    const room = await Room.findOne({
      number: req.body.room
    });
    console.log(1);
    var itemArray = [];
    var x = new Object({
      user_id: user._id,
      items: itemArray,
      order_detail: {
        is_preorder: req.body.preorder,
        date_time: req.body.date,
      },
      room_no: room._id,
      total_bill: 0
    });
    console.log(x);
    console.log(2);
    var totalbill = 0;
    for (var i = 0; i < req.body.items.length; i++) {
      var name = req.body.items[i].name;
      console.log(name);
      var count = req.body.items[i].count;
      console.log(count);
      var price = req.body.items[i].price;
      console.log(price);
      totalbill += Number(price) * count;
      console.log(totalbill);
      var y = {
        name: name,
        count: count
      };
      console.log(y);
      itemArray.push(y);
      console.log(itemArray);
    }
    console.log(totalbill);
    x.total_bill = totalbill;
    x.items = itemArray;
    console.log(x);
    var order = await new Order(x);
    var id = order._id;
    // user.forDashboard.order.push(id);
    var billing = new Billing({
      user_id: user._id,
      order_id: order._id,
      totalBill: totalbill
    });
    await billing.save();
    // await user.save();
    await order.save();
    res.send(order);
  } catch (e) {
    console.log(e);
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
      order_detail: {
        is_preorder: req.body.preorder,
        date_time: req.body.date,
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
    var order = await new RestOrder(x);
    // var id = order._id;
    // user.forDashboard.order.push(id);
    var billing = new Billing({
      user_id: user._id,
      restOrder_id: order._id,
      totalBill: totalbill
    });
    await billing.save();
    // await user.save();
    await order.save();
    res.send(order);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post('/orders', async (req, res) => {
  console.log(req.body)
  try {
    var user = await User.findOne({
      uid: req.body.uid
    });
    var order = await Order.findOne({
      _id: req.body.oid
    });
    await order.remove();
    // var idx = user.forDashboard.order.indexOf(o_id);
    // if (idx > -1) {
    // user.forDashboard.order.splice(idx, 1);
    // }
    var billing = await Billing.findOne({
      user_id: user._id,
      order_id: req.body.oid
    });
    await billing.remove();
    // await user.save();
    res.send(order);
  } catch (e) {
    res.send(e);
  }
});


router.post('/restorders', async (req, res) => {
  console.log(req.body)
  try {
    var user = await User.findOne({
      uid: req.body.uid
    });
    var rest = await RestOrder.findOne({
      _id: req.body.rid
    });
    await rest.remove();
    // var idx = user.forDashboard.order.indexOf(o_id);
    // if (idx > -1) {
    // user.forDashboard.order.splice(idx, 1);
    // }
    var billing = await Billing.findOne({
      user_id: user._id,
      restOrder_id: req.body.rid
    });
    await billing.remove();
    // await user.save();
    res.send(rest);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;