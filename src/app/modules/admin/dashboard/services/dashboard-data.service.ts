import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  private dataUrl = 'assets/data.json'; // URL to the JSON file

  constructor(private http: HttpClient) {}

  // Method to fetch data from the JSON file
  getDashboardData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
