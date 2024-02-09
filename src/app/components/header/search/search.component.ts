import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public location: string = "";
  constructor(public location$: LocationService)
  {}
}
