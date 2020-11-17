const express = require('express');
const Room = require('../Room');
const router = new express.Router();

router.get('/rooms', async (req, res) => {
  try {
    const room = await Room.findOne({
      number: req.body.number,
    });
    res.send(room);
  } catch (e) {
    res.send(e);
  }
});

router.patch('/rooms', async (req, res) => {
  try {
    let room = await Room.findOne({
      number: req.body.number,
    });
    room[vacant] = req.body[vacant];
    await room.save();
    res.send(room);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;