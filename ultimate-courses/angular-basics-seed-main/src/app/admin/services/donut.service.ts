import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [
    {
      id: '1',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 112,
      promo: 'limited',
      description: 'For the pure chocoholic',
    },
    {
      id: '2',
      name: 'Glazed Strawberry',
      icon: 'glazed-fudge',
      price: 98,
      promo: 'new',
      description: 'Sweet and fruity glaze',
    },
    {
      id: '3',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 98,
      description: 'Caramel-swirl',
    },
    {
      id: '4',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 150,
      description: 'For the Sour Supreme',
    },
    {
      id: '5',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 129,
      description: 'For the Zesty Lemon',
    },
  ];
  constructor() {}

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((donut: Donut) => donut.id === id);

    if (donut) return donut;
    return { name: '', icon: '', price: 0, description: '' };
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log(this.donuts);
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut: Donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    });
    console.log(this.donuts);
  }

  delete(payload: Donut) {
    this.donuts = this.donuts.filter((donut: Donut) => donut.id !== payload.id);
    console.log(this.donuts);
  }
}
