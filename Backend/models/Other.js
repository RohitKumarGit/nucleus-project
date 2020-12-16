const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const OtherSchema=new mongoose.Schema({
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
  special:{
    type:String,
    required:True
  }
},{
  timestamps: true
});
const Special = mongoose.model('Special',OtherSchema);
module.exports = Special;