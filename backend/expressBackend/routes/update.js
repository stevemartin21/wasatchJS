var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Profile = require('../models/profile');
var Education = require('../models/education');
var Experience = require('../models/experience');
var Skill = require('../models/skill');
var Project = require('../models/project');
var Job = require('../models/job');
var Booster = require('../models/booster');
var Recruiter = require('../models/recruiter');
var Content = require('../models/content');
var Problem = require('../models/problem');
const multer = require("multer");

const verifyToken = require('../middleware/verify-token');

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

// create user

//  Experience

router.put('/newExperience/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      console.log(profile)
      const findIndex = profile.experience
      .map(item => item.id)
      .indexOf(req.params.id);

      const updatedExperience = {
        employer: req.body.employer,
        jobTitle: req.body.jobTitle,
        to: req.body.to,
        from: req.body.from,
        description: req.body.description,
        experienceType: req.body.experienceType,
        companyType: req.body.companyType
      }
      console.log(updatedExperience)

       profile.experience.splice(findIndex, 1);
       profile.experience.unshift(updatedExperience)
       profile.save().then(foundProfile => {
        res.status(200).json(foundProfile)
       })
    }).catch(err => res.status(400).json(err));
})

router.put('/newEducation/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      console.log(profile)
      const findIndex = profile.education
      .map(item => item.id)
      .indexOf(req.params.id);

      const updatedEducation = {
        schoolName: req.body.schoolName,
        schoolType: req.body.schoolType,
        degree: req.body.degree,
        degreeType: req.body.degreeType,
        to: req.body.to,
        from: req.body.from,
        notes: req.body.notes
      }
      console.log(updatedEducation)

       profile.education.splice(findIndex, 1);
       profile.education.unshift(updatedEducation)
       profile.save().then(foundProfile => {
        res.status(200).json(foundProfile)
       })
    }).catch(err => res.status(400).json(err));
})

router.put('/newSkill/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      console.log(profile);
      const findIndex = profile.skills
      .map(item => item.id)
      .indexOf(req.params.id);

      const updatedSkills = {
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        years: req.body.years
      }
      console.log(updatedSkills)

       profile.skills.splice(findIndex, 1);
       profile.skills.unshift(updatedSkills)
       profile.save().then(foundProfile => {
        res.status(200).json(foundProfile)
       })
    }).catch(err => res.status(400).json(err));
})

router.put('/newContent/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      console.log(profile);
      const findIndex = profile.skills
      .map(item => item.id)
      .indexOf(req.params.id);

      const updatedContent = {
        title: req.body.title,
        description: req.body.description,
        topic: req.body.topic,
        link: req.body.link,
        type: req.body.type
      }
      console.log(updatedContent)

       profile.content.splice(findIndex, 1);
       profile.content.unshift(updatedContent)
       profile.save().then(foundProfile => {
        res.status(200).json(foundProfile)
       })
    }).catch(err => res.status(400).json(err));
})

router.put('/newProject/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      console.log(profile);
      const findIndex = profile.skills
      .map(item => item.id)
      .indexOf(req.params.id);

      const updatedProject = {
        description: req.body.description,
        skills: req.body.skills,
        framework: req.body.framework,
        backend: req.body.backend,
        database: req.body.database,
        link: req.body.link
      }
      console.log(updatedProject)

       profile.projects.splice(findIndex, 1);
       profile.projects.unshift(updatedProject)
       profile.save().then(foundProfile => {
        res.status(200).json(foundProfile)
       })
    }).catch(err => res.status(400).json(err));
})

router.put('/newSolution/:id', verifyToken, (req, res) => {
  Profile.findOne({creator: req.userData.userId})
    .then(profile => {
      console.log(profile);
      const findIndex = profile.skills
      .map(item => item.id)
      .indexOf(req.params.id);

      const updatedSolution = {
        title: req.body.title,
        description: req.body.description,
        steps: req.body.steps,
        appliedLearning: req.body.appliedLearning
      }
      console.log(updatedSolution)

       profile.solutions.splice(findIndex, 1);
       profile.solutions.unshift(updatedSolution)
       profile.save().then(foundProfile => {
        res.status(200).json(foundProfile)
       })
    }).catch(err => res.status(400).json(err));
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


router.put('/newBooster/:id', verifyToken, (req, res) => {
  Recruiter.findOne({creator: req.userData.userId})
    .then(recruiter => {
      console.log(recruiter);
      const findIndex = recruiter.boosters
      .map(item => item.id)
      .indexOf(req.params.id);

      const updatedBooster = {
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        complete: req.body.complete,
        level: req.body.level
      }
      console.log(updatedBooster)

       recruiter.boosters.splice(findIndex, 1);
       recruiter.boosters.unshift(updatedBooster)
       recruiter.save().then(foundProfile => {
        res.status(200).json(foundProfile)
       })
    }).catch(err => res.status(400).json(err));
})

router.put('/newJob/:id', verifyToken, (req, res) => {
  console.log(req.param.id);
  Recruiter.findOne({creator: req.userData.userId})
    .then(recruiter => {
      console.log(recruiter);
      const findIndex = recruiter.jobs
      .map(item => item.id)
      .indexOf(req.params.id);

      const updatedJob = {
        employer: req.body.employer,
        jobTitle: req.body.jobTitle,
        compensation: req.body.compensation,
        contract: req.body.contract,
        description: req.body.description
      }
      console.log(updatedJob)

       recruiter.jobs.splice(findIndex, 1);
       recruiter.jobs.unshift(updatedJob)
       recruiter.save().then(foundProfile => {
        res.status(200).json(foundProfile)
       })
    }).catch(err => res.status(400).json(err));
})

router.put('/recruiterProfile/:id',
 verifyToken,
 multer({ storage: storage }).single("image"),
  (req, res) => {
    console.log(req.body); //

    let imagePath = req.body.imagePath;
    if (req.file) {
      const url = req.protocol + "://" + req.get("host");
      imagePath = url + "/images/" + req.file.filename
    }
  const newRecruiter = {

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
    imagePath: imagePath

  }

  console.log(newRecruiter);

  Recruiter.updateOne({_id: req.params.id }, newRecruiter)
    .then(result => {
      if (result.nModified > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    }).catch(err => res.json(err));
})

router.put('/developerProfile/:id',
 verifyToken,
 multer({ storage: storage }).single("image"),
  (req, res) => {
    console.log(req.body); //

    let imagePath = req.body.imagePath;
    if (req.file) {
      const url = req.protocol + "://" + req.get("host");
      imagePath = url + "/images/" + req.file.filename
    }
  const newDeveloper = {

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
    imagePath: imagePath

  }

  console.log(newDeveloper);

  Profile.updateOne({_id: req.params.id }, newDeveloper)
    .then(result => {
      if (result.nModified > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    }).catch(err => res.json(err));
})




module.exports = router;


