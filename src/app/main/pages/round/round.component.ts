import { Component, OnInit } from '@angular/core';
import { GET_MATCHS, Match } from './querys';
import { Apollo } from 'apollo-angular';
import { catchError, throwError } from 'rxjs';

@Component({
  templateUrl: './round.component.html',
})
export class RoundComponent implements OnInit{

  //Otro objeto que es para probar, tiene que pedirse de la base de datos
  Matchs: Match[] = [];

  Error: boolean = false;

  ErrorMessage: string = '';

  constructor(
    private readonly apollo: Apollo
  ) { }

  //Esto es para enviar los resultados de la ronda al backend
  submitRoundResults(): void{}

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_MATCHS
    }).valueChanges.pipe(catchError(error => {
      this.Error = true;
      this.ErrorMessage = 'Internale Error Server';
      return throwError(error);
    })).subscribe(({data}) => {
      this.Matchs = (data as any).matchs;
      //codigo a realizar
    });
  }
}
