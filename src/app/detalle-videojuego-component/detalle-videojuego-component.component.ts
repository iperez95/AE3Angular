import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Videojuego } from '../videojuego';
import { VideojuegoService } from '../videojuegos.service';

@Component({
  selector: 'app-detalle-videojuego-component',
  templateUrl: './detalle-videojuego-component.component.html',
  styleUrls: ['./detalle-videojuego-component.component.css']
})

//Cargamos el servicio de videojuegos y el route para recoger los parametros de la url
export class DetalleVideojuegoComponentComponent implements OnInit {
  videoJuego: Videojuego;
  constructor(
    private videojuegosService: VideojuegoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //recorremos los parámetros del route. Si tenemos un parámetro llamado "id" con valor, entonces buscamos el videojuego mediante nuestro videojuegosService
    //si no encontramos el video juego devolvemos un error, y si lo contramos, asignamos a la propiedad "videojuego" el videojuego devuelto por el service.
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
          const id = +params['id'];
          let videojuego = this.videojuegosService.getVideoJuegoById(id);
          if (!videojuego) {
            throw new Error('Videojuego con id no encontrado');
          }

          this.videoJuego = videojuego;
      }
    });
  }

}
