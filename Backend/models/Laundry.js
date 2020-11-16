const mongoose=require('mongoose');
const Schema=mongoose.Schema
const laundrySchema= new mongoose.Schema(
    {
        user_id:{
            type: Schema.Types.ObjectId,
            ref:'User'
        },
        room_number:{
            type: Schema.Types.ObjectId,
            ref:'Room'
        },
        Clothes:{
            type: Number,
            default:1
        }
    }
) ;
const Laundry = mongoose.model('Laundry', laundrySchema);
module.exports = Laundry;