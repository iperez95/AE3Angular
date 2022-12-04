import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { DetalleVideojuegoComponentComponent } from './detalle-videojuego-component/detalle-videojuego-component.component';
import { ListaVideojuegosComponentComponent } from './lista-videojuegos-component/lista-videojuegos-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { SobreNosotrosComponentComponent } from './sobre-nosotros-component/sobre-nosotros-component.component';
import { VideojuegoService } from './videojuegos.service';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    AppComponent, 
    NavComponentComponent, 
    ListaVideojuegosComponentComponent, 
    DetalleVideojuegoComponentComponent, 
    ContactoComponentComponent, 
    SobreNosotrosComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [VideojuegoService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
