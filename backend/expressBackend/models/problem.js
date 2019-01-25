const mongoose = require('mongoose');

const problemSchema = mongoose.Schema({
  title: {type: String},
  description: {type: String},
  steps: {type: String},
  appliedLearning: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true }
})

module.exports = mongoose.model('Problem', problemSchema);
