import { Component, OnInit } from '@angular/core';
import {  CreateDataService } from '../../services/create-data.service';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {

  constructor(private createDataService: CreateDataService) { }

  ngOnInit() {
  }

  logout() {
    this.createDataService.logout();
  }

}
