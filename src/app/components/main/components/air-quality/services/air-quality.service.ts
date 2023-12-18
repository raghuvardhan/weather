import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {
  private baseUrl = 'http://api.openweathermap.org/data/2.5/air_pollution';
  private apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

  constructor(private http: HttpClient) {}

  getAirQuality(lat: number, lon: number): Observable<any> {
    const url = `${this.baseUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
