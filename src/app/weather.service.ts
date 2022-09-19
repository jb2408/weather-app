import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/.environment';
import { Observable } from 'rxjs';
import { WeatherData } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeatherByCoordinates(
    lat: number,
    lon: number
  ): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${environment.apiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${environment.apiKey}`
    );
  }
  getCurrentWeatherByCity(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${environment.apiUrl}/forecast?q=${city}&appid=${environment.apiKey}`
    );
  }
}
