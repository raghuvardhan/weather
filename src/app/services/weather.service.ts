import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?lat=';
  private apiKey = '29cc283340e8d9b14081cbdace743248';

  constructor(private http: HttpClient) { }

  getCurrentWeather(lat: number, lon: number) {
    return this.http.get(this.weatherAPI + lat + '&lon=' + lon + '&appid=' + this.apiKey);
  }

  getForecast(lat:) {

}
