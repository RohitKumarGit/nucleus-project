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

router.get('/location', async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      name: req.query.name,
    });
    res.status(200).send({
      location: restaurant.time_details[req.query.time].vacancy
    });
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;