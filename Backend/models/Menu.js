const mongoose=require('mongoose');
const menuSchema=new mongoose.Schema({

  item:Array[{
    item_name:String,
    item_price:Number,
    is_available:Boolean
  }],
  restaurant_id:Number,
  food_type:Array
});
const Menu=mongoose.model('Menu',menuSchema);
module.exports=Menu;