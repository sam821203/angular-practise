import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <donut-list></donut-list>
    </div>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello Angular!';
  }

  handleClick(event: Event) {
    console.log(event);
  }
}
