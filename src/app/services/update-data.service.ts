import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Profile } from '../models/profile';
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
    jobTitle: string, from: string, to: string, description: string)  {

      const updatedExperience = {
        _id: null,
        employer: employer,
        jobTitle: jobTitle,
        from: from,
        to: to,
        description: description
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
    topic: string, link: string)  {
      const updatedContent = {
        _id: _id,
        title: title,
        description: description,
        topic: topic,
        link: link
      };
      this.http.put(`http://localhost:3000/update/newContent/${_id}`, updatedContent)
      .subscribe(
        response =>  console.log(response)
      );
      this.router.navigate(['/dashboard']);
  }

  updateProfile(_id: string, fname: string, lname: string,
     phone: string, email: string, webSite: string, gitHub: string)  {
      const updatedProfile = {
        _id: _id,
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        webSite: webSite,
        gitHub: gitHub
      };
      this.http.put(`http://localhost:3000/update/profile/${_id}`, updatedProfile)
      .subscribe(
        response =>  console.log(response)
      );
      this.router.navigate(['/dashboard']);
  }

  updateRecruiter(_id: string, fname: string, lname: string,
    phone: string, email: string, webSite: string, company: string)  {
     const updatedRecruiter = {
       _id: _id,
       fname: fname,
       lname: lname,
       phone: phone,
       email: email,
       webSite: webSite,
       company: company
     };
     this.http.put(`http://localhost:3000/update/profile/${_id}`, updatedRecruiter)
     .subscribe(
       response =>  console.log(response)
     );
     this.router.navigate(['/dashboard']);
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
   this.http.put(`http://localhost:3000/update/job/${_id}`, updatedJob)
   .subscribe(
     response =>  console.log(response)
   );
   this.router.navigate(['/dashboard']);
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
   this.http.put(`http://localhost:3000/update/booster/${_id}`, updatedBooster)
   .subscribe(
     response =>  console.log(response)
   );
   this.router.navigate(['/dashboard']);
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
