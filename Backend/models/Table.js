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
        default:Date.now
    },
}

)
