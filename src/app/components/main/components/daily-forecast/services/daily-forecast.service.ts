import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationService } from 'src/app/services/location/location.service';

@Injectable({
  providedIn: 'root'
})
export class DailyForecastService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/onecall';
  private apiKey = '29cc283340e8d9b14081cbdace743248'; 

  constructor(private locationService:LocationService, private http: HttpClient) {}

  getDailyForecast(lat: number, lon: number): Observable<any> {
    const url = `${this.baseUrl}?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}