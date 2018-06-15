import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from '../page-nav-bar/nav-bar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public navBarService:NavBarService, private _router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("user-sign")){
      this.navBarService.toggleSubNavBar();
    }else{
      this._router.navigate(["/"]);
    }
  }

}
