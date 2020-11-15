const mongoose=require('mongoose');
const roomSchema=new mongoose.Schema({
  number:{
    type:Number,
    required:true
  },
  type:{
    type:String,
    enum:['Economy','Delux','Special']
  },
  price:{
    type:Number,
    required:true
  },
  vacant:{
    type:Boolean,
    default:false
  },
  
});
const Room=mongoose.model('Room',roomSchema);
module.exports=Room;