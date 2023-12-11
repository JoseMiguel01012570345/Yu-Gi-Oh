import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CREATE_USER } from '../../querys';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styles: [
  ]
})
export class SigninPageComponent {

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

  async createAccount() {
    this.Error = false;
    const player = {
      PlayerName: this.UserName,
      PlayerPassword: this.UserPassword,
      Roll: this.UserRoll
    };

    await this.apollo.mutate({
      mutation: CREATE_USER,
      variables:{
        input: player
      }
    }).pipe(catchError(error => {
      this.Error = true;
      this.ErrorMessage = 'Internale Error Server'
      return throwError(error);
    })).subscribe(({data}) => {
      console.log(data);
      //aqui va el codigo para navegar
    })
  }

}
