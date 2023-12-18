import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HourlyForecastService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/onecall';
  private apiKey = 'YOUR_API_KEY'; 

  constructor(private http: HttpClient) {}

  getHourlyForecast(lat: number, lon: number): Observable<any> {
    const url = `${this.baseUrl}?lat=${lat}&lon=${lon}&exclude=daily,minutely&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}