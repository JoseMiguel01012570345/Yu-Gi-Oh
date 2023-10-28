import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class SearchByService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getSearchSuggestions<T>(type: string, query: string):Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/type?q=${query}&_limit=6`)
  }
}
