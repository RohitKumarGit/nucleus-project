const mongoose = require('mongoose');
const Schema = mongoose.Schema
const orderSchema = new mongoose.Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  restaurant_id: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
  },

  items: [{
    name: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 1
    },
    special_note: {
      type: String,
      default: null
    }
  }],
  order_type: {
    type: String,
    enum: ['Room Service', 'Restaurant Table Self Help']
  },
  //0--> Room service,1-->Restaurant Table Self Help
  room_no: {
    type: Schema.Types.ObjectId,
    ref:'Room',
    default: null
  },
  table_number: {
    type: Number,
    default: null
  },
  order_detail: {
    is_preorder: {
      type: Boolean,
      default: false
    },
    date_time: {
      type: Date,
      default: Date.now
    }
  },
  isCancelled: {
    default: false,
    type: Boolean
  },
  fulfilled: {
    default: false,
    type: Boolean
  },
  total_bill: {
    default: 0,
    type: Number
  }
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;