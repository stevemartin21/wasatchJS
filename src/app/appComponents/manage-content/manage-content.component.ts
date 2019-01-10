import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../../services/read-data.service';
import {Subscription } from 'rxjs';
import { Content } from '../../models/content';
import { DeleteDataService } from '../../services/delete-data.service';

@Component({
  selector: 'app-manage-content',
  templateUrl: './manage-content.component.html',
  styleUrls: ['./manage-content.component.scss']
})
export class ManageContentComponent implements OnInit {

  contents: Content[];
  contentsSub: Subscription;

  constructor(private readDataService: ReadDataService,
    private deleteDataService: DeleteDataService) { }

  ngOnInit() {
    this.readDataService.getContents()
      .subscribe(response => this.contents = response);
  }

  onDelete(id: string) {
    this.deleteDataService.deleteContent(id);
  }

}
