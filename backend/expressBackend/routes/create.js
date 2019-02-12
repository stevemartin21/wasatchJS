var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Profile = require('../models/profile');
var Recruiter = require('../models/recruiter');
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

const multer = require("multer");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "./images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});

router.post('/user', (req, res) => {
  console.log(req.body.password)

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
        type: req.body.type,
        isAdmin: isAdmin,
        isRecruiter: isRecruiter
      })

      console.log(newUser)

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
           type: selectedUser.type,
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
           type: selectedUser.type,
           isRecruiter: selectedUser.isRecruiter
         })

        }).catch(err => console.log(err))
    })
})

router.post('/profile', verifyToken,
multer({ storage: storage }).single("image"),
 (req, res) => {

  const url = req.protocol + "://" + req.get("host");
    console.log(url);
    console.log(req.file.filename);
    console.log('2')

  const newProfile = new Profile ({
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
    email: req.body.email,
    webSite: req.body.webSite,
    gitHub: req.body.gitHub,
    jobType: req.body.jobType,
    companyType: req.body.companyType,
    frontEnd: req.body.frontEnd,
    backEnd: req.body.backEnd,
    mobile: req.body.mobile,
    headline: req.body.headline,
    highlight: req.body.highlight,
    philosophy: req.body.philosophy,
    usp: req.body.usp,
    level: req.body.level,
    imagePath: url + "/images/" + req.file.filename,
    creator: req.userData.userId,
  })

  newProfile.save().then(profile => {
    res.status(200).json(profile)
  }).catch(err => res.json(err));

})

router.post('/recruiter',
 verifyToken,
 multer({ storage: storage }).single("image"),
  (req, res) => {

    console.log('1')

    const url = req.protocol + "://" + req.get("host");
    console.log(url);
    console.log(req.file.filename);
    console.log('2')
  const newRecruiter = new Recruiter ({
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
    email: req.body.email,
    webSite: req.body.webSite,
    company: req.body.company,
    position: req.body.position,
    headline: req.body.headline,
    highlight: req.body.highlight,
    philosophy: req.body.philosophy,
    usp: req.body.usp,
    specialty: req.body.specialty,
    imagePath: url + "/images/" + req.file.filename,
    creator: req.userData.userId,
  })
  console.log('3')

  console.log(newRecruiter);

  newRecruiter.save().then(recruiter => {
    console.log('4');
    console.log(recruiter)

    res.status(200).json({
      message: 'Image profile created successfully',
      recruiter: {
        ...recruiter,

      }

    })
  }).catch(err => res.json(err));

})

// new experience //  creator: req.userData.userId,

router.post('/newExperience', verifyToken, (req, res) => {
    Profile.findOne({creator: req.userData.userId})
      .then(profile => {
        const newExp = {
          employer: req.body.employer,
          jobTitle: req.body.jobTitle,
          from: req.body.from,
          to: req.body.to,
          description: req.body.description,
          experienceType: req.body.experienceType,
          companyType: req.body.companyType
        }
        profile.experience.unshift(newExp);

        profile.save().then(profile => {
          res.status(200).json(profile)
        })
      })
})

// new Education

router.post('/newEducation', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const newEdu = {
          schoolName: req.body.schoolName,
          schoolType: req.body.schoolType,
          degree: req.body.degree,
          degreeType: req.body.degreeType,
          to: req.body.to,
          from: req.body.from,
          notes: req.body.notes
      }
      profile.education.unshift(newEdu);

      profile.save().then(profile => {
        res.status(200).json(profile)
      })
    })
})

router.post('/newSkill', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const newSkill = {
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        years: req.body.years,
      }
      profile.skills.unshift(newSkill);

      profile.save().then(profile => {
        res.status(200).json(profile)
      })
    })
})

router.post('/newProject', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const newProject = {
        name: req.body.name,
        description: req.body.description,
        skills: req.body.skills,
        framework: req.body.framework,
        backend: req.body.backend,
        database: req.body.database,
        link: req.body.link,
      }
      profile.projects.unshift(newProject);

      profile.save().then(profile => {
        res.status(200).json(profile)
      })
    })
})

router.post('/newSolution', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const newSolution = {
        title: req.body.title,
        description: req.body.description,
        steps: req.body.steps,
        appliedLearning: req.body.appliedLearning,
      }
      profile.solutions.unshift(newSolution);

      profile.save().then(profile => {
        res.status(200).json(profile)
      })
    })
})

router.post('/newContent', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      const newContent = {
        title: req.body.title,
        description: req.body.description,
        topic: req.body.topic,
        link: req.body.link,
        type: req.body.type
      }
      profile.content.unshift(newContent);

      profile.save().then(profile => {
        res.status(200).json(profile)
      })
    })
})


router.post('/newJob', verifyToken, (req, res) => {
  Recruiter.findOne({creator: req.userData.userId})
    .then(recruiter => {
      const newJob = {
        employer: req.body.employer,
        jobTitle: req.body.jobTitle,
        compensation: req.body.compensation,
        contract: req.body.contract,
        description: req.body.description
      }
      recruiter.jobs.unshift(newJob);

      recruiter.save().then(recruiter => {
        res.status(200).json(recruiter)
      })
    })
})

router.post('/newBooster', verifyToken, (req, res) => {
  Recruiter.findOne({creator: req.userData.userId})
    .then(recruiter => {
      const newBooster = {
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        complete: req.body.complete,
        level: req.body.level,
      }
      recruiter.boosters.unshift(newBooster);

      recruiter.save().then(recruiter => {
        res.status(200).json(recruiter)
      })
    })
})


module.exports = router;
