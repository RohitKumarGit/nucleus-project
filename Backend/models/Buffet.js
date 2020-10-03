const mongoose=require('mongoose');
const { NULL } = require('node-sass');
const buffetSchema=new mongoose.Schema({
  user_id:
  {type:Schema.Type.ObjectId,
    ref:'User',
    required:true},

  restaurant_id:{
    type:Schema.Types.ObjectId,
    ref:'Menu',
    required:true},

  slot_details:[{
    slot_time:{

      starting:{
        type:Date,
        required:true},

      ending:{
        type:Date,
        required:true}
    },

    total_slots:
    {type:Number,
    required:true},
    available_slots:{
      type:Number,
      
      default:function(){
        if(this.slot_details.total.slots!=NULL)
        return this.slot_details.total_slots;
        return 0;
      }

    }

  }]

});
const Buffet=mongoose.model('Buffet',buffetSchema);
module.exports=Buffet;