import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeatherByCoordinates(lat: number, lon: number) {
    return this.http.get(
      `${environment.apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${environment.apiKey}`
    );
  }
  getCurrentWeatherByCity(city: string) {
    return this.http.get(
      `${environment.apiUrl}/weather?q=${city}&appid=${environment.apiKey}`
    );
  }
}
