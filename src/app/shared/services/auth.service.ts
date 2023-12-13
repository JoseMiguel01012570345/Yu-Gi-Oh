import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;

  login(username: string, password: string): boolean {
    // Lógica de autenticación (puede ser una llamada a la API, etc.)
    // Aquí, simplemente establecemos isAuthenticated como verdadero si las credenciales son válidas.

    if (username === 'John' && password === 'pass') {

      this.isAuthenticated = true;

      localStorage.setItem('username', username);
      return true;
    }

    return false;
  }

  logout(): void {
    // Lógica de cierre de sesión
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
