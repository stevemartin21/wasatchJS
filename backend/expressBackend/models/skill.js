const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  name: {type: String},
  type: {type: String},
  description: {type: String},
  years: {type: String},

})

module.exports = mongoose.model('Skill', skillSchema);
