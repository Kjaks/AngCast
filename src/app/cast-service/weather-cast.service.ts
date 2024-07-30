import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { environment } from '../environments/environment';
import { GeoService } from '../geo-service/geo.service';

@Injectable({
  providedIn: 'root'
})
export class CastService {
  private apiUrl = 'http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit=1&appid={apiKey}';
  private apiKey = environment.API_KEY;

  constructor(private http: HttpClient, private geoService: GeoService) { }

  getName(lat: number, lon: number): Observable<any> {
    const url = this.apiUrl
      .replace('{lat}', lat.toString())
      .replace('{lon}', lon.toString())
      .replace('{apiKey}', this.apiKey);

    return this.http.get(url);
  }
}
