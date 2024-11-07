import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardDataService } from './dashboard/services/dashboard-data.service';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent,
    VehiclesComponent,
    BookingsComponent,
    ReportsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule
  ],
  providers: [DashboardDataService]
})
export class AdminModule { }
