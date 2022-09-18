import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-data',
  templateUrl: './more-data.component.html',
  styleUrls: ['./more-data.component.scss'],
})
export class MoreDataComponent {
  @Input() bigText = '2812 hpa';
  @Input() smallText = 'Pressure';
}
