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

router.delete('/education/:id', (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Education.deleteOne({_id: req.params.id})
    .then(education => {
      res.status(200).json(education)
    }).catch(err => res.json(err));
})

router.delete('/experience/:id', (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Experience.deleteOne({_id: req.params.id})
    .then(experience => {
      res.status(200).json(experience)
    }).catch(err => res.json(err));
})

router.delete('/skill/:id', (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Skill.deleteOne({_id: req.params.id})
    .then(education => {
      res.status(200).json(skill)
    }).catch(err => res.json(err));
})

router.delete('/project/:id', (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Project.deleteOne({_id: req.params.id})
    .then(education => {
      res.status(200).json(project);
    }).catch(err => res.json(err));
})

router.delete('/content/:id', (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Content.deleteOne({_id: req.params.id})
    .then(content => {
      res.status(200).json(content);
    }).catch(err => res.json(err));
})





module.exports = router;
