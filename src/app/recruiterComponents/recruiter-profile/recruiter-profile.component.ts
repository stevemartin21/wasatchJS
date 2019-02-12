import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Recruiter} from '../../models/recruiter';
import { Router } from '@angular/router';

import { mimeType } from './mime-type.validator';


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
  imagePreview: string | ArrayBuffer;

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
      position: new FormControl(null, {validators: [Validators.required]}),
      headline: new FormControl(null, {validators: [Validators.required]}),
      highlight: new FormControl(null, {validators: [Validators.required]}),
      philosophy: new FormControl(null, {validators: [Validators.required]}),
      usp: new FormControl(null, {validators: [Validators.required]}),
      specialty: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null,
        {validators: [Validators.required],
          asyncValidators: [mimeType] })
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('edit educations');
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.recruiterId = paramMap.get('id');
        this.readDataService.getRecruiterById(this.recruiterId).subscribe(recruiter => {
          console.log(recruiter);
          this.recruiter = recruiter[0];
          console.log(this.recruiter);


          this.form.setValue({
            fname: this.recruiter.fname,
            lname: this.recruiter.lname,
            phone: this.recruiter.phone,
            email: this.recruiter.email,
            webSite: this.recruiter.webSite,
            company: this.recruiter.company,
            image: this.recruiter.imagePath,
            position: this.recruiter.position,
            headline: this.recruiter.headline,
            highlight: this.recruiter.highlight,
            philosophy: this.recruiter.philosophy,
            usp: this.recruiter.usp,
            specialty: this.recruiter.specialty
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
        this.form.value.company,
        this.form.value.image,
        this.form.value.position,
        this.form.value.headline,
        this.form.value.highlight,
        this.form.value.philosophy,
        this.form.value.usp,
        this.form.value.specialty
      );
    } else {
      this.updateDataService.updateRecruiter(
        this.recruiterId,
        this.form.value.fname,
        this.form.value.lname,
        this.form.value.phone,
        this.form.value.email,
        this.form.value.webSite,
        this.form.value.company,
        this.form.value.image,
        this.form.value.position,
        this.form.value.headline,
        this.form.value.highlight,
        this.form.value.philosophy,
        this.form.value.usp,
        this.form.value.specialty
      );
    }

    this.router.navigate(['/recruiterDashboard']);
  }


  onImagePicked(event: Event) {
    console.log(event);
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

}

// more javascript more javascript
