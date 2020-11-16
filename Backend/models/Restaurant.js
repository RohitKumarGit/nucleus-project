const mongoose = require('mongoose');
const RestaurantSchema = new mongoose.Schema({
  menu_items: [{
    name: String,
    price: {
      type: Number,
      min: 0
    },
    is_available: {
      type: Boolean,
      default: true
    },
    category: {
      FoodPreferences: {
        type: String,
        enum: ['Pure Veg', 'Non-Veg', 'Vegan', 'Egg/Veg', 'Jain', 'Cocktail', 'Mocktail']
      },
      cuisine: {
        type: String,
        enum: ['Nort Indian', 'South Indian', 'Gujrati', 'Bengali', 'Italian', 'Chinese', 'Mexican', 'American']
      },
      possibleAllergics: [{
        type: String,
        enum: ['Peanuts', 'Dairy']
      }]
    },
  }],
  name: 
  {
    type:String,
    required:true
  },
  location: 
  {
    type:String,
    required:true
  },
  table:[{
    table_num:{
      type:Number,
      required:true
    },
    table_size:{
      type:Number,
      required:true,
      min:1
    },
    Is_reserved:{
      type:Boolean
    }
  }],
  vacancy:{
    type:Number,
    required:true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

RestaurantSchema.methods.toJSON = function () {
  const restaurant = this;
  const restObj = restaurant.toObject();
  delete restObj.location;
  delete restObj.owner;
  return restObj;
}
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;