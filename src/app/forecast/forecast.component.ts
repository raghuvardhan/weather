import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecast: any[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getForecast().subscribe((data: any) => {
      data.subscribe((data: any) => {        
        this.forecast = data.list;
        console.log(this.forecast);
      });
    }
    );
  }

}
