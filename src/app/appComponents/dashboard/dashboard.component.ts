import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;

  constructor(private createDataService: CreateDataService) { }

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

  createProfile () {

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
