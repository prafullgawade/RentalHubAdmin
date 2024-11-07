import { Component } from '@angular/core';
import { DashboardDataService } from './services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  users: any[] = [];
  vehicles: any[] = [];
  bookings: any[] = [];
  statistics: any = {};
  revenuePerMonth: any[] = [];

  constructor(private dashboardDataService: DashboardDataService) {}

  ngOnInit(): void {
    this.dashboardDataService.getDashboardData().subscribe(data => {
      console.log(data);
      this.users = data.users;
      this.vehicles = data.vehicles;
      this.bookings = data.bookings;
      this.statistics = data.statistics;
      this.revenuePerMonth = data.revenuePerMonth;
    });
  }
}