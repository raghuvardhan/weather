import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiKey = environment.openWeatherApiKey;
  public location: string = 'Bangalore';

  private locationSource = new BehaviorSubject<string>("Bangalore");
  currentLocation = this.locationSource.asObservable();

  constructor(private http: HttpClient) {}

  changeLocation(location: string) {
    this.location = location;
    this.locationSource.next(location);
  }

  getCurrentLocation() {
    return this.http.get('https://api.openweathermap.org/geo/1.0/direct?q='+this.location+'&limit=1&appid=' + this.apiKey);
  }

}
