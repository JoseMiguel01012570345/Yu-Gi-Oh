import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TournamentInfo, TournamentResponse } from '../interfaces/tournament.interface';
import { environments } from 'src/environments/environments';
import { Observable, map } from 'rxjs';
import { CREATE_TOURNAMENT, GET_TOURNAMENT } from './queries/queries';
import { Apollo } from 'apollo-angular';


@Injectable({providedIn: 'root'})
export class TournamentsService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient,
              private apollo: Apollo) { }

  createTournament(Date: Number, TournamentName: String, Municipio: String, Provincia: String): any {
    return this.apollo.mutate({
      mutation: CREATE_TOURNAMENT,
      variables: {
        Date,
        TournamentName,
        Municipio,
        Provincia,
      },
    });
  }

  // findTournament(tournamentDate: number, tournamentName: string): Observable<TournamentInfo>{


  // }
}
