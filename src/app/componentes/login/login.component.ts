import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/serviceAuth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

 
  onSubmit(): void {
    const isValidLogin = this.authService.login(this.username, this.password);

    if (isValidLogin) {
      this.router.navigate(['/Menu']);
    } else {
      console.log('Credenciales inválidas');
    }
  }
}

