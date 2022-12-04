import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleVideojuegoComponentComponent } from './detalle-videojuego-component/detalle-videojuego-component.component';
import { ListaVideojuegosComponentComponent } from './lista-videojuegos-component/lista-videojuegos-component.component';
import { SobreNosotrosComponentComponent } from './sobre-nosotros-component/sobre-nosotros-component.component';
import {ContactoComponentComponent} from './contacto-component/contacto-component.component';
import { AppComponent } from './app.component';

// Definimos las rutas:

const routes: Routes = [
  //Definimos la ruta detalle, la cual recibirá un parámetro "id"
  {path:"detalle/:id", component: DetalleVideojuegoComponentComponent},
  {path:"", component: AppComponent}, 
  {path:"nosotros", component: SobreNosotrosComponentComponent}, 
  {path:"contacto", component: ContactoComponentComponent},
  {path: "lista", component: ListaVideojuegosComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
