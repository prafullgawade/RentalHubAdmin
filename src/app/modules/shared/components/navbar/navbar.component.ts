import { Component, Input } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // isMenuOpen: boolean = false;
  @Input()
  toggleSidebar!: () => void;
  user: any;

  constructor(private authService: AuthService) {
    this.user = this.authService.getUser();
  }

  logout() {
    // Handle logout logic here
    console.log("User logged out");
  }
}
