const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({

  fname: {type: String},
  lname: {type: String},
  phone: {type: String},
  email: {type: String},
  webSite: {type: String},
  gitHub: {type: String},
  jobType: {type: String},
  companyType: {type: String},
  frontEnd: {type: String},
  backEnd: {type: String},
  mobile: {type: String},
  headline: {type: String},
  highlight: {type: String},
  philosophy: {type: String},
  usp: {type: String},
  level: {type: String},

  imagePath:{ type: String, required: true },
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true },
  experience: [
    {
      employer: {type: String},
      jobTitle: {type: String},
      to: {type: String},
      from: {type: String},
      description: {type: String}
    }
  ],
  education: [
    {
      schoolName: {type: String},
      schoolType: {type: String},
      degree: {type: String},
      degreeType: {type: String},
      to: {type: String},
      from: {type: String},
      notes: {type: String}
    }
  ],
  skills: [
    {
      name: {type: String},
      type: {type: String},
      description: {type: String},
      years: {type: String},
    }
  ],
  projects: [
    {
      name: {type: String},
      description: {type: String},
      skills: {type: String},
      framework: {type: String},
      backend: {type: String},
      database: {type: String},
      link: {type: String},
    }
  ],
  solutions: [
    {
      title: {type: String},
      description: {type: String},
      steps: {type: String},
      appliedLearning: {type: String},
    }
  ],
  content: [
    {
      title: {type: String},
      description: {type: String},
      topic: {type: String},
      link: {type: String}
    }
  ]
})

module.exports = mongoose.model('Profile', profileSchema);
