import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AE3Angular';

  //Declaramos las propiedades del componente principal
  email: string;
  password: string;
  usuarioLoggeado: string;
  //Creamos un constructor con el usuarioservice, para acceder a los datos de usuario y el router para gestionar las redirecciones
  constructor(private usuariosService: UsuarioService, private router: Router){}
  //El método login sirve para validar el usuario. Usando los atributos ngModel en el html del componente, hacemos binding a las propiedades "email" y "password"
  //de este componente, mediante el evento "click" en el botón del HTML, el cual llama a esta función.
  //Usamos el "UsuariosService" para encontrar el usuario con el email y la contraseña introducidas, y en caso de haberla encontrado, damos valor a la propiedad "UsuarioLoggeado".
  //Luego, redirijimos al usuario a la url de lista.
  login() {
    let usuario = this.usuariosService.getUsuarioByEmailAndPassword(this.email, this.password)
    if (!usuario) {
      console.log("usuario no encontrado");
      return;
    }
    
    this.usuarioLoggeado = this.email;
    this.router.navigateByUrl("lista")
  }
}
