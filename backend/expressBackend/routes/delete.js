var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Profile = require('../models/profile');
var Recruiter = require('../models/recruiter')
var Education = require('../models/education');
var Experience = require('../models/experience');
var Skill = require('../models/skill');
var Project = require('../models/project');
var Content = require('../models/content');
var Problem = require('../models/problem');
var Job = require('../models/job');
var Booster = require('../models/booster');
const verifyToken = require('../middleware/verify-token');

// create user

// new delete

router.delete('/newExperience/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const removeIndex = profile.experience
      .map(item => item.id)
      .indexOf(req.params.id);

      profile.experience.splice(removeIndex, 1);

      profile.save().then(profile => {
        res.status(200).json(profile)
      })
        .catch(err => res.status(400).json(err))
    })
})

router.delete('/newEducation/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const removeIndex = profile.education
      .map(item => item.id)
      .indexOf(req.params.id);

      profile.education.splice(removeIndex, 1);

      profile.save().then(profile => {
        res.status(200).json(profile)
      })
        .catch(err => res.status(400).json(err))
    })
})

router.delete('/newSkill/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const removeIndex = profile.skills
      .map(item => item.id)
      .indexOf(req.params.id);

      profile.skills.splice(removeIndex, 1);

      profile.save().then(profile => {
        res.status(200).json(profile)
      })
        .catch(err => res.status(400).json(err))
    })
})

router.delete('/newProject/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const removeIndex = profile.projects
      .map(item => item.id)
      .indexOf(req.params.id);

      profile.projects.splice(removeIndex, 1);

      profile.save().then(profile => {
        res.status(200).json(profile)
      })
        .catch(err => res.status(400).json(err))
    })
})

router.delete('/newContent/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const removeIndex = profile.content
      .map(item => item.id)
      .indexOf(req.params.id);

      profile.content.splice(removeIndex, 1);

      profile.save().then(profile => {
        res.status(200).json(profile)
      })
        .catch(err => res.status(400).json(err))
    })
})

router.delete('/newSolution/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const removeIndex = profile.solutions
      .map(item => item.id)
      .indexOf(req.params.id);

      profile.solutions.splice(removeIndex, 1);

      profile.save().then(profile => {
        res.status(200).json(profile)
      })
        .catch(err => res.status(400).json(err))
    })
})



router.delete('/profile/:id', verifyToken, (req, res) => {
  console.log('Delete Yo yo');
  console.log(req.params.id);
  Profile.deleteOne({_id: req.params.id, creator: req.userData.userId})
    .then(profile => {
      res.status(200).json(profile);
    }).catch(err => res.json(err));
})

router.delete('/newBooster/:id', verifyToken, (req, res) => {
  Recruiter.findOne({creator: req.userData.userId})
    .then(recruiter => {
      const removeIndex = recruiter.boosters
      .map(item => item.id)
      .indexOf(req.params.id);

      recruiter.boosters.splice(removeIndex, 1);

      recruiter.save().then(recruiter => {
        res.status(200).json(recruiter)
      })
        .catch(err => res.status(400).json(err))
    })
})

router.delete('/newJob/:id', verifyToken, (req, res) => {
  console.log(req.param.id)
  Recruiter.findOne({creator: req.userData.userId})
    .then(recruiter => {
      console.log(recruiter);
      const removeIndex = recruiter.jobs
      .map(item => item.id)
      .indexOf(req.params.id);
      console.log(removeIndex);

      recruiter.jobs.splice(removeIndex, 1);

      recruiter.save().then(recruiter => {
        res.status(200).json(recruiter)
      })
        .catch(err => res.status(400).json(err))
    })
})







module.exports = router;
