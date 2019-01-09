const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
  schoolName: {type: String},
  schoolType: {type: String},
  degree: {type: String},
  degreeType: {type: String},
  to: {type: String},
  from: {type: String},
  notes: {type: String}
})

module.exports = mongoose.model('Education', educationSchema);
