import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeoService } from './geo-service/geo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mi Aplicación Angular';
  latitude: number = 0;
  longitude: number = 0;
  siteName: string = '';
  errorMessage: string = '';

  constructor(private geoCastService: GeoService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(): void {
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


