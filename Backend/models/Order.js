const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    user_id:Number,
    restaurant_id:Number,
    items:Array[{
      name:String,
      count:Number,
      special_note:String
    }],
    order_type:Number,//0--> Room service,1-->Restaurant Table Self Help
    room_no:{
      default:null,
      type:Number
    },
    table_number:{
      default:null,
      type:Number
    },
    order_detail :{
      is_preorder:{
        type:Boolean,
        default:false
      },
      date_time:Date
    },
    isCancelled:{
      default:false,
      type:Boolean
    },
    fulfilled:{
      default:false,
      type:Boolean
    },
    total_bill:{
      default:0,
      type:Number
    }
  });
const Order=mongoose.model('Order',orderSchema);
module.exports=Order;