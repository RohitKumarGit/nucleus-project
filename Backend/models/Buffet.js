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
        type: Number,
        required: true
      },
      Limit: {
        type: Number,
        required: true,
        min: 1
      },
      totalPeople: {
        type: Number,
        required: true,
        default: 0,
      },
      isAvailable: {
        type: Boolean,
        default: true
      },
      bookedBy: [{
        user_id: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        number: {
          type: Number,
          required: true,
          default: 1
        }
      }],
    }]
  }]

});
var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
rule.hour = 0 // hour 0-23
rule.minute = 0 // minute 0 - 59
var j = schedule.scheduleJob(rule, async function () {
  // do the reset here @Sujal :) Thanks - done
  await Buffet.updateMany({}, {
    'slots.slot_details.isAvailable': true
  })
})

const Buffet = mongoose.model('Buffet', buffetSchema);
module.exports = Buffet;