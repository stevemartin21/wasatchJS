const mongoose = require('mongoose');

const boosterSchema = mongoose.Schema({
  title: {type: String},
  description: {type: String},
  link: {type: String},
  complete: {type: String},
  level: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true }
})

module.exports = mongoose.model('Booster', boosterSchema);

/*
_id: String;
  title: String;
  description: String;
  link: String;
  complete: String;


*/
