import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {

  temperature: number = 0;
  humidity: number = 0;
  windSpeed: number = 0;

  constructor(private weatherService: WeatherService, private locationService: LocationService) { }

  ngOnInit() {
      this.weatherService.getCurrentWeather().subscribe((data: any) => {    
        data.subscribe((data: any) => {
          this.temperature = data.main.temp;
          this.humidity = data.main.humidity;
          this.windSpeed = data.wind.speed;
        });
      }
      );
  }

}
