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
    this.uvIndexService.getUvIndex().subscribe(data => {
      this.uvIndexData = data;
    });
  }
}
