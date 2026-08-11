import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { App } from '../app';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private app: App) {}
 

  showMenu() {
    this.app.showMenu();
  }
}
