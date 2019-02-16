import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Profile } from '../models/profile';
import { Recruiter } from '../models/recruiter';
import { Job } from '../models/job';
import { Booster } from '../models/booster';
import { Skill } from '../models/skill';
import { Project } from '../models/project';
import { Education } from '../models/education';
import { Experience } from '../models/experience';
import { Content } from '../models/content';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateDataService {

  token: String;
  isAuth = false;
  isAdmin = false;
  front = false;
  isRecruiter = false;
  userId: String;
  expiresIn: String;
  frontCheck = new Subject<Boolean>();
  statusCheck = new Subject<Boolean>();
  recruiterCheck = new Subject<Boolean>();
  adminCheck = new Subject<Boolean>();
  userIdCheck  = new Subject<String>();


  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return this.token;
  }

  getUserId() {
    return this.userId;
  }

  getUserIdCheck() {
    console.log('User Id check was called');
    console.log(this.userIdCheck)
    return this.userIdCheck.asObservable();
  }

  getIsAuth() {
    return this.isAuth;
  }

  logout() {
    this.token = null;
    this.isAuth = false;
    this.statusCheck.next(false);
    this.adminCheck.next(false);
    this.recruiterCheck.next(false);
    this.frontCheck.next(true);
    this.isAdmin = false;
    this.isRecruiter = false;
    this.router.navigate(['/']);
  }

  getStatusCheck() {
   return this.statusCheck.asObservable();
  }

  getFrontCheck() {
    return this.frontCheck.asObservable();
   }

  getAdminCheck() {
    return this.adminCheck.asObservable();
   }

   getRecruiterCheck() {
    return this.recruiterCheck.asObservable();
   }

  createUser(name: string, email: string, type: string, password: string) {
    const newUser: User = {
      name: name,
      email: email,
      type: type,
      password: password
    };

    console.log(newUser);

    this.http.post('http://localhost:3000/create/user', newUser)
      .subscribe(user => {
        if (user) {
          this.router.navigate(['/login']);
        }

      }
    );
  }

  createToken(email: string, password: string) {
    const newToken = {
      email: email,
      password: password
    };
    this.http.post<{isAdmin: boolean, isRecruiter: boolean, type: string,
      token: string, expiresIn: string, userId: string}>('http://localhost:3000/create/token', newToken)
      .subscribe(response => {
        this.token = response.token;
        console.log(this.token);
        console.log(response);
        this.isAuth = true;
        this.expiresIn = response.expiresIn;
        this.userId = response.userId;
        if (response.type === 'recruiter') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }

        this.isRecruiter = response.isRecruiter;
        console.log(this.isAdmin);
        console.log(this.isRecruiter);
        this.userIdCheck.next(this.userId);
        this.adminCheck.next(this.isAdmin);
        this.recruiterCheck.next(this.isRecruiter);
        if (this.isAdmin ) {
          this.statusCheck.next(false);
        } else {
          this.statusCheck.next(true);
        }

        this.frontCheck.next(false);

        if (this.isAdmin ) {
          this.router.navigate(['/recruiterDashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }


      });
  }

  createProfile (fname: string, lname: string, phone: string, email: string,
    webSite: string, gitHub: string, image: string,
    jobType: string, companyType: string, frontEnd: string, backEnd: string,
    mobile: string, headline: string, highlight: string, philosophy: string,
    usp: string, level: string) {
      const profileData = new FormData();

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

      console.log(profileData);


      this.http.post('http://localhost:3000/create/profile', profileData)
        .subscribe(response => console.log(response));
  }

  createRecruiter (fname: string, lname: string,
     phone: string, email: string, webSite: string,
      company: string, image: string, position: string,
      headline: string, highlight: string, philosophy: string,
      usp: string, specialty: string) {

    console.log('recruiter created 1');
    const recruiterData = new FormData();

    recruiterData.append('fname', fname);
    recruiterData.append('lname', lname);
    recruiterData.append('phone', phone);
    recruiterData.append('email', email);
    recruiterData.append('webSite', webSite);
    recruiterData.append('company', company);
    recruiterData.append('image', image, email);
    recruiterData.append('position', position);
    recruiterData.append('headline', headline);
    recruiterData.append('highlight', highlight);
    recruiterData.append('philosophy', philosophy);
    recruiterData.append('usp', usp);
    recruiterData.append('specialty', specialty);


    console.log(recruiterData);


    this.http.post<{message: string, recruiter: Recruiter}>('http://localhost:3000/create/recruiter', recruiterData)
      .subscribe(response => console.log(response));
}

  createEducation(schoolName: string, schoolType: string, degree: string,
    degreeType: string, from: string, to: string, notes: string) {

      const newEducation: Education = {
        _id: null,
        schoolName: schoolName,
        schoolType: schoolType,
        degree: degree,
        degreeType: degreeType,
        from: from,
        to: to,
        notes: notes
      };

      this.http.post('http://localhost:3000/create/newEducation', newEducation)
        .subscribe(response => console.log(response));

  }

  createExperience (
    employer: string, jobTitle: string, from: string,
    to: string, description: string, experienceType: string,
  companyType: string
  ) {
    const newExperience: Experience = {
        _id: null,
        employer: employer,
        jobTitle: jobTitle,
        from: from,
        to: to,
        description: description,
        experienceType: experienceType,
        companyType: companyType

    };

    this.http.post('http://localhost:3000/create/newExperience', newExperience)
      .subscribe(response => console.log(response));
  }

  createSkill(name: string, type: string, description: string, years: string) {
    const newSkill: Skill = {
      _id: null,
      name: name,
      type: type,
      description: description,
      years: years
    };

    this.http.post('http://localhost:3000/create/newSkill', newSkill)
      .subscribe(response => console.log(response));
  }

  createProject(name: string, description: string, skills: string, framework: string,
    backend: string, database: string, link: string) {
        const newProject: Project = {
          _id: null,
          name: name,
          description: description,
          skills: skills,
          framework: framework,
          backend: backend,
          database: database,
          link: link
        };

        this.http.post('http://localhost:3000/create/newProject', newProject)
          .subscribe(response => console.log(response));
    }

    createContent(title: string, description: string, topic: string,
       link: string, type: string) {
      const newContent: Content = {
        _id: null,
        title: title,
        description: description,
        topic: topic,
        link: link,
        type: type
      };

      this.http.post('http://localhost:3000/create/newContent', newContent)
        .subscribe(response  => console.log(response));
    }

    createProblem(title: string,  description: string, steps: string, appliedLearning: string) {
      const newProblem = {
        _id: null,
        title: title,
        description: description,
        steps: steps,
        appliedLearning: appliedLearning
      };

      console.log(newProblem);

      this.http.post('http://localhost:3000/create/newSolution', newProblem)
        .subscribe(response => console.log(response));
    }

    createJob(_id: string, employer: string, jobTitle: string,
      compensation: string, contract: string, description: string ) {
        const newJob = {
          _id: null,
          employer: employer,
          jobTitle: jobTitle,
          compensation: compensation,
          contract: contract,
          description: description
        };

        this.http.post('http://localhost:3000/create/newJob', newJob)
          .subscribe(response => console.log(response));
    }

    createBooster(_id: string, title: string, description: string,
      link: string, complete: string, level: string) {
          const newBooster = {
            _id: null,
            title: title,
            description: description,
            link: link,
            complete: complete,
            level: level
          };

          console.log(newBooster);

          this.http.post('http://localhost:3000/create/newBooster', newBooster)
            .subscribe(response => {
              console.log(response);
            });
      }
}

/*
//

*/
