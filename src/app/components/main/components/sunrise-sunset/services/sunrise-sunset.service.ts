import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LocationService } from 'src/app/services/location/location.service';

@Injectable({
  providedIn: 'root'
})
export class SunriseSunsetService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '29cc283340e8d9b14081cbdace743248'; // Replace with your API key

  constructor(private locationService:LocationService, private http: HttpClient) {}

  getSunriseSunset(): Observable<any> {
    return this.locationService.getCurrentLocation().pipe(map((data: any) => {
      const url = `${this.baseUrl}?lat=${data[0].lat}&lon=${data[0].lon}&appid=${this.apiKey}`;
      return this.http.get(url);
       }));
    }
}
