const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({

  fname: {type: String},
  lname: {type: String},
  phone: {type: String},
  email: {type: String},
  webSite: {type: String},
  gitHub: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true }
})

module.exports = mongoose.model('Profile', profileSchema);
