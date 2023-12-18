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
    // Replace with actual latitude and longitude
    this.airQualityService.getAirQuality(35.6895, 139.6917).subscribe(data => {
      this.airQualityData = data;
    });
  }
}
