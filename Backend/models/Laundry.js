const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const laundrySchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    roomNo:{
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    clothes:{
        type:Number,
        required:true
    }

});
const Laundry = mongoose.model('Laundry', laundrySchema);
module.exports = Laundry;