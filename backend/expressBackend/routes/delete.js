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

router.delete('/education/:id', verifyToken, (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Education.deleteOne({_id: req.params.id, creator: req.userData.userId })
    .then(education => {
      res.status(200).json(education)
    }).catch(err => res.json(err));
})

router.delete('/experience/:id', verifyToken, (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Experience.deleteOne({_id: req.params.id, creator: req.userData.userId })
    .then(experience => {
      res.status(200).json(experience)
    }).catch(err => res.json(err));
})

router.delete('/skill/:id', verifyToken, (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Skill.deleteOne({_id: req.params.id, creator: req.userData.userId})
    .then(education => {
      res.status(200).json(skill)
    }).catch(err => res.json(err));
})

router.delete('/project/:id', verifyToken, (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Project.deleteOne({_id: req.params.id, creator: req.userData.userId})
    .then(education => {
      res.status(200).json(project);
    }).catch(err => res.json(err));
})

router.delete('/content/:id', verifyToken, (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Content.deleteOne({_id: req.params.id, creator: req.userData.userId})
    .then(content => {
      res.status(200).json(content);
    }).catch(err => res.json(err));
})

router.delete('/problem/:id', verifyToken, (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Problem.deleteOne({_id: req.params.id, creator: req.userData.userId})
    .then(problem => {
      res.status(200).json(problem);
    }).catch(err => res.json(err));
})

router.delete('/profile/:id', verifyToken, (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Profile.deleteOne({_id: req.params.id, creator: req.userData.userId})
    .then(profile => {
      res.status(200).json(profile);
    }).catch(err => res.json(err));
})





module.exports = router;
