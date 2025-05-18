import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length">
        <donut-card
          *ngFor="let donut of donuts; trackBy: trackById"
          [donut]="donut"
        ></donut-card>
      </ng-container>
      <ng-template #nothing>
        <p>No Donuts here...</p>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  ngOnInit() {
    this.donuts = [
      // {
      //   id: '1',
      //   name: 'Just Chocolate',
      //   icon: 'just-chocolate',
      //   price: 112,
      //   promo: 'limited',
      //   description: 'For the pure chocoholic',
      // },
      // {
      //   id: '2',
      //   name: 'Glazed Strawberry',
      //   icon: 'glazed-fudge',
      //   price: 98,
      //   promo: 'new',
      //   description: 'Sweet and fruity glaze',
      // },
      // {
      //   id: '3',
      //   name: 'Caramel Swirl',
      //   icon: 'caramel-swirl',
      //   price: 98,
      //   description: 'Caramel-swirl',
      // },
      // {
      //   id: '4',
      //   name: 'Sour Supreme',
      //   icon: 'sour-supreme',
      //   price: 150,
      //   description: 'For the Sour Supreme',
      // },
      // {
      //   id: '5',
      //   name: 'Zesty Lemon',
      //   icon: 'zesty-lemon',
      //   price: 129,
      //   description: 'For the Zesty Lemon',
      // },
    ];
  }

  trackById(index: Number, value: Donut) {
    return value.id;
  }
}
