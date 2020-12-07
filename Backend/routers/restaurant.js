const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = new express.Router();
const firebase = require('../middlewares/firebase');
router.get('/allrests',firebase.verifyToken,async(req,res)=>{
  try{
    const itemArray = [];
    const restaurants = await Restaurant.find({});
    for (var i = 0; i < restaurants.length; i++) {
      var restaurant = restaurants[i];
      var x = new Object({
        name: restaurant.name
      });
      itemArray.push(x);
    }
    res.send(itemArray);
  }catch(e)
  {
    res.status(404).send();
  }
})
router.get('/menu', firebase.verifyToken, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      name: req.query.name,
    });
    var itemArray = [];
    console.log(restaurant);
    for (var i = 0; i < restaurant.menu_items.length; i++) {
      if (restaurant.menu_items[i].is_available == true) {
        itemArray.push(restaurant.menu_items[i]);
      }
    }
    var menu = new Object({
      menu: itemArray
    });
    res.status(200).send(menu);
  } catch (e) {
    res.status(404).send();
  }
});

router.get('/vacancy', firebase.verifyToken, async (req, res) => {
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