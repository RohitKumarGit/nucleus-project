const mongoose=require('mongoose');
const Schema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    restaurant_id:{
        type:Schema.Types.ObjectId,
        ref:'Restaurant'
    },
    Adults:{
        type:Number,
        required:true
    },
    Children:{
        type:Number
    },
    Time:{
        type:Date,
        required:true,
        default:Date.now,
        max: +new Date() + 1*24*60*60*1000,
        min:Date.now
    },
    Duration:{
        type:Number,
        max:4
    }
}

);
const Table = mongoose.model('Table', userSchema);
module.exports = Table;
