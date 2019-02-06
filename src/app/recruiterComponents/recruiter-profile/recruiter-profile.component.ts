import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Recruiter} from '../../models/recruiter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.scss']
})
export class RecruiterProfileComponent implements OnInit {

  form: FormGroup;
  private  recruiterId;
  private mode = 'create';
  recruiter: Recruiter;

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
      company: new FormControl(null, {validators: [Validators.required]}),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('edit educations');
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.recruiterId = paramMap.get('id');
        this.readDataService.getRecruiter().subscribe(recruiter => {
          this.recruiter = recruiter;


          this.form.setValue({
            fname: this.recruiter.fname,
            lname: this.recruiter.lname,
            phone: this.recruiter.phone,
            email: this.recruiter.email,
            webSite: this.recruiter.webSite,
            company: this.recruiter.company
          });
        });
      } else {
        this.mode = 'create';
        this.recruiterId = null;
      }
    });

  }

  saveProfile () {

    if ( this.form.invalid) {
      return ;
    }

    if (this.mode === 'create') {
      this.createDataService.createRecruiter(
        this.form.value.fname,
        this.form.value.lname,
        this.form.value.phone,
        this.form.value.email,
        this.form.value.webSite,
        this.form.value.company
      );
    } else {
      this.updateDataService.updateRecruiter(
        this.recruiterId,
        this.form.value.fname,
        this.form.value.lname,
        this.form.value.phone,
        this.form.value.email,
        this.form.value.webSite,
        this.form.value.company
      );
    }

    this.router.navigate(['/dashboard']);
  }

}

// more javascript
