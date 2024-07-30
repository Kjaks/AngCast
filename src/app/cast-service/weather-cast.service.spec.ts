import { TestBed } from '@angular/core/testing';

import { WeatherCastService } from './weather-cast.service';

describe('WeatherCastService', () => {
  let service: WeatherCastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherCastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
