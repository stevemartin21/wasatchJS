const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: {type: String},
  description: {type: String},
  skills: {type: String},
  framework: {type: String},
  backend: {type: String},
  database: {type: String},
  link: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true }
})

module.exports = mongoose.model('Project', projectSchema);
