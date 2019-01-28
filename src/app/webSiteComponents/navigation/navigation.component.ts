import { Component, OnInit } from '@angular/core';
import { CreateDataService } from '../../services/create-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  frontOrBack: Boolean = false;

  constructor(private createDataService: CreateDataService) { }

  ngOnInit() {
    console.log('Nav Started');
    this.createDataService.getStatusCheck().subscribe(response => {
      console.log(response);
      this.frontOrBack = response;
    });
  }

  logout() {
    this.createDataService.logout();
  }

}
