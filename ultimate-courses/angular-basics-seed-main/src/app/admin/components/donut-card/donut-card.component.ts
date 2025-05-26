import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-card',
  encapsulation: ViewEncapsulation.ShadowDom,
  template: ` <a
    class="donut-card"
    [routerLink]="donut.id"
    [ngClass]="{
      'donut-card-promo': donut.promo
    }"
  >
    <img
      src="/assets/img/{{ donut.icon }}.svg"
      [alt]="donut.name"
      class="donut-card-icon"
    />
    <div>
      <div class="donut-card-name">
        <div>{{ donut.name }}</div>
        <ng-container [ngSwitch]="donut.promo">
          <span class="donut-card-label">
            <ng-template [ngSwitchCase]="'new'"> NEW </ng-template>
            <ng-template [ngSwitchCase]="'limited'"> LIMITED </ng-template>
            <ng-template ngSwitchDefault> Nothing special... </ng-template>
          </span>
        </ng-container>
      </div>
      <div class="donut-card-price">
        <div>{{ donut.price / 100 | currency : 'USD' : 'symbol' }}</div>
      </div>
    </div>
  </a>`,
  styles: [
    `
      .donut-card {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 5px 15px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translate(-3px);
        }
        &-promo {
          border: 2px solid #eee;
        }
        &-name {
          font-size: 16px;
        }
        &-label {
          border: 1px solid #c14583;
          border-radius: 4px;
          padding: 0 4px;
          margin-left: 5px;
          font-size: 12px;
          color: #c14583;
        }
        &-price {
          font-size: 14px;
          color: #c14583;
        }
        &-icon {
          width: 50%;
          margin-right: 10px;
        }
      }
    `,
  ],
})
export class DonutCardComponent {
  @Input() donut!: Donut;
}
