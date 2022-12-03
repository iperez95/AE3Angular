import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-videojuego-component',
  templateUrl: './detalle-videojuego-component.component.html',
  styleUrls: ['./detalle-videojuego-component.component.css']
})
export class DetalleVideojuegoComponentComponent implements OnInit {

  listaVideojuegos = [
    {id : 1, titulo : 'Mario Bros', compania : 'Electronic', image : {src: '/assets/Images/Mario.png'},  valoracionMedia : 4.5},
    {id : 2, titulo : 'Mario Kart', compania : 'Electronic', image : {src: '/assets/Images/MarioKart.jpg'}, valoracionMedia : 4.8},
    {id : 3, titulo : 'Metroid Dread', compania : 'Electronic', image : {src: '/assets/Images/metroid.png'}, valoracionMedia : 4.9},
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
