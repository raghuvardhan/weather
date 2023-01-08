import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location/location.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  temperature: number = 0;
  humidity: number = 0;
  windSpeed: number = 0;

  constructor(private weatherService: WeatherService, private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getCurrentLocation().subscribe((data: any) => {
      this.weatherService.getCurrentWeather(data[0].lat, data[0].lon).subscribe((data: any) => {
        console.log(data);
        
        this.temperature = data.main.temp;
        this.humidity = data.main.humidity;
        this.windSpeed = data.wind.speed;
      }
      );
    });
  }
}
