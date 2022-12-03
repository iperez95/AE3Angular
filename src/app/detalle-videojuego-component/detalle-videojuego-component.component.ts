import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Videojuego } from '../videojuego';
import { VideojuegoService } from '../videojuegos.service';

@Component({
  selector: 'app-detalle-videojuego-component',
  templateUrl: './detalle-videojuego-component.component.html',
  styleUrls: ['./detalle-videojuego-component.component.css']
})
export class DetalleVideojuegoComponentComponent implements OnInit {
  videoJuego: Videojuego;
  constructor(
    private videojuegosService: VideojuegoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
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
