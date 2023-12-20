import { Component } from '@angular/core';
import { SunriseSunsetService } from './services/sunrise-sunset.service';

@Component({
  selector: 'app-sunrise-sunset',
  standalone: true,
  imports: [],
  templateUrl: './sunrise-sunset.component.html',
  styleUrl: './sunrise-sunset.component.css'
})
export class SunriseSunsetComponent {
  sunrise!: string;
  sunset!: string;

  constructor(private sunriseSunsetService: SunriseSunsetService) {}

  ngOnInit(): void {
    this.sunriseSunsetService.getSunriseSunset().subscribe(data => {
      data.subscribe((weather: any) => {
        const sunriseDate = new Date(weather.sys.sunrise * 1000);
        const sunsetDate = new Date(weather.sys.sunset * 1000);
        this.sunrise = sunriseDate.toLocaleTimeString();
        this.sunset = sunsetDate.toLocaleTimeString();
      })
    });
  }
}
