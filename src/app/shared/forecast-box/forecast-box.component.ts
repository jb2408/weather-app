import { Component, Input } from '@angular/core';
import { DayData } from 'src/app/weather';

@Component({
  selector: 'app-forecast-box',
  templateUrl: './forecast-box.component.html',
  styleUrls: ['./forecast-box.component.scss'],
})
export class ForecastBoxComponent {
  @Input() dayForecast!: DayData;
  countToCelsius(kelvin: number): number {
    return +(kelvin - 273.15).toFixed(1);
  }
}
