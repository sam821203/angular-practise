import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <donut-card [donut]="donuts[0]"></donut-card>
      <donut-card [donut]="donuts[1]"></donut-card>
      <donut-card [donut]="donuts[2]"></donut-card>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  ngOnInit() {
    this.donuts = [
      {
        id: '1',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 112,
        description: 'For the pure chocoholic',
      },
      {
        id: '2',
        name: 'Glazed Strawberry',
        icon: 'glazed-fudge',
        price: 98,
        description: 'Sweet and fruity glaze',
      },
      {
        id: '3',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 98,
        description: 'Caramel-swirl',
      },
    ];
  }
}
