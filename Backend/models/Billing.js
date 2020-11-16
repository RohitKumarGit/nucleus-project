const mongoose = require('mongoose');
const Schema = mongoose.Schema
const billingSchema = new mongoose.Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  total_food_orders: {
    order_id:[{
    type: Schema.Types.ObjectId,
    ref: 'Order'}],
    total_bill:
    {
      type:Number,
      default:0,
      required:false
    }
  },
  total_laundry_bill:{
     laundry_id:[
      {
        type:Schema.Types.ObjectId,
        ref:'Laundry'
      }
    ],
    total_bill:{
      type:Number,
      default:0,
      required:false
    }
  }
});
//for food only, for room orders, preorders, and table orders in restaurants
const Billing = mongoose.model('Billing', billingSchema);
module.exports = Billing;