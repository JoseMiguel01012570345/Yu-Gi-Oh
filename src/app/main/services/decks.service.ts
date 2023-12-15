import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Deck } from '../interfaces/deck.interface';
import { environments } from 'src/environments/environments';
import { Apollo } from 'apollo-angular';
import { Archetype } from '../interfaces/archetype.interface';
import { GET_ARCH_LIST } from './queries/queries';

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

  
}
