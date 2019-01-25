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

router.put('/education/:id', verifyToken, (req, res) => {

    const updatedEducation = new Education ({
      _id: req.params.id,
      schoolName: req.body.schoolName,
      schoolType: req.body.schoolType,
      degree: req.body.degree,
      degreeType: req.body.degreeType,
      to: req.body.to,
      from: req.body.from,
      notes: req.body.notes
    })

    Education.updateOne({_id: req.params.id, creator: req.userData.userId}, updatedEducation)
      .then(education => {
        res.status(200).json(education)
      }).catch(err => res.status(400).json(err))

})

router.put('/experience/:id', verifyToken,  (req, res) => {

  const updatedExperience = new Experience ({
    _id: req.params.id,
    employer: req.body.employer,
    jobTitle: req.body.jobTitle,
    to: req.body.to,
    from: req.body.from,
    description: req.body.description
  })

  Experience.updateOne({_id: req.params.id, creator: req.userData.userId}, updatedExperience)
    .then(experience => {
      res.status(200).json(experience)
    }).catch(err => res.status(400).json(err))

})

router.put('/skill/:id', verifyToken, (req, res) => {

  const updatedSkill = new Skill ({
    _id: req.params.id,
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    years: req.body.years
  })

  Skill.updateOne({_id: req.params.id, creator: req.userData.userId}, updatedSkill)
    .then(skill => {
      res.status(200).json(skill)
    }).catch(err => res.status(400).json(err))

})

router.put('/content/:id', verifyToken, (req, res) => {

  const updatedContent = new Content ({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    topic: req.body.topic,
    link: req.body.link
  })

  Content.updateOne({_id: req.params.id, creator: req.userData.userId}, updatedContent)
    .then(content => {
      res.status(200).json(content)
    }).catch(err => res.status(400).json(err))

})

router.put('/profile/:id', verifyToken, (req, res) => {

  const updatedProfile = new Profile ({
    _id: req.params.id,
    fname: req.body.fname,
  lname: req.body.lname,
  phone: req.body.phone,
  email: req.body.email,
  webSite: req.body.webSite,
  gitHub: req.body.gitHub
  })

  Profile.updateOne({_id: req.params.id, creator: req.userData.userId}, updatedProfile)
    .then(profile => {
      res.status(200).json(profile)
    }).catch(err => res.status(400).json(err))

})

router.put('/project/:id', verifyToken, (req, res) => {

  const updatedProject = new Project ({
    _id: req.params.id,
    description: req.body.description,
    skills: req.body.skills,
    framework: req.body.framework,
    backend: req.body.backend,
    database: req.body.database,
    link: req.body.link
  })

  Project.updateOne({_id: req.params.id, creator: req.userData.userId}, updatedProject)
    .then(project => {
      res.status(200).json(project)
    }).catch(err => res.status(400).json(err))

})

router.put('/problem/:id', verifyToken, (req, res) => {

  const updatedProblem = new Problem ({
    _id: req.params.id,
   title: req.body.title,
   description: req.body.description,
   steps: req.body.steps
  })

  Problem.updateOne({_id: req.params.id, creator: req.userData.userId}, updatedProblem)
    .then(problem => {
      res.status(200).json(problem)
    }).catch(err => res.status(400).json(err))

})




module.exports = router;

/*

   name: {type: String},
  description: {type: String},
  skills: {type: String},
  framework: {type: String},
  backend: {type: String},
  database: {type: String},
  link: {type: String}



*/
