const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = new express.Router();
const firebase = require('../middlewares/firebase');
router.get('/menu', firebase.verifyToken,async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      name: req.query.name,
    },{
      'menu_items.is_available':true
    });
    console.log(restaurant)
    var menu = new Object({
      menu: restaurant.menu_items
    });
    res.status(200).send(menu);
  } catch (e) {
    res.status(404).send();
  }
});

router.get('/vacancy',firebase.verifyToken, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      name: req.query.name,
    });
    console.log(restaurant);
    let x = "";
    console.log(restaurant.time_details);
    restaurant.time_details.forEach((y) => {
      if (y.time_now == req.query.time) {
        x = y.vacancy;
      }
    })
    console.log(x);
    res.status(200).send({
      vacancy: x
    });
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;