// src/app/Components/logout/logout.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-logout',
  template: `<div class="logout-message">Logging you out...</div>`,
  styles: [`.logout-message { font-size: 20px; text-align: center; margin-top: 100px; }`]
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.logout();
  }
}
