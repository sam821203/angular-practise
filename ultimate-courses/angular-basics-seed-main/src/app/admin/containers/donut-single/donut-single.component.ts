import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form [donut]="donut" (create)="onCreate($event)"></donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  ngOnInit() {
    this.donut = {
      id: '1',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 112,
      promo: 'limited',
      description: 'For the pure chocoholic',
    };
  }

  onCreate(donut: Donut) {
    console.log('onCreate', donut);
  }
}
