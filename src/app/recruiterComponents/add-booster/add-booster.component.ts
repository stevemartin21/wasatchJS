import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Booster} from '../../models/booster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-booster',
  templateUrl: './add-booster.component.html',
  styleUrls: ['./add-booster.component.scss']
})
export class AddBoosterComponent implements OnInit {

  form: FormGroup;
  private  boosterId;
  private mode = 'create';
  booster: Booster;

  optionsSelect: Array<any>;

  constructor(private createDataService: CreateDataService,
    private readDataService: ReadDataService,
    private updateDataService: UpdateDataService,
    public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.optionsSelect = [
      { value: 'Student', label: 'Student/Intern' },
      { value: 'Junior', label: 'Junior' },
      { value: 'Junior-Mid', label: 'Junior-Mid' },
      { value: 'Mid', label: 'Mid' },
      { value: 'Mid-Senior', label: 'Mid-Senior' },
      { value: 'Senior', label: 'Senior' },
      { value: 'Architect', label: 'Architect' },
      ];


    this.form = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
      link: new FormControl(null, {validators: [Validators.required]}),
      complete: new FormControl(null, {validators: [Validators.required]}),
      level: new FormControl(null, {validators: [Validators.required]})
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('edit educations');
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.boosterId = paramMap.get('id');
        this.readDataService.getBooster(this.boosterId).subscribe(booster => {
          this.booster = booster;
          console.log(booster);
          console.log(this.booster);

          this.form.setValue({
            title: this.booster.title,
            description: this.booster.description,
            link: this.booster.link,
            complete: this.booster.complete,
            level: this.booster.level
          });
        });
      } else {
        this.mode = 'create';
        this.boosterId = null;
      }
    });
  }

  saveBooster() {

    if ( this.form.invalid) {
      return;
    }

    if (this.mode === 'create') {

      this.createDataService.createBooster(
        null,
        this.form.value.title,
        this.form.value.description,
        this.form.value.link,
        this.form.value.complete,
        this.form.value.level
      );
    } else {
      this.updateDataService.updateBooster(
        this.boosterId,
        this.form.value.title,
        this.form.value.description,
        this.form.value.link,
        this.form.value.complete,
        this.form.value.level
      );
    }

    this.router.navigate(['/recruiterDashboard']);



  }

}
