import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Profile} from '../../models/profile';
import { Router } from '@angular/router';
import { mimeType } from './mime-type.validator';

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
  imagePreview: string | ArrayBuffer;
jobTypes: Array<any>;
companyTypes: Array<any>;
frontEnd: Array<any>;
backEnd: Array<any>;
mobile: Array<any>;
level: Array<any>;


  constructor(
    private createDataService: CreateDataService,
    private readDataService: ReadDataService,
    private updateDataService: UpdateDataService,
    public route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.jobTypes = [
      { value: 'Full Time', label: 'Full Time' },
      { value: 'Contract', label: 'Contract' },
      { value: 'Freelance', label: 'Freelance' },
      ];

      this.level = [
        { value: 'Student', label: 'Student' },
        { value: 'Junior', label: 'Junior' },
        { value: 'Mid', label: 'Mid' },
        { value: 'Senior', label: 'Senior' },
        { value: 'Architect', label: 'Architect' },
        ];

      this.companyTypes = [
        { value: 'Start Up', label: 'Start Up' },
        { value: 'Small ', label: 'Small' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Large', label: 'Large' },

        ];

        this.frontEnd = [
          { value: 'Angular', label: 'Angular' },
          { value: 'React ', label: 'React' },
          { value: 'Vue', label: 'Vue' },
          { value: 'Other', label: 'Other' },

          ];

          this.backEnd = [
            { value: 'Node Js', label: 'Node Js' },
            { value: 'Ruby ', label: 'Ruby' },
            { value: 'PHP', label: 'PHP' },
            { value: 'Python', label: 'Python' },
            { value: 'Java', label: 'Java' },
            ];

            this.mobile = [
              { value: 'Swift', label: 'Swift' },
              { value: 'Java ', label: 'Java' },
              { value: 'React Native', label: 'React Native' },
              { value: 'Other', label: 'Other' },
              ];

    this.form = new FormGroup({
      fname: new FormControl(null, {validators: [Validators.required]}),
      lname: new FormControl(null, {validators: [Validators.required]}),
      phone: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required]}),
      webSite: new FormControl(null, {validators: [Validators.required]}),
      gitHub: new FormControl(null, {validators: [Validators.required]}),
      jobType: new FormControl(null, {validators: [Validators.required]}),
      companyType: new FormControl(null, {validators: [Validators.required]}),
      frontEnd: new FormControl(null, {validators: [Validators.required]}),
      backEnd: new FormControl(null, {validators: [Validators.required]}),
      mobile: new FormControl(null, {validators: [Validators.required]}),
      headline: new FormControl(null, {validators: [Validators.required]}),
      highlight: new FormControl(null, {validators: [Validators.required]}),
      philosophy: new FormControl(null, {validators: [Validators.required]}),
      usp: new FormControl(null, {validators: [Validators.required]}),
      level: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null,
        {validators: [Validators.required],
          asyncValidators: [mimeType] })
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('edit educations');
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.profileId = paramMap.get('id');
        this.readDataService.getProfileById(this.profileId)
          .subscribe(profile => {
          console.log(profile);
          this.profile = profile[0];


          this.form.setValue({
            fname: this.profile.fname,
            lname: this.profile.lname,
            phone: this.profile.phone,
            email: this.profile.email,
            webSite: this.profile.webSite,
            gitHub: this.profile.gitHub,
            image: this.profile.imagePath,
            jobType: this.profile.jobType,
            companyType: this.profile.companyType,
            frontEnd: this.profile.frontEnd,
            backEnd: this.profile.backEnd,
            mobile: this.profile.mobile,
            headline: this.profile.headline,
            highlight: this.profile.highlight,
            philosophy: this.profile.philosophy,
            usp: this.profile.usp,
            level: this.profile.level
          });
        });
      } else {
        this.mode = 'create';
        this.profileId = null;
      }
    });
  }

  saveProfile () {

    if ( this.form.invalid) {
      return ;
    }

    if (this.mode === 'create') {
      this.createDataService.createProfile(
        this.form.value.fname,
        this.form.value.lname,
        this.form.value.phone,
        this.form.value.email,
        this.form.value.webSite,
        this.form.value.gitHub,
        this.form.value.image,
        this.form.value.jobType,
        this.form.value.companyType,
        this.form.value.frontEnd,
        this.form.value.backEnd,
        this.form.value.mobile,
        this.form.value.headline,
        this.form.value.highlight,
        this.form.value.philosophy,
        this.form.value.usp,
        this.form.value.level

      );
    } else {
      this.updateDataService.updateProfile(
        this.profileId,
        this.form.value.fname,
        this.form.value.lname,
        this.form.value.phone,
        this.form.value.email,
        this.form.value.webSite,
        this.form.value.gitHub,
        this.form.value.image,
        this.form.value.jobType,
        this.form.value.companyType,
        this.form.value.frontEnd,
        this.form.value.backEnd,
        this.form.value.mobile,
        this.form.value.headline,
        this.form.value.highlight,
        this.form.value.philosophy,
        this.form.value.usp,
        this.form.value.level
      );
    }

    this.router.navigate(['/dashboard']);
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

/*

jobType,
companyType,
frontEnd,
backEnd,
mobile,
headline,
highlight,
philosophy,
usp,
level



*/
