import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Job} from '../../models/job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-booster',
  templateUrl: './add-booster.component.html',
  styleUrls: ['./add-booster.component.scss']
})
export class AddBoosterComponent implements OnInit {

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
  }

  saveJob() {

  }

}
