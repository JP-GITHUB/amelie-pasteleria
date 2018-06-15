import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavBarService } from './nav-bar.service';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-page-nav-bar',
  templateUrl: './page-nav-bar.component.html',
  styleUrls: ['./page-nav-bar.component.css']
})
export class PageNavBarComponent implements OnInit {
  status_auth = true;

  constructor(public navBarService: NavBarService, public authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.navBarService.change.subscribe(status_auth => {
      this.status_auth = status_auth;
    });
  }

  logAuth(){
    this.status_auth = true;
    this.authService.cerrarSession();
    this._router.navigate(["/"]);
  }

}
