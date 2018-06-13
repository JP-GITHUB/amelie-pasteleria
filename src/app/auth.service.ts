import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /** TODO: Credenciales son solo de prueba. */
  validarCredenciales(email: string, password: string) {
    if (email == "jose@mail.cl" && password == "123456") {
      if (this.validarLocalStorage()) {
        localStorage.setItem("user-sign", email);
      }

      return true;
    } else {
      return false;
    }
  }

  validarLocalStorage() {
    var localStorage_isSupported = (function () {
      try {
        var itemBackup = localStorage.getItem("");
        localStorage.removeItem("");
        localStorage.setItem("", itemBackup);
        if (itemBackup === null)
          localStorage.removeItem("");
        else
          localStorage.setItem("", itemBackup);
        return true;
      }
      catch (e) {
        return false;
      }
    })();

    return localStorage_isSupported;
  }
}
