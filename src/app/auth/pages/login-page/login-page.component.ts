import { Component,Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USER, GET_USERS, Usuario } from '../../querys';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  @Input()
  NomberDeUsuario!: string;

  @Input()
  PasswordUsuario!: string;

  constructor(
    private readonly apollo: Apollo,
    private readonly router: Router) { }

  autenticarUsuario() {
    //falta la navegacion
    this.apollo.watchQuery({
      query: GET_USERS
    }).valueChanges.subscribe(({ data }) => {
      const usuarios = (data as any).players as Usuario[];
      const usuario = {
        PlayerName: this.NomberDeUsuario,
        PlayerPassword: this.PasswordUsuario
      };
      let existe = false;
      for(let i = 0; i < usuarios.length; i++)
        if(usuario.PlayerName === usuarios[i].PlayerName && usuario.PlayerPassword === usuarios[i].PlayerPassword)
        {
          existe = true;
          break;
        }
      if (!existe)
        this.router.navigate(['/auth/login']);
      else{
        this.router.navigate([`/main/profile/${this.NomberDeUsuario}`])
      }
    });
  }

}
