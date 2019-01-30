const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  isAdmin: {type: Boolean},
  isRecruiter: {type: Boolean},
  profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'  }
})

module.exports = mongoose.model('User', userSchema);
