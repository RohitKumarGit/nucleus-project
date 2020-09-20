const mongoose=require('mongoose');
const billingSchema=new mongoose.Schema({
  user_id:Number,
  order_id:Number
});
const Billing=mongoose.model('Billing',billingSchema);
module.exports=Billing;