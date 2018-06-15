import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../page-nav-bar/nav-bar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public navBarService:NavBarService) { }

  ngOnInit() {
    if(localStorage.getItem("user-sign")){
      this.navBarService.toggleSubNavBar();
    }
  }

}
