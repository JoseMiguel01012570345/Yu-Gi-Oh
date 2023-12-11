import { Component, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_PLAYER } from '../../querys';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  @Input()
  UserName!: string;

  @Input()
  UserPassword!: string;

  @Input()
  UserRoll!: string;

  Error: boolean = false;
  ErrorMessage: string = '';

  constructor(
    private readonly apollo: Apollo,
    private readonly router: Router
    ) { }

  async logUser() {
    this.Error = false;
    const player = {
      PlayerName: this.UserName,
      PlayerPassword: this.UserPassword,
      Roll: this.UserRoll
    };

    await this.apollo.watchQuery({
      query: GET_PLAYER,
      variables:{
        input: player.PlayerName
      }
    }).valueChanges.pipe(catchError(error => {

      this.Error = true;
      this.ErrorMessage = 'Server Internal Error';
      return throwError(error);

    })).subscribe(({data}) => {

      const password = (data as any).player.PlayerPassword;

      if (this.UserPassword === password)
      {
        // aqui va el codigo para navegar entre paginas
        // this.router.navigate(['main/profile']);
      }
      else{
        this.Error = true;
        this.ErrorMessage = 'Incorrect password or username';
      }
    });
    if(this.Error)
      console.log(this.ErrorMessage);
  }

}
