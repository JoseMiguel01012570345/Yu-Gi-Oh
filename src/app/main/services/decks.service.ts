import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deck } from '../interfaces/deck.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class DecksService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getDecks():Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this.baseUrl}/decks`)
  }
}
