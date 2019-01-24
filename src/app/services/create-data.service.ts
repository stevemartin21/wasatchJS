import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Profile } from '../models/profile';
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
  userId: String;
  expiresIn: String;
  statusCheck = new Subject<Boolean>();


  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuth;
  }

  logout() {
    this.token = null;
    this.isAuth = false;
    this.statusCheck.next(false);
    this.router.navigate(['/']);
  }

  getStatusCheck() {
   return this.statusCheck.asObservable();
  }

  createUser(name: string, email: string, password: string) {
    const newUser: User = {
      name: name,
      email: email,
      password: password
    };

    console.log(newUser);

    this.http.post('http://localhost:3000/create/user', newUser).subscribe(
      user => console.log(user)
    );
  }

  createToken(email: string, password: string) {
    const newToken = {
      email: email,
      password: password
    };
    this.http.post<{token: string, expiresIn: string, userId: string}>('http://localhost:3000/create/token', newToken)
      .subscribe(response => {
        this.token = response.token;
        this.isAuth = true;
        this.expiresIn = response.expiresIn;
        this.userId = response.userId;
        this.statusCheck.next(true);
        this.router.navigate(['/dashboard']);

      });
  }

  createProfile (fname: string, lname: string, phone: string, email: string, webSite: string, gitHub: string) {
      const newProfile: Profile = {
        _id: null,
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        webSite: webSite,
        gitHub: gitHub
      };

      this.http.post('http://localhost:3000/create/profile', newProfile)
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

      this.http.post('http://localhost:3000/create/education', newEducation)
        .subscribe(response => console.log(response));

  }

  createExperience (
    employer: string, jobTitle: string, from: string,
    to: string, description: string
  ) {
    const newExperience: Experience = {
        _id: null,
        employer: employer,
        jobTitle: jobTitle,
        from: from,
        to: to,
        description: description
    };

    this.http.post('http://localhost:3000/create/experience', newExperience)
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

    this.http.post('http://localhost:3000/create/skill', newSkill)
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

        this.http.post('http://localhost:3000/create/project', newProject)
          .subscribe(response => console.log(response));
    }

    createContent(title: string, description: string, topic: string, link: string) {
      const newContent: Content = {
        _id: null,
        title: title,
        description: description,
        topic: topic,
        link: link
      };

      this.http.post('http://localhost:3000/create/content', newContent)
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

      this.http.post('http://localhost:3000/create/problem', newProblem)
        .subscribe(response => console.log(response));
    }
}
