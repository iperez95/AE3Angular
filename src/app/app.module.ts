import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { ListaVideojuegosComponentComponent } from './lista-videojuegos-component/lista-videojuegos-component.component';
import { DetalleVideojuegoComponentComponent } from './detalle-videojuego-component/detalle-videojuego-component.component';
import { SobreNosotrosComponentComponent } from './sobre-nosotros-component/sobre-nosotros-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    ListaVideojuegosComponentComponent,
    DetalleVideojuegoComponentComponent,
    SobreNosotrosComponentComponent,
    ContactoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
