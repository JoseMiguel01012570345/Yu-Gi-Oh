import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { Deck } from '../interfaces/deck.interface';
import { environments } from 'src/environments/environments';
import { Apollo } from 'apollo-angular';
import { Archetype } from '../interfaces/archetype.interface';
import { CREATE_BELONG, CREATE_DECK, CREATE_HAS, GET_ARCH_LIST } from './queries/queries';

@Injectable({providedIn: 'root'})
export class DecksService {

  private baseUrl: string = environments.baseUrl;

  constructor(private apollo: Apollo) {}

  getAllArchetypes(): Observable<string[]> {
    return this.apollo
      .query<{ archetypes: Archetype[] }>({
        query: GET_ARCH_LIST,
      })
      .pipe(
        map((response) => response.data.archetypes.map(archetype => archetype.ArcheTypeName))
      );
  }

  createUnnasignedDeck(
    deckName: string,
    mainDeckCount: number,
    sideDeckCount: number,
    extraDeckCount: number
  ): Observable<{ deckID: number | null; errorMessage: string | null }> {
    return this.apollo
      .mutate({
        mutation: CREATE_DECK,
        variables: {
          deckName,
          mainDeckCount,
          sideDeckCount,
          extraDeckCount,
        },
      })
      .pipe(
        map((response: any) => {
          const deckID = response.data?.createDeck?.deckID;
          return { deckID: deckID || null, errorMessage: null };
        })
      );
  }

  assignArch(archeTypeID: string, deckID: number): Observable<boolean> {
    return this.apollo
      .mutate({
        mutation: CREATE_BELONG,
        variables: {
          archeTypeID,
          deckID,
        },
      })
      .pipe(
        map((response: any) => {
          return !!response.data?.createBelong;
        })
      );
  }

  assignHas(playerID: string, deckID: number): Observable<boolean> {
    return this.apollo
      .mutate({
        mutation: CREATE_HAS,
        variables: {
          playerID,
          deckID,
        },
      })
      .pipe(
        map((response: any) => {
          return !!response.data?.createHas;
        })
      );
  }

  createDeckWithAssignments(
    deckName: string,
    mainDeckCount: number,
    sideDeckCount: number,
    extraDeckCount: number,
    playerID: string,
    archeTypeID: string
  ): Observable<{ deckID: string | null; errorMessage: string | null }> {

    return this.apollo
      .mutate({
        mutation: CREATE_DECK,
        variables: {
          deckName,
          mainDeckCount,
          sideDeckCount,
          extraDeckCount,
        },
      })
      .pipe(
        switchMap((deckResponse: any) => {
          const deckID = deckResponse.data?.createDeck?.deckID;

          if (!deckID) {
            return of({ deckID: null, errorMessage: 'Error creating the deck.' });
          }

          // Asignar el arquetipo al mazo
          return this.apollo.mutate({
            mutation: CREATE_BELONG,
            variables: {
              archeTypeID,
              deckID: Number(deckID),
            },
          });
        }),
        switchMap((belongResponse: any) => {
          if (!belongResponse.data?.createBelong) {
            return of({ deckID: null, errorMessage: 'Error assigning the archetype.' });
          }

          // Asignar el jugador al mazo
          return this.apollo.mutate({
            mutation: CREATE_HAS,
            variables: {
              playerID,
              deckID: Number(belongResponse.data.createBelong.deckID), // Aquí se espera que deckID no sea nulo
            },
          });
        }),
        map((hasResponse: any) => {
          const success = hasResponse.data?.createHas;
          return { deckID: success ? hasResponse.data.createHas.deckID : null, errorMessage: null };
        }),
        catchError((error) => {
          console.error('Error creating deck with assignments:', error);
          return of({ deckID: null, errorMessage: 'Error creating deck with assignments.' });
        })
      );
  }
}
