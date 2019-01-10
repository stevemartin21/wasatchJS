import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../../services/read-data.service';
import { Subscription } from 'rxjs';
import {Project } from '../../models/project';
import { DeleteDataService } from '../../services/delete-data.service';



@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsComponent implements OnInit {

  projects: Project[];
  projectsSub: Subscription;

  constructor(private readDataService: ReadDataService,
    private deleteDataService: DeleteDataService) { }

  ngOnInit() {

    this.readDataService.getProjects()
      .subscribe(response => this.projects = response);
  }

  onDelete(id: string) {
    this.deleteDataService.deleteProject(id);
  }

}
