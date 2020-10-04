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
    category:{
      FoodPreferences:{
        type:String,
        enum:['Pure Veg','Non-Veg','Vegan','Egg/Veg','Jain','Cocktail','Mocktail']
      },
      cuisine:{
        type:String,
        enum:['Nort Indian','South Indian','Gujrati','Bengali','Italian','Chinese','Mexican','American']
      },
      possibleAllergics:[{
        type:String,
        enum:['Peanuts','Dairy']
      }]
    },
   
  }],
  name:String,
  location:String
});
const Restaurant=mongoose.model('Restaurant',RestaurantSchema);
module.exports=Restaurant;