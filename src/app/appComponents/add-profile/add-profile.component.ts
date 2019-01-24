import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Profile} from '../../models/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  form: FormGroup;
  private  profileId;
  private mode = 'create';
  profile: Profile;

  constructor(
    private createDataService: CreateDataService,
    private readDataService: ReadDataService,
    private updateDataService: UpdateDataService,
    public route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      fname: new FormControl(null, {validators: [Validators.required]}),
      lname: new FormControl(null, {validators: [Validators.required]}),
      phone: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required]}),
      webSite: new FormControl(null, {validators: [Validators.required]}),
      gitHub: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  saveProfile () {

    this.createDataService.createProfile(
      this.form.value.fname,
      this.form.value.lname,
      this.form.value.phone,
      this.form.value.email,
      this.form.value.webSite,
      this.form.value.gitHub
    );

  }

}
