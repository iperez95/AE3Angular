import { Injectable } from "@angular/core";

import {Videojuego, VideojuegoImagen} from './videojuego';


@Injectable()
export class VideojuegoService {
    videoJuegos: Videojuego[]
    constructor() {
        this.videoJuegos = this.getVideojuegos();
    }

    getVideojuegos() {
        return [
            new Videojuego(1, 'Mario Bros', 'Electronic', new VideojuegoImagen('/assets/Images/Mario.png'), 4.5),
            new Videojuego(2, 'Mario Kart', 'Electronic', new VideojuegoImagen('/assets/Images/MarioKart.jpg'), 4.8),
            new Videojuego(3, 'Metroid Dread', 'Electronic', new VideojuegoImagen('/assets/Images/metroid.png'), 4.9),
          ];
    }

    getVideoJuegoById(id: number) {
        return this.videoJuegos.find((obj) => {
            return obj.id === id;
        })
    }
}