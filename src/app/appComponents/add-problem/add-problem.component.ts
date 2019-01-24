import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from '../../services/read-data.service';
import { UpdateDataService } from '../../services/update-data.service';
import {Problem} from '../../models/problem';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.scss']
})
export class AddProblemComponent implements OnInit {

  form: FormGroup;
  private  problemId;
  private mode = 'create';
  problem: Problem;

  constructor(private createDataService: CreateDataService,
    private readDataService: ReadDataService,
    private updateDataService: UpdateDataService,
    public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
        this.form = new FormGroup({
        title: new FormControl(null, {validators: [Validators.required]}),
        description: new FormControl(null, {validators: [Validators.required]} ),
        steps: new FormControl(null, {validators: [Validators.required]} ),
        appliedLearning: new FormControl(null, {validators: [Validators.required]} )
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('edit educations');
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.problemId = paramMap.get('id');
        this.readDataService.getProblem(this.problemId).subscribe(problem => {
          this.problem = problem;


          this.form.setValue({
            title: this.problem.title,
            description: this.problem.description,
            steps: this.problem.steps,
            appliedLearning: this.problem.appliedLearning
          });
        });
      } else {
        this.mode = 'create';
        this.problemId = null;
      }
    });
  }

  saveProblem() {
    if (this.form.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.createDataService.createProblem(
        this.form.value.title,
        this.form.value.description,
        this.form.value.steps,
        this.form.value.appliedLearning
      );
    } else {
      this.updateDataService.updateProblem(
        this.problemId,
        this.form.value.title,
        this.form.value.description,
        this.form.value.steps,
        this.form.value.appliedLearning
      );
    }
  }

}
