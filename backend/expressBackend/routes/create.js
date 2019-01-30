var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Profile = require('../models/profile');
var Education = require('../models/education');
var Experience = require('../models/experience');
var Skill = require('../models/skill');
var Job = require('../models/job');
var Booster = require('../models/booster');
var Project = require('../models/project');
var Content = require('../models/content');
var Problem = require('../models/problem');
const verifyToken = require('../middleware/verify-token');

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// create user

router.post('/user', (req, res) => {

  User.findOne({email: req.body.email}).then(user => {
    if(user) {
      res.status(400).json({message: 'There is already a user with that email'})
    } else {

        let isAdmin;
        let isRecruiter;

        if(req.body.email === 'stevo@stevo.com') {
            isAdmin = true
            isRecruiter = true
        } else {
          isAdmin = false
          isRecruiter = false
        }



      const newUser = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: isAdmin,
        isRecruiter: isRecruiter
      })

      bcrypt.genSalt(10, (err, salt ) => {
        bcrypt.hash(req.body.password, salt,  (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
          .then(user => res.status(200).json(user))
          .catch(err => res.json(err))
        })
      })
    }
  })
});

let selectedUser;
router.post('/token', (req, res) => {
  console.log(req.body)
  User.findOne({email: req.body.email})
    .then(user => {
      console.log(user)
      if(!user) {
       return res.status(400).json({message: 'You must be registered to log in'})
      }
      selectedUser = user;

     return  bcrypt.compare(req.body.password, user.password)
        .then(success => {
          console.log(success)
          if(!success) {
           return res.status(400).json({message: 'passwords do not match'})
          }

         const token =  jwt.sign({
           email: selectedUser.email,
           name: selectedUser.name,
           userId: selectedUser._id,
           isAdmin: selectedUser.isAdmin,
           isRecruiter: selectedUser.isRecruiter
         },
         'thisisthesecretyabbadabbado123',
         {expiresIn: '1h'}
         )
         res.status(200).json({
           token: token,
           expiresIn: '3600',
           userId: selectedUser._id,
           isAdmin: selectedUser.isAdmin,
           isRecruiter: selectedUser.isRecruiter
         })

        }).catch(err => console.log(err))
    })
})

router.post('/profile', verifyToken, (req, res) => {

  const newProfile = new Profile ({
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
    email: req.body.email,
    webSite: req.body.webSite,
    gitHub: req.body.gitHub,
    creator: req.userData.userId,
  })

  newProfile.save().then(profile => {
    res.status(200).json(profile)
  }).catch(err => res.json(err));


})

router.post('/education', verifyToken, (req, res ) => {
  const newEducation = new Education ({
    schoolName: req.body.schoolName,
    schoolType: req.body.schoolType,
    degree: req.body.degree,
    degreeType: req.body.degreeType,
    to: req.body.to,
    from: req.body.from,
    notes: req.body.notes,
    creator: req.userData.userId
  })

  newEducation.save().then(education => {
      res.status(200).json(education);
  }).catch(err => res.status(400).json(err))
})

router.post('/experience', verifyToken, (req, res ) => {
    const newExperience = new Experience({
      employer: req.body.employer,
      jobTitle: req.body.jobTitle,
      to: req.body.to,
      from: req.body.from,
      description: req.body.description,
      creator: req.userData.userId
    })

    console.log(newExperience + '1')

    newExperience.save().then(experience => {
      console.log(experience + '2');
      res.status(200).json(experience);
    }).catch(err => res.status(400).json(err))
})

router.post('/skill', verifyToken, (req, res) => {
  const newSkill = new Skill({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    years: req.body.years,
    creator: req.userData.userId
  })
  console.log(newSkill + '1')

  newSkill.save().then(skill => {
    console.log(newSkill +'2')
    res.status(200).json(skill)
  }).catch(err => res.status(400).json(err))
})

router.post('/project', verifyToken, (req, res) => {
  const newProject = new Project({
      name: req.body.name,
      description: req.body.description,
      skills: req.body.skills,
      framework: req.body.framework,
      backend: req.body.backend,
      database: req.body.database,
      link: req.body.link,
      creator: req.userData.userId
  })

  newProject.save().then(project => {
    res.status(200).json(project)
  }).catch(err => res.status(400).json(err))
})

router.post('/content', verifyToken, (req, res) => {
    const newContent = new Content({
      title: req.body.title,
      description: req.body.description,
      topic: req.body.topic,
      link: req.body.link,
      creator: req.userData.userId
    })

    newContent.save().then(content => {
      res.status(200).json(content);
    }).catch(err => res.status(400).json(err))
})

router.post('/problem', verifyToken, (req, res) => {
  const newProblem = new Problem({
    title: req.body.title,
    description: req.body.description,
    steps: req.body.steps,
    appliedLearning: req.body.appliedLearning,
    creator: req.userData.userId
  })

  newProblem.save().then(problem => {
    res.status(200).json(problem);
  }).catch(err => res.status(400).json(err))
})

router.post('/job', verifyToken, (req, res) => {
  const newJob = new Job({
    employer: req.body.employer,
    jobTitle: req.body.jobTitle,
    compensation: req.body.compensation,
    contract: req.body.contract,
    description: req.body.description,
    creator: req.userData.userId
  })

  newJob.save().then(job => {
    res.status(200).json(job);
  }).catch(err => res.status(400).json(err))
})

router.post('/booster', verifyToken, (req, res) => {
  const newBooster = new Booster({
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
    complete: req.body.complete,
    creator: req.userData.userId
  })

  newBooster.save().then(booster => {
    res.status(200).json(booster);
  }).catch(err => res.status(400).json(err))
})


module.exports = router;
