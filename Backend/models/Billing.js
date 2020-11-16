const mongoose = require('mongoose');
const Schema = mongoose.Schema
const billingSchema = new mongoose.Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  order_id: {
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }
});
//for food only, for room orders, preorders, and table orders in restaurants
const Billing = mongoose.model('Billing', billingSchema);
module.exports = Billing;