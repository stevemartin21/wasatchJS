import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../../services/read-data.service';
import { Subscription } from 'rxjs';
import { Skill } from '../../models/skill';
import { DeleteDataService } from '../../services/delete-data.service';

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrls: ['./manage-skills.component.scss']
})
export class ManageSkillsComponent implements OnInit {

  skills: Skill[];
  skillsSub: Subscription;

  constructor(private readDataService: ReadDataService,
    private deleteDataService: DeleteDataService ) { }

  ngOnInit() {
  this.skillsSub =  this.readDataService.getSkills()
  .subscribe(response => this.skills = response);
  }

  onDelete(id: string) {

    this.deleteDataService.deleteSkill(id);

  }

}
