// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = { name: 'John witt', role: 'Admin' };  // Mock user data

  getUser() {
    return this.user;
  }
}
