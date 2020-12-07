const mongoose = require('mongoose');
const Schema = mongoose.Schema
const slotSchema = new mongoose.Schema({
  restaurant_id: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  slotType: {
    type: String,
    enum: ['Morning Mania', 'Lovely Lunch', 'Delightful Dinner']
  },
  time: {
    type: Number
  },
  totalCapacity: {
    type: Number,
    default: 100
  },
  currentCapacity: {
    type: Number,
    default: 0
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
});
const Slot = mongoose.model('Slot', slotSchema);
module.exports = Slot;