const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
  employer: {type: String},
  jobTitle: {type: String},
  to: {type: String},
  from: {type: String},
  description: {type: String}
})

module.exports = mongoose.model('Experience', experienceSchema);
