import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaVideojuegos = [
    {id : 1, titulo : 'Mario Bros', compania : 'Electronic', image : {src: '/assets/Images/Mario.png'},  valoracionMedia : 4.5},
    {id : 2, titulo : 'Mario Kart', compania : 'Electronic', image : {src: '/assets/Images/MarioKart.jpg'}, valoracionMedia : 4.8},
    {id : 3, titulo : 'Metroid Dread', compania : 'Electronic', image : {src: '/assets/Images/metroid.png'}, valoracionMedia : 4.9},
  ];

  title = 'AE3Angular';
}
