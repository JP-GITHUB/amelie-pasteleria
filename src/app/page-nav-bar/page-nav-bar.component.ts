import { Component, OnInit } from '@angular/core';
import { NavBarService } from './nav-bar.service';

@Component({
  selector: 'app-page-nav-bar',
  templateUrl: './page-nav-bar.component.html',
  styleUrls: ['./page-nav-bar.component.css']
})
export class PageNavBarComponent implements OnInit {
  status_auth = false;

  constructor(public navBarService: NavBarService) { }

  ngOnInit() {
    this.navBarService.change.subscribe(status_auth => {
      this.status_auth = status_auth;
    });
  }

}
