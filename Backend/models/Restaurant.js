const mongoose=require('mongoose');
const RestaurantSchema=new mongoose.Schema({
  menu_items:[{
    name:String,
    price:{
      type:Number,
      min:0
    },
    is_available:{
      type:Boolean,
      default:true
    },
    category:[{
      type:Array,
      enum:['Veg','Non-Veg',"Chineese","North Indian","South Indian"]
      
    }],
   
  }],
  name:String,
  location:String
});
const Restaurant=mongoose.model('Restaurant',RestaurantSchema);
module.exports=Restaurant;