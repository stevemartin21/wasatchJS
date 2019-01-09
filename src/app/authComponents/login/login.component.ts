import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private createDataService: CreateDataService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required]})
    });
  }

  createToken() {

    console.log(this.form);

    if (this.form.invalid) {
      console.log(this.form);
      return;
    }

    this.createDataService.createToken(
      this.form.value.email,
      this.form.value.password
    );



  }

}
