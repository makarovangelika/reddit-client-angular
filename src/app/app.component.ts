import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-reddit-client';
  openedMenu = false;

  constructor() {
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.openedMenu = !this.openedMenu;
  }
}
