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

// create user
router.get('/educations', (req, res) => {
    Education.find().then(educations => {
      console.log(educations);
      res.status(200).json(educations)
    }).catch(err => res.json(err));
})

router.get('/education/:id', (req, res) => {
    Education.findOne({_id: req.params.id}).then(education => {
      res.status(200).json(education)
    }).catch(err =>  res.status(400).json(err))
})

router.get('/experiences', (req, res) => {
  Experience.find().then(experiences => {
    console.log(experiences);
    res.status(200).json(experiences)
  }).catch(err => res.json(err));
})

router.get('/experience/:id', (req, res) => {
  Experience.findOne({_id: req.params.id}).then(experience => {
    res.status(200).json(experience)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/skills', (req, res) => {
  Skill.find().then(skills => {
    console.log(skills);
    res.status(200).json(skills)
  }).catch(err => res.json(err));
})

router.get('/skill/:id', (req, res) => {
  Skill.findOne({_id: req.params.id}).then(skill => {
    res.status(200).json(skill)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/projects', (req, res) => {
  Project.find().then(projects => {
    console.log(projects)
    res.status(200).json(projects)
  }).catch(err => res.json(err));
})

router.get('/project/:id', (req, res) => {
  Project.findOne({_id: req.params.id}).then(project => {
    res.status(200).json(project)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/content', (req, res) => {
  Content.find().then(contents => {
    console.log(contents)
    res.status(200).json(contents);
  }).catch(err => res.json(err));
})

router.get('/content/:id', (req, res) => {
  Content.findOne({_id: req.params.id}).then(content => {
    res.status(200).json(content)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/profiles', (req, res) => {
  Profile.find().then(profiles => {
    console.log(profiles);
    res.status(200).json(profiles)
  }).catch(err => res.json(err));
})

router.get('/profile/:id', (req, res) => {
  Profile.findOne({_id: req.params.id}).then(profie => {
    res.status(200).json(profile)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/problems', (req, res) => {
  Problem.find().then(problems => {
    console.log(problems)
    res.status(200).json(problems)
  }).catch(err => res.json(err));
})

router.get('/problem/:id', (req, res) => {
  Problem.findOne({_id: req.params.id}).then(problem => {
    res.status(200).json(problem)
  }).catch(err =>  res.status(400).json(err))
})





module.exports = router;
