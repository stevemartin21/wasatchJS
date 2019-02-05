var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Profile = require('../models/profile');
var Recruiter = require('../models/recruiter');
var Education = require('../models/education');
var Experience = require('../models/experience');
var Job = require('../models/job');
var Booster = require('../models/booster');
var Skill = require('../models/skill');
var Project = require('../models/project');
var Content = require('../models/content');
var Problem = require('../models/problem');
const verifyToken = require('../middleware/verify-token');

router.get('/profile', verifyToken, (req, res) => {
    Profile.findOne({creator: req.userData.userId}).then(profile => {

      console.log(profile);
      res.status(200).json(profile)
    }).catch(err => res.json(err));
})

router.get('/newExperience/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const findIndex = profile.experience
      .map(item => item.id)
      .indexOf(req.params.id);

      const foundProfile = profile.experience[findIndex];
      console.log(foundProfile);

      res.status(200).json(foundProfile)
    }).catch(err => res.status(400).json(err));
})

router.get('/newEducation/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const findIndex = profile.education
      .map(item => item.id)
      .indexOf(req.params.id);

      const foundProfile = profile.education[findIndex];
      console.log(foundProfile);

      res.status(200).json(foundProfile)
    }).catch(err => res.status(400).json(err));
})

router.get('/newSkill/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const findIndex = profile.skills
      .map(item => item.id)
      .indexOf(req.params.id);

      const foundProfile = profile.skills[findIndex];
      console.log(foundProfile);

      res.status(200).json(foundProfile)
    }).catch(err => res.status(400).json(err));
})

router.get('/newProject/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const findIndex = profile.projects
      .map(item => item.id)
      .indexOf(req.params.id);

      const foundProfile = profile.projects[findIndex];
      console.log(foundProfile);

      res.status(200).json(foundProfile)
    }).catch(err => res.status(400).json(err));
})

router.get('/newSolution/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const findIndex = profile.solutions
      .map(item => item.id)
      .indexOf(req.params.id);

      const foundProfile = profile.solutions[findIndex];
      console.log(foundProfile);

      res.status(200).json(foundProfile)
    }).catch(err => res.status(400).json(err));
})

router.get('/newContent/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const findIndex = profile.content
      .map(item => item.id)
      .indexOf(req.params.id);

      const foundProfile = profile.content[findIndex];
      console.log(foundProfile);

      res.status(200).json(foundProfile)
    }).catch(err => res.status(400).json(err));
})


router.get('/developerContent/:id',  (req, res) => {
  Content.find({creator: req.params.id}).then(content => {
    res.status(200).json(content)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/profiles', verifyToken, (req, res) => {
  Profile.find({creator: req.userData.userId}).then(profiles => {
    console.log(profiles);
    res.status(200).json(profiles)
  }).catch(err => res.json(err));
})

router.get('/recruiters',  (req, res) => {
  Recruiter.find().then(profiles => {
    console.log(profiles);
    res.status(200).json(profiles)
  }).catch(err => res.json(err));
})

router.get('/recruiter', verifyToken,   (req, res) => {
  Recruiter.find({creator: req.userData.userId}).then(profile => {
    console.log(profile);
    res.status(200).json(profile)
  }).catch(err => res.json(err));
})

router.get('/recruiterById/:id', verifyToken,   (req, res) => {
  Recruiter.find({_id: req.params.id}).then(profile => {
    console.log(profile);
    res.status(200).json(profile)
  }).catch(err => res.json(err));
})


router.get('/publicProfiles',  (req, res) => {
  Profile.find()
  .then(profiles => {
    profiles.map(profile => {
      console.log(profile)
    })
    console.log(profiles);
    res.status(200).json(profiles)
  }).catch(err => res.json(err));
})

router.get('/publicRecruiters',  (req, res) => {
  Recruiter.find()
  .then(recruiters => {

    console.log(recruiters);
    res.status(200).json(recruiters)
  }).catch(err => res.json(err));
})

router.get('/publicProjects',  (req, res) => {
  Project.find()
  .populate('creator')
  .then(profiles => {
    console.log(profiles);
    res.status(200).json(profiles)
  }).catch(err => res.json(err));
})

router.get('/profile/:id',  (req, res) => {
  console.log(req.body);
  console.log(req.userData.userId);
  Profile.findOne({creator: req.userData.userId}).then(profile => {
    console.log(profile);
    res.status(200).json(profile)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/publicProfile/:id',  (req, res) => {
  console.log(req.body);

  Profile.findOne({_id: req.params.id})
  .populate('creator', '_id')
  .then(profile => {
    console.log(profile);
    res.status(200).json(profile)
  }).catch(err =>  res.status(400).json(err))
})


router.get('/jobs', verifyToken, (req, res) => {
  Job.find({creator: req.userData.userId}).then(jobs => {
    console.log(jobs)
    res.status(200).json(jobs)
  }).catch(err => res.json(err));
})

router.get('/job/:id', verifyToken, (req, res) => {
  Job.findOne({_id: req.params.id}).then(job => {
    res.status(200).json(job)
  }).catch(err =>  res.status(400).json(err))
})

router.get('/boosters', verifyToken, (req, res) => {
  Booster.find({creator: req.userData.userId}).then(boosters => {
    console.log(boosters)
    res.status(200).json(boosters)
  }).catch(err => res.json(err));
})

router.get('/booster/:id', verifyToken, (req, res) => {
  Booster.findOne({_id: req.params.id}).then(booster => {
    res.status(200).json(booster)
  }).catch(err =>  res.status(400).json(err))
})






module.exports = router;
