const mongoose = require("mongoose");
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Password must be atleast 6 character long']
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});
// // fire a function after doc saved to db
// userSchema.post('save', (doc) => {
//   console.log('new user was created & saved', doc);
// });

userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (!user) throw Error('incorrect email');

  const auth = await bcrypt.compare(password, user.password);
  if (!auth) throw Error('incorrect password');

  return user;
};


module.exports = mongoose.model('User', userSchema);