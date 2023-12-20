import { Component } from '@angular/core';
import { DailyForecastService } from './services/daily-forecast.service';

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.css'
})
export class DailyForecastComponent {
  dailyForecast: any;

  constructor(private dailyForecastService: DailyForecastService) {}

  ngOnInit(): void {
    this.dailyForecastService.getDailyForecast().subscribe(data => {
      this.dailyForecast = data;
    });
  }
}
