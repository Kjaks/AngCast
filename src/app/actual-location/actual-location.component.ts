import { Component, OnInit } from '@angular/core';
import { GeoService } from '../geo-service/geo.service';

@Component({
  selector: 'app-location',
  standalone: true,
  templateUrl: './actual-location.component.html',
  styleUrls: ['./actual-location.component.css']
})
export class LocationComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;
  siteName: string = '';
  errorMessage: string = '';

  constructor(private geoCastService: GeoService) { }

  ngOnInit(): void {
    this.getLocationAndName();
    console.log('HOLAAAA');
  }

  getLocationAndName(): void {
    this.geoCastService.getCurrentLocationName().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          const locationData = data[0];
          this.latitude = locationData.lat;
          this.longitude = locationData.lon;
          this.siteName = locationData.name || '';
        }
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
      complete: () => {
        console.log('Location and name retrieval complete');
      }
    });
  }
}
