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

router.get('/experiences', (req, res) => {
  Experience.find().then(experiences => {
    console.log(experiences);
    res.status(200).json(experiences)
  }).catch(err => res.json(err));
})

router.get('/skills', (req, res) => {
  Skill.find().then(skills => {
    console.log(skills);
    res.status(200).json(skills)
  }).catch(err => res.json(err));
})

router.get('/projects', (req, res) => {
  Project.find().then(projects => {
    console.log(projects)
    res.status(200).json(projects)
  }).catch(err => res.json(err));
})

router.get('/content', (req, res) => {
  Content.find().then(contents => {
    console.log(contents)
    res.status(200).json(contents);
  }).catch(err => res.json(err));
})



module.exports = router;
