const mongoose=require("mongoose");
const userSchema =new mongoose.Schema({
  username:
  {type:String,
    uppercase:true,
    required:true},

  phone:{
    type:Number,
    validate:{
      validator:function(v){
        return v.length()>=8;
                           }
            }
        },

  userType:{
    default:0, //0->guest,1->admin
    type:Number
  },
  
  email:{type:String,
    required:true},

  userGeneratedDate:{
    type:Date,
    default:Date.now},

  isVerified:{
    default:false,
    type:Boolean
  }
});
const User=mongoose.model('User',userSchema);
module.exports=User;