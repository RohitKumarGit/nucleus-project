const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bookingSchema = new mongoose.Schema({
  checkinDate:{
    type:Date,
    required: true,
  },
  checkoutDate: {
    type: Date,
    required:true,
  },
  user_id:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  room_id:{
    type:Schema.Types.ObjectId,
    ref: 'Room'
  },
  people:{
    type:Number,
    required:true
  }
},{
  timestamps: true
});
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;