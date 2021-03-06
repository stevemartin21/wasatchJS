import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Skill} from '../../models/skill';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {
  form: FormGroup;
  private  skillId;
  private mode = 'create';
  skill: Skill;
  optionsSelect: Array<any>;
  optionsSelect2: Array<any>;

  constructor(private createDataService: CreateDataService,
    private readDataService: ReadDataService,
    private updateDataService: UpdateDataService,
    public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.optionsSelect = [
      { value: '6 Months or Less', label: '6 Months or Less' },
      { value: '1 ', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5 or more', label: '5 or more' },
      { value: 'other', label: 'Other' },
      ];

      this.optionsSelect2 = [
        { value: 'php', label: 'PHP' },
        { value: 'nodeJS', label: 'Node JS' },
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' },
        { value: '.Net', label: '.Net' },
        { value: 'C#', label: 'C#' },
        { value: 'other', label: 'Other' },

        ];

    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      type: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
      years: new FormControl(null, {validators: [Validators.required]})
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('edit educations');
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.skillId = paramMap.get('id');
        this.readDataService.getSkill(this.skillId).subscribe(skill => {
          this.skill = skill;
          console.log(skill);
          console.log(this.skill);

          this.form.setValue({
            name: this.skill.name,
            type: this.skill.type,
            description: this.skill.description,
            years: this.skill.years
          });
        });
      } else {
        this.mode = 'create';
        this.skillId = null;
      }
    });
  }

  saveSkill () {

    if (this.form.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.createDataService.createSkill(
        this.form.value.name,
        this.form.value.type,
        this.form.value.description,
        this.form.value.years
      );
    } else {
      this.updateDataService.updateSkill(
        this.skillId,
        this.form.value.name,
        this.form.value.type,
        this.form.value.description,
        this.form.value.years
      );
    }

    this.router.navigate(['/dashboard']);
  }

}

// name, type, description, years
