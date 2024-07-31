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
  weatherDescription: string = '';
  temperature: string = '';
  errorMessage: string = '';

  constructor(private geoService: GeoService) { }

  ngOnInit(): void {
    this.getLocationAndWeather();
  }

  getLocationAndWeather(): void {
    this.geoService.getCurrentLocationWeather().subscribe({
      next: (data) => {
        if (data) {
          console.log(data);
          this.latitude = data.coord.lat;
          this.longitude = data.coord.lon;
          this.siteName = data.name;
          this.weatherDescription = data.weather[0]?.description || '';
          this.temperature = data.main.temp;
        }
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
      complete: () => {
        console.log('Location and weather retrieval complete');
      }
    });
  }
}
