import { Component, OnInit } from '@angular/core';
import {ReadDataService } from '../../services/read-data.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  profiles: any[];
  projects: any[];

  constructor(
    private readDataService: ReadDataService
  ) { }

  ngOnInit() {
    this.readDataService.getPublicProfiles().subscribe(profiles => {
      console.log(profiles);
      this.profiles = profiles;
    });

    this.readDataService.getPublicProjects().subscribe(projects => {
      console.log(projects);
      this.projects = projects;
    });
  }

}
