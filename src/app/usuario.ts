//Creamos el modelo de usuario, el cual tiene un email y un password como propiedades. 
export class Usuario {
    email: string;
    password: string;
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password
    }
}