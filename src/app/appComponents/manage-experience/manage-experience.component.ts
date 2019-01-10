import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/experience';
import { ReadDataService } from '../../services/read-data.service';
import {Subscription } from 'rxjs';
import { DeleteDataService } from '../../services/delete-data.service';


@Component({
  selector: 'app-manage-experience',
  templateUrl: './manage-experience.component.html',
  styleUrls: ['./manage-experience.component.scss']
})
export class ManageExperienceComponent implements OnInit {

  experiences: Experience[];
  experiencesSub: Subscription;

  constructor(private readDataService: ReadDataService,
    private deleteDataService: DeleteDataService) { }

  ngOnInit() {

   this.experiencesSub = this.experiencesSub = this.readDataService.getExperiences()
      .subscribe(response => this.experiences = response);

  }

  onDelete(id: string) {
    this.deleteDataService.deleteExperience(id)

  }

}
