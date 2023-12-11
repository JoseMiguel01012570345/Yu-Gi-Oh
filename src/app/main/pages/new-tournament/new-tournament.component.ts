import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CREATE_TOURNAMENT, Tournament } from '../new-deck/query';
import { catchError, throwError } from 'rxjs';

@Component({
  templateUrl: './new-tournament.component.html',
})

export class NewTournamentComponent {

  Error: boolean = false;
  ErrorMessage: string = '';

  constructor(
    private readonly apollo: Apollo
  ) { }

  async createNewTournament(date: number, name: string, location: string) {
    this.Error = false;
    const tournament:Tournament = {
      Date: date,
      TournamentDir: location,
      TournamentName: name
    };
    await this.apollo.mutate({
      mutation: CREATE_TOURNAMENT,
      variables: {
        createTournamentInput: tournament
      }
    }).pipe(catchError(error => {
      this.Error = true;
      this.ErrorMessage = 'Internal Error Server';
      return throwError(error);
    })).subscribe(({data}) => {
      console.log(data);
      //aqui va el codigo de ejecucion
    })
  }

}
