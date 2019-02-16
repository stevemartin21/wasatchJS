import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateDataService } from '../../services/create-data.service';
import { ReadDataService } from '../../services/read-data.service';
import {Subscription } from 'rxjs';
import { Profile } from '../../models/profile';
import { DeleteDataService } from '../../services/delete-data.service';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.scss']
})
export class RecruiterDashboardComponent implements OnInit {
  recruiter: any;

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [0, 0], label: 'My Porfolio' }
  ];

  public chartLabels: Array<any> = ['Jobs', 'Boosters'];

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
    this.readDataService.getRecruiter().subscribe(recruiter => {
      console.log(recruiter);
      // more console lots
      console.log('It is a recruiter and need to put in data')
      this.recruiter = recruiter[0];
      this.chartDatasets = [
        {data: [this.recruiter.jobs.length, this.recruiter.boosters.length]}
      ]
    })
  }

}
