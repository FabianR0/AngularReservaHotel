import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isLoggedInValue: boolean = false;
  private validUsers: any[] = [
    { username: 'fabian', password: '123' }
  ];
  isLoggedIn(): boolean {
    return this.isLoggedInValue;
  }
  login(username: string, password: string): any {
    const isValidCredentials = this.validateCredentials(username, password);

    if (isValidCredentials) {
      this.onLoginSuccess();
    }
  
    return isValidCredentials;
  }
  private onLoginSuccess() {
    this.isLoggedInValue = true;
  }
  logout() {
    this.isLoggedInValue = false;
  }

  private validateCredentials(username: string, password: string): boolean {
    const user = this.validUsers.find(
      (user) => user.username === username && user.password === password
    );
    return !!user; 
  }
  signUp(username: string, password: string): boolean {
    // Implementa aquí la lógica para el proceso de registro
    // Por ejemplo, podrías agregar el usuario a la lista de usuarios válidos
    // y marcarlo como registrado.
    // En este ejemplo, simplemente marcará al usuario como registrado automáticamente.

    const userAlreadyExists = this.validUsers.some(
      (user) => user.username === username
    );

    if (userAlreadyExists) {
      // Si el usuario ya existe, no se puede registrar de nuevo.
      return false;
    }

    // Agregar el nuevo usuario a la lista de usuarios válidos
    this.validUsers.push({ username, password });
    // Marcarlo como registrado automáticamente al momento de registrarse.
    this.onLoginSuccess();
    return true;
  }
}
