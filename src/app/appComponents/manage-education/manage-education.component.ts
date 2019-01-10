import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReadDataService } from '../../services/read-data.service';
import { Subscription } from 'rxjs';
import { Education } from '../../models/education';
import { DeleteDataService } from '../../services/delete-data.service';


@Component({
  selector: 'app-manage-education',
  templateUrl: './manage-education.component.html',
  styleUrls: ['./manage-education.component.scss']
})
export class ManageEducationComponent implements OnInit {

  educationSub: Subscription;
  educations: Education[];

  constructor(private readDataService: ReadDataService,
    private deleteDataService: DeleteDataService) { }

  ngOnInit() {
   this.educationSub = this.readDataService.getEducations()
      .subscribe(response => this.educations = response);

  }

  onDelete(id: string) {
    console.log('Clicked Delete');
    this.deleteDataService.deleteEducation(id);
  }

  OnDestroy() {
    console.log('ChildComponent:OnDestroy');
    this.educationSub.unsubscribe();
  }

}
