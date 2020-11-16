const express = require('express');
const User = require('../Users');
const router = new express.Router();
router.post('/signup/setup', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({
      user
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.comparePassword(req.body.email, req.body.password);
    res.send({
      user
    });
  } catch (e) {
    res.status(400).send();
  }
});

router.post('/logout', async (req, res) => {
  try {
    req.user.tokens = []; //Token array will be reset
    await req.user.save();
    res.status(200).send();
  } catch (e) {
    res.status(400).send();
  }
})

router.get('/user', async (req, res) => {
  res.send(req.user);
});

router.patch('/editprofile', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['password']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  if (!isValidOperation) {
    return res.status(400).send({
      error: 'Invalid updates!'
    })
  }
  try {
    updates.forEach((update) => req.user[update] = req.body[update])
    await req.user.save()
    res.send(req.user)
  } catch (e) {
    res.status(400).send(e)
  }
});

router.delete('/checkout', async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
})
module.exports = router;