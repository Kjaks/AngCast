import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private apiUrl = 'http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit=1&appid={apiKey}';
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

  getName(lat: number, lon: number): Observable<any> {
    const url = this.apiUrl
      .replace('{lat}', lat.toString())
      .replace('{lon}', lon.toString())
      .replace('{apiKey}', this.apiKey);

    return this.http.get(url);
  }

  getCurrentLocationName(): Observable<any> {
    return this.getCurrentPosition().pipe(
      switchMap(position => this.getName(position.coords.latitude, position.coords.longitude))
    );
  }
}
