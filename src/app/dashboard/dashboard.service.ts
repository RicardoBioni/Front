import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = https://bootcam-dio-rbl.herokuapp.com/bootcamp';
  '
  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    if (true) {
      return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
    }
  }
}
