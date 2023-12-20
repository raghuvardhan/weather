import { Component } from '@angular/core';
import { HourlyForecastService } from './services/hourly-forecast.service';

@Component({
  selector: 'app-hourly-forecast',
  standalone: true,
  imports: [],
  templateUrl: './hourly-forecast.component.html',
  styleUrl: './hourly-forecast.component.css'
})
export class HourlyForecastComponent {
  hourlyForecast: any;

  constructor(private hourlyForecastService: HourlyForecastService) {}

  ngOnInit(): void {
    this.hourlyForecastService.getHourlyForecast().subscribe(data => {
      this.hourlyForecast = data;
    });
  }
}
