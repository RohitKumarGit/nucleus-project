const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = new express.Router();

router.get('/menu', async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      name: req.query.name,
    });
    res.status(200).send(restaurant);
  } catch (e) {
    res.status(404).send();
  }
});

router.get('/vacancy', async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      name: req.query.name,
    });
    let x = "";
    console.log(restaurant.time_details);
    restaurant.time_details.forEach((y) => {
      if (y.time_now == req.query.time) {
        x = y.vacancy;
      }
    })
    res.status(200).send({
      vacancy: x
    });
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;