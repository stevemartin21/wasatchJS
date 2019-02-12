import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Education} from '../../models/education';
import { Router } from '@angular/router';
import { IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.scss']
})
export class AddEducationComponent implements OnInit {

  form: FormGroup;
  private  educationId;
  private mode = 'create';
  education: Education;

  optionsSelect: Array<any>;
  optionsSelect2: Array<any>;

  public myDatePickerOptions: IMyOptions = {
    // Your options
    };


public myDatePickerOptions2: IMyOptions = {
    // Your options
    };


  constructor(private createDataService: CreateDataService,
    private readDataService: ReadDataService,
    private updateDataService: UpdateDataService,
    public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.optionsSelect = [
      { value: 'bootCamp', label: 'Boot Camp' },
      { value: 'onlineBootCamp', label: 'Online Boot Camp' },
      { value: 'university', label: 'University' },
      { value: 'techCollege', label: 'Technical College' },
      { value: 'other', label: 'Other' },
      ];

      this.optionsSelect2 = [
        { value: 'bachelors', label: 'Bachelors' },
        { value: 'masters', label: 'Master' },
        { value: 'doctrinate', label: 'PHD' },
        { value: 'certificate', label: 'Certificate' },
        { value: 'other', label: 'Other' },

        ];


    this.form = new FormGroup({
      schoolName: new FormControl(null, {validators: [Validators.required]}),
      schoolType: new FormControl(null, {validators: [Validators.required]}),
      degree: new FormControl(null, {validators: [Validators.required]}),
      degreeType: new FormControl(null, {validators: [Validators.required]}),
      from: new FormControl(null, {validators: [Validators.required]}),
      to: new FormControl(null, {validators: [Validators.required]}),
      notes: new FormControl(null, {validators: [Validators.required]}),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('edit educations');
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.educationId = paramMap.get('id');
        this.readDataService.getEducation(this.educationId).subscribe(education => {
          this.education = education;
          console.log(education);
          console.log(this.education);

          this.form.setValue({

            schoolName: this.education.schoolName,
            schoolType: this.education.schoolType,
            degree: this.education.degree,
            degreeType: this.education.degreeType,
            from: this.education.from,
            to: this.education.to,
            notes: this.education.notes
          });
        });



      } else {
        this.mode = 'create';
        this.educationId = null;
      }
    });

  }

  saveEducation() {

    if (this.form.invalid) {
      return;
    }

    if ( this.mode === 'create') {
      this.createDataService.createEducation(
        this.form.value.schoolName,
        this.form.value.schoolType,
        this.form.value.degree,
        this.form.value.degreeType,
        this.form.value.to,
        this.form.value.from,
        this.form.value.notes
      );
    } else {
      this.updateDataService.updateEducation(
        this.educationId,
        this.form.value.schoolName,
      this.form.value.schoolType,
      this.form.value.degree,
      this.form.value.degreeType,
      this.form.value.to,
      this.form.value.from,
      this.form.value.notes
      );
    }

    this.router.navigate(['/dashboard']);


  }

}
