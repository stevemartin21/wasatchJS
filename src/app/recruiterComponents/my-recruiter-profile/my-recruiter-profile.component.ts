import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../../services/read-data.service';
import {Recruiter} from '../../models/recruiter';

@Component({
  selector: 'app-my-recruiter-profile',
  templateUrl: './my-recruiter-profile.component.html',
  styleUrls: ['./my-recruiter-profile.component.scss']
})
export class MyRecruiterProfileComponent implements OnInit {

  recruiter: Recruiter;

  constructor(
    private readDataService: ReadDataService
  ) { }

  ngOnInit() {
    this.readDataService.getRecruiter().subscribe(recruiter => {
      console.log(recruiter);
      this.recruiter = recruiter[0];
    })
  }

  onDelete(id) {
    console.log(id);
  }

}
