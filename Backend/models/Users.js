const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require("bcrypt");
const Room = require('./Room');
const Booking = require('./Bookings');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: [true, 'Please enter a Phone Number']
  },
  type: {
    default: 'Customer',
    type: String,
    enum: ['Customer', 'Reception', 'Manager', 'Restaurant Owner']
  },
  password: {
    type: String,
    minlength: 6,
    validate: {
      validator: (v) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/.test(v);
      },
      message: "weak password"
    },
    required: [true, "Password Required"]
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
  verification: {
    type: Schema.Types.Mixed
  },
  isVerified: {
    default: false,
    type: Boolean
  }
}, {
  timestamps: true
});


userSchema.pre('remove', async function (next) {
  var user = this;
  var booking = await Booking.findOne({
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
  if (!user) {
    throw new Error('No user found!');
  }
  try {
    const res = await bcrypt.compare(candidatePassword, user.password);
    return user;
  } catch (error) {
    throw new Error('Please Authenticate!');
  }
};
const User = mongoose.model('User', userSchema);
module.exports = User;