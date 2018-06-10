import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNavBarComponent } from './page-nav-bar/page-nav-bar.component';
import { PageCarruselComponent } from './page-carrusel/page-carrusel.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavBarComponent,
    PageCarruselComponent,
    PageFooterComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
