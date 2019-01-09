import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';


@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

  form: FormGroup;

  constructor(private createDataService: CreateDataService) { }

  ngOnInit() {

    this.form = new FormGroup({
      employer: new FormControl(null, {validators: [Validators.required]}),
      jobTitle: new FormControl(null, {validators: [Validators.required]}),
      from: new FormControl(null, {validators: [Validators.required]}),
      to: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
    });

  }

  createExperience () {

    this.createDataService.createExperience(
      this.form.value.employer,
      this.form.value.jobTitle,
      this.form.value.from,
      this.form.value.to,
      this.form.value.description
    );
  }

}
