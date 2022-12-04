import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../videojuego';
import { VideojuegoService } from '../videojuegos.service';

@Component({
  selector: 'app-lista-videojuegos-component',
  templateUrl: './lista-videojuegos-component.component.html',
  styleUrls: ['./lista-videojuegos-component.component.css']
})
export class ListaVideojuegosComponentComponent implements OnInit {
  //Recogemos el array de videojuegos, de nuestro service.
  videoJuegos: Videojuego[];
  constructor(private videojuegosService: VideojuegoService) { }
  ngOnInit(): void {
    this.videoJuegos = this.videojuegosService.getVideojuegos();
  }
}
