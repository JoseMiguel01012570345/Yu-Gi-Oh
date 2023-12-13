import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable, catchError, map, of } from 'rxjs';
import { Apollo } from 'apollo-angular';

import { Player, PlayersResponse, UserData } from '../interfaces/user.interface';


import { GET_PLAYERS } from './queries/queries';

@Injectable({providedIn: 'root'})
export class UsersService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient,
              private apollo: Apollo) { }

  getUserById(id: string):Observable<UserData | undefined> {
    console.log(`${this.baseUrl}/usersInfo/${id}`)
    return this.httpClient.get<UserData>(`${this.baseUrl}/usersInfo/${id}`)
    .pipe(
      catchError( err => of(undefined))
    );


  }

  getPlayers(): Observable<Player[]> {
    return this.apollo
      .query<PlayersResponse>({
        query: GET_PLAYERS,
      })
      .pipe(
        map((result) => {
          if (result.data) {
            console.log(result.data.data.players);
            return result.data.data.players;
          } else {
            throw new Error('No se recibió un resultado válido desde el servidor GraphQL.');
          }
        })
      );
  }
}
