import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-internos',
  templateUrl: './internos.component.html',
  styleUrls: ['./internos.component.css']
})
export class InternosComponent implements OnInit {

  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    let validacion = this.authService.validarCredenciales(f.value.email, f.value.password);
    if (validacion) {
      this._router.navigate(["dashboard"]);
    }
  }

}
