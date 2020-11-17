const mongoose = require('mongoose');
const Schema = mongoose.Schema
const buffetSchema = new mongoose.Schema({

  restaurant_id: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },

  slots: [{
    slot_type: {
      type: String,
      required: true,
      enum: ['Morning Mania', 'Lovely Lunch', 'Delightful Dinner']
    },
    slot_details: [{
      time: {

        starting: {
          type: Date,
          required: true
        },

        ending: {
          type: Date,
          required: true
        },

        Limit: {
          type: Number,
          required: true,
          min: 1
        }
      },

      isAvailable: {
        type: Boolean,
        default: true
      },
      bookedBy: [{
        user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true},
        number:
        {
          type:Number,
          required:true,
          default:1
        }
      }],
    }]
  }]

});
const Buffet = mongoose.model('Buffet', buffetSchema);
module.exports = Buffet;