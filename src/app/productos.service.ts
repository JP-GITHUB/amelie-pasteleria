import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from './producto';
import { PRODUCTOS } from './mock-productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() {}

  getProductos(): Observable<Producto[]> {
    return of(PRODUCTOS);
  }
}
