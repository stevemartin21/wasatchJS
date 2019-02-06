import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DeleteDataService {

  constructor(private http: HttpClient,
    private router: Router) { }

  deleteEducation(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/newEducation/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteExperience(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/newExperience/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteSkill(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/newSkill/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteProject(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/newProject/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteContent(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/newContent/${id}`)
      .subscribe(response => console.log(response));

  }

  deleteProblem(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/newSolution/${id}`)
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
    this.http.delete(`http://localhost:3000/delete/newJob/${id}`)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/recruiterDashboard']);
      });

  }


  deleteBooster(id: string) {
    console.log('Clicked Delete Service');
    console.log(id);
    this.http.delete(`http://localhost:3000/delete/newBooster/${id}`)
      .subscribe(response =>  {
        //
        console.log(response);
        this.router.navigate(['/recruiterDashboard']);
      });

  }
}
