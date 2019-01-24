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
export class ReadDataService {

  constructor(private http: HttpClient, private router: Router) { }

  getEducations() {
    return this.http.get<Education[]>('http://localhost:3000/read/educations');
  }

  getEducation(id) {
    return this.http.get<Education>(`http://localhost:3000/read/education/${id}`);
  }

  getExperiences() {
    return this.http.get<Experience[]>('http://localhost:3000/read/experiences');
  }

  getExperience(id) {
    return this.http.get<Experience>(`http://localhost:3000/read/experience/${id}`);
  }

  getSkills() {
    return this.http.get<Skill[]>('http://localhost:3000/read/skills');
  }

  getSkill(id) {
    return this.http.get<Skill>(`http://localhost:3000/read/skill/${id}`);
  }

  getProjects() {
    return this.http.get<Project[]>('http://localhost:3000/read/projects');
  }

  getProject(id) {
    return this.http.get<Project>(`http://localhost:3000/read/project/${id}`);
  }

  getContents() {
    return this.http.get<Content[]>('http://localhost:3000/read/content');
  }

  getContent(id) {
    return this.http.get<Content>(`http://localhost:3000/read/content/${id}`);
  }

  getProfiles() {
    return this.http.get<Profile[]>('http://localhost:3000/read/profiles');
  }

  getProfile(id) {
    return this.http.get<Profile>(`http://localhost:3000/read/profile/${id}`);
  }

  getProblems() {
    return this.http.get<Problem[]>('http://localhost:3000/read/problems');
  }

  getProblem(id) {
    return this.http.get<Problem>(`http://localhost:3000/read/problem/${id}`);
  }

}
