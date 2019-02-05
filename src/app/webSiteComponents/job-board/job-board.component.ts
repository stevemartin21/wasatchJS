
import { Component, OnInit } from '@angular/core';
import {ReadDataService } from '../../services/read-data.service';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss']
})
export class JobBoardComponent implements OnInit {

  recruiters: any[];

  constructor(
    private readDataService: ReadDataService
  ) { }

  ngOnInit() {
    this.readDataService.getRecruiters().subscribe(recruiters => {
      console.log(recruiters);
      this.recruiters = recruiters;
    });
  }

}
