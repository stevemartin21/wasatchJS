import { Component, OnInit } from '@angular/core';
import { CreateDataService } from '../../services/create-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  frontOrBack = 'false';

  constructor(private createDataService: CreateDataService) { }

  ngOnInit() {
    console.log('Nav Started');
    this.createDataService.getStatusCheck().subscribe(response => {
      console.log(response);
      console.log('Nav Started 2');
    });
  }

}
