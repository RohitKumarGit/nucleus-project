const mongoose = require('mongoose');
const Schema = mongoose.Schema
const table_reserveSchema = new mongoose.Schema({
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        restaurant_id: {
            type: Schema.Types.ObjectId,
            ref: 'Restaurant'
        },
        // table_num: [{
        //     type: Number,
        // }],
        Adults: {
            type: Number,
            required: true
        },
        Children: {
            type: Number
        },
        Time: {
            type: Date,
            required: true,
            default: Date.now,
            max: +new Date() + 1 * 24 * 60 * 60 * 1000,
            min: Date.now
        },
        Duration: {
            type: Number,
            default: 1,
            max: 4
        }
    }

);
const Table_reserve = mongoose.model('Table_reserve', table_reserveSchema);
module.exports = Table_reserve;