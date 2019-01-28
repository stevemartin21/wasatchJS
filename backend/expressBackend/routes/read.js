var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Profile = require('../models/profile');
var Education = require('../models/education');
var Experience = require('../models/experience');
var Skill = require('../models/skill');
var Project = require('../models/project');
var Content = require('../models/content');
var Problem = require('../models/problem');
const verifyToken = require('../middleware/verify-token');

// create user
router.get('/educations', verifyToken, (req, res) => {
    Education.find({ creator: req.userData.userId}).then(educations => {
      console.log(educations);
      res.status(200).json(educations)
    }).catch(err => res.json(err));
})

router.get('/education/:id', verifyToken, (req, res) => {
    Education.findOne({_id: req.params.id}).then(education => {
      res.status(200).json(education)
    }).catch(err =>  res.status(400).json(err))
})

router.get('/experiences', verifyToken, (req, res) => {
  Experience.find({ creator: req.userData.userId}).then(experiences => {
    console.log(experiences);
    res.status(200).json(experiences)
  }).catch(err => res.json(err));
})

router.get('/experience/:id', verifyToken, (req, res) => {
  Experience.findOne({_id: req.params.id}).then(experience => {
    res.status(200).json(experience)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/skills', verifyToken, (req, res) => {
  Skill.find({creator: req.userData.userId}).then(skills => {
    console.log(skills);
    res.status(200).json(skills)
  }).catch(err => res.json(err));
})

router.get('/skill/:id', verifyToken, (req, res) => {
  Skill.findOne({_id: req.params.id}).then(skill => {
    res.status(200).json(skill)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/projects', verifyToken, (req, res) => {
  Project.find({creator: req.userData.userId}).then(projects => {
    console.log(projects)
    res.status(200).json(projects)
  }).catch(err => res.json(err));
})

router.get('/project/:id', verifyToken, (req, res) => {
  Project.findOne({_id: req.params.id}).then(project => {
    res.status(200).json(project)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/content', verifyToken, (req, res) => {
  Content.find({creator: req.userData.userId}).then(contents => {
    console.log(contents)
    res.status(200).json(contents);
  }).catch(err => res.json(err));
})

router.get('/content/:id', verifyToken, (req, res) => {
  Content.findOne({_id: req.params.id}).then(content => {
    res.status(200).json(content)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/profiles', verifyToken, (req, res) => {
  Profile.find({creator: req.userData.userId}).then(profiles => {
    console.log(profiles);
    res.status(200).json(profiles)
  }).catch(err => res.json(err));
})

router.get('/publicProfiles',  (req, res) => {
  Profile.find().then(profiles => {
    console.log(profiles);
    res.status(200).json(profiles)
  }).catch(err => res.json(err));
})

router.get('/profile/:id', verifyToken, (req, res) => {
  console.log(req.body + 'read the profile');
  console.log(req.userData.userId);
  Profile.findOne({creator: req.userData.userId}).then(profile => {
    console.log(profile);
    res.status(200).json(profile)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/problems', verifyToken, (req, res) => {
  Problem.find({creator: req.userData.userId}).then(problems => {
    console.log(problems)
    res.status(200).json(problems)
  }).catch(err => res.json(err));
})

router.get('/problem/:id', verifyToken, (req, res) => {
  Problem.findOne({_id: req.params.id}).then(problem => {
    res.status(200).json(problem)
  }).catch(err =>  res.status(400).json(err))
})





module.exports = router;
