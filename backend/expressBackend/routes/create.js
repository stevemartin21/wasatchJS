var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Profile = require('../models/profile');
var Education = require('../models/education');
var Experience = require('../models/experience');
var Skill = require('../models/skill');
var Project = require('../models/project');
var Content = require('../models/content');

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// create user

router.post('/user', (req, res) => {

  User.findOne({email: req.body.email}).then(user => {
    if(user) {
      res.status(400).json({message: 'There is already a user with that email'})
    } else {

      const newUser = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
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
  User.findOne({email: req.body.email})
    .then(user => {
      if(!user) {
       return res.status(400).json({message: 'You must be registered to log in'})
      }
      selectedUser = user;

     return  bcrypt.compare(req.body.password, user.password)
        .then(success => {
          if(!success) {
           return res.status(400).json({message: 'passwords do not match'})
          }

         const token =  jwt.sign({
           email: selectedUser.email,
           name: selectedUser.name,
           userId: selectedUser._id
         },
         'thisisthesecretyabbadabbado123',
         {expiresIn: '1h'}
         )
         res.status(200).json({
           token: token,
           expiresIn: '3600',
           userId: selectedUser._id
         })

        }).catch(err => console.log(err))
    })
})

router.post('/profile', (req, res) => {
  const newProfile = new Profile ({
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
    email: req.body.email,
    webSite: req.body.webSite,
    gitHub: req.body.gitHub
  })

  newProfile.save().then(profile => {
    res.status(200).json(profile)
  }).catch(err => res.json(err));


})

router.post('/education', (req, res ) => {
  const newEducation = new Education ({
    schoolName: req.body.schoolName,
    schoolType: req.body.schoolType,
    degree: req.body.degree,
    degreeType: req.body.degreeType,
    to: req.body.to,
    from: req.body.from,
    notes: req.body.notes
  })

  newEducation.save().then(education => {
      res.status(200).json(education);
  }).catch(err => res.status(400).json(err))
})

router.post('/experience', (req, res ) => {
    const newExperience = new Experience({
      employer: req.body.employer,
      jobTitle: req.body.jobTitle,
      to: req.body.to,
      from: req.body.from,
      description: req.body.description
    })

    console.log(newExperience + '1')

    newExperience.save().then(experience => {
      console.log(experience + '2');
      res.status(200).json(experience);
    }).catch(err => res.status(400).json(err))
})

router.post('/skill', (req, res) => {
  const newSkill = new Skill({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    years: req.body.years
  })
  console.log(newSkill + '1')

  newSkill.save().then(skill => {
    console.log(newSkill +'2')
    res.status(200).json(skill)
  }).catch(err => res.status(400).json(err))
})

router.post('/project', (req, res) => {
  const newProject = new Project({
      name: req.body.name,
      description: req.body.description,
      skills: req.body.skills,
      framework: req.body.framework,
      backend: req.body.backend,
      database: req.body.database,
      link: req.body.link
  })

  newProject.save().then(project => {
    res.status(200).json(project)
  }).catch(err => res.status(400).json(err))
})

router.post('/content', (req, res) => {
    const newContent = new Content({
      title: req.body.title,
      description: req.body.description,
      topic: req.body.topic,
      link: req.body.link
    })

    newContent.save().then(content => {
      res.status(200).json(content);
    }).catch(err => res.status(400).json(err))
})

module.exports = router;
