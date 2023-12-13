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
          console.log('Resultado de la consulta GraphQL:', result);
          console.log('Resultado de la consulta GraphQL data:', result.data);



          if (result.data  && result.data.players) {
            console.log('Jugadores encontrados:', result.data.players);
            return result.data.players;
          } else {
            console.error('La propiedad "players" es undefined en el resultado del servidor GraphQL.');
            return [];
          }
        }),
        catchError((error) => {
          console.error('Error al obtener jugadores:', error);
          throw error;
        })
      );
  }
}
