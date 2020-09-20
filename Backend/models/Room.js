const mongoose=require('mongoose');
const roomSchema=new mongoose.Schema({
  room_number:Number,
  room_type:Number,
  room_price:Number,
  is_vacant:{
    default:true, //as the room is always vacant
    type:Boolean
  },
  booked_to:{
    default:null,
    type:Number
  }
});
const Room=mongoose.model('Room',roomSchema);
module.exports=Room;