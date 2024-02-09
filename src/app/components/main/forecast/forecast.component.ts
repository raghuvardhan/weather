import { Component } from '@angular/core';
import { DailyForecastComponent } from '../components/daily-forecast/daily-forecast.component';
import { HourlyForecastComponent } from '../components/hourly-forecast/hourly-forecast.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [DailyForecastComponent, HourlyForecastComponent, HeaderComponent],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {

}
