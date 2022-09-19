import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { take } from 'rxjs';
import { DayData, WeatherData } from '../weather';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.scss'],
})
export class WeatherComponentComponent implements OnInit {
  userLon!: number;
  userLat!: number;
  userCity!: string;
  weatherData!: WeatherData;
  weatherDataNow!: DayData;
  weatherDataForecast!: DayData[];

  locationForm!: FormGroup;

  ifWrongCity: boolean = false;

  constructor(
    private _weatherService: WeatherService,
    private readonly geolocationService$: GeolocationService
  ) {}

  ngOnInit(): void {
    this.locationForm = new FormGroup({
      location: new FormControl(''),
    });
  }

  onSelectLocation(formData: any) {
    this.userCity = formData.location;
    this.ifSelectedLocation();
    this.userLat = 0;
    this.userLon = 0;
    this.getWeatherData(Location.City);
  }

  ifSelectedLocation(): boolean {
    if ((this.userLat && this.userLon) || this.userCity) return true;
    else return false;
  }

  countToCelsius(kelvin: number): number {
    return +(kelvin - 273.15).toFixed(1);
  }

  getUserLocation() {
    //get position once
    this.geolocationService$.pipe(take(1)).subscribe((position) => {
      this.userLat = position.coords.latitude;
      this.userLon = position.coords.longitude;
      this.ifSelectedLocation();
      this.userCity = '';
      this.locationForm.reset();
      this.getWeatherData(Location.Coordinates);
    });
  }
  getWeatherData(loc: Location) {
    if (loc === Location.Coordinates) {
      this._weatherService
        .getCurrentWeatherByCoordinates(this.userLat, this.userLon)
        .subscribe(
          (res) => {
            this.weatherData = res;
            this.weatherDataNow = this.weatherData.list[0];
            this.getForecast();
          },
          (err) => {
            this.ifWrongCity = true;
          }
        );
    } else {
      this._weatherService.getCurrentWeatherByCity(this.userCity).subscribe(
        (res) => {
          this.weatherData = res;
          this.weatherDataNow = this.weatherData.list[0];
          this.getForecast();
        },
        (err) => {
          this.ifWrongCity = true;
        }
      );
    }
  }

  getForecast() {
    this.weatherDataForecast = this.weatherData.list
      .filter(
        (e) =>
          e.dt_txt.split(' ')[0] !== this.weatherDataNow.dt_txt.split(' ')[0]
      )
      .filter(function (value, index) {
        return (index + 4) % 8 == 0;
      });
  }
}

enum Location {
  Coordinates = 0,
  City = 1,
}
