import { Component } from '@angular/core';
import { DailyForecastService } from './services/daily-forecast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.css'
})
export class DailyForecastComponent {
  dailyForecast!: any[];

  constructor(private dailyForecastService: DailyForecastService) {}

  ngOnInit(): void {
    this.dailyForecastService.getDailyForecast().subscribe(data => {
      data.subscribe((forecast: any) => {
        this.dailyForecast = forecast.daily;
        console.log(this.dailyForecast);
      })
    });
  }
}
