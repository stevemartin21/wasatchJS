import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../../services/read-data.service';
import { Subscription } from 'rxjs';
import {Problem } from '../../models/problem';
import { DeleteDataService } from '../../services/delete-data.service';


@Component({
  selector: 'app-manage-problems',
  templateUrl: './manage-problems.component.html',
  styleUrls: ['./manage-problems.component.scss']
})
export class ManageProblemsComponent implements OnInit {

  problems: Problem[];
  problemSub: Subscription;

  constructor(private readDataService: ReadDataService,
    private deleteDataService: DeleteDataService) { }

  ngOnInit() {

    this.readDataService.getProblems()
      .subscribe(response => this.problems = response);
  }

  onDelete(id: string) {
    this.deleteDataService.deleteProblem(id);
  }

}
