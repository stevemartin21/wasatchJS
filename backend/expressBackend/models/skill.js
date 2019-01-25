const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  name: {type: String},
  type: {type: String},
  description: {type: String},
  years: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true }

})

module.exports = mongoose.model('Skill', skillSchema);
