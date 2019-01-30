import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../../services/read-data.service';
import { Subscription } from 'rxjs';
import { Profile } from '../../models/profile';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  profile: any;
  content: any;
  profileSub: Subscription;
  profileId: string;

  constructor(private readDataService: ReadDataService,
    public route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('actionId');
      if (paramMap.has('id')) {

        this.profileId = paramMap.get('id');
        console.log(this.profileId);


     this.profileSub =   this.readDataService.getPublicProfile(this.profileId).subscribe(profile => {
          console.log(profile);
          this.profile = profile;
          console.log(this.profile.creator._id);

          this.readDataService.getDeveloperContent(this.profile.creator._id).subscribe(contents => {
            this.content = contents;
            console.log(this.content);
          });
        });
      } else {

        this.profileId = null;
      }
    });
  }

}
