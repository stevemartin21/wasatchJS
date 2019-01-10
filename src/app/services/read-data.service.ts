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
export class ReadDataService {

  constructor(private http: HttpClient, private router: Router) { }

  getEducations() {
    return this.http.get<Education[]>('http://localhost:3000/read/educations');
  }

  getExperiences() {
    return this.http.get<Experience[]>('http://localhost:3000/read/experiences');
  }

  getSkills() {
    return this.http.get<Skill[]>('http://localhost:3000/read/skills');
  }

  getProjects() {
    return this.http.get<Project[]>('http://localhost:3000/read/projects');
  }

  getContents() {
    return this.http.get<Content[]>('http://localhost:3000/read/content');
  }

}
