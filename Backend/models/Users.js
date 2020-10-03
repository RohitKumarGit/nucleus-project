const mongoose=require("mongoose");
const validator = require('validator');
const userSchema =new mongoose.Schema({
  name:
  {type:String,
  
    required:true},

    phone    : { type: String,
      validate: {
          validator: (v)=> {
              var re = /^\d{10}$/;
              return (v == null || v.trim().length < 1) || re.test(v)
          },
          message: 'Provided phone number is invalid.'
      },
      required:[true,'Please enter a Phone Number']
},

  type:{
    default:'Customer', 
    type:String,
    enum:['Customer','Reception','Manager','Employee']
  },
  password:{
    type:String,
    minlength:6,
    validate:{validator:(v)=>{return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/.test(v);}
,message:"weak password"},
  required:[true,"Password Required"]  },
  

  email:{
    type:String,
    validate:{
          validator: validator.isEmail,
          message: '{VALUE} is not a valid email',
          isAsync: false
        },
    required: [true, "Email required"]
    },

  
  isVerified:{
    default:false,
    type:Boolean
  }
},{
  timestamps:true
});
const User=mongoose.model('User',userSchema);
module.exports=User;