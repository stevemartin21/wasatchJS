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
import { Job } from '../models/job';
import { Booster } from '../models/booster';

@Injectable({
  providedIn: 'root'
})
export class DeleteDataService {

  constructor(private http: HttpClient) { }

  deleteEducation(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/education/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteExperience(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/experience/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteSkill(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/skill/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteProject(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/project/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteContent(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/content/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteProblem(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/problem/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteProfile(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/profile/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteJob(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/job/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteBooster(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/booster/${id}`)
      .subscribe(response => console.log(response));

  }
}
