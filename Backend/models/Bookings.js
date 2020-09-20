const mongoose=require('mongoose');
const bookingSchema=new mongoose.Schema({
  booking_date:Date,
  User_id:Number,
  room_number:Number,
  check_in:Date,
  check_out:Date,
  adults:Number,
  children:Number
});
const Booking=mongoose.model('Booking',bookingSchema);
module.exports=Booking;