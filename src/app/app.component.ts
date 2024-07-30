import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeolocationService } from './geolocation/geo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi Aplicación Angular';
  latitude: number | undefined;
  longitude: number | undefined;
  errorMessage: string | undefined;

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(): void {
    this.geolocationService.getCurrentPosition().subscribe(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }}
