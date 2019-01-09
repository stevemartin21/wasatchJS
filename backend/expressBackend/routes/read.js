var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Profile = require('../models/profile');
var Education = require('../models/education');
var Experience = require('../models/experience');
var Skill = require('../models/skill');
var Project = require('../models/project');
var Content = require('../models/content');

// create user
router.get('/educations', (req, res) => {
    Education.find().then(educations => {
      console.log(educations);
      res.status(200).json(educations)
    }).catch(err => res.json(err));
})



module.exports = router;
