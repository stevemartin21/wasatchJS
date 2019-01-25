const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
  title: {type: String},
  description: {type: String},
  topic: {type: String},
  link: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true }
})

module.exports = mongoose.model('Content', contentSchema);
