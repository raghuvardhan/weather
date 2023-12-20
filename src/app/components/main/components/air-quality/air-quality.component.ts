import { Component } from '@angular/core';
import { AirQualityService } from './services/air-quality.service';

@Component({
  selector: 'app-air-quality',
  standalone: true,
  imports: [],
  templateUrl: './air-quality.component.html',
  styleUrl: './air-quality.component.css'
})
export class AirQualityComponent {
  airQualityData: any;

  constructor(private airQualityService: AirQualityService) {}

  ngOnInit(): void {
    this.airQualityService.getAirQuality().subscribe(data => {
      data.subscribe((quality: any) => {
        this.airQualityData = quality.list[0].main.aqi;
      })
    });
  }
}
