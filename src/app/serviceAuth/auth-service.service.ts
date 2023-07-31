import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isLoggedInValue: boolean = false;
  private validUsers: any[] = [
    { username: 'wili', password: '123' },
    { username: 'upepe', password: '1357' },
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

}
