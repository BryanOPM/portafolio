import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import {app_routing} from "./app.routes";

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FootersComponent } from './components/footers/footers.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootersComponent,
    PortafolioComponent,
    AboutComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
