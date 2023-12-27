import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LocationService } from 'src/app/services/location/location.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/air_pollution';
  private apiKey = environment.openWeatherApiKey; 

  constructor(private locationService:LocationService, private http: HttpClient) {}

  getAirQuality(): Observable<any> {
    return this.locationService.getCurrentLocation().pipe(map((data: any) => {
      const url = `${this.baseUrl}?lat=${data[0].lat}&lon=${data[0].lon}&appid=${this.apiKey}`;
      return this.http.get(url);
       }));
  }
}
