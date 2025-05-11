import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-card',
  template: ` <div class="donut-card">
    <img
      src="/assets/img/{{ donut.icon }}.svg"
      [alt]="donut.name"
      class="donut-card-icon"
    />
    <div>
      <div class="donut-card-name">
        <div>{{ donut.name }}</div>
      </div>
      <div class="donut-card-price">
        <div>{{ donut.price }}</div>
      </div>
    </div>
  </div>`,
  styles: [],
})
export class DonutCardComponent {
  @Input() donut!: Donut;
}
