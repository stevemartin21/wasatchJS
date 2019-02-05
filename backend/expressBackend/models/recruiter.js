const mongoose = require('mongoose');

const recruiterSchema = mongoose.Schema({

  fname: {type: String},
  lname: {type: String},
  phone: {type: String},
  email: {type: String},
  company: {type: String},
  webSite: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true },
  boosters: [
    {
      title: {type: String},
      description: {type: String},
      link: {type: String},
      complete: {type: String},
      level: {type: String},
    }
  ],
  jobs: [
    {
      employer: {type: String},
      jobTitle: {type: String},
      compensation: {type: String},
      contract: {type: String},
      description: {type: String},
    }
  ]
})

module.exports = mongoose.model('Recruiter', recruiterSchema);
