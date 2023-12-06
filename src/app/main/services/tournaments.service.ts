import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournament } from '../interfaces/tournament.interface';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class TournamentsService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getTournaments():Observable<Tournament[]> {
    return this.http.get<Tournament[]>(`${this.baseUrl}/tournaments`)
  }
}
