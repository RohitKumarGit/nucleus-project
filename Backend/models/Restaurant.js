const mongoose=require('mongoose');
const RestaurantSchema=new mongoose.Schema({

  menu:{
    type:[{menu_items:
      [
      {item_name:{
      type:String,
      required:true,
      unique:true},

    item_price:{
      type:Number,
      required:true},

    is_available:{
      type:Boolean,
      default:true}
     }
    ],
    menu_num:{
      type:Number,
      default:1
      }
  }],
    required:true
  },
  food_type:[]
});
const Restaurant=mongoose.model('Restaurant',RestaurantSchema);
module.exports=Restaurant;