import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  form: FormGroup;

  constructor(private createDataService: CreateDataService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
      skills: new FormControl(null, {validators: [Validators.required]}),
      framework: new FormControl(null, {validators: [Validators.required]}),
      backend: new FormControl(null, {validators: [Validators.required]}),
      database: new FormControl(null, {validators: [Validators.required]}),
      link: new FormControl(null, {validators: [Validators.required]}),
    })
  }

  createProject () {
      this.createDataService.createProject(
        this.form.value.name,
        this.form.value.description,
        this.form.value.skills,
        this.form.value.framework,
        this.form.value.backend,
        this.form.value.database,
        this.form.value.link
      )
  }

}

/*
export interface Project {
  name: String;
  description: String;
  skills: String;
  framework: String;
  backend: String;
  link: String;
}

*/
