import { Component, Input } from '@angular/core';
import { FlexStyleBuilder } from '@angular/flex-layout';

@Component({
  selector: 'app-more-data',
  templateUrl: './more-data.component.html',
  styleUrls: ['./more-data.component.scss'],
})
export class MoreDataComponent {
  @Input() bigText = '';
  @Input() smallText = '';
  @Input() flexStyle = '';
  fxWidth = this.flexStyle === 'row-reverse' ? '50' : '';
}
