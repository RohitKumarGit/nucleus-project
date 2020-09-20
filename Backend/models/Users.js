const mongoose=require("mongoose");
const userSchema =new mongoose.Schema({
  username:String,
  phone:Number,
  userType:{
    default:0, //0->guest,1->admin
    type:Number
  },
  email:String,
  userGeneratedDate:Date,
  isVerified:{
    default:false,
    type:Boolean
  }
});
const User=mongoose.model('User',userSchema);
module.exports=User;