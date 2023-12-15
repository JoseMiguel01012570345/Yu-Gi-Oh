import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { CREATE_PLAYER } from 'src/app/main/services/queries/queries';
import { UsersService } from '../../main/services/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private apollo: Apollo,
              private usersService: UsersService) {}

  signin( username: string,
          password: string,
          roll: string,
          mun: string,
          prov: string,
          phoneNumber: number)
  {
    return this.apollo.mutate({
      mutation: CREATE_PLAYER,
        variables: {
          PlayerName: username,
          PlayerPassword: password,
          Roll: roll,
          Municipio: mun,
          Provincia: prov,
          Tel: phoneNumber,
        },
    });
  }

  async login(username: string, password: string, roll: string): Promise<boolean> {
    try {
      const credentialsMatch = await this.usersService.getPlayerCredentials(username, password, roll).toPromise();

      if (credentialsMatch) {
        this.isAuthenticated = true;
        localStorage.setItem('username', username);
        return true;
      } else {
        console.log("Credenciales inválidas");
        return false;
      }
    } catch (error) {
      console.error("Error al autenticar:", error);
      return false;
    }
  }


  logout(): void {
    // Lógica de cierre de sesión
  this.isAuthenticated = false;
  localStorage.removeItem('username');
  localStorage.removeItem('isAdmin');
  }

  isLoggedIn(): boolean {
    return true; //this.isAuthenticated;
  }
}
