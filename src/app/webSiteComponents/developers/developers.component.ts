import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {ReadDataService } from '../../services/read-data.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  profiles: any[];
  projects: any[];

  @ViewChildren('pages') pages: QueryList<any>;
  itemsPerPage = 1;
  numberOfVisiblePaginators = 10;
  numberOfPaginators: number;
  paginators: Array<any> = [];
  activePage = 1;
  firstVisibleIndex = 0;
  lastVisibleIndex: number = this.itemsPerPage - 1 ;
  firstVisiblePaginator = 0;
  lastVisiblePaginator = this.numberOfVisiblePaginators;

  constructor(
    private readDataService: ReadDataService
  ) { }

  ngOnInit() {
    this.readDataService.getPublicProfiles().subscribe(profiles => {
      console.log(profiles);
      this.profiles = profiles;
      this.addPaginators();
    });

    this.readDataService.getPublicProjects().subscribe(projects => {
      console.log(projects);
      this.projects = projects;
    });
  }

  changePage(event: any) {
    if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
      this.activePage = +event.target.text;
      this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage  ;
      this.lastVisibleIndex = this.activePage * this.itemsPerPage - 1 ;
    }
  }

  nextPage(event: any) {
    if (this.pages.last.nativeElement.classList.contains('active')) {
      if ((this.numberOfPaginators - this.numberOfVisiblePaginators) >= this.lastVisiblePaginator) {
        this.firstVisiblePaginator += this.numberOfVisiblePaginators;
      this.lastVisiblePaginator += this.numberOfVisiblePaginators;
      } else {
        this.firstVisiblePaginator += this.numberOfVisiblePaginators;
      this.lastVisiblePaginator = this.numberOfPaginators;
      }
    }

    this.activePage += 1;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage ;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage - 1 ;
  }

  previousPage(event: any) {
    if (this.pages.first.nativeElement.classList.contains('active')) {
      if ((this.lastVisiblePaginator - this.firstVisiblePaginator) === this.numberOfVisiblePaginators)  {
        this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
        this.lastVisiblePaginator -= this.numberOfVisiblePaginators;
      } else {
        this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
        this.lastVisiblePaginator -= (this.numberOfPaginators % this.numberOfVisiblePaginators);
      }
    }

    this.activePage -= 1;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage ;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage - 1 ;
  }

  firstPage() {
    this.activePage = 1;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage ;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage - 1 ;
    this.firstVisiblePaginator = 0;
    this.lastVisiblePaginator = this.numberOfVisiblePaginators;
  }

  lastPage() {
    this.activePage = this.numberOfPaginators;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage ;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage - 1 ;

    if (this.numberOfPaginators % this.numberOfVisiblePaginators === 0) {
      this.firstVisiblePaginator = this.numberOfPaginators - this.numberOfVisiblePaginators;
      this.lastVisiblePaginator = this.numberOfPaginators;
    } else {
      this.lastVisiblePaginator = this.numberOfPaginators;
      this.firstVisiblePaginator = this.lastVisiblePaginator - (this.numberOfPaginators % this.numberOfVisiblePaginators);
    }
  }

  addPaginators() {
    if (this.profiles.length % this.itemsPerPage === 0) {
      this.numberOfPaginators = Math.floor(this.profiles.length / this.itemsPerPage);
    } else {
      this.numberOfPaginators = Math.floor(this.profiles.length / this.itemsPerPage + 1);
    }

    for (let i = 1; i <= this.numberOfPaginators; i++) {
      this.paginators.push(i);
    }
  }

}
