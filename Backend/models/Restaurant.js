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
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  time_details:[{
  time_now:{
    type:Number
  },
  table: [{
    table_num: {
      type: Number,
      required: true
    },
    table_size: {
      type: Number,
      required: true,
      min: 1
    },
    Is_reserved: {
      type: Boolean,
      required:true,
      default:false
    }
  }],
  vacancy: {
    type: Number,
    required: true,
    default:100
  }}],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
const routers = require('./adminbro');
// schedules
var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
rule.hour = 0 // hour 0-23
rule.minute = 0 // minute 0 - 59
var j = schedule.scheduleJob(rule,function(){
  // do the reset here @Sujal :) Thanks - done
  await Restaurant.updateMany({},{'time_details.table.Is_reserved':false,'time_details.vacancy':100})
  console.log("Reset of Restaurant done")
})

RestaurantSchema.methods.toJSON = function () {
  const restaurant = this;
  const restObj = restaurant.toObject();
  delete restObj.location;
  delete restObj.owner;
  return restObj;
}
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;