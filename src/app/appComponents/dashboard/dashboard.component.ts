import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import { ReadDataService } from '../../services/read-data.service';
import {Subscription } from 'rxjs';
import { Profile } from '../../models/profile';
import { DeleteDataService } from '../../services/delete-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  profile: Profile;
  profileId: String;
  profileSub: Subscription;
  token: String;
  userId: String;
  userIdSub: Subscription;


  constructor(private readDataService: ReadDataService,
    private deleteDataService: DeleteDataService,
    private createDataService: CreateDataService) { }

  ngOnInit() {

     this.createDataService.getUserIdCheck()
      .subscribe(response => {
        console.log('Made it this far ');
        console.log(response);
        this.userId = response;
        this.readDataService.getProfile(this.userId)
          .subscribe(response2 => this.profile = response2);
      });
  }

  onDelete(id: string) {
    this.deleteDataService.deleteProfile(id);
  }
  }


