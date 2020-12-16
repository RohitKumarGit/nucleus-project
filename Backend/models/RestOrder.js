const mongoose = require('mongoose');
const Schema = mongoose.Schema
const restOrderSchema = new mongoose.Schema({
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
      type: Number,
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
},{
  timestamps: true
});
const restOrder = mongoose.model('RestOrder', restOrderSchema);
module.exports = restOrder;