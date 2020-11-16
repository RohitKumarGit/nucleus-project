const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bookingSchema = new mongoose.Schema({
  booking_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  checkin_date:{
    type:Date,
    required: true,
    default:Date.now
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  rooms: [{
    type: Schema.Types.ObjectId,
    ref:'Room',
    required: true
  }],

  total_bill: {
    type: Number,
    required: true
  },

  check_out: {
    type: Date,
    default: Date.now
  },

  adults: {
    type: Number,
    required: true,
    min: 1
  },

  children: {
    type: Number,
    default: 0
  }
});
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;