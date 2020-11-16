const express = require('express');
const Restaurant = require('../Restaurant');
const router = new express.Router();

router.get('/foodorder', async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      name: req.body.name,
    });
    res.status(200).send(restaurant);
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;