import { Component, OnInit } from '@angular/core';
import { CreateDataService } from '../../services/create-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  front: Boolean = true;
  back: Boolean = false;
  isAdmin: Boolean = false;
  isRecruiter: Boolean = false;

  constructor(private createDataService: CreateDataService) { }

  ngOnInit() {
    console.log('Nav Started');

    this.createDataService.getFrontCheck().subscribe(response => {
          this.front = response;
    });

    this.createDataService.getAdminCheck().subscribe(response => {
      console.log(response);
      this.isAdmin = response;
      if (this.isAdmin === true) {
        this.front = false;
        this.back = false;
        return;
      } else  {
        this.createDataService.getStatusCheck().subscribe(response2 => {
          console.log(response2);
          if (response2 === true ) {
            console.log(response2);
            this.back = true;
              this.front = false;
          } else {
            console.log(response2);
            this.back = false;
            this.front = true;
          }
        });
      }
    });



  }

  logout() {
    this.createDataService.logout();
  }

}
