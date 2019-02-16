import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../../services/read-data.service';
import {Profile} from '../../models/profile';

@Component({
  selector: 'app-developer-profile',
  templateUrl: './developer-profile.component.html',
  styleUrls: ['./developer-profile.component.scss']
})
export class DeveloperProfileComponent implements OnInit {

  profile: any;

  constructor(
    private readDataService: ReadDataService
  ) { }

  ngOnInit() {
    this.readDataService.getProfileInfo().subscribe(profile => {
      this.profile = profile;
    });
  }

  onDelete(id) {
    console.log(id);
  }

}

//  this is another one and I need to save it one more time
