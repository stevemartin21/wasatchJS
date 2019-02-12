import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Profile } from '../models/profile';
import { Recruiter } from '../models/recruiter';
import { Skill } from '../models/skill';
import { Project } from '../models/project';
import { Education } from '../models/education';
import { Experience } from '../models/experience';
import { Content } from '../models/content';
import { Problem } from '../models/problem';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  constructor(private http: HttpClient, private router: Router) { }


  updateEducation(_id: string, schoolName: string,
    schoolType: string, degree: string, degreeType: string, from: string,
    to: string, notes: string )  {

      const updatedEducation = {
        _id: null,
        schoolName: schoolName,
        schoolType: schoolType,
        degree: degree,
        degreeType: degreeType,
        from: from,
        to: to,
        notes: notes
      };

      this.http.put(`http://localhost:3000/update/newEducation/${_id}`, updatedEducation).subscribe(
        response =>  console.log(response)
      );

      this.router.navigate(['/dashboard']);

  }

  updateExperience(_id: string, employer: string,
    jobTitle: string, from: string, to: string, description: string,
    experienceType: string, companyType: string)  {

      const updatedExperience = {
        _id: null,
        employer: employer,
        jobTitle: jobTitle,
        from: from,
        to: to,
        description: description,
        experienceType: experienceType,
        companyType: companyType
      };

      this.http.put(`http://localhost:3000/update/newExperience/${_id}`, updatedExperience)
      .subscribe(
        response =>  console.log(response)
      );

      this.router.navigate(['/dashboard']);

  }

  updateProject(_id: string, name: string,
    description: string, skills: string, framework: string,
     backend: string, database: string, link: string)  {
      const updatedProject = {
        _id: _id,
        name: name,
        description: description,
        skills: skills,
        framework: framework,
        backend: backend,
        database: database,
        link: link
      };
      this.http.put(`http://localhost:3000/update/newProject/${_id}`, updatedProject)
      .subscribe(
        response =>  console.log(response)
      );
      this.router.navigate(['/dashboard']);
  }

  updateSkill(_id: string, name: string,
    type: string, description: string, years: string)  {
      const updatedSkill = {
        _id: _id,
        name: name,
        type: type,
        description: description,
        years: years
      };
      this.http.put(`http://localhost:3000/update/newSkill/${_id}`, updatedSkill)
      .subscribe(
        response =>  console.log(response)
      );
      this.router.navigate(['/dashboard']);
  }

  updateContent(_id: string, title: string, description: string,
    topic: string, link: string, type: string)  {
      const updatedContent = {
        _id: _id,
        title: title,
        description: description,
        topic: topic,
        link: link,
        type: type
      };
      this.http.put(`http://localhost:3000/update/newContent/${_id}`, updatedContent)
      .subscribe(
        response =>  console.log(response)
      );
      this.router.navigate(['/dashboard']);
  }

  updateProfile(_id: string, fname: string, lname: string,
     phone: string, email: string, webSite: string,
     gitHub: string, image: string, jobType: string,
     companyType: string, frontEnd: string, backEnd: string,
     mobile: string, headline: string, highlight: string,
     philosophy: string, usp: string, level: string)  {

      let profileData;

      if (typeof image === 'object') {
        profileData = new FormData();

        profileData.append('fname', fname);
        profileData.append('lname', lname);
        profileData.append('phone', phone);
        profileData.append('email', email);
        profileData.append('webSite', webSite);
        profileData.append('gitHub', gitHub);
        profileData.append('image', image, email);
        profileData.append('jobType', jobType);
        profileData.append('companyType', companyType);
        profileData.append('frontEnd', frontEnd);
        profileData.append('backEnd', backEnd);
        profileData.append('mobile', mobile);
        profileData.append('headline', headline);
        profileData.append('highlight', highlight);
        profileData.append('philosophy', philosophy);
        profileData.append('usp', usp);
        profileData.append('level', level);
      } else {
        profileData = {
          fname: fname,
          lname: lname,
          phone: phone,
          email: email,
          webSite: webSite,
          gitHub: gitHub,
          imagePath: image,
          jobType: jobType,
          companyType: companyType,
          frontEnd: frontEnd,
          backEnd: backEnd,
          mobile: mobile,
          headline: headline,
          highlight: highlight,
          philosophy: philosophy,
          usp: usp,
          level: level

        };
      }

      console.log(profileData);
      console.log('Updated Profile'); //


      this.http.put(`http://localhost:3000/update/developerProfile/${_id}`, profileData)
      .subscribe(
        response =>  console.log(response)
      );
      this.router.navigate(['/dashboard']);
  }

  updateRecruiter(_id: string, fname: string, lname: string,
    phone: string, email: string, webSite: string, company: string,
     image: string | File, position: string,
     headline: string, highlight: string, philosophy: string,
     usp: string, specialty: string )  {

      let recruiterData;
      if (typeof image === 'object') {
         recruiterData = new FormData();

        recruiterData.append('fname', fname);
        recruiterData.append('lname', lname);
        recruiterData.append('phone', phone);
        recruiterData.append('email', email);
        recruiterData.append('webSite', webSite);
        recruiterData.append('company', company);
        recruiterData.append('image', image, email);
        recruiterData.append('position', position);
        recruiterData.append('highlight', highlight);
        recruiterData.append('philosophy', philosophy);
        recruiterData.append('usp', usp);
        recruiterData.append('specialty', specialty);
      } else {
        recruiterData = {
          _id: _id,
          fname: fname,
          lname: lname,
          phone: phone,
          email: email,
          webSite: webSite,
          company: company,
          imagePath: image,
          position: position,
          headline: headline,
          philosophy: philosophy,
          usp: usp,
          specialty: specialty
        };
      }

      console.log(recruiterData);


     this.http.put(`http://localhost:3000/update/recruiterProfile/${_id}`, recruiterData)
     .subscribe(response =>  console.log(response)
     );
     this.router.navigate(['/recruiterDashboard']);
 }

  updateProblem(_id: string, title: string, description: string,
    steps: string, appliedLearning: string)  {
     const updatedProblem = {
       _id: _id,
       title: title,
       description: description,
       steps: steps,
       appliendLearning: appliedLearning
     };
     this.http.put(`http://localhost:3000/update/newSolution/${_id}`, updatedProblem)
     .subscribe(
       response =>  console.log(response)
     );
     this.router.navigate(['/dashboard']);
 }


 updateJob(_id: string, employer: string, jobTitle: string,
  compensation: string, contract: string, description: string)  {
   const updatedJob = {
     _id: _id,
     employer: employer,
     jobTitle: jobTitle,
     compensation: compensation,
     contract: contract,
     description: description
   };
   this.http.put(`http://localhost:3000/update/newJob/${_id}`, updatedJob)
   .subscribe(
     response =>  console.log(response)
   );
   this.router.navigate(['/recruiterDashboard']);
}

updateBooster(_id: string, title: string, description: string,
  link: string, complete: string, level: string)  {
   const updatedBooster = {
     _id: _id,
     title: title,
     description: description,
     link: link,
      complete: complete,
      level: level
   };
   this.http.put(`http://localhost:3000/update/newBooster/${_id}`, updatedBooster)
   .subscribe(
     response =>  console.log(response)
   );
   this.router.navigate(['/recruiterDashboard']);
}

}

/*
schoolName: this.education.schoolName,
            schoolType: this.education.schoolType,
            degree: this.education.degree,
            degreeType: this.education.degreeType,
            from: this.education.from,
            to: this.education.to,
            notes: this.education.notes




*/
