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

  signin(username: string, password: string, role: string) {
    return this.apollo.mutate({
      mutation: CREATE_PLAYER,
      variables: {
        playerName: username,
        playerPassword: password,
        roll: role,
      },
    });
  }

  async login(username: string, password: string, role: string): Promise<boolean> {
    try {
      const credentialsMatch = await this.usersService.getPlayerCredentials(username, password, role).toPromise();

      if (credentialsMatch) {
        this.isAuthenticated = true;
        console.log("AWA AWA");
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
  }

  isLoggedIn(): boolean {
    return true; //this.isAuthenticated;
  }
}
