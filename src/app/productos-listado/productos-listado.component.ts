import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Producto } from '../producto'
import { ProductosService } from '../productos.service'

@Component({
  selector: 'app-productos-listado',
  templateUrl: './productos-listado.component.html',
  styleUrls: ['./productos-listado.component.css']
})
export class ProductosListadoComponent implements OnInit {
  productos: Producto[];

  constructor(private productoService:ProductosService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(productos => this.productos = productos);;
  }

}
