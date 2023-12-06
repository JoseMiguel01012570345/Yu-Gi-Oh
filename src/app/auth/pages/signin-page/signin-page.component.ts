import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CREATE_PLAYER, Usuario } from '../../querys';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styles: [
  ]
})
export class SigninPageComponent {

  @Input()
  NombreDeUsuario!: string;

  @Input()
  PasswordUsuario!: string;

  constructor(
    private readonly apollo: Apollo,
    private readonly router: Router
  ) { }

  crearUsuario() {
    const inputUser: Usuario = {
      PlayerName: this.NombreDeUsuario,
      PlayerPassword: this.PasswordUsuario
    };
    this.apollo.mutate({
      mutation: CREATE_PLAYER,
      variables: {
        input: inputUser
      }
    }).subscribe(({data}) => {
      if (data)
        this.router.navigate(['/auth/login']);
      else
        console.log('hubo un error en el servidor');
    })
  }

}
