import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Apollo } from 'apollo-angular';

import { Player, PlayerResponse, PlayersResponse, UserData} from '../interfaces/user.interface';


import { GET_PLAYERS, GET_USER, GET_USER_DATA } from './queries/queries';

@Injectable({providedIn: 'root'})
export class UsersService {

  private baseUrl: string = environments.baseUrl;

  constructor(private apollo: Apollo) { }


  getUserData(playerName: string): Observable<UserData> {
    console.log("Player Name: " + playerName)

    return this.apollo.query<UserData>({
      query: GET_USER_DATA,
      variables: {
        playerName: playerName,
      },
    }).pipe(
      tap(response => console.log(response.data)),
      map(response =>
        {
          console.log(response.data);
          return response.data;
        })
    )
  }

  getPlayers(): Observable<Player[]> {
    return this.apollo
      .query<PlayersResponse>({
        query: GET_PLAYERS,
      })
      .pipe(
        map((result) => {

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

  //Temporal
  getPlayerCredentials(name : string, password : string, role : string): Observable<boolean>
  {
    return this.apollo
    .query<PlayerResponse>({
      query: GET_USER,
      variables: {
        playerID: name,
      },
    })
    .pipe(
      map((result) => {

        // Verificar si hay datos en la respuesta y en la propiedad userData
        if (result.data) {
          const userData = result.data.player;

          // Comparar las variables de entrada con los datos obtenidos
          const isMatch =
            userData.PlayerName == name &&
            userData.PlayerPassword == password &&
            userData.Roll == role;

          console.log('Resultado de la consulta GraphQL:', result);
          console.log(
            'Valores: ' +
              userData.PlayerName +
              ' ' +
              userData.PlayerPassword +
              ' ' +
              userData.Roll
          );

          return isMatch;
        }

        // Si no hay datos, no hay coincidencia
        return false;
      })
    );
  }
}
