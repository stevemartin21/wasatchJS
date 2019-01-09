import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.scss']
})
export class AddEducationComponent implements OnInit {

  form: FormGroup;

  constructor(private createDataService: CreateDataService) { }

  ngOnInit() {
    this.form = new FormGroup({
      schoolName: new FormControl(null, {validators: [Validators.required]}),
      schoolType: new FormControl(null, {validators: [Validators.required]}),
      degree: new FormControl(null, {validators: [Validators.required]}),
      degreeType: new FormControl(null, {validators: [Validators.required]}),
      from: new FormControl(null, {validators: [Validators.required]}),
      to: new FormControl(null, {validators: [Validators.required]}),
      notes: new FormControl(null, {validators: [Validators.required]}),
    });

  }

  createEducation() {
    this.createDataService.createEducation(
      this.form.value.schoolName,
      this.form.value.schoolType,
      this.form.value.degree,
      this.form.value.degreeType,
      this.form.value.to,
      this.form.value.from,
      this.form.value.notes
    );
  }

}
