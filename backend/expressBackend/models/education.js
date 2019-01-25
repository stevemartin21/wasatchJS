const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
  schoolName: {type: String},
  schoolType: {type: String},
  degree: {type: String},
  degreeType: {type: String},
  to: {type: String},
  from: {type: String},
  notes: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true }
})

module.exports = mongoose.model('Education', educationSchema);
