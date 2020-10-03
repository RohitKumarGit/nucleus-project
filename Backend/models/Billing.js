const mongoose=require('mongoose');
const billingSchema=new mongoose.Schema({
  user_id:{
    type:Schema.Type.ObjectId,
    ref:'User'},

  order_id:
  {type:Schema.Types.ObjectId,
    ref:'Order'}
});
const Billing=mongoose.model('Billing',billingSchema);
module.exports=Billing;