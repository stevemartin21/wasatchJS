const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  employer: {type: String},
  jobTitle: {type: String},
  compensation: {type: String},
  contract: {type: String},
  description: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true }
})

module.exports = mongoose.model('Job', jobSchema);



/*

*/
