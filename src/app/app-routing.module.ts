import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleVideojuegoComponentComponent } from './detalle-videojuego-component/detalle-videojuego-component.component';
import { ListaVideojuegosComponentComponent } from './lista-videojuegos-component/lista-videojuegos-component.component';
import { SobreNosotrosComponentComponent } from './sobre-nosotros-component/sobre-nosotros-component.component';
import {ContactoComponentComponent} from './contacto-component/contacto-component.component';

const routes: Routes = [

  {path:"detalles:id", component:DetalleVideojuegoComponentComponent},
  {path:"", component: ListaVideojuegosComponentComponent}, 
  {path:"nosotros", component: SobreNosotrosComponentComponent}, 
  {path:"contacto", component: ContactoComponentComponent},
  {path: "lista", component: ListaVideojuegosComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
