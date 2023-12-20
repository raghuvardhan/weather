import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiKey = '29cc283340e8d9b14081cbdace743248';

  constructor(private http: HttpClient) { }

  getCurrentLocation() {
    return this.http.get('http://api.openweathermap.org/geo/1.0/direct?q=Bangalore&limit=1&appid=' + this.apiKey);
  }

}
