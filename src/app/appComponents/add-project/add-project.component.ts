import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Project} from '../../models/project';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  form: FormGroup;
  private  projectId;
  private mode = 'create';
  project: Project;
  optionsSelect: Array<any>;
  optionsSelect2: Array<any>;
  optionsSelect3: Array<any>;
  optionsSelect4: Array<any>;

  constructor(private createDataService: CreateDataService,
    private readDataService: ReadDataService,
    private updateDataService: UpdateDataService,
    public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.optionsSelect = [
      { value: 'angular', label: 'Angular' },
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'vue' },
      { value: 'bootstrap', label: 'Bootstrap' },
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
        this.optionsSelect3 = [
          { value: 'sql', label: 'SQL' },
          { value: 'NOSQL', label: 'NOSQL' },
          { value: 'firebase', label: 'Firebase' },
          { value: 'other', label: 'Other' },
          ];

          this.optionsSelect4 = [
            { value: 'HMTL', label: 'HTML' },
            { value: 'CSS', label: 'CSS' },
            { value: 'Bootstrap', label: 'Bootstrap' },
            ];


    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
      skills: new FormControl(null, {validators: [Validators.required]}),
      framework: new FormControl(null, {validators: [Validators.required]}),
      backend: new FormControl(null, {validators: [Validators.required]}),
      database: new FormControl(null, {validators: [Validators.required]}),
      link: new FormControl(null, {validators: [Validators.required]}),
    });


    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('edit educations');
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.projectId = paramMap.get('id');
        this.readDataService.getProject(this.projectId).subscribe(project => {
          this.project = project;
          console.log(project);
          console.log(this.project);

          this.form.setValue({
            name: this.project.name,
            description: this.project.description,
            skills: this.project.skills,
            framework: this.project.framework,
            backend: this.project.backend,
            database: this.project.database,
            link: this.project.link
          });
        });
      } else {
        this.mode = 'create';
        this.projectId = null;
      }
    });
  }

  saveProject () {

    if (this.form.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.createDataService.createProject(
        this.form.value.name,
        this.form.value.description,
        this.form.value.skills,
        this.form.value.framework,
        this.form.value.backend,
        this.form.value.database,
        this.form.value.link
        );
    } else {

      this.updateDataService.updateProject(
        this.projectId,
        this.form.value.name,
        this.form.value.description,
        this.form.value.skills,
        this.form.value.framework,
        this.form.value.backend,
        this.form.value.database,
        this.form.value.link
      );

    }

    this.router.navigate(['/dashboard']);


  }

}

/*
export interface Project {
  name: String;
  description: String;
  skills: String;
  framework: String;
  backend: String;
  link: String;
}

*/
