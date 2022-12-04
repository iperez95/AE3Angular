export class Videojuego {
    //Creamos el modelo videojuego, el cual tiene varios atributos "id, titulo, compañia, imagen, y valoracion"
    id: number;
    titulo : string; 
    compania : string;
    //La propiedad imagen, es de tipo objecto (VideojuegoImagen)
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
//Creamos el modelo VideojuegoImagen, el cual tiene un atributo string "src"
export class VideojuegoImagen {
    src: string;
    constructor(src: string) {
        this.src = src;
    }
}