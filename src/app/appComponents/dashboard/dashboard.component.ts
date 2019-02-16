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

  profile: any;
  profileId: String;
  profileSub: Subscription;
  token: String;
  userId: String;
  userIdSub: Subscription;

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [0, 0, 0, 0, 0, 0], label: 'My Portfolio' }
  ];

  public chartLabels: Array<any> = ['Content', 'Education', 'Experience', 'Projects', 'Skills', 'Solutions'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  constructor(private readDataService: ReadDataService,
    private deleteDataService: DeleteDataService,
    private createDataService: CreateDataService) { }

  ngOnInit() {


        this.readDataService.getProfileInfo()
          .subscribe(response2 => {
            console.log(response2)
            this.profile = response2;
            console.log(this.profile);
            this.chartDatasets = [
              {data:[this.profile.content.length,
                    this.profile.education.length,
                    this.profile.experience.length,
                    this.profile.projects.length,
                    this.profile.skills.length,
                    this.profile.solutions.length]}
            ]
            // need to updated it one more error need to create a new error
          });

  }

  onDelete(id: string) {
    this.deleteDataService.deleteProfile(id);
  }
  }


//  Add and have a place to remove the if there is a profile
