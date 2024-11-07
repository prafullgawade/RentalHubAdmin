// src/app/modules/shared/components/sidebar/sidebar.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  menuItems = [
    { label: 'Dashboard', path: '/admin/dashboard' },
    { label: 'Vehicles', path: '/admin/vehicles' },
    { label: 'Bookings', path: '/admin/bookings' },
    { label: 'Reports', path: '/admin/reports' },
    { label: 'Settings', path: '/admin/settings' }
  ];

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    console.log("Test2", this.isOpen)
  }
}
