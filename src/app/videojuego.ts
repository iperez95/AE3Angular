export class Videojuego {
    id: number;
    titulo : string; 
    compania : string;
    image : VideojuegoImagen;
    valoracionMedia : number;
    constructor(id: number, titulo: string, compania: string, image: VideojuegoImagen, valoracionMedia: number) {
        this.id = id;
        this.titulo = titulo;
        this.compania = compania;
        this.image = image;
        this.valoracionMedia = valoracionMedia;
    }
}

export class VideojuegoImagen {
    src: string;
    constructor(src: string) {
        this.src = src;
    }
}