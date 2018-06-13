import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNavBarComponent } from './page-nav-bar/page-nav-bar.component';
import { PageCarruselComponent } from './page-carrusel/page-carrusel.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosListadoComponent } from './productos-listado/productos-listado.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InternosComponent } from './internos/internos.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavBarComponent,
    PageCarruselComponent,
    PageFooterComponent,
    ProductosComponent,
    ProductosListadoComponent,
    NosotrosComponent,
    ContactoComponent,
    InternosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
