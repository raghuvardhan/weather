import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiKey = environment.openWeatherApiKey;

  constructor(private http: HttpClient) { }

  getCurrentLocation() {
    return this.http.get('https://api.openweathermap.org/geo/1.0/direct?q=Bangalore&limit=1&appid=' + this.apiKey);
  }

}