const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: {type: String},
  description: {type: String},
  skills: {type: String},
  framework: {type: String},
  backend: {type: String},
  database: {type: String},
  link: {type: String}
})

module.exports = mongoose.model('Project', projectSchema);
