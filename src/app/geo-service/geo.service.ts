import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}&units=metric';
  private apiKey = environment.API_KEY;

  constructor(private http: HttpClient) { }

  getCurrentPosition(): Observable<GeolocationPosition> {
    return new Observable<GeolocationPosition>((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  getWeather(lat: number, lon: number): Observable<any> {
    const url = this.weatherApiUrl
      .replace('{lat}', lat.toString())
      .replace('{lon}', lon.toString())
      .replace('{apiKey}', this.apiKey);

    return this.http.get(url);
  }

  getCurrentLocationWeather(): Observable<any> {
    return this.getCurrentPosition().pipe(
      switchMap(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        return this.getWeather(lat, lon);
      })
    );
  }
}

