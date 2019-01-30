import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';

import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Job} from '../../models/job';
import { Router } from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  form: FormGroup;
  private  jobId;
  private mode = 'create';
  job: Job;

  constructor(private createDataService: CreateDataService,
    private readDataService: ReadDataService,
    private updateDataService: UpdateDataService,
    public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.form = new FormGroup({
      employer: new FormControl(null, {validators: [Validators.required]}),
      jobTitle: new FormControl(null, {validators: [Validators.required]}),
      compensation: new FormControl(null, {validators: [Validators.required]}),
      contract: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('edit educations');
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.jobId = paramMap.get('id');
        this.readDataService.getJob(this.jobId).subscribe(job => {
          this.job = job;
          console.log(job);
          console.log(this.job);

          this.form.setValue({
            employer: this.job.employer,
            jobTitle: this.job.jobTitle,
          compensation: this.job.compensation,
            contract: this.job.contract,
            description: this.job.description
          });
        });
      } else {
        this.mode = 'create';
        this.jobId = null;
      }
    });
  }

  saveJob() {

    if ( this.form.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.createDataService.createJob(
        null,
        this.form.value.employer,
        this.form.value.jobTitle,
        this.form.value.compensation,
        this.form.value.contract,
        this.form.value.description
      );
    } else {
      this.updateDataService.updateJob(
        this.jobId,
        this.form.value.employer,
        this.form.value.jobTitle,
        this.form.value.compensation,
        this.form.value.contract,
        this.form.value.description
      );
    }

    this.router.navigate(['/recruiterDashboard']);



  }

}

/*

export interface Experience {
  _id: String;
  employer: String;
  jobTitle: String;
  compensation: String;
  contract: String;
  description: String;
}

*/
