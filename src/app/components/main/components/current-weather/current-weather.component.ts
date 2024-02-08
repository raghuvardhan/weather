import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { AirQualityComponent } from '../air-quality/air-quality.component';
import { UvIndexComponent } from '../uv-index/uv-index.component';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [AirQualityComponent, UvIndexComponent],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {

  showDetails: boolean = false;
  temperature: number = 0;
  humidity: number = 0;
  windSpeed: number = 0;
  sunrise!: string;
  sunset!: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
      this.weatherService.getCurrentWeather().subscribe((data: any) => {    
        data.subscribe((data: any) => {
          console.log(data);
          this.temperature = data.main.temp;
          this.humidity = data.main.humidity;
          this.windSpeed = data.wind.speed;
          const sunriseDate = new Date(data.sys.sunrise * 1000);
          const sunsetDate = new Date(data.sys.sunset * 1000);
          this.sunrise = sunriseDate.toLocaleTimeString();
          this.sunset = sunsetDate.toLocaleTimeString();
        });
      }
      );
  }

}
