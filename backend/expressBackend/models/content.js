const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
  title: {type: String},
  description: {type: String},
  topic: {type: String},
  link: {type: String}
})

module.exports = mongoose.model('Content', contentSchema);
