import { Component } from '@angular/core';
import { UvIndexService } from './services/uv-index.service';

@Component({
  selector: 'app-uv-index',
  standalone: true,
  imports: [],
  templateUrl: './uv-index.component.html',
  styleUrl: './uv-index.component.css'
})
export class UvIndexComponent {
  uvIndexData: any;

  constructor(private uvIndexService: UvIndexService) {}

  ngOnInit(): void {
    // Replace with actual latitude and longitude
    this.uvIndexService.getUvIndex(35.6895, 139.6917).subscribe(data => {
      this.uvIndexData = data;
    });
  }
}
