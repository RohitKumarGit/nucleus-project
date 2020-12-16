const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const cleaningSchema=new mongoose.Schema({
  user_id:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'User'
  },
  roomNo:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'Room'
  },
  cleaningTime:{
    type:Number,
    required:True
  }
},{
  timestamps: true
});
const Cleaning = mongoose.model('Cleaning',cleaningSchema);
module.exports = Cleaning;