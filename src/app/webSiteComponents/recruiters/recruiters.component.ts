import { Component, OnInit } from '@angular/core';
import {ReadDataService } from '../../services/read-data.service';

@Component({
  selector: 'app-recruiters',
  templateUrl: './recruiters.component.html',
  styleUrls: ['./recruiters.component.scss']
})
export class RecruitersComponent implements OnInit {

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
