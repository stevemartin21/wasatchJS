const mongoose = require('mongoose');

const problemSchema = mongoose.Schema({
  title: {type: String},
  description: {type: String},
  steps: {type: String},
  appliedLearning: {type: String}
})

module.exports = mongoose.model('Problem', problemSchema);
