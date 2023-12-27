import { Component } from '@angular/core';
import { HourlyForecastService } from './services/hourly-forecast.service';
import { CommonModule, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-hourly-forecast',
  standalone: true,
  imports: [CommonModule, SlicePipe],
  templateUrl: './hourly-forecast.component.html',
  styleUrl: './hourly-forecast.component.css'
})
export class HourlyForecastComponent {
  hourlyForecast!: any[];

  constructor(private hourlyForecastService: HourlyForecastService) {}

  ngOnInit(): void {
    this.hourlyForecastService.getHourlyForecast().subscribe(data => {
      data.subscribe((forecast: any) => {
        this.hourlyForecast = forecast.hourly;      
      })
    });
  }
}
