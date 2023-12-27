import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { LocationService } from './location/location.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?lat=';
  private apiKey = environment.openWeatherApiKey; 

  constructor(private locationService:LocationService, private http: HttpClient) { }

  getCurrentWeather() {
    return this.locationService.getCurrentLocation().pipe(map((data: any) => {
        return this.http.get(this.weatherAPI + data[0].lat + '&lon=' + data[0].lon + '&appid=' + this.apiKey + '&units=metric');
      }));
  }

  getForecast() {
    return this.locationService.getCurrentLocation().pipe(map((data: any) => {
      return this.http.get('https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat + '&lon=' + data[0].lon + '&appid=' + this.apiKey);
    }));
  }
}
