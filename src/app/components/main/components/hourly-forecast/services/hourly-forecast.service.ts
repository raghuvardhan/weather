import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LocationService } from 'src/app/services/location/location.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HourlyForecastService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/onecall';
  private apiKey = environment.openWeatherApiKey; 

  constructor(private locationService:LocationService, private http: HttpClient) {}

  getHourlyForecast(): Observable<any> {
    return this.locationService.getCurrentLocation().pipe(map((data: any) => {
      const url = `${this.baseUrl}?lat=${data[0].lat}&lon=${data[0].lon}&exclude=daily,minutely&appid=${this.apiKey}&units=metric`;
      return this.http.get(url);
       }));
  }
}