const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require("bcrypt");
const Room = require('./Room');
const Booking = require('./Bookings');
const Billing = require('./Billing');
const Buffet = require('./Buffet');
const Order = require('./Order');
const Table_reserve = require('./Table_reserve');
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: [true, 'Please enter a Phone Number']
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  type: {
    default: 'Customer',
    type: String,
    enum: ['Customer', 'Reception', 'Manager', 'Restaurant Owner']
  },

  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
      isAsync: false
    },
    required: [true, "Email required"]
  },
  documents: {
    type: String,
    //  required: true
  },
  isVerified: {
    default: false,
    type: Boolean
  },
  // forDashboard: {
  //   order: [{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Order'
  //   }],
  //   buffet: [{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Buffet'
  //   }],
  //   tableReserve: [{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Table_reserve'
  //   }],
  // }
}, {
  timestamps: true
});


userSchema.pre('remove', async function (next) {
  var user = this;
  var booking = await Booking.findOne({
    user_id: user._id
  });
  var billing = await Billing.findOne({
    user_id: user._id
  });
  for (i = 0; i < booking.room.size(); i++) {
    var x = booking.room[i];
    var y = Room.findOne({
      number: x
    });
    y.vacant = true;
    await y.save();
  }
  await booking.remove();
  await billing.remove();
  next();
});

userSchema.pre('save', async function (next) {
  var user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(1, function (err, salt) {
    if (err) {
      console.log(err);
      next(err)
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        console.log(err)
      }
      user.password = hash;
      next();
    });
  });
});
userSchema.statics.comparePassword = async function (email, candidatePassword) {
  let user = await User.findOne({
    email: email
  });
  console.log(user)
  if (!user) {
    throw new Error('No user found!');
  }
  try {
    const res = await bcrypt.compare(candidatePassword, user.password);
    return user;
  } catch (error) {
    // throw new Error('Please Authenticate!');
    return false
  }
};
const User = mongoose.model('User', userSchema);
module.exports = User;