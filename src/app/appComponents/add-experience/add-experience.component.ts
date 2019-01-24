import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Experience} from '../../models/experience';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

  form: FormGroup;
  private  experienceId;
  private mode = 'create';
  experience: Experience;

  constructor(private createDataService: CreateDataService,
    private readDataService: ReadDataService,
    private updateDataService: UpdateDataService,
    public route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {

    this.form = new FormGroup({
      employer: new FormControl(null, {validators: [Validators.required]}),
      jobTitle: new FormControl(null, {validators: [Validators.required]}),
      from: new FormControl(null, {validators: [Validators.required]}),
      to: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('edit educations');
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.experienceId = paramMap.get('id');
        this.readDataService.getExperience(this.experienceId).subscribe(experience => {
          this.experience = experience;
          console.log(experience);
          console.log(this.experience);

          this.form.setValue({

            employer: this.experience.employer,
            jobTitle: this.experience.jobTitle,
            from: this.experience.from,
            to: this.experience.to,
            description: this.experience.description
          });
        });



      } else {
        this.mode = 'create';
        this.experienceId = null;
      }
    });

  }

  saveExperience () {

    if (this.form.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.createDataService.createExperience(
        this.form.value.employer,
        this.form.value.jobTitle,
        this.form.value.from,
        this.form.value.to,
        this.form.value.description
      );
    } else {
      this.updateDataService.updateExperience(
        this.experienceId,
        this.form.value.employer,
        this.form.value.jobTitle,
        this.form.value.from,
        this.form.value.to,
        this.form.value.description
      );
    }

    this.router.navigate(['/dashboard']);


  }

}
