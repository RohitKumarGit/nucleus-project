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
  },
  restOrder_id: {
    type: Schema.Types.ObjectId,
    ref: 'RestOrder'
  },
  buffet_id: {
    type: Schema.Types.ObjectId,
    ref: 'Buffet'
  },
  room_id:{
    type: Schema.Types.ObjectId,
    ref: 'Room'
  },
  totalBill: {
    type: Number,
    default: 0
  },
  paid: {
    default: false,
    type: Boolean
  }
});
const Billing = mongoose.model('Billing', billingSchema);
module.exports = Billing;