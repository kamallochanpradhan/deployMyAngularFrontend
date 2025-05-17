import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthRequest } from "src/app/Model/AuthRequest";
import { AuthService } from "src/app/Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authRequest: AuthRequest = { username: 'Test', password: 'Password' };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.AuthLogin(this.authRequest).subscribe({
      next: (res) => {
        console.log('Login success..login component:', res);
        this.router.navigate(['/dashboard']); // Navigate to a protected route
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}
