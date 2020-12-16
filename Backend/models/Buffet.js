const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const buffetSchema = new mongoose.Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  restaurant_id: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  slot_id: {
    type: Schema.Types.ObjectId,
    ref: 'Slot',
    required: true
  },
  people: {
    type: Number
  }
},{
  timestamps: true
});
const Buffet = mongoose.model('Buffet', buffetSchema);
module.exports = Buffet;