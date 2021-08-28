const express = require('express');
const Billing = require('../models/Billing');
const User = require('../models/Users');
const router = new express.Router();
const firebase = require('../middlewares/firebase');
router.get('/user',async (req,res) =>{
  user = await User.findOne({
    uid:req.query.uid
  })
  res.send(user)
})
router.get('/bill',firebase.verifyToken, async (req, res) => {
  try {
    //console.log(req.query)
    const {_id} = await User.findOne({
      uid:req.query.uid
    })

   var user_id = _id
   
    const bill = await Billing.find({
      user_id
    },"totalBill")
    var c = 0
    bill.forEach( b => {
        c+=b.totalBill
    })
   // console.log(c)
   
    res.send({bill,total:c})
  } catch (e) {
   // console.log(e)
    res.send({
      e
    });
  }
});
router.post('/checkout',firebase.verifyToken,async (req,res)=>{
  try {
    const {bill_id} = req.body
    const bill = await Billing.findByIdAndUpdate(bill_id,{
    paid:true
    })
  res.send({
    success:true
  })
  } catch (error) {
    res.send({
      success:false,
      error
    })
  }
  
})
module.exports = router;