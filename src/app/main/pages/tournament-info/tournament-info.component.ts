import { Component, Input, OnInit } from '@angular/core';
import { GET_SUSCRIBES, suscribes } from './querys';
import { Apollo } from 'apollo-angular';
import { catchError, throwError } from 'rxjs';

@Component({
  templateUrl: './tournament-info.component.html',

})

export class TournamentInfoComponent implements OnInit {

  Suscribes!: suscribes[];

  @Input()
  TournamentName!: string;

  @Input()
  TournamentDate!: number;

  Error: boolean = false;

  ErrorMessage: string = '';

  DeckID!: number;


  constructor(
    private readonly apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.Error = false;
    this.apollo.watchQuery({
      query: GET_SUSCRIBES
    }).valueChanges.pipe(catchError(error => {
      this.Error = true;
      this.ErrorMessage = 'Internale Error Serve';
      return throwError(error);
    })).subscribe(({data}) => {
      this.Suscribes = (data as any).suscribes;
      this.Suscribes = this.Suscribes.filter(element => element.TournamentDate === this.TournamentDate && element.TournamentName === this.TournamentName);
      //codigo a ejecutar
    })
  }

  onAcceptClick(userName: string): void
  {
    console.log('Aceptar clicado para el usuario:' + userName);
  }

  onDenyClick(userName: string): void
  {
    console.log("Usuario denegado: " + userName)
  }
}
