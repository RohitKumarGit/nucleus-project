const mongoose=require('mongoose');
const roomSchema=new mongoose.Schema({
  room_number:
  {type:Number,
  required:true},
  room_type:{
    type:Number},
  room_price:{
    type:Number,
    default:0},
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