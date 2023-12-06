import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable, catchError, of } from 'rxjs';
import { UserData } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class UsersService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getUserById(id: string):Observable<UserData | undefined> {
    return this.httpClient.get<UserData>(`${this.baseUrl}/usersInfo/${id}`)
    .pipe(
      catchError( err => of(undefined))
    );
  }
}
