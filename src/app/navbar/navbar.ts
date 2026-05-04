import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { App } from '../app';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private app: App) {}

  showMenu() {
    this.app.showMenu();
  }
}
