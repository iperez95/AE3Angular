import { Injectable } from "@angular/core";
import {Usuario} from './usuario';

//Definimo el servicio de usuarios, como @Injectable, para poderlo usar en otros componentes.
@Injectable()
export class UsuarioService {
    usuarios: Usuario[]
    //Este constructor carga la propiedad "usuarios", un array con objectos del tipo "Usuario".
    constructor() {
        this.usuarios = this.getUsuarios();
    }
    //El método getUsuarios devuelve un array con objectos de tipo Usuario.
    getUsuarios() {
        return [
            new Usuario("user1@gmail.com", "123456789"),
            new Usuario("user2@gmail.com", "123456789"),
          ];
    }
    //El metodo getUsuarioByEmailAndPassword busca dentro de nuestro array de usuarios un objeto que tenga las propiedades "email" y "password", idénticas a los parámetros recibidos.
    getUsuarioByEmailAndPassword(email: string, password: string) {
        return this.usuarios.find((obj) => {
            return obj.email === email && obj.password === password;
        })
    }
}