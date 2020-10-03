const mongoose=require("mongoose");
const userSchema =new mongoose.Schema({
  name:
  {type:String,
  
    required:true},

  phone:{
    type:Number,
    min:0,
    max:9999999999
  },

  type:{
    default:0, //0->guest,1->admin
    type:Number,
    max:1,
  },
  password:{
    type:String
  },
  
  email:{type:String,
    required:true},

  
  isVerified:{
    default:false,
    type:Boolean
  }
},{
  timestamps:true
});
const User=mongoose.model('User',userSchema);
module.exports=User;