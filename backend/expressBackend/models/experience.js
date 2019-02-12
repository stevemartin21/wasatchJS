const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
  employer: {type: String},
  jobTitle: {type: String},
  to: {type: String},
  from: {type: String},
  description: {type: String},
  experienceType: {type: String},
  companyType: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true }
})

module.exports = mongoose.model('Experience', experienceSchema);
