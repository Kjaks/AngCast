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
  errorMessage: string = '';

  constructor(private geolocationService: GeoService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(): void {
    this.geolocationService.getCurrentPosition().subscribe({
      next: (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
      complete: () => {
        console.log('Geolocation complete');
      }
    });
  }
}
