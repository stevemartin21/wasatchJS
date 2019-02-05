import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Profile } from '../models/profile';
import { Recruiter } from '../models/recruiter';
import { Skill } from '../models/skill';
import { Project } from '../models/project';
import { Education } from '../models/education';
import { Job } from '../models/job';
import { Booster } from '../models/booster';
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

  getProfileInfo() {
    return this.http.get<any>('http://localhost:3000/read/profile');
  }

  getEducation(id) {
    return this.http.get<any>(`http://localhost:3000/read/newEducation/${id}`);
  }

  getExperiences() {
    return this.http.get<Experience[]>('http://localhost:3000/read/experiences');
  }

  getExperience(id) {
    return this.http.get<any>(`http://localhost:3000/read/newExperience/${id}`);
  }

  getSkills() {
    return this.http.get<Skill[]>('http://localhost:3000/read/skills');
  }

  getSkill(id) {
    return this.http.get<Skill>(`http://localhost:3000/read/newSkill/${id}`);
  }

  getProjects() {
    return this.http.get<Project[]>('http://localhost:3000/read/newProjects');
  }

  getProject(id) {
    return this.http.get<Project>(`http://localhost:3000/read/newProject/${id}`);
  }

  getContents() {
    return this.http.get<Content[]>('http://localhost:3000/read/content');
  }

  getContent(id) {
    return this.http.get<Content>(`http://localhost:3000/read/newContent/${id}`);
  }

  getDeveloperContent(id) {
    return this.http.get<Content>(`http://localhost:3000/read/developerContent/${id}`);
  }

  getProfiles() {
    return this.http.get<Profile[]>('http://localhost:3000/read/profiles');
  }

  getRecruiters() {
    return this.http.get<Recruiter[]>('http://localhost:3000/read/recruiters');
  }

  getRecruiter() {
    return this.http.get<Recruiter>('http://localhost:3000/read/recruiter');
  }

  getRecruiterById(id) {
    return this.http.get<Recruiter>(`http://localhost:3000/read/recruiter/${id}`);
  }

  getPublicProfiles() {
    return this.http.get<any[]>('http://localhost:3000/read/publicProfiles');
  }



  getPublicProjects() {
    return this.http.get<any[]>('http://localhost:3000/read/publicProjects');
  }

  getPublicProfile(id) {
    return this.http.get<any>(`http://localhost:3000/read/publicProfile/${id}`);
  }

  getProfile(id) {
    return this.http.get<Profile>(`http://localhost:3000/read/profile/${id}`);
  }



  getProblems() {
    return this.http.get<Problem[]>('http://localhost:3000/read/problems');
  }

  getProblem(id) {
    return this.http.get<Problem>(`http://localhost:3000/read/newSolution/${id}`);
  }

  getJobs() {
    return this.http.get<Job[]>('http://localhost:3000/read/jobs');
  }

  getJob(id) {
    return this.http.get<Job>(`http://localhost:3000/read/job/${id}`);
  }

  getBoosters() {
    return this.http.get<Booster[]>('http://localhost:3000/read/boosters');
  }

  getBooster(id) {
    return this.http.get<Booster>(`http://localhost:3000/read/booster/${id}`);
  }

}
